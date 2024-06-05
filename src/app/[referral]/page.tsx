"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ReferralPage({
  params: { referral },
}: {
  params: { referral: string };
}) {
  const { push } = useRouter();

  useEffect(() => {
    if (referral) {
      push(`https://app.hydration.net/trade/swap?referral=${referral}`);
    }
  }, [referral, push]);
  return null;
}
