import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Button = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      style={{
        background: theme === "light" ? "#000" : "#fff",
        color: theme === "light" ? "#fff" : "#000",
      }}
      onClick={toggleTheme}
    >
      {theme === "light" ? "Light" : "Dark"}
    </button>
  );
};

export default Button;
