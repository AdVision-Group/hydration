import Button, { ButtonProps } from "@/components/ui/buttons/button";
import Heading from "@/components/ui/typography/heading";
import Paragraph from "@/components/ui/typography/paragraph";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

export type EfficientTradingCardProps = {
  icon: {
    src: StaticImport | string;
    alt: string;
  };
  title: string;
  description: string;
  buttons: React.ReactElement<ButtonProps>[];
  theme: "lavander" | "purple" | "blue" | "green";
  className?: string;
};

function getColorClassName(theme: EfficientTradingCardProps["theme"]) {
  let className = "";
  switch (theme) {
    case "lavander":
      className = "bg-lavender text-purple";
      break;
    case "purple":
      className = "bg-purple text-lavender";
      break;
    case "blue":
      className = "bg-blue text-white";
      break;
    case "green":
      className = "bg-green text-white";
      break;
  }

  return className;
}

export default function EfficientTradingCard({
  icon,
  title,
  description,
  buttons,
  theme,
  className,
}: EfficientTradingCardProps) {
  return (
    <article
      className={twMerge(
        "rounded-lg p-12 h-[441px]",
        getColorClassName(theme),
        className
      )}
    >
      <div className="relative h-full w-full">
        <div className="flex flex-col gap-4">
          <Image src={icon.src} alt={icon.alt} width={56} height={56} />
          <Heading
            size="medium"
            className={theme === "purple" ? "text-lavender" : "text-purple"}
          >
            {title}
          </Heading>
          <Paragraph
            size="large"
            className={twMerge(
              theme === "purple" ? "text-lavender" : "text-purple-dim",
              "mt-2"
            )}
          >
            {description}
          </Paragraph>
        </div>
        <div className="absolute bottom-0 left-0 flex gap-4 justify-end w-full">
          {buttons}
        </div>
      </div>
    </article>
  );
}
