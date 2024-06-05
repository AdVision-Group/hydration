import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hydration | Finance made efficient",
  description:
    "Hydration unites swaps, lending and the Hollar stablecoin under the roof of a scalable appchain.",
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
      url: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
      url: "/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#e53e76",
      url: "/safari-pinned-tab.svg",
    },
  ],
  other: {
    "msapplication-TileColor": "#ff0000",
    "theme-color": "#ffffff",
  },
  openGraph: {
    images: [
      {
        url: "opengraph-image.png",
        width: 1200,
        height: 627,
        alt: "Hydration | Finance made efficient",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "twitter-image.png",
        width: 1200,
        height: 627,
        alt: "Hydration | Finance made efficient",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
