"use client";

import Paragraph from "@/components/ui/typography/paragraph";
import Button from "@/components/ui/buttons/button";
import Socials from "@/components/footer/socials";
import SupportingBadge from "@/components/badges/supportingBadge";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import LetterByLetter from "@/components/animation/LetterByLetter";
import { delayChildren, staggerChildren } from "@/animation/variants";
import AnimateOnView from "@/animation/motion-section";
import useProgressiveImage from "@/hooks/useProgressiveImage";
import useScreenSize from "@/hooks/useScreenSize";

export default function HeroSection() {
  const bgImage = useProgressiveImage({
    src: "/hero.png",
    placeholderSrc: "/hero-placeholder.png",
  });
  return (
    <AnimateOnView className="relative lg:min-h-[820px]">
      <div
        className="bg-cover bg-[center_bottom]  bg-no-repeat lg:min-h-[820px]"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="container mx-auto flex justify-between relative z-10 lg:min-h-[820px]">
          <HeroSectionContent />
          <motion.div
            className="absolute left-0 right-0 mx-auto container bottom-4 lg:bottom-[2.375rem] gap-[3.25rem] lg:gap-0 flex flex-col items-center lg:flex-row justify-between"
            variants={delayChildren(0.75)}
          >
            <Socials />
            <SupportingBadge />
          </motion.div>
        </div>
      </div>
    </AnimateOnView>
  );
}

function HeroSectionContent() {
  const [index, setIndex] = useState(0);
  const [intervalStarted, setIntervalStarted] = useState(false);

  useEffect(() => {
    if (!intervalStarted) return;
    const intervalId = setInterval(() => setIndex((index) => index + 1), 4000);
    return () => clearTimeout(intervalId);
  }, [intervalStarted]);

  const { width: screenWidth } = useScreenSize();

  const texts = useMemo(() => {
    if (screenWidth < 1024) {
      return [
        { value: "efficient", translateX: 0 },
        { value: "simple", translateX: 0 },
      ];
    }
    return [
      { value: "efficient", translateX: 0 },
      { value: "simple", translateX: 0 },
      { value: "unstoppable", translateX: 0 },
    ];
  }, [screenWidth]);

  const LastWord = useCallback(() => {
    const current = texts[index % texts.length];
    return (
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ translateX: current.translateX }}
        className=" w-full justify-end font-gazpacho absolute inset-0 overflow-hidden"
      >
        {current.value.split("").map((char, index) => (
          <motion.span key={index} className="inline-block">
            {char}
          </motion.span>
        ))}
      </motion.div>
    );
  }, [index, texts]);

  return (
    <div className="flex flex-col justify-center items-center mx-auto ~pt-[10.5rem]/[15.938rem] pb-[13.438rem] lg:pb-[11.625rem] gap-8">
      <motion.section
        className="font-gazpacho w-full"
        variants={staggerChildren()}
        onAnimationComplete={() => {
          setIntervalStarted(true);
          //  setTimeout(() => setIndex(1), 500);
        }}
      >
        <div className="block mx-auto ~text-[4.375rem]/[5.315rem] text-purple text-center font-medium ~leading-[3.969rem]/[4.76rem] lg:w-[430px]">
          <LetterByLetter>Finance</LetterByLetter>
        </div>
        <span className="block mx-auto ~text-[2.5rem]/[3rem] text-purple text-center italic ~leading-[3.969rem]/[4.76rem] lg:w-[430px]">
          <LetterByLetter>made</LetterByLetter>
        </span>
        <span className="block ~text-[4.375rem]/[5.315rem] text-purple text-center  font-medium justify-self-end ~leading-[3.969rem]/[4.76rem] relative h-[1em] lg:w-[550px]">
          {intervalStarted ? (
            <AnimatePresence initial={false} mode="sync">
              <LastWord key={index} />
            </AnimatePresence>
          ) : (
            <div
              style={{
                translate: screenWidth < 1024 ? 0 : 0,
              }}
            >
              <LetterByLetter>{texts[0].value}</LetterByLetter>
            </div>
          )}
        </span>
      </motion.section>
      <Paragraph
        size="large"
        className="text-purple text-center max-w-[430px] lg:w-[430px]"
      >
        Hydration unites swaps, lending and the Hollar stablecoin under the roof
        of a scalable appchain.
      </Paragraph>
      <Button
        role="primary"
        decoration="arrow"
        action={{ href: "https://app.hydration.net", target: "_blank" }}
      >
        Launch App
      </Button>
    </div>
  );
}
