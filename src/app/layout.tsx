// import "./globals.css";
import type { Metadata } from "next";
import { Main } from "next/document";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { CustomStyles } from "@/components/CustomStyles";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keith Jasper",
  description: "Website of Keith Jasper",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <CustomStyles />
      </head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-QKP9XVQTK7"
      />
      <Script>
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

        gtag('config', 'G-QKP9XVQTK7');
        `}
      </Script>
      <body>
        <main>
          <Navigation />
          <div id="content" className="content">
            <TopBar />
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
