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
        <div key={link.href}>
          <Link
            href={link.href}
            className="text-base font-geist  text-purple inline-block pb-[2px] bg-purple-to-transparent bg-[bottom_left] bg-[length:0_2px] bg-no-repeat hover:bg-[bottom_right] hover:bg-[length:100%_2px]"
            style={{
              transition: "background-size 0.3s, background-position 0s 0.3s",
            }}
          >
            {link.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
// .un {
//    display: inline-block;
//    padding-bottom:2px;
//    background-image: linear-gradient(#000 0 0);
//    background-position: 0 100%; /*OR bottom left*/
//    background-size: 0% 2px;
//    background-repeat: no-repeat;
//    transition:
//      background-size 0.3s,
//      background-position 0s 0.3s; /*change after the size immediately*/
//  }

//  .un:hover {
//    background-position: 100% 100%; /*OR bottom right*/
//    background-size: 100% 2px;
//  }
