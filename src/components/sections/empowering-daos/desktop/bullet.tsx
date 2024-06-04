import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { fadeUp } from "@/animation/variants";

type BulletProps = {
  active: boolean;
};

export default function Bullet({ active }: BulletProps) {
  return (
    <motion.div
      variants={fadeUp()}
      className={twMerge(
        "flex transition rounded-full w-3 h-3",
        active ? "bg-pink" : "bg-[#816093]"
      )}
    />
  );
}
