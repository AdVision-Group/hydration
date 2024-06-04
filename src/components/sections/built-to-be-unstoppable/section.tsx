"use client";

import SectionLabel from "@/components/ui/labels/section";
import Heading from "@/components/ui/typography/heading";
import BuiltToBeUnstoppableDesktopContent from "./desktop/content";
import BuiltToBeUnstoppableMobileContent from "./mobile/content";
import AnimateOnView from "@/animation/motion-section";
import { fadeIn } from "@/animation/variants";
import ScrollAnchor from "@/components/scroll-anchor";

export default function BuiltToBeUnstoppableSection() {
  return (
    <AnimateOnView className="bg-white ~py-12/[7.5rem]">
      <div className="container mx-auto flex flex-col ~gap-12/[9.375rem] relative">
        <ScrollAnchor id="governance" />
        <div className="flex flex-col gap-6">
          <SectionLabel>Built to be Unstoppable</SectionLabel>
          <Heading
            size="large"
            className="max-w-[666px]"
            animationVariants={fadeIn()}
          >
            Hydration is a fully decentralized Protocol run by on-chain
            governance
          </Heading>
        </div>
        <BuiltToBeUnstoppableDesktopContent />
        <BuiltToBeUnstoppableMobileContent />
      </div>
    </AnimateOnView>
  );
}
