import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return <Component {...pageProps} />;
}

export default MyApp;
