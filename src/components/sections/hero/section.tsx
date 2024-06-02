import Image from "next/image";
import HeroImage from "./assets/hero.png";
import Paragraph from "@/components/ui/typography/paragraph";
import Button from "@/components/ui/buttons/button";
import Socials from "@/components/footer/socials";
import SupportingBadge from "@/components/badges/supportingBadge";

export default function HeroSection() {
  return (
    <section className="relative lg:min-h-[820px]">
      <Image
        src={HeroImage}
        alt="Pool"
        objectFit="cover"
        layout="fill"
        className="z-[5]"
      />
      <div className="container mx-auto flex justify-between relative z-10">
        <HeroSectionContent />
        <div className="absolute left-0 right-0 mx-auto container bottom-4 lg:bottom-[2.375rem] gap-[3.25rem] lg:gap-0 flex flex-col items-center lg:flex-row justify-between">
          <Socials />
          <SupportingBadge />
        </div>
      </div>
    </section>
  );
}

function HeroSectionContent() {
  return (
    <div className="flex flex-col justify-center items-center w-[430px] mx-auto ~pt-[10.5rem]/[15.938rem] pb-[13.438rem] lg:pb-[11.625rem] gap-8">
      <h1 className="font-gazpacho w-full">
        <span className="block ~text-[4.375rem]/[5.315rem] text-purple text-center font-medium ~leading-[3.969rem]/[4.76rem]">
          Finance
        </span>
        <span className="block ~text-[2.5rem]/[3rem] text-purple text-center italic ~leading-[3.969rem]/[4.76rem]">
          made
        </span>
        <span className="block ~text-[4.375rem]/[5.315rem] text-purple text-center lg:text-right font-medium justify-self-end ~leading-[3.969rem]/[4.76rem]">
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
