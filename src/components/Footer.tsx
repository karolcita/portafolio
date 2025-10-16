import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = {
    github: "https://github.com/tu-usuario",
    linkedin: "https://linkedin.com/in/tu-usuario",
  };

  return (
    <footer className="bg-background border-t border-gray-200 py-8">
      <div className="container mx-auto px-6 text-center text-gray-600">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition-colors"
          >
            <FaGithub size={28} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        <p>&copy; {currentYear} [Tu Nombre]. Todos los derechos reservados.</p>
        <p className="text-sm mt-2">
          Hecho con ❤️ usando React y Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
