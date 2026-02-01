import Footer from "@/components/footer";
import { SimpleLink } from "@/components/link";
import { NavTreeNode } from "@/components/nav-tree";
import Navbar from "@/components/navbar";
import RootLayout, { RootLayoutProps } from "../root-layout";

const navLinks: Array<SimpleLink> = [
  {
    text: "Docs",
    href: "/docs",
  },
  {
    text: "Discord",
    href: "https://discord.gg/tDkHXB2VDU",
  },
  {
    text: "GitHub",
    href: "https://github.com/wizardopstech/conjure",
  },
  {
    text: "WizardOps",
    href: "https://Wizardops.dev",
  },
];

type NavFooterLayoutProps = RootLayoutProps & {
  docsNavTree: NavTreeNode[];
};

export default function NavFooterLayout(props: NavFooterLayoutProps) {
  const { children, docsNavTree, ...otherProps } = props;
  return (
    <RootLayout {...otherProps}>
      <Navbar
        links={navLinks}
        docsNavTree={docsNavTree}
        cta={{
          href: "/download",
          text: "Download",
        }}
      />
      {children}
      <Footer />
    </RootLayout>
  );
}
