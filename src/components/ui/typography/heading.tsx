import { twMerge } from "tailwind-merge";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  size: "small" | "medium" | "large";
};

export default function Heading({ children, className, size }: HeadingProps) {
  if (size === "small") {
    return (
      <h4
        className={twMerge(
          "font-gazpacho font-medium ~text-2xl/3xl leading-tight text-purple",
          className
        )}
      >
        {children}
      </h4>
    );
  }

  if (size === "large") {
    return (
      <h2
        className={twMerge(
          "font-gazpacho font-medium ~text-3xl/5xl leading-tight text-purple",
          className
        )}
      >
        {children}
      </h2>
    );
  }

  return (
    <h3
      className={twMerge(
        "font-gazpacho font-bold ~text-3xl/4xl leading-tight text-purple",
        className
      )}
    >
      {children}
    </h3>
  );
}
