import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import Navbar from "./components/landing/nav-bar";
import { ThemeProvider } from "./components/providers/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "dumpai.com",
    template: "%s - DumpAI",
  },
  description: "Such Random Maker",
  openGraph: {
    title: "dumpai.vercel.app",
    description: "Such Random Maker",
    url: "https://dumpai.vercel.app",
    siteName: "dumpai-vercel.app",
    images: [
      {
        url: "https://dumpai.vercel.app/test-og",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "KinFiSH",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

const product = LocalFont({
  src: "../public/fonts/product-font.ttf",
  variable: "--font-product",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[inter.variable, calSans.variable, product.variable].join(" ")}
    >
      <head>
        <Analytics />
      </head>

      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        <ThemeProvider>
          {/* <nav className="my-16 animate-fade-in overflow-hidden"> */}
            {/* <p>helo world</p> */}
            {/* <Navbar /> */}
            {/* <ul className="flex items-center justify-center gap-4"></ul> */}
          {/* </nav> */}

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
