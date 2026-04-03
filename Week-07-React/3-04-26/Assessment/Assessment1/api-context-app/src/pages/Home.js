import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translation";
import LanguageSwitcher from "../components/LanguageSwitcher";
import "../styles/home.css";

function Home() {
  const { language } = useLanguage();
  const t = translations[language] || translations["en"];

  return (
    <div className="app-container">
      <div className="home-card">
        <h1>{t.welcome}</h1>
        <p>{t.login}</p>

        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default Home;