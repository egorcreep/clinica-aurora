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
