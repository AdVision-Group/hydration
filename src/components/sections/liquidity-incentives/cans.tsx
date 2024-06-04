"use client";

import Button from "@/components/ui/buttons/button";
import SectionLabel from "@/components/ui/labels/section";
import Heading from "@/components/ui/typography/heading";
import Paragraph from "@/components/ui/typography/paragraph";
import CanHdx from "./assets/can-hdx.png";
import CanPolkadot from "./assets/can-polkadot.png";
import Star from "./assets/star.svg";
import Image from "next/image";
import AnimateOnView from "@/animation/motion-section";
import { fadeIn } from "@/animation/variants";
import { motion, useAnimationControls } from "framer-motion";
import { useCallback } from "react";

export default function LiquidityIncentivesCans() {
  const controls = useAnimationControls();

  //   variants={{
  //    initial: { opacity: 0, y: 0, rotate: 0, scale: 0.4 },
  //    visible: {
  //      opacity: 1,
  //      rotate: 480,
  //      scale: 1,
  //      y: 0,
  //      transition: { duration: 1, delay: 1.2 },
  //    },
  //    infinite: {
  //      rotate: 360,
  //      scale: 0.5,
  //      y: 0,
  //      transition: { duration: 1, repeat: Infinity },
  //    },
  //  }}

  const animateStar = useCallback(() => {
    controls.start({
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { delay: 0.6, duration: 1, ease: "easeInOut" },
    });

    controls.start({
      rotate: 360,
      transition: { duration: 12, repeat: Infinity, ease: "linear" },
    });
  }, [controls]);

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between ~gap-8/12 ~pb-[5.438rem]/40 bg-beige-20-to-transparent-40 lg:bg-none">
      <div className="flex flex-col gap-2 pt-16 lg:w-[50%] container mx-auto">
        <SectionLabel>Liquidity Incentives</SectionLabel>
        <AnimateOnView element="div" className="flex flex-col gap-8">
          <Heading
            size="large"
            className="text-left"
            animationVariants={fadeIn()}
          >
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
        </AnimateOnView>
      </div>
      {/* TODO: we are probably not going to use clamp here to get the animation right */}
      <AnimateOnView
        element="div"
        threshold={0.6}
        className="relative lg:w-[38%] min-h-[250px] w-[] container mx-auto"
      >
        <motion.div
          className="absolute left-0 top-[110px] z-[5] ~w-[6.299rem]/[13.506rem] ~h-[10.919rem]/[23.409rem]"
          onAnimationStart={animateStar}
          variants={{
            initial: { x: -40, rotate: -18.2 },
            visible: {
              x: 0,
              rotate: 0,
              transition: { duration: 1, ease: "easeIn" },
            },
          }}
        >
          <Image className=" rotate-[14.2deg]" src={CanHdx} alt="Can HDX" />
        </motion.div>
        <motion.div
          className="absolute top-0  ~w-[10.699rem]/[22.938rem] ~h-[10.699rem]/[22.938rem] left-[5%] z-[4]"
          initial={{ opacity: 0, y: 0, rotate: 0, scale: 0.4 }}
          animate={controls}
        >
          <Image src={Star} alt="Star" />
        </motion.div>
        <motion.div
          className="absolute left-[42%] top-10 z-[5] ~w-[6.5rem]/[13.938rem] ~h-[11.369rem]/[24.375rem] -rotate-[15deg]"
          variants={{
            initial: { x: 40, rotate: 19 },
            visible: {
              opacity: 1,
              x: 0,
              rotate: 0,
              transition: { duration: 1, ease: "easeIn" },
            },
          }}
        >
          <Image
            className="-rotate-[15deg]"
            src={CanPolkadot}
            alt="Can Polkadot"
          />
        </motion.div>
      </AnimateOnView>
    </div>
  );
}
