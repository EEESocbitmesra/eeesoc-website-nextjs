import "@/app/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import {
  Chivo,
  Roboto_Mono,
  Poppins,
  Share_Tech_Mono,
  IBM_Plex_Mono,
} from "next/font/google";

export const metadata = {
  title: "EEESoc BIT Mesra",
  description:
    "EEESoc was established in the year 2013 to promote technical growth and overall development of the students of EEE department.",
};

const bodyFont = Chivo({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--body-font",
});
const headingsFont = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--headings-font",
});
const codeFont = IBM_Plex_Mono({
  weight: ["400"],
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
      className={`${bodyFont.variable} ${headingsFont.variable} ${codeFont.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
