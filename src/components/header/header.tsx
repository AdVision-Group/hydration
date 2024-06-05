import Link from "next/link";
import Button from "../ui/buttons/button";
import Logo from "../icons/logo";
import { twMerge } from "tailwind-merge";

const menuItems = [
  {
    label: "Trade",
    href: "/#trade",
  },
  {
    label: "Lend & Borrow",
    href: "/#lend-borrow",
  },
  {
    label: "HOLLAR",
    href: "/#hollar",
  },
  {
    label: "Referrals",
    href: "/#referrals",
  },
  {
    label: "Governance",
    href: "/#governance",
  },
  {
    label: "Devs",
    href: "/#devs",
  },
  {
    label: "Docs",
    href: "https://docs.hydration.net",
    target: "_blank",
  },
];

export type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  return (
    <header
      className={twMerge("z-40 mx-auto w-full flex justify-center", className)}
    >
      <div className="py-2 xl:py-1 bg-beige px-4 xl:pr-1 xl:rounded-xl xl:mx-10 xl:max-w-[1352px] w-full">
        <div className="flex items-center justify-between xl:max-w-[none]">
          <Logo size="small" />
          <nav className="group hidden xl:flex gap-10 justify-center pointer-events-none">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.target}
                className="transition group-hover:opacity-50 hover:!opacity-100 text-base font-medium font-geist leading-5 text-purple pointer-events-auto"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button
            role="primary"
            action={{ href: "https://app.hydration.net", target: "_blank" }}
          >
            Launch App
          </Button>
        </div>
      </div>
    </header>
  );
}
