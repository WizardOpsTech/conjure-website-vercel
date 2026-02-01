import { useEffect, useState, CSSProperties } from "react";

interface ThemeImageProps {
  darkSrc: string;
  lightSrc: string;
  alt: string;
  style?: CSSProperties;
}

export default function ThemeImage({ darkSrc, lightSrc, alt, style }: ThemeImageProps) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const html = document.documentElement;
    const update = () => setTheme(html.getAttribute("data-theme") || "dark");
    update();

    const observer = new MutationObserver(update);
    observer.observe(html, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={theme === "light" ? lightSrc : darkSrc}
        alt={alt}
        style={style}
      />
    </div>
  );
}
