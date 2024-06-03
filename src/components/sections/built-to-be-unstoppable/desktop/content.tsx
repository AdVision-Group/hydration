import { staggerChildren } from "@/animation/variants";
import { builtToBeUnstoppableItems } from "../data";
import Divider from "./divider";
import Item from "./item";
import { motion } from "framer-motion";

export default function BuiltToBeUnstoppableDesktopContent() {
  return (
    <div className="hidden lg:block">
      <Divider />
      <motion.div
        className="grid grid-cols-4 gap-2"
        variants={staggerChildren(0.5)}
      >
        {builtToBeUnstoppableItems.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </motion.div>
    </div>
  );
}
