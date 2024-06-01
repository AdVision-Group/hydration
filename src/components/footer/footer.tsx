import { twMerge } from "tailwind-merge";
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
      <div className="pt-16 grid grid-cols-1 lg:grid-cols-2 pb-8 gap-y-11 container mx-auto">
        <Logo className="order-1" size="large" />
        <Socials className="order-4" />
        <SubscribeToNewsletter className="order-2" />
        <FooterLinks className="order-3" />
        <SecuredByBadge className="order-5" />
        <div className="flex justify-between lg:items-center items-start order-6 flex-col-reverse lg:flex-row gap-2">
          <Legal />
          <RightsReserved />
        </div>
      </div>
    </footer>
  );
}

type Props = {
  className?: string;
};

function RightsReserved({ className }: Props) {
  return (
    <Paragraph size="small" className={className}>
      ©2024 Hydration, All rights reserved
    </Paragraph>
  );
}

function Legal({ className }: Props) {
  return (
    <div className={twMerge("flex gap-4", className)}>
      <Link href="/privacy" className="font-inter font-medium">
        <Paragraph size="small" className="text-purple-dim lg:text-purple">
          Privacy Policy
        </Paragraph>
      </Link>
      <Link href="/terms" className="font-inter font-medium">
        <Paragraph size="small" className="text-purple-dim lg:text-purple">
          Terms of Use
        </Paragraph>
      </Link>
    </div>
  );
}
