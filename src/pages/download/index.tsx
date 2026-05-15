import { NavTreeNode } from "@/components/nav-tree";
import SectionWrapper from "@/components/section-wrapper";
import { H1, P } from "@/components/text";
import NavFooterLayout from "@/layouts/nav-footer-layout";
import { fetchLatestConjureVersion } from "@/lib/fetch-latest-conjure-version";
import { loadDocsNavTreeData } from "@/lib/fetch-nav";
import Head from "next/head";
import Image from "next/image";
import { DOCS_DIRECTORY } from "../docs/[...path]";
import s from "./DownloadPage.module.css";
import ReleaseDownloadPage from "@/components/download/Release";
import TipDownloadPage from "@/components/download/Tip";

export async function getStaticProps() {
  return {
    props: {
      latestVersion: await fetchLatestConjureVersion(),
      docsNavTree: await loadDocsNavTreeData(DOCS_DIRECTORY, ""),
    },
  };
}

export interface DownloadPageProps {
  latestVersion: string;
  docsNavTree: NavTreeNode[];
}

export default function DownloadPage({
  latestVersion,
  docsNavTree,
}: DownloadPageProps) {
  const isTip = process.env.GIT_COMMIT_REF === "tip";

  const downloadJsonLd = {
    "@context": "https://schema.org",
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
  };

  return (
    <>
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(downloadJsonLd) }}
      />
    </Head>
    <NavFooterLayout
      docsNavTree={docsNavTree}
      meta={{
        title: "Download Conjure",
        description:
          "Conjure is a CLI tool for generating common DevOps templates and bundles for Kubernetes, Terraform, and more.",
      }}
    >
      <main className={s.downloadPage}>
        <SectionWrapper>
          <div className={s.header}>
            <Image src="/images/conjure-logo-white.svg" alt="" width={58} height={80} className={s.logoDark} />
            <Image src="/images/conjure-logo-black.svg" alt="" width={58} height={80} className={s.logoLight} />
            <H1 className={s.pageTitle}>Download Conjure</H1>
            {!isTip && (
              <P weight="regular" className={s.versionInfo}>
                Version {latestVersion} -{" "}
                <a
                  href={
                    "/docs/install/release-notes/" +
                    latestVersion.replace(/\./g, "-")
                  }
                >
                  Release Notes
                </a>
              </P>
            )}
          </div>
          {isTip ? (
            <TipDownloadPage
              latestVersion={latestVersion}
              docsNavTree={docsNavTree}
            />
          ) : (
            <ReleaseDownloadPage
              latestVersion={latestVersion}
              docsNavTree={docsNavTree}
            />
          )}
        </SectionWrapper>
      </main>
    </NavFooterLayout>
    </>
  );
}
