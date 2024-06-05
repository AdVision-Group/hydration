import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://hydration.net"),
  openGraph: {
    images: [
      {
        url: "https://hydration.net/opengraph-image-ref.png",
        protocol: "https",
        hostname: "hydration.net",
        width: 1200,
        height: 627,
        alt: "Hydration | Finance made efficient",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://hydration.net/twitter-image-ref.png",
        protocol: "https",
        hostname: "hydration.net",
        width: 1200,
        height: 627,
        alt: "Hydration | Finance made efficient",
      },
    ],
  },
};

export default function ReferralPage({
  params: { referral },
}: {
  params: { referral: string };
}) {
  return redirect(`https://app.hydration.net/trade/swap?referral=${referral}`);
}
