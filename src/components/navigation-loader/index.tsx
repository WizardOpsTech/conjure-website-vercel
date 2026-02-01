"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import s from "./NavigationLoader.module.css";

/**
 * NavigationLoader - Shows a loading bar at the top of the page during navigation
 */
export default function NavigationLoader() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  if (!loading) return null;

  return (
    <div className={s.loaderContainer}>
      <div className={s.loaderBar} />
    </div>
  );
}
