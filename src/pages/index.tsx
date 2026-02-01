import Footer from "@/components/footer";
import GridContainer from "@/components/grid-container";
import { ButtonLink } from "@/components/link";
import RootLayout from "@/layouts/root-layout";
import s from "./Home.module.css";
import { P } from "@/components/text";
import Image from "next/image";
import PageWarmer from "@/components/page-warmer";

export default function Home() {

  return (
    <RootLayout
      meta={{
        title: "Conjure",
        description:
          "Conjure — A template-driven config generator for DevOps, Platform Engineers, and Developers.",
      }}
    >
      <PageWarmer />
      <main className={s.homePage}>
        {/* Decorative Background Elements */}
        <div className={s.decorativeOrbs}>
          <div className={`${s.orb} ${s.orb1}`} />
          <div className={`${s.orb} ${s.orb2}`} />
          <div className={`${s.orb} ${s.orb3}`} />
        </div>

        <div className={s.stars}>
          <div className={`${s.star} ${s.star1}`} />
          <div className={`${s.star} ${s.star2}`} />
          <div className={`${s.star} ${s.star3}`} />
          <div className={`${s.star} ${s.star4}`} />
          <div className={`${s.star} ${s.star5}`} />
        </div>

        {/* Content */}
        <div className={s.content}>
          <GridContainer>
            <div className={s.logoContainer}>
              <Image
                src="/images/conjure-logo-white.svg"
                alt="Conjure Logo"
                width={400}
                height={120}
                priority
                className={`${s.logo} ${s.logoDark}`}
              />
              <Image
                src="/images/conjure-logo-black.svg"
                alt="Conjure Logo"
                width={400}
                height={120}
                priority
                className={`${s.logo} ${s.logoLight}`}
              />
            </div>
            <h1 className={s.title}>
              Conjure
            </h1>
            <P weight="regular" className={s.tagline}>
              A template-driven configuration generator for DevOps, Platform Engineers, and Developers.
            </P>
            <P weight="regular" className={s.quote}>
              "DevOps — it's like Magic!"
            </P>
          </GridContainer>

          <GridContainer className={s.buttonsList}>
            <ButtonLink
             href="/download"
             text="Download"
             size="large"
             theme="brand"
            />
            <ButtonLink
              href="/docs"
              text="Documentation"
              size="large"
              theme="brand"
            />
          </GridContainer>

          <a href="https://wizardops.dev" target="_blank" rel="noopener noreferrer" className={s.wizardopsLink}>
            <Image
              src="/images/hat-logo-white.svg"
              alt="WizardOps Hat"
              width={36}
              height={36}
              className={`${s.hatIcon} ${s.hatIconDark}`}
            />
            <Image
              src="/images/hat-logo-black.svg"
              alt="WizardOps Hat"
              width={36}
              height={36}
              className={`${s.hatIcon} ${s.hatIconLight}`}
            />
            <span>Visit the WizardOps Site to Discover More Spells</span>
          </a>
        </div>
      </main>
      <Footer />
    </RootLayout>
  );
}
