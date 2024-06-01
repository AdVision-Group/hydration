import SecuredByBadge from "../badges/securedByBadge";
import Logo from "../icons/logo";
import Paragraph from "../ui/typography/paragraph";
import FooterLinks from "./links";
import Socials from "./socials";
import SubscribeToNewsletter from "./subscribe";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-lavender">
      <div className="pt-16 grid grid-cols-2 pb-8 gap-y-11 container mx-auto">
        <Logo size="large" />
        <Socials />
        <SubscribeToNewsletter />
        <FooterLinks />
        <SecuredByBadge />
        <div className="flex justify-between items-center">
          <Legal />
          <RightsReserved />
        </div>
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
        <Paragraph size="small">Privacy Policy</Paragraph>
      </Link>
      <Link href="/terms" className="font-inter font-medium text-purple-dim">
        <Paragraph size="small">Terms of Use</Paragraph>
      </Link>
    </div>
  );
}
