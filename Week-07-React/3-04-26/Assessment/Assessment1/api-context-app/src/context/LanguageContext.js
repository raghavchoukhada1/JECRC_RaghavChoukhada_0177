import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

const supportedLanguages = ["en", "hi", "ta", "mr"];

export const LanguageProvider = ({ children }) => {
  const getInitialLanguage = () => {
    const saved = localStorage.getItem("lang");

    if (saved && supportedLanguages.includes(saved)) {
      return saved;
    }

    return "en"; // default fallback
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  const changeLanguage = (lang) => {
    if (!supportedLanguages.includes(lang)) return;

    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};