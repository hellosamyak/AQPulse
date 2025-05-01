import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { Sun, Moon, Monitor } from "lucide-react";

function ToggleThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  const nextTheme =
    theme === "light" ? "dark" : theme === "dark" ? "system" : "light";

  return (
    <button
      onClick={() => setTheme(nextTheme)}
      className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={`Switch to ${nextTheme} mode`}
    >
      {theme === "light" && <Sun className="h-6 w-6" />}
      {theme === "dark" && <Moon className="h-6 w-6" />}
      {theme === "system" && <Monitor className="h-6 w-6" />}
    </button>
  );
}

export default ToggleThemeButton;
