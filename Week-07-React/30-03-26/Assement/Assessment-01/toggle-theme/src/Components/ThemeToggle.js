import { useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const containerStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: isDark ? "#222" : "#fff",
    color: isDark ? "#fff" : "#000"
  };

  const buttonStyle = {
    padding: "10px 20px",
    marginTop: "10px",
    cursor: "pointer"
  };

  return (
    <div style={containerStyle}>
      <h2>Mode: {isDark ? "Dark" : "Light"}</h2>

      <button onClick={toggleTheme} style={buttonStyle}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;