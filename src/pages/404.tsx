import s from "./404Page.module.css";
import NavFooterLayout from "@/layouts/nav-footer-layout";
import { loadDocsNavTreeData } from "@/lib/fetch-nav";
import { DOCS_DIRECTORY } from "./docs/[...path]";
import { NavTreeNode } from "@/components/nav-tree";
import { H2, P } from "@/components/text";
import Image from "next/image";

export async function getStaticProps() {
  return {
    props: {
      docsNavTree: await loadDocsNavTreeData(DOCS_DIRECTORY, ""),
    },
  };
}

interface NotFoundProps {
  docsNavTree: NavTreeNode[];
}

export default function NotFound({ docsNavTree }: NotFoundProps) {
  return (
    <NavFooterLayout
      docsNavTree={docsNavTree}
      meta={{
        title: "Page not found | Conjure",
        description:
          "Oops! We couldn't find what you were looking for. Try browsing our docs or visit our download page.",
      }}
    >
      <main className={s.notFoundPage}>
        <header className={s.header}>
          <H2>This page could not be found.</H2>
        </header>
        <section className={s.imageSection}>
          <Image
            className={`${s.image} ${s.imageDark}`}
            src="/images/404_white.svg"
            alt="404 not found"
            width={1200}
            height={1400}
          />
          <Image
            className={`${s.image} ${s.imageLight}`}
            src="/images/404_black.svg"
            alt="404 not found"
            width={1200}
            height={1400}
          />
        </section>
      </main>
    </NavFooterLayout>
  );
}
