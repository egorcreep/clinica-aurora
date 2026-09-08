import type {
  CmsUser,
  MenuItem,
  SiteIdentity,
  SitePage,
  ThemeSettings,
} from "./types";

export const DEFAULT_IDENTITY: SiteIdentity = {
  name: "Clínica Aurora",
  tagline: "Medicina humana, luz de cada día.",
  shortName: "Aurora",
};

export const DEFAULT_THEME: ThemeSettings = {
  name: "Aurora Editorial",
  primary: "#2f6b5a",
  background: "#f6f1e8",
  ink: "#1a2420",
  radius: "suave",
};

export const DEFAULT_USERS: CmsUser[] = [
  {
    id: "u-asesora",
    username: "asesora",
    password: "AuroraAsesora2026",
    name: "Asesora del proyecto",
    email: "asesora@clinicaaurora.mx",
    role: "administrador",
    createdAt: "2026-08-12T10:00:00.000Z",
  },
  {
    id: "u-nikolai",
    username: "nikolai",
    password: "EquipoAurora2026",
    name: "Nikolai J.",
    email: "nikolai@clinicaaurora.mx",
    role: "administrador",
    createdAt: "2026-08-12T10:05:00.000Z",
  },
  {
    id: "u-maria",
    username: "maria.editor",
    password: "EditorAurora2026",
    name: "María López",
    email: "maria.lopez@clinicaaurora.mx",
    role: "editor",
    createdAt: "2026-08-18T09:30:00.000Z",
  },
  {
    id: "u-carlos",
    username: "carlos.autor",
    password: "AutorAurora2026",
    name: "Carlos Méndez",
    email: "carlos.mendez@clinicaaurora.mx",
    role: "autor",
    createdAt: "2026-08-18T09:40:00.000Z",
  },
];

export const DEFAULT_MENU: MenuItem[] = [
  { id: "m-inicio", label: "Inicio", href: "/", visible: true, children: [] },
  { id: "m-quienes", label: "Quiénes somos", href: "/quienes-somos", visible: true, children: [] },
  {
    id: "m-institucional",
    label: "Institucional",
    href: "/vision",
    visible: true,
    children: [
      { id: "m-vision", label: "Visión", href: "/vision", visible: true },
      { id: "m-mision", label: "Misión", href: "/mision", visible: true },
      { id: "m-politicas", label: "Políticas de calidad", href: "/politicas", visible: true },
    ],
  },
  { id: "m-servicios", label: "Servicios", href: "/servicios", visible: true, children: [] },
  { id: "m-ubicacion", label: "Ubicación", href: "/ubicacion", visible: true, children: [] },
  { id: "m-contacto", label: "Contacto", href: "/contacto", visible: true, children: [] },
];

export const DEFAULT_PAGES: SitePage[] = [
  { slug: "/", title: "Inicio", kicker: "Clínica de atención integral", lead: "Cuidado médico cercano, en Providencia, Guadalajara.", status: "publicada", updatedAt: "2026-09-04T12:00:00.000Z" },
  { slug: "/quienes-somos", title: "Quiénes somos", kicker: "Nuestro origen", lead: "Un equipo pequeño, una clínica pensada para escuchar.", status: "publicada", updatedAt: "2026-09-04T12:00:00.000Z" },
  { slug: "/vision", title: "Visión", kicker: "Hacia dónde vamos", lead: "Ser la clínica de barrio que otras quieran copiar.", status: "publicada", updatedAt: "2026-09-04T12:00:00.000Z" },
  { slug: "/mision", title: "Misión", kicker: "Para qué existimos", lead: "Acompañar la salud de cada persona con rigor y calidez.", status: "publicada", updatedAt: "2026-09-04T12:00:00.000Z" },
  { slug: "/politicas", title: "Políticas de calidad", kicker: "Cómo nos exigimos", lead: "Un sistema de calidad al servicio de quien nos visita.", status: "publicada", updatedAt: "2026-09-04T12:00:00.000Z" },
  { slug: "/servicios", title: "Servicios", kicker: "Qué ofrecemos", lead: "Consulta, laboratorio, nutrición y acompañamiento.", status: "publicada", updatedAt: "2026-09-04T12:00:00.000Z" },
  { slug: "/ubicacion", title: "Ubicación física", kicker: "Dónde encontrarnos", lead: "Av. Providencia 2345, Col. Providencia, Guadalajara.", status: "publicada", updatedAt: "2026-09-04T12:00:00.000Z" },
  { slug: "/contacto", title: "Contacto", kicker: "Escríbenos", lead: "Agenda, dudas y orientación. Respondemos en horario de clínica.", status: "publicada", updatedAt: "2026-09-04T12:00:00.000Z" },
];

export const CLINIC = {
  addressLine: "Av. Providencia 2345",
  neighborhood: "Col. Providencia",
  city: "Guadalajara, Jalisco, México",
  postal: "C.P. 44630",
  phone: "33 3641 2280",
  email: "hola@clinicaaurora.mx",
  hours: [
    { days: "Lunes a viernes", time: "8:00 – 20:00" },
    { days: "Sábado", time: "9:00 – 14:00" },
    { days: "Domingo", time: "Cerrado" },
  ],
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=-103.392%2C20.690%2C-103.368%2C20.708&layer=mapnik&marker=20.6989%2C-103.3814",
  mapLink: "https://www.openstreetmap.org/?mlat=20.6989&mlon=-103.3814#map=16/20.6989/-103.3814",
};
