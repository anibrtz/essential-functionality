import imgRelaciones from "@/assets/cat-relaciones.jpg";
import imgAutoestima from "@/assets/cat-autoestima.jpg";
import imgPsicologia from "@/assets/cat-psicologia.jpg";
import imgBelleza from "@/assets/cat-belleza.jpg";

export type Category = { slug: string; name: string; description: string };

export const categoryImages: Record<string, string> = {
  relaciones: imgRelaciones,
  autoestima: imgAutoestima,
  psicologia: imgPsicologia,
  belleza: imgBelleza,
};

export const categories: Category[] = [
  { slug: "relaciones", name: "Relaciones", description: "Amor, pareja, amistad y vínculos sanos." },
  { slug: "autoestima", name: "Autoestima", description: "Confianza, límites y amor propio." },
  { slug: "psicologia", name: "Psicología", description: "Emociones y bienestar en el día a día." },
  { slug: "belleza", name: "Belleza", description: "Cuidado personal, piel y rutinas reales." },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  body: { h?: string; p: string }[];
};

export const articles: Article[] = [
  {
    slug: "senales-relacion-sana",
    title: "7 señales de que estás en una relación sana",
    excerpt: "Más allá de la química: los gestos cotidianos que revelan un vínculo que te hace crecer.",
    category: "relaciones",
    author: "Lucía Herrera",
    date: "2026-10-02",
    readTime: 6,
    body: [
      { p: "Una relación sana no se mide por la ausencia de conflictos, sino por la forma en que se resuelven. Estas son algunas señales que conviene observar." },
      { h: "1. Puedes ser tú misma", p: "No sientes la necesidad de esconder opiniones, gustos o emociones por miedo a la reacción de tu pareja." },
      { h: "2. Las discusiones no son batallas", p: "Hay desacuerdos, pero el objetivo es entenderse, no ganar. Nadie humilla ni castiga con silencio." },
      { h: "3. Hay espacio individual", p: "Cada uno mantiene amistades, aficiones y tiempo propio sin que eso se viva como una amenaza." },
      { h: "4. La confianza es la base", p: "No hay revisiones del móvil ni interrogatorios. La transparencia surge de forma natural." },
      { p: "Si reconoces la mayoría de estas señales, estás construyendo algo valioso. Si no, no es una sentencia: es una invitación a conversar." },
    ],
  },
  {
    slug: "poner-limites-sin-culpa",
    title: "Cómo poner límites sin sentir culpa",
    excerpt: "Decir «no» también es una forma de cuidarte. Una guía práctica para empezar hoy.",
    category: "autoestima",
    author: "Valentina Ríos",
    date: "2026-09-28",
    readTime: 5,
    body: [
      { p: "Muchas mujeres crecimos aprendiendo a complacer. Poner límites se siente incómodo al principio, pero es un músculo que se entrena." },
      { h: "Identifica lo que te drena", p: "Anota durante una semana las situaciones que te dejan agotada o resentida. Ahí están tus límites pendientes." },
      { h: "Usa frases simples", p: "«Esta vez no puedo», «Necesito pensarlo», «Prefiero no hablar de eso». No necesitas justificar en exceso." },
      { h: "Acepta la incomodidad", p: "La culpa inicial no significa que estés haciendo algo mal; significa que estás haciendo algo nuevo." },
    ],
  },
  {
    slug: "ansiedad-domingo",
    title: "La ansiedad del domingo: por qué ocurre y cómo calmarla",
    excerpt: "Esa sensación de nudo en el estómago antes del lunes tiene explicación (y solución).",
    category: "psicologia",
    author: "Dra. Mariana Soto",
    date: "2026-09-21",
    readTime: 7,
    body: [
      { p: "La llamada «ansiedad dominical» afecta a muchas personas que anticipan la semana laboral con preocupación." },
      { h: "¿Por qué sucede?", p: "El cerebro proyecta tareas pendientes y escenarios negativos. El descanso se interrumpe por la anticipación." },
      { h: "Rituales que ayudan", p: "Planifica el lunes el viernes, reserva una actividad agradable para el domingo por la tarde y limita el correo laboral." },
      { h: "Cuándo pedir ayuda", p: "Si la ansiedad es intensa o persistente, hablar con un profesional de salud mental es un acto de cuidado." },
    ],
  },
  {
    slug: "rutina-piel-minimalista",
    title: "Rutina de piel minimalista: solo 4 pasos",
    excerpt: "Menos productos, mejores resultados. Lo esencial para una piel cuidada sin complicarte.",
    category: "belleza",
    author: "Camila Ortega",
    date: "2026-09-15",
    readTime: 4,
    body: [
      { p: "No necesitas diez productos. Una rutina constante y sencilla supera a una complicada que abandonas." },
      { h: "1. Limpieza suave", p: "Un limpiador sin sulfatos por la noche; por la mañana basta con agua o un limpiador ligero." },
      { h: "2. Hidratación", p: "Elige una crema según tu tipo de piel: gel para grasa, crema más rica para seca." },
      { h: "3. Protector solar", p: "Todos los días, incluso nublado. Es el mejor antiedad que existe." },
      { h: "4. Un activo", p: "Introduce uno solo (vitamina C, niacinamida o retinol) y dale tiempo antes de evaluar." },
    ],
  },
  {
    slug: "amistades-adultas",
    title: "Hacer amigas en la adultez no es imposible",
    excerpt: "Por qué cuesta más después de los 30 y estrategias reales para crear nuevos vínculos.",
    category: "relaciones",
    author: "Lucía Herrera",
    date: "2026-09-08",
    readTime: 5,
    body: [
      { p: "Las amistades adultas requieren intención: ya no compartimos aula ni recreo." },
      { h: "Repetición y cercanía", p: "Los vínculos nacen de ver a las mismas personas con frecuencia. Un taller o club semanal es ideal." },
      { h: "Da el primer paso", p: "Proponer un café puede parecer atrevido, pero la mayoría agradece la iniciativa." },
    ],
  },
  {
    slug: "dialogo-interno",
    title: "Cambia tu diálogo interno en 3 ejercicios",
    excerpt: "Cómo te hablas importa. Herramientas sencillas para tratarte con más amabilidad.",
    category: "autoestima",
    author: "Valentina Ríos",
    date: "2026-09-01",
    readTime: 6,
    body: [
      { p: "La voz crítica interior suele ser más dura que cualquier persona externa. Puedes entrenarla." },
      { h: "Ejercicio 1: la mejor amiga", p: "Pregúntate: ¿le diría esto a mi mejor amiga? Si no, reformúlalo como se lo dirías a ella." },
      { h: "Ejercicio 2: nombra al crítico", p: "Ponerle nombre a esa voz crea distancia y le resta autoridad." },
      { h: "Ejercicio 3: registro de logros", p: "Cada noche anota tres cosas que hiciste bien, por pequeñas que sean." },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const formatDate = (d: string) =>
  new Date(d + "T12:00:00").toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
