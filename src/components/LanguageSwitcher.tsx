import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2 border border-gray-300 dark:border-gray-600 rounded-full px-1 py-0.5">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-2 py-0.5 rounded-full text-sm font-semibold transition-colors ${
          i18n.language === "en"
            ? "bg-primary-light text-white"
            : "text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("es")}
        className={`px-2 py-0.5 rounded-full text-sm font-semibold transition-colors ${
          i18n.language === "es"
            ? "bg-primary-light text-white"
            : "text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
