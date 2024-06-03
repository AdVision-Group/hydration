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
    <div className="flex flex-col-reverse lg:flex-row justify-between ~gap-8/12 ~pb-[5.438rem]/40 bg-beige-20-to-transparent-40 lg:bg-none">
      <div className="flex flex-col gap-2 pt-16 lg:w-[50%] container mx-auto">
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
      {/* TODO: we are probably not going to use clamp here to get the animation right */}
      <div className="relative lg:w-[50%] min-h-[250px] container mx-auto">
        <Image
          className="absolute left-0 top-[110px] z-[5] ~w-[6.299rem]/[13.506rem] ~h-[10.919rem]/[23.409rem] rotate-[14.2deg]"
          src={CanHdx}
          alt="Can HDX"
        />
        <Image
          className="absolute top-0 left-[84px] ~w-[10.699rem]/[22.938rem] ~h-[10.699rem]/[22.938rem]"
          src={Star}
          alt="Star"
        />
        <Image
          className="absolute right-0 top-10 z-[5] ~w-[6.5rem]/[13.938rem] ~h-[11.369rem]/[24.375rem] -rotate-[15deg]"
          src={CanPolkadot}
          alt="Can Polkadot"
        />
      </div>
    </div>
  );
}
