// src/components/Navigation.tsx

import { NavLink } from "react-router-dom"; // <-- 1. Asegúrate de importar NavLink
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = () => {
  const { t } = useTranslation();

  const linkStyles =
    "px-3 py-2 rounded-md text-sm  font-medium transition-colors";
  const activeLinkStyles = "bg-card text-text";
  const inactiveLinkStyles = "text-text-secondary hover:text-text";

  return (
    <nav className="flex   justify-end items-center space-x-4 p-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${linkStyles} ${isActive ? activeLinkStyles : inactiveLinkStyles}`
        }
      >
        {t("navAbout")}
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          `${linkStyles} ${isActive ? activeLinkStyles : inactiveLinkStyles}`
        }
      >
        {t("navProjects")}
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) =>
          `${linkStyles} ${isActive ? activeLinkStyles : inactiveLinkStyles}`
        }
      >
        {t("navResume")}
      </NavLink>
      <LanguageSwitcher />
    </nav>
  );
};

export default Navigation;
