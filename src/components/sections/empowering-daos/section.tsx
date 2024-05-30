import SectionLabel from "@/components/ui/labels/section";
import ScrollLock from "./scroll-lock";
import Heading from "@/components/ui/typography/heading";
import Image from "next/image";
import Bullet from "./assets/bullet.svg";
import Paragraph from "@/components/ui/typography/paragraph";
import React from "react";

type BulletPointData = {
  title: React.ReactNode;
  description: string;
};

export default function EmpoweringDaosSection() {
  const bulletPoints: BulletPointData[] = [
    {
      title: "Accessible market making",
      description:
        "Hydration provides a cost-efficient, permissionless platform for market making any asset, without hidden costs or listing fees. DAOs can register their token and create an Isolated Pool, making their token tradable against all other assets on Hydration.",
    },
    {
      title: "Single-sided LPing",
      description:
        "The Hydration Omnipool allows single-sided LPing, enabling DAOs to add assets to the AMM without needing a second asset. Unlike Isolated Pools, listings in the Omnipool are permissioned and governed by the Hydration Protocol's guidelines.",
    },
    {
      title: "Treasury diversification",
      description:
        "DAOs can build up Protocol Owned Liquidity and diversify their Treasury holdings using one of the Hydration AMMs or by placing an OTC order. They can also schedule an on-chain DCA order, allowing them to accumulate assets gradually over time.",
    },
    {
      title: (
        <div>
          Price discovery and initial <br /> token distribution
        </div>
      ),
      description:
        "DAOs in their early stages can start a Liquidity Bootstrapping Pool (LBP) to distribute their tokens without the risk of sniping bots and to navigate initial price discovery.",
    },
    {
      title: "Supporting decentralization",
      description:
        "All DAOs running on the Polkadot network can manage their Treasuries on Hydration in a fully decentralized and non-custodial manner, using the Governance of their chain and cross-chain communication (XCM). No multisigs required.",
    },
  ];
  return (
    <ScrollLock
      durationPx={2000}
      render={(progress) => (
        <section className="bg-purple w-full h-screen">
          <div className="container py-[7.5rem] flex flex-col gap-[7.5rem] h-full">
            <div className="flex flex-col gap-4 h-full">
              <SectionLabel>Empowering DAOs</SectionLabel>
              <Heading size="medium" className="max-w-[1066px]">
                15+ projects and DAOs manage their liquidity using Hydration,
                including the Treasury of Polkadot
              </Heading>
              <div className="flex flex-col h-full justify-between">
                {bulletPoints.map((bullet, index) => (
                  <BulletPointRow
                    key={index}
                    title={bullet.title}
                    description={bullet.description}
                    active={
                      progress >= index * 20 && progress <= (index + 1) * 20
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    />
  );
}

type BulletPointRowProps = {
  title: React.ReactNode;
  description: string;
  active: boolean;
};

function BulletPointRow({ title, description, active }: BulletPointRowProps) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4 w-[45%]">
        {active && <Image src={Bullet} alt="" />}
        <Heading
          size="small"
          className={`transition ${active ? "text-lavender" : "text-lavender-dim"}`}
        >
          {title}
        </Heading>
      </div>
      <div className="w-[55%]">
        <Paragraph
          size="medium"
          className={`transition text-lavender ${active ? "opacity-100" : "opacity-0"}`}
        >
          {description}
        </Paragraph>
      </div>
    </div>
  );
}
