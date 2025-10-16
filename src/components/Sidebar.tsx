import { FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePic from "../assets/profile2.png";
import TiltedCard from "./TiltedCard";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation(); //
  const currentYear = new Date().getFullYear();

  const personalInfo = {
    name: "Karol Dayanna Gómez Montoya",
    location: "Cali, Colombia",
    email: "karol1998gomez@gmail.com",
    github: "karolcita",
    githubLink: "https://github.com/karolcita",
    linkedinLink: "https://linkedin.com/in/karol-dayanna-459509265",
  };

  return (
    <div className="bg-[#232324] p-6 border border-gray-700 rounded-xl shadow-lg flex flex-col items-center text-center">
      <div className="mb-4">
        <TiltedCard
          imageSrc={profilePic}
          altText="Foto de perfil de Karol Gómez"
          containerHeight="200px"
          containerWidth="200px"
          imageHeight="200px"
          imageWidth="200px"
          showTooltip={false}
          showMobileWarning={false}
        />
      </div>

      <h1 className="text-2xl font-bold text-text mb-4">{personalInfo.name}</h1>
      <div className="w-full border-t border-gray-600 my-4"></div>

      <div className="w-full text-left space-y-4">
        <div className="flex items-start">
          <FiMapPin
            className="mr-3 text-white p-2 rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shrink-0"
            size={40}
          />
          <div>
            <h4 className="text-sm font-medium text-text-secondary">
              {t("sidebarLocation")}
            </h4>
            <span className="text-text">{personalInfo.location}</span>
          </div>
        </div>

        <div className="flex items-start">
          <FiMail
            className="mr-3 text-white p-2 rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shrink-0"
            size={40}
          />
          <div>
            <h4 className="text-sm font-medium text-text-secondary">
              {t("sidebarEmail")}
            </h4>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-text hover:text-primary break-all"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <FaGithub
            className="mr-3 text-white p-2 rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shrink-0"
            size={40}
          />
          <div>
            <h4 className="text-sm font-medium text-text-secondary">
              {t("sidebarGithub")}
            </h4>
            <a
              href={personalInfo.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-primary"
            >
              @{personalInfo.github}
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <FaLinkedin
            className="mr-3 text-white p-2 rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shrink-0"
            size={40}
          />
          <div>
            <h4 className="text-sm font-medium text-text-secondary">
              {t("sidebarLinkedin")}
            </h4>
            <a
              href={personalInfo.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="w-full border-t border-gray-600 my-4 "></div>
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>&copy; {currentYear} Karolcita. Todos los derechos reservados.</p>
          <p className="text-sm mt-2">
            Hecho con ❤️ usando React y Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
