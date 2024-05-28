import Link from "next/link";
import Button from "../ui/buttons/button";
import Logo from "../icons/logo";

const menuItems = [
  {
    label: "Trade",
    href: "/trade",
  },
  {
    label: "Lend & Borrow",
    href: "/lend-borrow",
  },
  {
    label: "HOLLAR",
    href: "/hollar",
  },
  {
    label: "Referrals",
    href: "/referrals",
  },
  {
    label: "Governance",
    href: "/governance",
  },
  {
    label: "Devs",
    href: "/devs",
  },
  {
    label: "Docs",
    href: "/docs",
  },
];

export default function Header() {
  return (
    <header className="py-2 xl:py-1 bg-beige px-4 xl:pr-1 xl:rounded-xl xl:mx-10 xl:max-w-[1352px]">
      <div className="flex items-center justify-between container xl:max-w-[none]">
        <Logo size="small" />
        <nav className="hidden xl:flex gap-10 justify-center">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium font-geist leading-5 text-purple"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button role="primary" action={{ href: "/app" }}>
          Launch App
        </Button>
      </div>
    </header>
  );
}
