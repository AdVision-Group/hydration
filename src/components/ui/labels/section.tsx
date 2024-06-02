import Caption from "../typography/caption";
import { twMerge } from "tailwind-merge";
import DiamondIcon from "./icons/diamond";

type Props = {
  children: string;
  captionClassName?: string;
  iconClassName?: string;
};

export default function SectionLabel({
  children,
  captionClassName,
  iconClassName,
}: Props) {
  return (
    <div className={twMerge("flex ~gap-1.5/2 items-center")}>
      <DiamondIcon className={twMerge("bg-lavender", iconClassName)} />
      <Caption
        className={twMerge("text-lavender ~text-sm/base", captionClassName)}
      >
        {children}
      </Caption>
    </div>
  );
}
