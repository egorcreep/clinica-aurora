import type {
  ChatMessage, CmsUser, FaqThread, MenuItem, PageRatingStat,
  SiteIdentity, SitePage, SliderSlide, SocialLink, ThemeSettings,
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
  { id: "u-asesora", username: "asesora", password: "AuroraAsesora2026", name: "Asesora del proyecto", email: "asesora@clinicaaurora.mx", role: "administrador", createdAt: "2026-08-12T10:00:00.000Z" },
  { id: "u-nikolai", username: "nikolai", password: "EquipoAurora2026", name: "Nikolai J.", email: "nikolai@clinicaaurora.mx", role: "administrador", createdAt: "2026-08-12T10:05:00.000Z" },
  { id: "u-maria", username: "maria.editor", password: "EditorAurora2026", name: "María López", email: "maria.lopez@clinicaaurora.mx", role: "editor", createdAt: "2026-08-18T09:30:00.000Z" },
  { id: "u-carlos", username: "carlos.autor", password: "AutorAurora2026", name: "Carlos Méndez", email: "carlos.mendez@clinicaaurora.mx", role: "autor", createdAt: "2026-08-18T09:40:00.000Z" },
];

export const DEFAULT_MENU: MenuItem[] = [
  { id: "m-inicio", label: "Inicio", href: "/", visible: true, children: [] },
  { id: "m-quienes", label: "Quiénes somos", href: "/quienes-somos", visible: true, children: [] },
  {
    id: "m-institucional", label: "Institucional", href: "/vision", visible: true,
    children: [
      { id: "m-vision", label: "Visión", href: "/vision", visible: true },
      { id: "m-mision", label: "Misión", href: "/mision", visible: true },
      { id: "m-politicas", label: "Políticas de calidad", href: "/politicas", visible: true },
    ],
  },
  { id: "m-servicios", label: "Servicios", href: "/servicios", visible: true, children: [] },
  { id: "m-foro", label: "Foro FAQ", href: "/foro", visible: true, children: [] },
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
  { slug: "/foro", title: "Foro de preguntas frecuentes", kicker: "Comunidad", lead: "Dudas de citas, laboratorio y seguros, respondidas por recepción y el equipo.", status: "publicada", updatedAt: "2026-09-14T12:00:00.000Z" },
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
  mapEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=-103.392%2C20.690%2C-103.368%2C20.708&layer=mapnik&marker=20.6989%2C-103.3814",
  mapLink: "https://www.openstreetmap.org/?mlat=20.6989&mlon=-103.3814#map=16/20.6989/-103.3814",
};

export const DEFAULT_SOCIALS: SocialLink[] = [
  { id: "s-wa", network: "whatsapp", label: "WhatsApp", href: "https://wa.me/523336412280", visible: true },
  { id: "s-ig", network: "instagram", label: "Instagram", href: "https://www.instagram.com/clinicaaurora.gdl", visible: true },
  { id: "s-fb", network: "facebook", label: "Facebook", href: "https://www.facebook.com/clinicaaurora.gdl", visible: true },
  { id: "s-x", network: "x", label: "X", href: "https://x.com/clinicaaurora", visible: true },
];

export const DEFAULT_SLIDES: SliderSlide[] = [
  { id: "sl-lobby", src: "/images/lobby.jpg", alt: "Recepción de Clínica Aurora con luz de mañana", caption: "Recepción · Providencia", visible: true },
  { id: "sl-fachada", src: "/images/fachada.jpg", alt: "Fachada de la clínica en una calle arbolada", caption: "Fachada · Av. Providencia 2345", visible: true },
  { id: "sl-consulta", src: "/images/consulta.jpg", alt: "Consulta médica con luz natural", caption: "Consulta · 30 a 45 minutos", visible: true },
  { id: "sl-lab", src: "/images/laboratorio.jpg", alt: "Laboratorio clínico de la clínica", caption: "Laboratorio propio", visible: true },
  { id: "sl-prov", src: "/images/providencia.jpg", alt: "Calle arbolada en Providencia, Guadalajara", caption: "Barrio · Parque Lafayette", visible: true },
];

export const DEFAULT_CHAT: ChatMessage[] = [
  { id: "c-welcome", author: "recepcion", name: "Recepción Aurora", text: "Hola, soy Lucía de recepción. ¿Agendamos, laboratorio o una duda rápida?", createdAt: "2026-09-14T15:00:00.000Z" },
];

export const DEFAULT_FAQ: FaqThread[] = [
  {
    id: "faq-cita", title: "¿Cómo agendo una primera consulta?",
    body: "¿Puedo llegar sin cita o tengo que escribir antes? Es para medicina general.",
    author: "Ana P.", createdAt: "2026-09-02T11:20:00.000Z",
    replies: [{ id: "faq-cita-r1", author: "Recepción Aurora", text: "Preferimos cita. Llama al 33 3641 2280, escribe por WhatsApp o usa Contacto. Primera vez: 45 minutos. Si hay un hueco el mismo día, te avisamos.", createdAt: "2026-09-02T11:41:00.000Z" }],
  },
  {
    id: "faq-ayuno", title: "¿El laboratorio pide ayuno?",
    body: "Me pidieron química sanguínea y no sé si desayuno o no.",
    author: "Luis M.", createdAt: "2026-09-05T08:10:00.000Z",
    replies: [{ id: "faq-ayuno-r1", author: "Laboratorio", text: "Para química y perfil de lípidos: 8 a 12 horas de ayuno, agua permitida. Hormonas y biometría no siempre lo piden: confirma el estudio en la orden. Toma de 7:30 a 11:00.", createdAt: "2026-09-05T08:28:00.000Z" }],
  },
  {
    id: "faq-seguro", title: "¿Atienden con seguro de gastos médicos?",
    body: "Tengo GNP. ¿Facturan para reembolso?",
    author: "Sofía R.", createdAt: "2026-09-08T16:02:00.000Z",
    replies: [{ id: "faq-seguro-r1", author: "Recepción Aurora", text: "No somos red de aseguradoras. Emitimos factura CFDI a tu nombre para reembolso. Lleva identificación y RFC. El pago es en clínica; el trámite con la aseguradora es tuyo.", createdAt: "2026-09-08T16:19:00.000Z" }],
  },
  {
    id: "faq-auto", title: "¿Hay estacionamiento?",
    body: "Voy en auto un sábado por la mañana.",
    author: "Diego H.", createdAt: "2026-09-10T09:44:00.000Z",
    replies: [{ id: "faq-auto-r1", author: "Recepción Aurora", text: "Sí: 8 cajones de visitas sobre la calle interior. Sábados se llena; hay espacio en la cuadra de Lafayette. Acceso a planta baja sin escalones.", createdAt: "2026-09-10T09:51:00.000Z" }],
  },
];

export const DEFAULT_RATINGS: Record<string, PageRatingStat> = {
  "/": { sum: 47, count: 10 },
  "/quienes-somos": { sum: 36, count: 8 },
  "/vision": { sum: 22, count: 5 },
  "/mision": { sum: 27, count: 6 },
  "/politicas": { sum: 19, count: 4 },
  "/servicios": { sum: 41, count: 9 },
  "/ubicacion": { sum: 33, count: 7 },
  "/contacto": { sum: 24, count: 5 },
  "/foro": { sum: 18, count: 4 },
};
