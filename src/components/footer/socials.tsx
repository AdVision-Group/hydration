import MediumLogo from "./assets/medium.svg";
import TwitterLogo from "./assets/twitter.svg";
import DiscordLogo from "./assets/discord.svg";
import TelegramLogo from "./assets/telegram.svg";
import GithubLogo from "./assets/github.svg";
import SubstackLogo from "./assets/substack.svg";
import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const socials = [
  {
    name: "Medium",
    href: "https://medium.com/",
    logo: MediumLogo,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/",
    logo: TwitterLogo,
  },
  {
    name: "Discord",
    href: "https://discord.com/",
    logo: DiscordLogo,
  },
  {
    name: "Telegram",
    href: "https://telegram.org/",
    logo: TelegramLogo,
  },
  {
    name: "Github",
    href: "https://github.com",
    logo: GithubLogo,
  },
  {
    name: "Substack",
    href: "https://substack.com/",
    logo: SubstackLogo,
  },
];

type Props = {
  className?: string;
};

export default function Socials({ className }: Props) {
  return (
    <div className={twMerge("flex gap-8", className)}>
      {socials.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          className="cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out"
        >
          <Image src={social.logo} alt={social.name} width={28} height={28} />
        </Link>
      ))}
    </div>
  );
}
