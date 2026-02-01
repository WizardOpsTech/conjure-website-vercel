"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

/**
 * PageWarmer component - Preloads critical pages in the background
 * to eliminate compilation delays on first navigation
 */
export default function PageWarmer() {
  const router = useRouter();

  useEffect(() => {
    // Only run if router is ready
    if (!router.isReady) return;

    // Wait a bit for the initial page to fully load
    const timer = setTimeout(() => {
      // Preload the most commonly accessed pages
      const criticalPages = [
        "/docs",
        "/download",
        "/docs/getting-started",
        "/docs/cli-reference",
        "/docs/creating-templates",
      ];

      criticalPages.forEach((page) => {
        // Safely attempt to prefetch
        try {
          router.prefetch(page);
        } catch (error) {
          // Silently fail if prefetch doesn't work
          console.debug(`Failed to prefetch ${page}:`, error);
        }
      });
    }, 2000); // Wait 2 seconds after page load to avoid interfering

    return () => clearTimeout(timer);
  }, [router, router.isReady]);

  return null; // This component renders nothing
}
