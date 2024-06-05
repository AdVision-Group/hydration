import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hydration",
  description:
    "Hydration is a next-gen DeFi protocol which is designed to bring an ocean of liquidity to Polkadot. Our tool for the job the HydraDX Omnipool - an innovative Automated Market Maker (AMM) which unlocks unparalleled efficiencies by combining all assets in a single trading pool.",
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
