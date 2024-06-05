import { redirect } from "next/navigation";

export default function ReferralPage({
  params: { referral },
}: {
  params: { referral: string };
}) {
  return redirect(`https://app.hydration.net/trade/swap?referral=${referral}`);
}
