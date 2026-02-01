import { ButtonLink } from "@/components/link";
import GenericCard from "@/components/generic-card";
import { CodeXml, Download, BookOpen } from "lucide-react";
import s from "./DownloadPage.module.css";
import { DownloadPageProps } from "./index";

const binaries = [
  {
    title: "Windows x86_64",
    description: "For 64-bit Windows systems.",
    asset: "conjure_{VERSION}_Windows_x86_64.zip",
    anchor: "windows",
  },
  {
    title: "Linux x86_64",
    description: "For 64-bit Linux systems.",
    asset: "conjure_{VERSION}_Linux_x86_64.tar.gz",
    anchor: "linux",
  },
  {
    title: "Linux arm64",
    description: "For ARM-based Linux systems.",
    asset: "conjure_{VERSION}_Linux_arm64.tar.gz",
    anchor: "linux",
  },
  {
    title: "Darwin arm64",
    description: "For Apple Silicon Macs (M1/M2/M3/M4).",
    asset: "conjure_{VERSION}_Darwin_arm64.tar.gz",
    anchor: "macos",
  },
  {
    title: "Darwin x86_64",
    description: "For Intel-based Macs.",
    asset: "conjure_{VERSION}_Darwin_x86_64.tar.gz",
    anchor: "macos",
  },
];

export default function ReleaseDownloadPage({
  latestVersion,
}: DownloadPageProps) {
  return (
    <div className={s.downloadCards}>
      {binaries.map(({ title, description, asset, anchor }) => (
        <GenericCard key={asset} title={title} description={description} padding="40px">
          <div className={s.cardButtons}>
            <ButtonLink
              size="large"
              href={`https://github.com/WizardOpsTech/conjure/releases/download/v${latestVersion}/${asset.replace("{VERSION}", latestVersion)}`}
              text="Download"
              icon={<Download strokeWidth={2} size={17} />}
              showExternalIcon={false}
            />
            <ButtonLink
              size="large"
              href={`/docs/install/binary#${anchor}`}
              text="Install"
              icon={<BookOpen strokeWidth={2} size={17} />}
              showExternalIcon={false}
            />
          </div>
        </GenericCard>
      ))}
      <GenericCard
        title="Build from Source"
        description="Build Conjure yourself from the source code. Requires Go 1.24+."
        padding="40px"
      >
        <ButtonLink
          size="large"
          href="/docs/install/build"
          text="Build Instructions"
          icon={<CodeXml strokeWidth={2} size={17} />}
          showExternalIcon={false}
        />
      </GenericCard>
    </div>
  );
}
