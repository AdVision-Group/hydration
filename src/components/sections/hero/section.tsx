import Image from "next/image";
import HeroImage from "./assets/hero.png";
import Paragraph from "@/components/ui/typography/paragraph";
import Button from "@/components/ui/buttons/button";
import Socials from "@/components/footer/socials";
import SupportingBadge from "@/components/badges/supportingBadge";

export default function HeroSection() {
  return (
    <section className="relative min-h-[820px]">
      <Image
        src={HeroImage}
        alt="Pool"
        objectFit="cover"
        layout="fill"
        className="z-[5]"
      />
      <div className="container mx-auto flex justify-between relative z-10">
        <HeroSectionContent />
        <div className="absolute left-0 right-0 mx-auto container bottom-[2.375rem] flex justify-between">
          <Socials />
          <SupportingBadge />
        </div>
      </div>
    </section>
  );
}

function HeroSectionContent() {
  return (
    <div className="flex flex-col justify-center items-center w-[430px] mx-auto pt-[15.938rem] pb-[11.625rem] gap-8">
      <h1 className="font-gazpacho w-full">
        <span className="block text-[5.315rem] text-purple text-center font-medium leading-[4.76rem]">
          Finance
        </span>
        <span className="block text-[3rem] text-purple text-center italic leading-[4.76rem]">
          made
        </span>
        <span className="block text-[5.315rem] text-purple text-right font-medium justify-self-end leading-[4.76rem]">
          efficient
        </span>
      </h1>
      <Paragraph size="large" className="text-purple text-center">
        Hydration unites swaps, lending and the Hollar stablecoin under the roof
        of a scalable appchain.
      </Paragraph>
      <Button role="primary" decoration="arrow">
        Launch App
      </Button>
    </div>
  );
}
