import { NavTreeNode } from "@/components/nav-tree";
import SectionWrapper from "@/components/section-wrapper";
import { H1, P } from "@/components/text";
import NavFooterLayout from "@/layouts/nav-footer-layout";
import { fetchLatestConjureVersion } from "@/lib/fetch-latest-conjure-version";
import { loadDocsNavTreeData } from "@/lib/fetch-nav";
import Image from "next/image";
import { DOCS_DIRECTORY } from "../docs/[...path]";
import s from "./DownloadPage.module.css";
import ReleaseDownloadPage from "./release";
import TipDownloadPage from "./tip";

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

  return (
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
  );
}
