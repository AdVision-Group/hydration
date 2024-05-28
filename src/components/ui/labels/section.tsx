import Image from "next/image";
import Diamond from "./assets/diamond.svg";
import Caption from "../typography/caption";
import { twMerge } from "tailwind-merge";
import DiamondIcon from "./icons/diamond";

type Props = {
  children: string;
  captionClassName?: string;
};

export default function SectionLabel({ children, captionClassName }: Props) {
  return (
    <div className={twMerge("flex gap-[0.35rem] items-center")}>
      <DiamondIcon className={twMerge("text-lavender", captionClassName)} />
      <Caption className={twMerge("text-lavender", captionClassName)}>
        {children}
      </Caption>
    </div>
  );
}
