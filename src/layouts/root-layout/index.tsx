import { jetbrainsMono, pretendardStdVariable } from "@/components/text";
import PreviewBanner from "@/components/preview-banner";
import ThemeToggle from "@/components/theme-toggle";
import classNames from "classnames";
import Head from "next/head";
import { usePathname } from "next/navigation";
import s from "./RootLayout.module.css";

export interface PageMeta {
  title: string;
  description: string;
}

export interface RootLayoutProps {
  meta: PageMeta;
  children?: React.ReactNode;
  className?: string;
}

export default function RootLayout({
  meta: { title, description },
  className,
  children,
}: RootLayoutProps) {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  return (
    <>
      <div
        className={classNames(
          s.rootLayout,
          pretendardStdVariable.variable,
          jetbrainsMono.variable,
          className,
        )}
      >
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta property="og:title" content={title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://conjure.wizardops.dev" />
          <meta property="og:site_name" content="Conjure" />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="https://conjure.wizardops.dev/social_card_conjure.jpg" />

          <link rel="icon" type="image/png" href="/favicon.png" />
          <meta
            name="twitter:image"
            content="https://conjure.wizardops.dev/social_card_conjure.jpg"
          />
          <meta name="darkreader-lock" />
        </Head>
        {isHomepage && <ThemeToggle variant="fixed" />}
        <PreviewBanner />
        {children}
      </div>
    </>
  );
}
