import { ReactNode } from "react";
import { Variants, motion } from "framer-motion";

export type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  element?: "section" | "div";
  variants?: Variants;
  style?: React.CSSProperties;
};

export default function AnimateOnView({
  children,
  className,
  element = "section",
  variants,
  style,
}: MotionSectionProps) {
  const props = {
    className,
    initial: "initial",
    whileInView: "visible",
    viewport: { once: true, amount: 0.5 },
    variants,
    style,
  };
  if (element === "div") {
    return <motion.div {...props}>{children}</motion.div>;
  }
  return <motion.section {...props}>{children}</motion.section>;
}
