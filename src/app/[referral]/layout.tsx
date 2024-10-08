import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Hydration | Finance made efficient",
  description:
    "Hydration unites swaps, lending and the Hollar stablecoin under the roof of a scalable appchain.",
  //   metadataBase: new URL("https://hydration.net"),
  openGraph: {
    images: [
      {
        url: "/opengraph-image-ref.jpg",
        width: 1200,
        height: 627,
        alt: "Hydration | Finance made efficient",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "/twitter-image-ref.jpg",
        width: 1200,
        height: 627,
        alt: "Hydration | Finance made efficient",
      },
    ],
  },
};

export default function ReferralPage({ children }: { children: ReactNode }) {
  return children;
}
