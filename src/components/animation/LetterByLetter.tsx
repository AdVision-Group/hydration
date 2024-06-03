import { fadeUp, staggerChildren } from "@/animation/variants";
import { motion } from "framer-motion";
import React, { Fragment, ReactNode } from "react";

type LetterByLetterProps = {
  children: ReactNode;
};

export default function LetterByLetter({ children }: LetterByLetterProps) {
  // Function to handle recursive children parsing
  const parseChildren = (element) => {
    if (typeof element === "string") {
      return element.split("").map((letter, index) => (
        <motion.span className="inline-block" key={index} variants={fadeUp()}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ));
    } else if (Array.isArray(element)) {
      return element.map((child, index) => (
        <Fragment key={index}>{parseChildren(child)}</Fragment>
      ));
    } else {
      return element;
    }
  };

  return (
    <motion.div variants={staggerChildren(0.05)}>
      {React.Children.map(children, (child) => (
        <Fragment>{parseChildren(child)}</Fragment>
      ))}
    </motion.div>
  );
}
