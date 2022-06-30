import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children, title }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          {router.pathname === "/" ? title : title + " | EEESoc BIT Mesra"}
        </title>
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
