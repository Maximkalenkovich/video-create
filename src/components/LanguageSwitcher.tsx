import { useTranslation } from "react-i18next";
import "../styles/Language.css";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="language-switcher">
      <button
        className={`language-button ${currentLanguage === "ru" ? "active" : ""}`}
        onClick={() => i18n.changeLanguage("ru")}
        title="Русский"
      >
        <span>🇷🇺</span>
        <span className="language-label">RU</span>
      </button>

      <span className="language-divider">/</span>

      <button
        className={`language-button ${currentLanguage === "en" ? "active" : ""}`}
        onClick={() => i18n.changeLanguage("en")}
        title="English"
      >
        <span>🇬🇧</span>
        <span className="language-label">EN</span>
      </button>
    </div>
  );
};
