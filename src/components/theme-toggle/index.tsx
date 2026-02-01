"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";
import s from "./ThemeToggle.module.css";

export interface ThemeToggleProps {
  variant?: "fixed" | "inline";
}

export default function ThemeToggle({ variant = "fixed" }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className={classNames(s.themeToggle, {
        [s.themeToggleFixed]: variant === "fixed",
        [s.themeToggleInline]: variant === "inline",
      })}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span className={s.icon}>
        {theme === "dark" ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2V3M10 17V18M18 10H17M3 10H2M15.657 4.343L14.95 5.05M5.05 14.95L4.343 15.657M15.657 15.657L14.95 14.95M5.05 5.05L4.343 4.343M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 10.5C16.8 15.3 12.7 19 8 19C3.6 19 0 15.4 0 11C0 6.3 3.7 2.2 8.5 2C8.3 2.6 8.2 3.3 8.2 4C8.2 7.5 11 10.3 14.5 10.3C15.2 10.3 15.9 10.2 16.5 10L17 10.5Z" fill="currentColor"/>
          </svg>
        )}
      </span>
      <span className={s.label}>
        {theme === "dark" ? "Storybook" : "Cosmic"}
      </span>
    </button>
  );
}
