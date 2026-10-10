import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  Poppins,
  Open_Sans,
  DM_Sans,
  Red_Hat_Display,
  Manrope,
  Inter,
  IBM_Plex_Sans,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const openFont = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const ibmSansFont = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const redHatFont = Red_Hat_Display({
  variable: "--font-redhat-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const manropeFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dmFont = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
});

const clashDisplay = localFont({
  src: [
    {
      path: "../font/ClashDisplay-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../font/ClashDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/ClashDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../font/ClashDisplay-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../font/ClashDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
});

export const metadata: Metadata = {
  title: "Orinix | Create Next App",
  description:
    "Orinix | Integrate AI for a competitive analysis for your business ⭐️",

  openGraph: {
    title: "Orinix | Create Next App",
    description:
      "Orinix | Integrate AI for a competitive analysis for your business ⭐️",
    url: "/og-image.png",
    siteName: "Orinix",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Orinix | Create Next App",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Orinix | Create Next App",
    description:
      "Orinix | Integrate AI for a competitive analysis for your business ⭐️",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppinsFont.className} ${ibmSansFont.variable} ${openFont.variable} ${dmFont.variable} ${clashDisplay.variable} ${redHatFont.variable} ${manropeFont.variable} ${interFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
