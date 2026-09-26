import type { Metadata } from "next";
import { Oswald, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import SiteLoader from "@/components/layout/SiteLoader";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krutarth Chauhan — Full Stack Developer & Founder of Krutonic",
  description:
    "Full Stack Developer building web applications, mobile apps, SaaS products and interactive digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="flex flex-col">
        <SiteLoader>
          <SmoothScroll>{children}</SmoothScroll>
        </SiteLoader>
      </body>
    </html>
  );
}
