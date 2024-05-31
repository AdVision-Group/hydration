import Button from "@/components/ui/buttons/button";
import SectionLabel from "@/components/ui/labels/section";
import Heading from "@/components/ui/typography/heading";
import Paragraph from "@/components/ui/typography/paragraph";
import CanHdx from "./assets/can-hdx.png";
import CanPolkadot from "./assets/can-polkadot.png";
import Star from "./assets/star.svg";
import Image from "next/image";

export default function LiquidityIncentivesCans() {
  return (
    <div className="container flex justify-between mx-auto gap-12">
      <div className="flex flex-col gap-2 pt-16 w-[50%]">
        <SectionLabel>Liquidity Incentives</SectionLabel>
        <div className="flex flex-col gap-8">
          <Heading size="large">
            Hydrate Your Summer with up to 260% APR
          </Heading>
          <Paragraph size="large" className="text-purple-dim">
            Start earning rewards by providing liquidity for one of the many
            incentivized assets on Hydration. The design of the Omnipool
            supports single-sided LPing. Start earning rewards after providing
            just a single asset.
          </Paragraph>
          <div className="flex gap-4">
            <Button role="primary" action={{ href: "/app" }}>
              Provide Liquidity
            </Button>
            <Button
              role="primary"
              fill="outline"
              className="border-pink"
              action={{ href: "/app" }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="relative w-[50%]">
        <Image
          className="absolute left-0 top-[110px] z-[5]"
          src={CanHdx}
          alt="Can HDX"
        />
        <Image
          className="absolute top-0 left-[84px]"
          src={Star}
          alt="Star"
          width={367}
          height={367}
        />
        <Image
          className="absolute right-0 top-10 z-[5]"
          src={CanPolkadot}
          alt="Can Polkadot"
        />
      </div>
    </div>
  );
}
