import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          navAbout: "About",
          navProjects: "Projects",
          navResume: "Resume",

          aboutTitle: "About Me",
          aboutText:
            "Software Developer with a completed technical degree and hands-on experience in building responsive and interactive websites using modern technologies such as React, Next.js, Tailwind CSS, and JavaScript. I have worked on real-world projects combining frontend and backend development, integrating best practices in design, optimization, and deployment. Passionate about technology, clean and efficient code, and continuous learning, I aim to contribute value to development teams through scalable and user-centered solutions.",

          projectsTitle: "Highlighted Projects",

          resumeTitle: "Resume",

          educationTitle: "Education",
          certsTitle: "Relevant Certifications",
          certProgramming: "Programming Concepts - Open Bootcamp (2023)",
          certFigma: "Design Systems for Web with Figma - Domestika (2025)",
          certAgile:
            "Agile Methodologies for Programming - Politécnico PIO (2024)",
          senaTitle: "Technologist in Software Analysis and Development",
          senaInstitution: "SENA | Oct 2025 – Present (Currently Studying)",
          downloadCV: "Download CV ",

          skillsTitle: "Technical Skills",
          frontendTitle: "Frontend",
          backendTitle: "Backend",
          databaseTitle: "Database",
          experienceTitle: "Work Experience",
          sidebarLocation: "Location",
          sidebarEmail: "Email",
          sidebarGithub: "GitHub",
          sidebarLinkedin: "LinkedIn",
        },
      },
      es: {
        translation: {
          navAbout: "Acerca de mí",
          navProjects: "Proyectos",
          navResume: "Currículum",

          aboutTitle: "Perfil Profesional",
          aboutText:
            "Desarrolladora de software con formación técnica culminada y experiencia práctica en la creación de sitios web responsivos e interactivos utilizando tecnologías modernas como React, Next.js, Tailwind CSS y JavaScript. He trabajado en proyectos reales que combinan desarrollo frontend y backend, integrando buenas prácticas de diseño, optimización y despliegue. Apasionada por la tecnología, la eficiencia en el código y el aprendizaje continuo, busco aportar valor a equipos de desarrollo mediante soluciones escalables y centradas en el usuario.",

          projectsTitle: "Proyectos Destacados",

          resumeTitle: "Currículum",
          certsTitle: "Certificaciones Relevantes",
          certProgramming:
            "Conceptos de la programación - Open Bootcamp (2023)",
          certFigma:
            "Sistemas de diseño para páginas web con Figma - Domestika (2025)",
          certAgile:
            "Metodologías ágiles para la programación - Politécnico PIO (2024)",
          senaTitle: "Tecnólogo en Análisis y Desarrollo de Software",
          senaInstitution: "SENA | Oct 2025 – Actualidad (Cursando)",

          downloadCV: "Descargar HV",
          experienceTitle: "Experiencia Laboral",
          educationTitle: "Formación Académica",

          skillsTitle: "Habilidades Técnicas",
          frontendTitle: "Frontend",
          backendTitle: "Backend",
          databaseTitle: "Bases de Datos",
          sidebarLocation: "Ubicación",
          sidebarEmail: "Correo",
          sidebarGithub: "GitHub",
          sidebarLinkedin: "LinkedIn",
        },
      },
    },
  });

export default i18n;
