"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";
type Theme = "dark" | "light";

interface AppContextType {
  lang: Language;
  theme: Theme;
  toggleLanguage: () => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const toggleLanguage = () => setLang((prev) => (prev === "en" ? "ar" : "en"));
  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <AppContext.Provider value={{ lang, theme, toggleLanguage, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}