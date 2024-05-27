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
    <header className="flex p-1 bg-white-300 justify-between pl-4 pr-1 rounded-lg items-center">
      <Logo size="small" />
      <nav className="flex gap-10 justify-center">
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
    </header>
  );
}
