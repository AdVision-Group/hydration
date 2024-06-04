"use client";

import Image from "next/image";
import HeroImage from "./assets/hero.png";
import Paragraph from "@/components/ui/typography/paragraph";
import Button from "@/components/ui/buttons/button";
import Socials from "@/components/footer/socials";
import SupportingBadge from "@/components/badges/supportingBadge";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import LetterByLetter from "@/components/animation/LetterByLetter";
import { delayChildren, staggerChildren } from "@/animation/variants";
import AnimateOnView from "@/animation/motion-section";
import TextTransition from "react-text-transition";

export default function HeroSection() {
  return (
    <AnimateOnView className="relative lg:min-h-[820px]">
      <Image
        src={HeroImage}
        alt="Pool"
        objectFit="cover"
        layout="fill"
        className="z-[5]"
      />
      <div className="container mx-auto flex justify-between relative z-10">
        <HeroSectionContent />
        <motion.div
          className="absolute left-0 right-0 mx-auto container bottom-4 lg:bottom-[2.375rem] gap-[3.25rem] lg:gap-0 flex flex-col items-center lg:flex-row justify-between"
          variants={delayChildren(0.75)}
        >
          <Socials />
          <SupportingBadge />
        </motion.div>
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

  const texts = useMemo(() => ["efficient", "secure", "scalable"], []);

  const LastWord = useCallback(
    () => (
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-right w-full justify-end font-gazpacho absolute inset-0 overflow-hidden"
      >
        {texts[index % texts.length].split("").map((char, index) => (
          <span key={index} className="inline-block">
            {char}
          </span>
        ))}
      </motion.div>
    ),
    [index, texts]
  );

  return (
    <div className="flex flex-col justify-center items-center w-[430px] mx-auto ~pt-[10.5rem]/[15.938rem] pb-[13.438rem] lg:pb-[11.625rem] gap-8">
      <motion.section
        className="font-gazpacho w-full"
        variants={staggerChildren()}
        onAnimationComplete={() => {
          setIntervalStarted(true);
          //  setTimeout(() => setIndex(1), 500);
        }}
      >
        <div className="block ~text-[4.375rem]/[5.315rem] text-purple text-center font-medium ~leading-[3.969rem]/[4.76rem]">
          <LetterByLetter>Finance</LetterByLetter>
        </div>
        <span className="block ~text-[2.5rem]/[3rem] text-purple text-center italic ~leading-[3.969rem]/[4.76rem]">
          <LetterByLetter>made</LetterByLetter>
        </span>
        <span className="block ~text-[4.375rem]/[5.315rem] text-purple text-center lg:text-right font-medium justify-self-end ~leading-[3.969rem]/[4.76rem] relative h-[1em]">
          {intervalStarted ? (
            <AnimatePresence initial={false} mode="sync">
              <LastWord key={index} />
            </AnimatePresence>
          ) : (
            <LetterByLetter>{texts[0]}</LetterByLetter>
          )}
        </span>
      </motion.section>
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
