"use client";

import Heading from "@/components/ui/typography/heading";
import ScrollLock from "../scroll-lock";
import SectionLabel from "@/components/ui/labels/section";
import { bulletPoints } from "../data";
import BulletPointRow from "./bullet-point-row";
import AnimateOnView from "@/animation/motion-section";

export default function EmpoweringDaosDesktopContent() {
  return (
    <ScrollLock
      durationPx={2000}
      render={(progress) => (
        <AnimateOnView className="bg-purple w-full h-screen">
          <div className="container py-[7.5rem] flex flex-col gap-[7.5rem] h-full mx-auto">
            <div className="flex flex-col ~gap-12/[7.5rem] h-full">
              <div className="flex flex-col gap-4">
                <SectionLabel>Empowering DAOs</SectionLabel>
                <Heading size="medium" className="max-w-[1066px] text-lavender">
                  15+ projects and DAOs manage their liquidity using Hydration,
                  including the Treasury of Polkadot
                </Heading>
              </div>
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
        </AnimateOnView>
      )}
    />
  );
}
