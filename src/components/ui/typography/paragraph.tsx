import { twMerge } from "tailwind-merge";

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
  size: "large" | "small";
};

export default function Paragraph({
  children,
  className,
  size,
}: ParagraphProps) {
  if (size === "large") {
    return (
      <p
        className={twMerge(
          "font-geist font-normal text-lg leading-snug text-purple",
          className
        )}
      >
        {children}
      </p>
    );
  }

  return (
    <p
      className={twMerge(
        "font-geist font-normal text-sm leading-tight text-purple",
        className
      )}
    >
      {children}
    </p>
  );
}
