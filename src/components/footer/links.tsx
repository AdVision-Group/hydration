import Link from "next/link";
import { twMerge } from "tailwind-merge";

const linkColums: LinkColumnProps[] = [
  {
    title: "Product",
    links: [
      {
        title: "Trade",
        href: "/trade",
      },
      {
        title: "Lend & Borrow",
        href: "/lend-borrow",
      },
    ],
  },
  {
    title: "Token",
    links: [
      {
        title: "$Hollar",
        href: "/hollar",
      },
      {
        title: "DAOs",
        href: "/daos",
      },
    ],
  },
  {
    title: "Developers",
    links: [
      {
        title: "Docs",
        href: "/docs",
      },
      {
        title: "Github",
        href: "/github",
      },
      {
        title: "SDK",
        href: "/sdk",
      },
    ],
  },
];

type FooterLinksProps = {
  className?: string;
};

export default function FooterLinks({ className }: FooterLinksProps) {
  return (
    <div
      className={twMerge("grid sm:grid-cols-3 grid-cols-2 gap-y-12", className)}
    >
      {linkColums.map((column) => (
        <LinkColumn key={column.title} {...column} />
      ))}
    </div>
  );
}

type LinkColumnProps = {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
};

function LinkColumn({ title, links }: LinkColumnProps) {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-geist font-medium text-purple-dim">{title}</h4>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-base font-geist  text-purple"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
