import Logo from "../icons/logo";
import FooterLinks from "./links";
import FooterSocials from "./socials";
import SubscribeToNewsletter from "./subscribe";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-pink">
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
    <p className="font-inter text-purple font-normal text-sm leading-4">
      ©2024 Hydration, All rights reserved
    </p>
  );
}

function Legal() {
  return (
    <div className="flex gap-4">
      <Link
        href="/privacy"
        className="font-inter font-medium text-purple-dim leading-4"
      >
        Privacy Policy
      </Link>
      <Link
        href="/terms"
        className="font-inter font-medium text-purple-dim leading-4"
      >
        Terms of Use
      </Link>
    </div>
  );
}
