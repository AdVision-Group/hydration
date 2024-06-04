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
import {
  cubicBezier,
  motion,
  useAnimationControls,
  useTime,
} from "framer-motion";
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
      transition: {
        delay: 0.7,
        duration: 0.4,
        ease: cubicBezier(0.5, 0, 0.5, 1),
      },
    });

    controls.start({
      rotate: 360,
      transition: { duration: 12, repeat: Infinity, ease: "linear" },
    });
  }, [controls]);

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between ~gap-8/12 ~pb-[5.438rem]/40 bg-beige-20-to-transparent-40 lg:bg-none  mx-auto">
      <div className="flex flex-col gap-2 pt-16 lg:w-[50%]  mx-auto">
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
        className="relative lg:w-[50%] min-h-[250px] w-[] container mx-auto"
      >
        <motion.div
          className="absolute left-0 top-[110px] z-[5] ~w-[6.299rem]/[13.506rem] ~h-[10.919rem]/[23.409rem]"
          style={{
            offsetPath: `path(
               "m74.5,156.5c1,0 1.29289,0.29289 2,1c1.41422,1.41422 2.69344,0.4588 4,1c1.84776,0.76537 3.07612,0.61731 4,1c1.30656,0.5412 2.07612,0.61731 3,1c1.30656,0.5412 1.69344,1.4588 3,2c0.92388,0.38269 2.15224,0.23463 4,1c1.30656,0.5412 2.69344,1.4588 4,2c0.92388,0.38269 3.07612,0.61731 4,1c1.30656,0.5412 2.82375,1.48625 5,2c0.97325,0.22975 2.82375,1.48625 5,2c0.97325,0.22975 3.02675,0.77025 4,1c2.17625,0.51375 4.0535,1.5405 6,2c2.17625,0.51375 3.186,0.69255 5,2c1.14726,0.8269 2.82375,1.48625 5,2c0.97325,0.22975 3.02675,0.77025 4,1c2.17625,0.51375 3,1 4,1c1,0 2.69344,0.4588 4,1c0.92387,0.38269 1.82375,0.48625 4,1c1.9465,0.4595 4,1 5,1c2,0 3,0 4,0c2,0 3,0 4,0c2,0 2,0 3,0c0,0 1,0 1,0c0,0 1,0 1,0c1,0 2,0 3,0c1,0 1,0 3,0c0,0 1,0 2,0c0,0 1,0 1,0c0,-1 1,-1 1,-1c1,0 2,-1 3,-1c0,0 1.29289,0.70711 2,0c0.70711,-0.70711 1,-1 1,-1c1,-1 2,-1 2,-1c1,-1 1.29289,-0.29289 2,-1c0.70711,-0.70711 1,-1 1,-1c0,0 0,-1 1,-1c0,0 0,0 1,0c0,0 0.29289,-0.29289 1,-1c0.70711,-0.70711 1,0 1,0c1,0 1,-1 1,-1c1,0 1,0 1,0c1,0 1,0 2,0c0,0 0,-1 0,-1c0,0 0.29289,0.70711 1,0c0.70711,-0.70711 1,-1 1,-1c0,0 1,-1 1,-1l0,0"
            )`,
            offsetRotate: "0deg",
          }}
          onAnimationStart={animateStar}
          variants={{
            initial: { offsetDistance: "0%", rotate: 10 },
            visible: {
              offsetDistance: "100%",
              rotate: 0,
              transition: { duration: 1, ease: cubicBezier(0.5, 0, 0.5, 1) },
            },
          }}
        >
          <Image className=" rotate-[14.2deg]" src={CanHdx} alt="Can HDX" />
        </motion.div>
        <motion.div
          className="absolute top-0  ~w-[10.699rem]/[22.938rem] ~h-[10.699rem]/[22.938rem] left-[25%] z-[4]"
          initial={{ opacity: 0, y: 0, rotate: 0, scale: 0.4 }}
          animate={controls}
        >
          <Image src={Star} alt="Star" />
        </motion.div>
        <motion.div
          className="absolute left-[22%] top-10 z-[5] ~w-[6.5rem]/[13.938rem] ~h-[11.369rem]/[24.375rem] "
          style={{
            offsetPath: `path(
               "m414.5,213.5c0,0 0,1 0,2c0,0 0,1 0,2c0,0 -0.29291,0.29289 -1,1c-0.70709,0.70711 0,2 0,3c0,1 -1,2 -1,3c0,1 0,1 -1,2c0,0 -1,1 -1,1c0,0 -1,1 -1,2c0,1 0.38269,1.07613 0,2c-0.5412,1.30656 -1,1 -1,1c0,2 -0.61731,3.07613 -1,4c-0.5412,1.30656 -1.4588,1.69344 -2,3c-0.38269,0.92387 -1,2 -1,3c0,1 -0.4588,1.69344 -1,3c-0.38269,0.92387 -0.23462,2.15224 -1,4c-0.5412,1.30656 -2.4588,0.69344 -3,2c-0.38269,0.92387 -1.4588,2.69344 -2,4c-0.38269,0.92389 -0.29291,1.29291 -1,2c-0.70709,0.70709 -1,2 -1,2c-1,0 -1,1 -1,1c-1,0 -1,1 -2,1c-1,0 -1,1 -1,1c-1,1 -2.07611,1.61731 -3,2c-1.30655,0.5412 -3,2 -3,2c-1,1 -2,1 -3,2c0,0 -0.29291,0.29291 -1,1c-0.70709,0.70709 -2,1 -2,1c-1,0 -2,1 -3,1c-1,0 -1,1 -2,1c0,0 -2,1 -2,1c-1,0 -2,0 -3,1c0,0 -1,0 -1,0c0,1 -1.07611,0.61731 -2,1c-1.30655,0.5412 -2,1 -3,2c0,0 -1,0 -2,0c-1,0 -2.29291,-0.70709 -3,0c-0.70709,0.70709 -1,1 -1,1c-1,0 -1,0 -2,1c0,0 -1,0 -2,0c0,0 -1,1 -1,1c-1,0 -2,0 -3,0c0,0 -1.07611,-0.38269 -2,0c-1.30655,0.5412 -1,1 -2,1c-1,0 -1,0 -3,0c0,0 -1,0 -1,0c-1,0 -2,0 -2,0c-1,1 -2,1 -3,1c-1,0 -1,0 -2,0c0,0 0,0 -2,0c0,0 0,0 -1,0c-1,0 -2,0 -3,0c-1,0 -2,0 -2,0c-1,0 -2,0 -3,0c-1,0 -2.07611,0.38269 -3,0c-1.30655,-0.5412 -1,-1 -2,-1c0,0 -1,0 -2,0c0,0 -1,0 -2,0c0,0 -1,-1 -2,-1c0,0 -1,0 -1,0c0,0 0,0 -1,0c0,0 0,0 0,0c-1,0 -1,0 -1,0c0,0 -1,0 -1,0c0,-1 -1,-1 -1,-1c0,0 -1,0 -1,0c0,0 0,0 0,0c-1,0 -1,0 -1,0c-1,-1 -1,-1 -1,-1c0,0 -1,0 -1,0c-1,0 -1,-1 -1,-1c0,0 -1,0 -1,0c-1,0 -0.29291,-0.29291 -1,-1c-0.70709,-0.70709 -1,0 -1,0c0,0 0,0 -1,0l0,0"
              )`,
            offsetRotate: "0deg",
          }}
          variants={{
            initial: { offsetDistance: "0%", rotate: -10 },
            visible: {
              offsetDistance: "100%",
              rotate: 0,
              transition: { duration: 1, ease: cubicBezier(0.5, 0, 0.5, 1) },
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
