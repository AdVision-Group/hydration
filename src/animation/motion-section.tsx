import { ReactNode } from "react";
import { motion } from "framer-motion";

export type MotionSectionProps = {
  children: ReactNode;
  className?: string;
};

export default function MotionSection({
  children,
  className,
}: MotionSectionProps) {
  return (
    <motion.section
      className={className}
      initial="initial"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.section>
  );
}
