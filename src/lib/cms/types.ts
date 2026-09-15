export type UserRole = "administrador" | "editor" | "autor";

export type CmsUser = {
  id: string;
  username: string;
  password: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
};

export type MenuChild = {
  id: string;
  label: string;
  href: string;
  visible: boolean;
};

export type MenuItem = {
  id: string;
  label: string;
  href: string;
  visible: boolean;
  children: MenuChild[];
};

export type ThemeSettings = {
  name: string;
  primary: string;
  background: string;
  ink: string;
  radius: "suave" | "recto";
};

export type SiteIdentity = {
  name: string;
  tagline: string;
  shortName: string;
};

export type SitePage = {
  slug: string;
  title: string;
  kicker: string;
  lead: string;
  status: "publicada" | "borrador";
  updatedAt: string;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
};

export type ChatAuthor = "visitante" | "recepcion";

export type ChatMessage = {
  id: string;
  author: ChatAuthor;
  name: string;
  text: string;
  createdAt: string;
};

export type FaqReply = {
  id: string;
  author: string;
  text: string;
  createdAt: string;
};

export type FaqThread = {
  id: string;
  title: string;
  body: string;
  author: string;
  createdAt: string;
  replies: FaqReply[];
};

export type SocialNetwork = "facebook" | "instagram" | "x" | "whatsapp";

export type SocialLink = {
  id: string;
  network: SocialNetwork;
  label: string;
  href: string;
  visible: boolean;
};

export type SliderSlide = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  visible: boolean;
};

export type PageRatingStat = {
  sum: number;
  count: number;
};
