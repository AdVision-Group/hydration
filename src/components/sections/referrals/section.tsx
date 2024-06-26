"use client";

import Button from "@/components/ui/buttons/button";
import SectionLabel from "@/components/ui/labels/section";
import Heading from "@/components/ui/typography/heading";
import Paragraph from "@/components/ui/typography/paragraph";
import Image from "next/image";
import StarAsset from "./assets/star.svg";
import AnimateOnView from "@/animation/motion-section";
import { motion } from "framer-motion";
import { useState } from "react";
import ScrollAnchor from "@/components/scroll-anchor";

export default function ReferralsSection() {
  return (
    <AnimateOnView
      element="section"
      className="bg-beige pb-[6.563rem] rounded-b-[4rem] "
    >
      <div className="container mx-auto relative">
        <ScrollAnchor id="referrals" />
        <div className="max-w-[650px] mx-auto flex flex-col gap-8 items-center justify-center text-center relative z-[2]">
          <div className="flex flex-col items-center gap-2">
            <SectionLabel>Referrals</SectionLabel>
            <Heading size="medium">Refer traders and earn rewards</Heading>
          </div>
          <Paragraph size="large" className="text-purple-dim max-w-[558px]">
            Hydration is to be shared. Invite users and start accumulating
            referral rewards generated by their future trades. The more volume
            you help onboard, the higher rewards you will be earning.
          </Paragraph>
          <Button
            role="primary"
            action={{
              href: "https://app.hydration.net/referrals",
              target: "_blank",
            }}
            decoration="arrow"
          >
            Get Your Referral Code
          </Button>
        </div>
        <Stars />
      </div>
    </AnimateOnView>
  );
}
//120 265
function Stars() {
  return (
    <>
      <div className="hidden md:block">
        <Star top={120} size={62} left={0} />
        <Star top={0} size={116} left={73} />
        <Star top={301} size={36} left={222} />
        <Star top={263} size={62} right={320} />
        <Star top={160} size={116} right={95} />
        <Star top={0} size={36} right={86} />
        <Star top={258} size={36} right={-50} />
      </div>
      <div className="md:hidden">
        <Star top={-49} left={7} size={34} />
        <Star top={-49} left={47} size={64} />
        <Star top={120} left={11} size={20} />
        <Star top={-30} right={55} size={20} />
        <Star top={118} right={11} size={64} />
        <Star top={-30} right={51} size={34} />
        <Star top={378} right={65} size={34} />
        <Star top={378} right={25} size={20} />
      </div>
    </>
  );
}

type StarProps = {
  size: number;
  left?: number;
  right?: number;
  top: number;
};

function Star({ size, top, left, right }: StarProps) {
  const [delay] = useState(Math.random() * 2);
  return (
    <motion.div
      className="absolute"
      style={{
        top: `${top}px`,
        left: `${left}px`,
        right: `${right}px`,
      }}
      initial={{ scale: 0.6 }}
      animate={{
        scale: 1,
        transition: {
          delay: delay,
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
    >
      <Image
        src={StarAsset}
        alt="Star"
        style={{
          width: size,
          height: size,
        }}
      />
    </motion.div>
  );
}
