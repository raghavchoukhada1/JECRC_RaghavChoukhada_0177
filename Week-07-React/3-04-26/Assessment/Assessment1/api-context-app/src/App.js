import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Home from "./pages/Home";
import "./styles/glabal.css";

function App() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
}

export default App;