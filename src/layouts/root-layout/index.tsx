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

          <link rel="canonical" href={`https://conjure.wizardops.dev${pathname}`} />

          <meta property="og:title" content={title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://conjure.wizardops.dev${pathname}`} />
          <meta property="og:site_name" content="Conjure" />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="https://conjure.wizardops.dev/social_card_conjure.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Conjure — template-driven configuration generation for DevOps and developers" />
          <meta property="og:locale" content="en_US" />

          <meta name="robots" content="index,follow" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@wizardopsdev" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content="https://conjure.wizardops.dev/social_card_conjure.jpg" />
          <meta name="twitter:image:alt" content="Conjure — template-driven configuration generation for DevOps and developers" />

          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="dns-prefetch" href="https://github.com" />
          <link rel="dns-prefetch" href="https://discord.gg" />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    "@id": "https://wizardops.dev/#organization",
                    "name": "WizardOps LLC",
                    "url": "https://wizardops.dev",
                    "logo": "https://conjure.wizardops.dev/images/hat-logo-white.svg",
                    "email": "headwizard@wizardops.dev",
                    "foundingLocation": "United States",
                    "sameAs": [
                      "https://github.com/wizardopstech",
                      "https://x.com/wizardopsdev",
                      "https://linkedin.com/company/wizardops",
                      "https://discord.gg/tDkHXB2VDU",
                    ],
                  },
                  {
                    "@type": "SoftwareApplication",
                    "@id": "https://conjure.wizardops.dev/#software",
                    "name": "Conjure",
                    "applicationCategory": "DeveloperApplication",
                    "operatingSystem": "Linux, macOS, Windows",
                    "url": "https://conjure.wizardops.dev",
                    "downloadUrl": "https://conjure.wizardops.dev/download",
                    "description": "A template-driven configuration generator for DevOps, Platform Engineers, and Developers.",
                    "publisher": { "@id": "https://wizardops.dev/#organization" },
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "USD",
                    },
                  },
                  {
                    "@type": "WebSite",
                    "@id": "https://conjure.wizardops.dev/#website",
                    "url": "https://conjure.wizardops.dev",
                    "name": "Conjure",
                    "description": "A template-driven configuration generator for DevOps, Platform Engineers, and Developers.",
                    "publisher": { "@id": "https://wizardops.dev/#organization" },
                  },
                ],
              }),
            }}
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
