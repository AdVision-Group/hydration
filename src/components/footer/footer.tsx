import Logo from "../icons/logo";
import Paragraph from "../ui/typography/paragraph";
import FooterLinks from "./links";
import FooterSocials from "./socials";
import SubscribeToNewsletter from "./subscribe";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-lavender">
      <div className="pt-16 grid grid-cols-2 grid-rows-3 gap-y-11 container mx-auto">
        <Logo size="large" />
        <FooterSocials />
        <SubscribeToNewsletter />
        <FooterLinks />
        <RightsReserved />
        <Legal />
      </div>
    </footer>
  );
}

function RightsReserved() {
  return (
    <Paragraph size="small">©2024 Hydration, All rights reserved</Paragraph>
  );
}

function Legal() {
  return (
    <div className="flex gap-4">
      <Link href="/privacy" className="font-inter font-medium text-purple-dim">
        Privacy Policy
      </Link>
      <Link href="/terms" className="font-inter font-medium text-purple-dim">
        Terms of Use
      </Link>
    </div>
  );
}
