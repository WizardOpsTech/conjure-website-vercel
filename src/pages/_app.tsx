import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavigationLoader from "@/components/navigation-loader";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationLoader />
      <Component {...pageProps} />
    </>
  );
}
