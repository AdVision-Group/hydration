import { twMerge } from "tailwind-merge";

type DiamondProps = {
  className?: string;
};

export default function DiamondIcon({ className }: DiamondProps) {
  return (
    <div
      className={twMerge(
        "~w-1.5/2 ~h-1.5/2 bg-lavender transform rotate-45",
        className
      )}
    />
  );
}
