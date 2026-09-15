import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  DEFAULT_CHAT, DEFAULT_FAQ, DEFAULT_IDENTITY, DEFAULT_MENU, DEFAULT_PAGES,
  DEFAULT_RATINGS, DEFAULT_SLIDES, DEFAULT_SOCIALS, DEFAULT_THEME, DEFAULT_USERS,
} from "./defaults";
import type {
  ChatAuthor, ChatMessage, CmsUser, ContactMessage, FaqThread, MenuItem,
  PageRatingStat, SiteIdentity, SitePage, SliderSlide, SocialLink, ThemeSettings, UserRole,
} from "./types";

type CmsState = {
  users: CmsUser[];
  session: CmsUser | null;
  menu: MenuItem[];
  theme: ThemeSettings;
  identity: SiteIdentity;
  pages: SitePage[];
  messages: ContactMessage[];
  chatMessages: ChatMessage[];
  faqThreads: FaqThread[];
  socials: SocialLink[];
  slides: SliderSlide[];
  ratings: Record<string, PageRatingStat>;
  ratedSlugs: string[];
  login: (username: string, password: string) => { ok: true } | { ok: false; error: string };
  logout: () => void;
  createUser: (input: { username: string; password: string; name: string; email: string; role: UserRole }) => { ok: true } | { ok: false; error: string };
  updateUser: (id: string, patch: Partial<CmsUser>) => void;
  deleteUser: (id: string) => { ok: true } | { ok: false; error: string };
  setMenu: (menu: MenuItem[]) => void;
  toggleMenuItem: (id: string) => void;
  renameMenuItem: (id: string, label: string) => void;
  setTheme: (theme: Partial<ThemeSettings>) => void;
  setIdentity: (identity: Partial<SiteIdentity>) => void;
  setPage: (slug: string, patch: Partial<SitePage>) => void;
  addMessage: (input: Omit<ContactMessage, "id" | "createdAt">) => void;
  sendChat: (input: { author: ChatAuthor; name: string; text: string }) => void;
  addFaqThread: (input: { title: string; body: string; author: string }) => { ok: true } | { ok: false; error: string };
  addFaqReply: (threadId: string, input: { author: string; text: string }) => { ok: true } | { ok: false; error: string };
  setSocial: (id: string, patch: Partial<SocialLink>) => void;
  setSlide: (id: string, patch: Partial<SliderSlide>) => void;
  ratePage: (slug: string, stars: number) => { ok: true } | { ok: false; error: string };
  resetDemo: () => void;
};

function ensureForoMenu(menu: MenuItem[]): MenuItem[] {
  if (menu.some((item) => item.href === "/foro" || item.id === "m-foro")) return menu;
  const copy = [...menu];
  const at = copy.findIndex((item) => item.id === "m-contacto");
  const foro: MenuItem = { id: "m-foro", label: "Foro FAQ", href: "/foro", visible: true, children: [] };
  if (at >= 0) copy.splice(at, 0, foro);
  else copy.push(foro);
  return copy;
}

export const useCms = create<CmsState>()(
  persist(
    (set, get) => ({
      users: DEFAULT_USERS,
      session: null,
      menu: DEFAULT_MENU,
      theme: DEFAULT_THEME,
      identity: DEFAULT_IDENTITY,
      pages: DEFAULT_PAGES,
      messages: [],
      chatMessages: DEFAULT_CHAT,
      faqThreads: DEFAULT_FAQ,
      socials: DEFAULT_SOCIALS,
      slides: DEFAULT_SLIDES,
      ratings: DEFAULT_RATINGS,
      ratedSlugs: [],
      login: (username, password) => {
        const user = get().users.find((item) => item.username.toLowerCase() === username.trim().toLowerCase() && item.password === password);
        if (!user) return { ok: false, error: "Usuario o contraseña incorrectos." };
        set({ session: user });
        return { ok: true };
      },
      logout: () => set({ session: null }),
      createUser: (input) => {
        const username = input.username.trim().toLowerCase();
        if (!username || !input.password || !input.name.trim()) return { ok: false, error: "Completa nombre, usuario y contraseña." };
        if (get().users.some((item) => item.username.toLowerCase() === username)) return { ok: false, error: "Ese nombre de usuario ya existe." };
        const user: CmsUser = { id: `u-${crypto.randomUUID()}`, username, password: input.password, name: input.name.trim(), email: input.email.trim(), role: input.role, createdAt: new Date().toISOString() };
        set({ users: [...get().users, user] });
        return { ok: true };
      },
      updateUser: (id, patch) => {
        set({
          users: get().users.map((user) => (user.id === id ? { ...user, ...patch } : user)),
          session: get().session?.id === id ? { ...get().session!, ...patch } : get().session,
        });
      },
      deleteUser: (id) => {
        if (id === "u-asesora") return { ok: false, error: "La cuenta de la asesora no se puede eliminar." };
        set({ users: get().users.filter((user) => user.id !== id), session: get().session?.id === id ? null : get().session });
        return { ok: true };
      },
      setMenu: (menu) => set({ menu }),
      toggleMenuItem: (id) => {
        set({
          menu: get().menu.map((item) => {
            if (item.id === id) return { ...item, visible: !item.visible };
            return { ...item, children: item.children.map((child) => child.id === id ? { ...child, visible: !child.visible } : child) };
          }),
        });
      },
      renameMenuItem: (id, label) => {
        set({
          menu: get().menu.map((item) => {
            if (item.id === id) return { ...item, label };
            return { ...item, children: item.children.map((child) => child.id === id ? { ...child, label } : child) };
          }),
        });
      },
      setTheme: (theme) => set({ theme: { ...get().theme, ...theme } }),
      setIdentity: (identity) => set({ identity: { ...get().identity, ...identity } }),
      setPage: (slug, patch) => {
        set({ pages: get().pages.map((page) => page.slug === slug ? { ...page, ...patch, updatedAt: new Date().toISOString() } : page) });
      },
      addMessage: (input) => {
        set({ messages: [{ ...input, id: `msg-${crypto.randomUUID()}`, createdAt: new Date().toISOString() }, ...get().messages] });
      },
      sendChat: (input) => {
        const text = input.text.trim();
        if (!text) return;
        const message: ChatMessage = { id: `c-${crypto.randomUUID()}`, author: input.author, name: input.name, text, createdAt: new Date().toISOString() };
        set({ chatMessages: [...get().chatMessages, message] });
      },
      addFaqThread: (input) => {
        const title = input.title.trim();
        const body = input.body.trim();
        const author = input.author.trim();
        if (!title || !body || !author) return { ok: false, error: "Completa nombre, título y pregunta." };
        const thread: FaqThread = { id: `faq-${crypto.randomUUID()}`, title, body, author, createdAt: new Date().toISOString(), replies: [] };
        set({ faqThreads: [thread, ...get().faqThreads] });
        return { ok: true };
      },
      addFaqReply: (threadId, input) => {
        const text = input.text.trim();
        const author = input.author.trim();
        if (!text || !author) return { ok: false, error: "Escribe tu nombre y la respuesta." };
        set({
          faqThreads: get().faqThreads.map((thread) =>
            thread.id === threadId
              ? { ...thread, replies: [...thread.replies, { id: `r-${crypto.randomUUID()}`, author, text, createdAt: new Date().toISOString() }] }
              : thread,
          ),
        });
        return { ok: true };
      },
      setSocial: (id, patch) => set({ socials: get().socials.map((item) => (item.id === id ? { ...item, ...patch } : item)) }),
      setSlide: (id, patch) => set({ slides: get().slides.map((item) => (item.id === id ? { ...item, ...patch } : item)) }),
      ratePage: (slug, stars) => {
        if (stars < 1 || stars > 5) return { ok: false, error: "Elige de 1 a 5." };
        if (get().ratedSlugs.includes(slug)) return { ok: false, error: "Ya valoraste esta página en este navegador." };
        const current = get().ratings[slug] ?? { sum: 0, count: 0 };
        set({
          ratings: { ...get().ratings, [slug]: { sum: current.sum + stars, count: current.count + 1 } },
          ratedSlugs: [...get().ratedSlugs, slug],
        });
        return { ok: true };
      },
      resetDemo: () => set({
        users: DEFAULT_USERS, menu: DEFAULT_MENU, theme: DEFAULT_THEME, identity: DEFAULT_IDENTITY,
        pages: DEFAULT_PAGES, chatMessages: DEFAULT_CHAT, faqThreads: DEFAULT_FAQ,
        socials: DEFAULT_SOCIALS, slides: DEFAULT_SLIDES, ratings: DEFAULT_RATINGS, ratedSlugs: [],
      }),
    }),
    {
      name: "aurora-cms",
      version: 2,
      partialize: (state) => ({
        users: state.users, session: state.session, menu: state.menu, theme: state.theme,
        identity: state.identity, pages: state.pages, messages: state.messages,
        chatMessages: state.chatMessages, faqThreads: state.faqThreads, socials: state.socials,
        slides: state.slides, ratings: state.ratings, ratedSlugs: state.ratedSlugs,
      }),
      migrate: (persisted) => {
        const p = (persisted ?? {}) as Partial<CmsState>;
        return {
          users: p.users ?? DEFAULT_USERS,
          session: p.session ?? null,
          menu: ensureForoMenu(p.menu?.length ? p.menu : DEFAULT_MENU),
          theme: p.theme ?? DEFAULT_THEME,
          identity: p.identity ?? DEFAULT_IDENTITY,
          pages: p.pages?.length ? p.pages : DEFAULT_PAGES,
          messages: p.messages ?? [],
          chatMessages: p.chatMessages?.length ? p.chatMessages : DEFAULT_CHAT,
          faqThreads: p.faqThreads?.length ? p.faqThreads : DEFAULT_FAQ,
          socials: p.socials?.length ? p.socials : DEFAULT_SOCIALS,
          slides: p.slides?.length ? p.slides : DEFAULT_SLIDES,
          ratings: p.ratings && Object.keys(p.ratings).length ? p.ratings : DEFAULT_RATINGS,
          ratedSlugs: p.ratedSlugs ?? [],
        };
      },
    },
  ),
);
