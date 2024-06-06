"use client";

import SectionLabel from "@/components/ui/labels/section";
import Heading from "@/components/ui/typography/heading";
import { bulletPoints } from "../data";
import Paragraph from "@/components/ui/typography/paragraph";
import AnimateOnView from "@/animation/motion-section";
import { fadeIn } from "@/animation/variants";

export default function EmpoweringDaosMobileContent() {
  return (
    <AnimateOnView threshold={0.2} className="bg-purple ~py-12/32">
      <div className="flex flex-col ~gap-12/40 container mx-auto">
        <div className="flex flex-col gap-4">
          <SectionLabel>Empowering DAOs</SectionLabel>
          <Heading
            size="medium"
            className="text-lavender"
            animationVariants={fadeIn()}
          >
            15+ projects and DAOs manage their liquidity using Hydration,
            including the Treasury of Polkadot.
          </Heading>
        </div>
        <div className="flex flex-col ~gap-8/12">
          {bulletPoints.map((bullet) => (
            <div key={bullet.description} className="flex flex-col gap-2">
              <Heading size="small" className="text-lavender">
                {bullet.title}
              </Heading>
              <Paragraph size="large" className="text-lavender">
                {bullet.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>
    </AnimateOnView>
  );
}
