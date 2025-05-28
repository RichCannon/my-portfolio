import { useEffect, useState } from "react";

export type ThemeTypes = "light" | "dark";

export default function useDarkMode(): [
  ThemeTypes,
  React.Dispatch<React.SetStateAction<ThemeTypes>>,
] {
  const [theme, setTheme] = useState<ThemeTypes>(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.theme ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light")
      );
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}
