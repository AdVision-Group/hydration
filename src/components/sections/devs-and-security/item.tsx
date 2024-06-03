import React from "react";
import Title from "@/components/ui/typography/title";
import Paragraph from "@/components/ui/typography/paragraph";
import { motion } from "framer-motion";
import { fadeUp } from "@/animation/variants";

export type DevsAndSecurityItemProps = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

export default function DevsAndSecurityItem({
  title,
  description,
  icon: Icon,
}: DevsAndSecurityItemProps) {
  return (
    <motion.div
      variants={fadeUp()}
      className="flex justify-between gap-5 p-2 bg-white rounded-md border border-blue group"
    >
      <div className="rounded-sm bg-white shadow-blue-inset min-w-[4.875rem] w-[4.875rem] md:h-[6.125rem] flex justify-center items-center">
        <Icon className="transition-all text-blue group-hover:text-purple" />
      </div>
      <div className="flex flex-col ~gap-3/4 max-w-[351px]">
        <Title size="small" className="font-geist md:font-gazpacho">
          {title}
        </Title>
        <Paragraph className="text-purple-dim" size="small">
          {description}
        </Paragraph>
      </div>
    </motion.div>
  );
}
