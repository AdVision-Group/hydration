import Caption from "../typography/caption";
import { twMerge } from "tailwind-merge";
import DiamondIcon from "./icons/diamond";

type Props = {
  children: string;
  captionClassName?: string;
};

export default function SectionLabel({ children, captionClassName }: Props) {
  return (
    <div className={twMerge("flex ~gap-1.5/2 items-center")}>
      <DiamondIcon className={twMerge("text-lavender", captionClassName)} />
      <Caption
        className={twMerge("text-lavender ~text-sm/base", captionClassName)}
      >
        {children}
      </Caption>
    </div>
  );
}
