"use client";

import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

export function useDiagramTheme(): Theme {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const el = document.documentElement;
    const current = el.getAttribute('data-theme') as Theme | null;
    if (current) setTheme(current);

    const observer = new MutationObserver(() => {
      const val = el.getAttribute('data-theme') as Theme | null;
      if (val) setTheme(val);
    });
    observer.observe(el, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return theme;
}
