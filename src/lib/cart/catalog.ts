export type ClinicService = {
  id: string;
  title: string;
  text: string;
  price: number;
  image: string;
  alt: string;
};

export const SERVICES: ClinicService[] = [
  {
    id: "general",
    title: "Medicina general",
    text: "Primera atención, control de padecimientos comunes y orientación. Cita de 40 minutos.",
    price: 850,
    image: "/images/pulso.jpg",
    alt: "Toma de signos en consulta general",
  },
  {
    id: "interna",
    title: "Medicina interna",
    text: "Seguimiento de hipertensión, diabetes y tiroides. Incluye revisión de estudios previos.",
    price: 1280,
    image: "/images/consulta.jpg",
    alt: "Consulta de medicina interna",
  },
  {
    id: "pediatria",
    title: "Pediatría",
    text: "Niños y adolescentes. Consulta de control, vacunas y orientación a la familia.",
    price: 980,
    image: "/images/pediatria.jpg",
    alt: "Consultorio de pediatría",
  },
  {
    id: "laboratorio",
    title: "Laboratorio clínico",
    text: "Química sanguínea y biometría. Toma en clínica, resultado con lectura al día siguiente.",
    price: 640,
    image: "/images/laboratorio.jpg",
    alt: "Laboratorio clínico de la clínica",
  },
  {
    id: "nutricion",
    title: "Nutrición",
    text: "Plan de alimentación para el mercado de Guadalajara, coordinado con el internista.",
    price: 790,
    image: "/images/nutricion.jpg",
    alt: "Espacio de nutrición",
  },
  {
    id: "emocional",
    title: "Acompañamiento emocional",
    text: "Sesión de 50 minutos para ansiedad, duelo o ajuste a un diagnóstico.",
    price: 1100,
    image: "/images/terapia.jpg",
    alt: "Sala de acompañamiento emocional",
  },
  {
    id: "chequeo",
    title: "Chequeo preventivo",
    text: "Consulta general, signos, química básica y un plan escrito para el año.",
    price: 1890,
    image: "/images/lobby.jpg",
    alt: "Recepción de Clínica Aurora",
  },
];

export function money(value: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
}

export function findService(id: string) {
  return SERVICES.find((item) => item.id === id);
}
