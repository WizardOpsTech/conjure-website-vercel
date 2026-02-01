"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import classNames from "classnames";
import s from "./OSTabs.module.css";

type OS = "windows" | "macos" | "linux";

interface OSContextValue {
  selectedOS: OS;
  setSelectedOS: (os: OS) => void;
}

const OSContext = createContext<OSContextValue | null>(null);

export function useOS() {
  const context = useContext(OSContext);
  if (!context) {
    throw new Error("useOS must be used within an OSTabsProvider");
  }
  return context;
}

interface OSTabsProviderProps {
  children: ReactNode;
  defaultOS?: OS;
}

export function OSTabsProvider({
  children,
  defaultOS = "macos",
}: OSTabsProviderProps) {
  const [selectedOS, setSelectedOS] = useState<OS>(defaultOS);

  return (
    <OSContext.Provider value={{ selectedOS, setSelectedOS }}>
      {children}
    </OSContext.Provider>
  );
}

interface OSTabsProps {
  children?: ReactNode;
}

export function OSTabs({ children }: OSTabsProps) {
  const { selectedOS, setSelectedOS } = useOS();

  return (
    <div className={s.osTabs}>
      <div className={s.tabButtons}>
        <button
          className={classNames(s.tabButton, {
            [s.active]: selectedOS === "windows",
          })}
          onClick={() => setSelectedOS("windows")}
        >
          Windows (PowerShell)
        </button>
        <button
          className={classNames(s.tabButton, {
            [s.active]: selectedOS === "macos",
          })}
          onClick={() => setSelectedOS("macos")}
        >
          macOS
        </button>
        <button
          className={classNames(s.tabButton, {
            [s.active]: selectedOS === "linux",
          })}
          onClick={() => setSelectedOS("linux")}
        >
          Linux
        </button>
      </div>
      {children}
    </div>
  );
}

interface OSContentProps {
  os: OS;
  children: ReactNode;
}

export function OSContent({ os, children }: OSContentProps) {
  const { selectedOS } = useOS();

  if (selectedOS !== os) {
    return null;
  }

  return <div className={s.osContent}>{children}</div>;
}
