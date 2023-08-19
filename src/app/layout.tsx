// import "./globals.css";
import type { Metadata } from "next";
import { Main } from "next/document";
import { Inter } from "next/font/google";
import { Navigation } from "../../components/Navigation";
import { RemoteStyles } from "../../components/RemoveStyles";
import { TopBar } from "../../components/TopBar";
import { Hero } from "../../components/Hero";

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
        <RemoteStyles />
      </head>
      <body>
        <main>
          <Navigation />
          <div id="content" className="content">
            <TopBar />
            {<Hero />}
          </div>
        </main>
      </body>
    </html>
  );
}
