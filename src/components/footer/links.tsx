"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useLenis } from "@studio-freight/react-lenis";

const linkColums: LinkColumnProps[] = [
  {
    title: "Product",
    links: [
      {
        title: "Trade",
        href: "#trade",
      },
      {
        title: "Lend & Borrow",
        href: "#lend-borrow",
      },
    ],
  },

  {
    title: "Developers",
    links: [
      {
        title: "Docs",
        href: "https://docs.hydradx.io/",
        target: "_blank",
      },
      {
        title: "Github",
        href: "https://github.com/galacticcouncil",
        target: "_blank",
      },
      {
        title: "SDK",
        href: "https://github.com/galacticcouncil/sdk",
        target: "_blank",
      },
    ],
  },
];

type FooterLinksProps = {
  className?: string;
};

export default function FooterLinks({ className }: FooterLinksProps) {
  return (
    <div className={twMerge("grid grid-cols-2 gap-y-12", className)}>
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
    target?: "_blank";
  }[];
};

function LinkColumn({ title, links }: LinkColumnProps) {
  const lenis = useLenis();

  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-geist font-medium text-purple-dim">{title}</h4>
      {links.map((link) => (
        <div key={link.href}>
          <Link
            href={link.href}
            target={link.target}
            className="text-base font-geist  text-purple inline-block pb-[2px] bg-purple-to-transparent bg-[bottom_left] bg-[length:0_2px] bg-no-repeat hover:bg-[bottom_right] hover:bg-[length:100%_2px]"
            style={{
              transition: "background-size 0.3s, background-position 0s 0.3s",
            }}
            onClick={(e) => {
              if (link.target === "_blank") return;
              e.preventDefault();
              lenis?.scrollTo(link.href);
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
