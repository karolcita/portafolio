export interface Project {
  title_es: string;
  title_en: string;
  description_es: string;
  description_en: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  imageUrl: string;
}

export const projectsData: Project[] = [
  {
    title_es: "Marabunta Segura",
    title_en: "Marabunta segura",
    description_es:
      "Sitio web informativo desarrollado con React y Next.js, enfocado en seguridad y salud en el trabajo...",
    description_en:
      "Informational website developed with React and Next.js,  focusing on occupational health and safety...",
    tags: ["React", "Next.js", "Vercel", "Tailwind CSS", "typescript"],
    liveUrl: "https://marabunta-segura3-mzfy.vercel.app",

    imageUrl: "/marabunta-segura.PNG",
  },
  {
    title_es: "Copito Recicla",
    title_en: "Copito Recicla",
    description_es:
      "Desarrollo completo del frontend para el sitio web oficial de Copito Recicla. Fui responsable de maquetar todas las vistas, implementar la interactividad y asegurar un diseño 100% responsivo.",
    description_en:
      "Complete frontend development for the official Copito Recicla website. I was responsible for building all the views, implementing interactivity, and ensuring a 100% responsive design.",
    tags: ["React", "Next.js", "Tailwind CSS", "typescript"], // Ajusta las tecnologías si es necesario
    liveUrl: "https://www.copitorecicla.com/",

    imageUrl: "/copito-recicla.PNG",
  },

  {
    title_es: "Portafolio Personal",
    title_en: "Personal Portfolio",
    description_es:
      "Este mismo sitio personal en React con diseño adaptable, secciones de proyectos...",
    description_en:
      "This same personal website in React with adaptive design, project sections...",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
    imageUrl: "/portafolio.PNG",
  },
  {
    title_es: "Granja Solar Las Marías (Rediseño)",
    title_en: "Las Marías Solar Farm (Redesign)",
    description_es:
      "Realicé un rediseño completo de la interfaz de usuario en Figma y desarrollé todo el frontend. Implementé un diseño moderno, interactivo y totalmente responsivo para mejorar la experiencia de usuario.",
    description_en:
      "I completed a full user interface redesign in Figma and developed the entire frontend. I implemented a modern, interactive, and fully responsive design to improve the user experience.",
    tags: ["Figma", "React", "Next.js", "Vercel"],
    liveUrl: "https://solar-las-marias-eze3.vercel.app/",

    imageUrl: "/granja-solar-redesign.PNG",
  },
];
