import { DOCS_PAGES_ROOT_PATH } from "@/pages/docs/[...path]";
import classNames from "classnames";
import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import GridContainer, { NavAndFooterGridConfig } from "../grid-container";
import Link, { ButtonLink, SimpleLink } from "../link";
import NavTree, { BreakNode, LinkNode, NavTreeNode } from "../nav-tree";
import ThemeToggle from "../theme-toggle";
import s from "./Navbar.module.css";
import { useRouter } from "next/router";
import { Github, X } from "lucide-react";

export interface NavbarProps {
  className?: string;
  links?: SimpleLink[];
  cta?: SimpleLink;
  docsNavTree: NavTreeNode[];
}

const MOBILE_MENU_BREAKPOINT = 768;

export default function Navbar({
  className,
  links,
  cta,
  docsNavTree,
}: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const mobileContentRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLLIElement>(null);

  // Listen for theme changes
  useEffect(() => {
    const updateTheme = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") as "dark" | "light" || "dark";
      setTheme(currentTheme);
    };

    updateTheme();

    // Watch for theme changes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleSizeUpdated() {
      if (window.innerWidth > MOBILE_MENU_BREAKPOINT && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleSizeUpdated);
    return () => window.removeEventListener("resize", handleSizeUpdated);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("noScroll");
      // Scroll to active item when mobile menu is opened, so it's not hidden
      if (activeItemRef.current && mobileContentRef.current) {
        const mobileContent = mobileContentRef.current;
        const activeItem = activeItemRef.current;
        const mobileContentRect = mobileContent.getBoundingClientRect();
        const activeItemRect = activeItem.getBoundingClientRect();

        if (
          activeItemRect.top < mobileContentRect.top ||
          activeItemRect.bottom > mobileContentRect.bottom
        ) {
          mobileContent.scrollTo({
            top:
              activeItem.offsetTop -
              mobileContent.offsetTop -
              mobileContentRect.height / 2 +
              activeItemRect.height / 2,
            behavior: "instant", // easing here felt... wrong
          });
        }
      }
    } else {
      document.body.classList.remove("noScroll");
    }
  }, [mobileMenuOpen]);

  /* Instead of closing the menu with the NavTree's onNavLinkClicked prop,
    * we'll close it when the route changes. This avoids the annoying flicker
    * between the old and new pages when the menu closes. */
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      setMobileMenuOpen(false);
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <nav className={classNames(s.navbar, className)}>
      <GridContainer
        className={s.gridContainer}
        gridConfig={NavAndFooterGridConfig}
      >
        <NextLink href="/" className={s.logoLink}>
          <Image
            src="/images/conjure-logo-white.svg"
            alt="Conjure"
            width={120}
            height={40}
            className={theme === "dark" ? s.logoVisible : s.logoHidden}
          />
          <Image
            src="/images/conjure-logo-black.svg"
            alt="Conjure"
            width={120}
            height={40}
            className={theme === "light" ? s.logoVisible : s.logoHidden}
          />
        </NextLink>
        <div className={s.desktopLinks}>
          {links && (
            <ul className={s.linkList}>
              {links.map((link) => {
                return (
                  <li key={link.text}>
                    <Link
                      className={classNames({
                        [s.active]: pathname == link.href,
                      })}
                      {...link}
                    />
                  </li>
                );
              })}
            </ul>
          )}
          <ThemeToggle variant="inline" />
          <div className={s.socialLinks}>
            <a
              href="https://github.com/wizardopstech/conjure"
              target="_blank"
              rel="noopener noreferrer"
              className={s.socialIcon}
              aria-label="GitHub"
            >
              <Github className={s.iconSize} />
            </a>
            <a
              href="https://x.com/wizardopsdev"
              target="_blank"
              rel="noopener noreferrer"
              className={s.socialIcon}
              aria-label="X"
            >
              <X className={s.iconSize} />
            </a>
            {/* <a
              href="https://youtube.com/@thesudoyt"
              target="_blank"
              rel="noopener noreferrer"
              className={s.socialIcon}
              aria-label="YouTube"
            >
              <Youtube className={s.iconSize} />
            </a> */}
          </div>
          {cta && (
            <ButtonLink
              className={s.cta}
              size="large"
              theme="brand"
              href={cta.href}
              text={cta.text}
            />
          )}
        </div>
        <MenuToggle
          isOpen={mobileMenuOpen}
          onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      </GridContainer>
      <div
        ref={mobileContentRef}
        className={classNames(s.mobileContent, {
          [s.mobileMenuOpen]: mobileMenuOpen,
        })}
      >
        <div className={s.mobileThemeToggle}>
          <ThemeToggle variant="inline" />
        </div>
        <NavTree
          className={s.navTree}
          nodeGroups={[
            {
              rootPath: "",
              nodes: [
                // Adds our CTA first
                ...(cta
                  ? [
                      {
                        type: "link",
                        title: cta.text,
                        path: cta.href,
                        active: pathname === cta.href,
                      } as LinkNode,
                    ]
                  : []),
                // Next our Nav Links, but exclude docs, that's going to get
                // special treatment in the next node group below.
                ...(links
                  ? links
                      .filter((link) => link.href != "/docs")
                      .map((link) => {
                        return {
                          type: "link",
                          title: link.text,
                          path: link.href,
                          active: pathname === link.href,
                        } as LinkNode;
                      })
                  : []),

                { type: "break" } as BreakNode,
              ],
            },
            // Render the docs links
            {
              rootPath: DOCS_PAGES_ROOT_PATH,
              nodes: docsNavTree,
            },
          ]}
          activeItemRef={activeItemRef}
        />
      </div>
    </nav>
  );
}

interface MenuToggleProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

function MenuToggle({ isOpen, onToggle }: MenuToggleProps) {
  return (
    <button type="button" onClick={onToggle} className={s.menuToggle}>
      <div className={classNames(s.hamburger)} data-open={isOpen}>
        <div className={s.hamburgerLayer}></div>
        <div className={s.hamburgerLayer}></div>
        <div className={s.hamburgerLayer}></div>
      </div>
    </button>
  );
}
