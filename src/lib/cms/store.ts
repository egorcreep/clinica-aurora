import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  DEFAULT_IDENTITY,
  DEFAULT_MENU,
  DEFAULT_PAGES,
  DEFAULT_THEME,
  DEFAULT_USERS,
} from "./defaults";
import type {
  CmsUser,
  ContactMessage,
  MenuItem,
  SiteIdentity,
  SitePage,
  ThemeSettings,
  UserRole,
} from "./types";

type CmsState = {
  users: CmsUser[];
  session: CmsUser | null;
  menu: MenuItem[];
  theme: ThemeSettings;
  identity: SiteIdentity;
  pages: SitePage[];
  messages: ContactMessage[];
  login: (username: string, password: string) => { ok: true } | { ok: false; error: string };
  logout: () => void;
  createUser: (input: {
    username: string;
    password: string;
    name: string;
    email: string;
    role: UserRole;
  }) => { ok: true } | { ok: false; error: string };
  updateUser: (id: string, patch: Partial<CmsUser>) => void;
  deleteUser: (id: string) => { ok: true } | { ok: false; error: string };
  setMenu: (menu: MenuItem[]) => void;
  toggleMenuItem: (id: string) => void;
  renameMenuItem: (id: string, label: string) => void;
  setTheme: (theme: Partial<ThemeSettings>) => void;
  setIdentity: (identity: Partial<SiteIdentity>) => void;
  setPage: (slug: string, patch: Partial<SitePage>) => void;
  addMessage: (input: Omit<ContactMessage, "id" | "createdAt">) => void;
  resetDemo: () => void;
};

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
      login: (username, password) => {
        const user = get().users.find(
          (item) =>
            item.username.toLowerCase() === username.trim().toLowerCase() &&
            item.password === password,
        );
        if (!user) return { ok: false, error: "Usuario o contraseña incorrectos." };
        set({ session: user });
        return { ok: true };
      },
      logout: () => set({ session: null }),
      createUser: (input) => {
        const username = input.username.trim().toLowerCase();
        if (!username || !input.password || !input.name.trim()) {
          return { ok: false, error: "Completa nombre, usuario y contraseña." };
        }
        if (get().users.some((item) => item.username.toLowerCase() === username)) {
          return { ok: false, error: "Ese nombre de usuario ya existe." };
        }
        const user: CmsUser = {
          id: `u-${crypto.randomUUID()}`,
          username,
          password: input.password,
          name: input.name.trim(),
          email: input.email.trim(),
          role: input.role,
          createdAt: new Date().toISOString(),
        };
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
        if (id === "u-asesora") {
          return { ok: false, error: "La cuenta de la asesora no se puede eliminar." };
        }
        set({
          users: get().users.filter((user) => user.id !== id),
          session: get().session?.id === id ? null : get().session,
        });
        return { ok: true };
      },
      setMenu: (menu) => set({ menu }),
      toggleMenuItem: (id) => {
        const menu = get().menu.map((item) => {
          if (item.id === id) return { ...item, visible: !item.visible };
          return {
            ...item,
            children: item.children.map((child) =>
              child.id === id ? { ...child, visible: !child.visible } : child,
            ),
          };
        });
        set({ menu });
      },
      renameMenuItem: (id, label) => {
        const menu = get().menu.map((item) => {
          if (item.id === id) return { ...item, label };
          return {
            ...item,
            children: item.children.map((child) =>
              child.id === id ? { ...child, label } : child,
            ),
          };
        });
        set({ menu });
      },
      setTheme: (theme) => set({ theme: { ...get().theme, ...theme } }),
      setIdentity: (identity) => set({ identity: { ...get().identity, ...identity } }),
      setPage: (slug, patch) => {
        set({
          pages: get().pages.map((page) =>
            page.slug === slug
              ? { ...page, ...patch, updatedAt: new Date().toISOString() }
              : page,
          ),
        });
      },
      addMessage: (input) => {
        set({
          messages: [
            {
              ...input,
              id: `msg-${crypto.randomUUID()}`,
              createdAt: new Date().toISOString(),
            },
            ...get().messages,
          ],
        });
      },
      resetDemo: () =>
        set({
          users: DEFAULT_USERS,
          menu: DEFAULT_MENU,
          theme: DEFAULT_THEME,
          identity: DEFAULT_IDENTITY,
          pages: DEFAULT_PAGES,
        }),
    }),
    {
      name: "aurora-cms",
      partialize: (state) => ({
        users: state.users,
        session: state.session,
        menu: state.menu,
        theme: state.theme,
        identity: state.identity,
        pages: state.pages,
        messages: state.messages,
      }),
    },
  ),
);
