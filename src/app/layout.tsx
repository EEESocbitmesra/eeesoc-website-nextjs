import "@/app/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";

import { Chivo, Fira_Code, Poppins } from "next/font/google";

export const metadata = {
  title: "EEESoc BIT Mesra",
  description:
    "EEESoc was established in the year 2013 to promote technical growth and overall development of the students of EEE department.",
};

const chivo = Chivo({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--body-font",
});
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--headings-font",
});
const firaCode = Fira_Code({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--code-font",
});

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className={`${chivo.variable} ${poppins.variable} ${firaCode.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />

        <Script id="scripts">
          <script
            src="https://kit.fontawesome.com/55576ac1b8.js"
            crossOrigin="anonymous"
            defer
          ></script>
        </Script>
      </body>
    </html>
  );
}
