import { twMerge } from "tailwind-merge";

type CaptionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Caption({ children, className }: CaptionProps) {
  return (
    <p
      className={twMerge(
        "font-geist font-semibold text-base leading-tight text-purple uppercase",
        className
      )}
    >
      {children}
    </p>
  );
}
