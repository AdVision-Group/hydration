import { twMerge } from "tailwind-merge";

type WithLeftDashProps = {
  children: React.ReactNode;
  className?: string;
  dashClassName?: string;
};

export default function WithLeftDash({
  children,
  className,
  dashClassName,
}: WithLeftDashProps) {
  return (
    <div
      className={twMerge(
        "relative items-baseline  flex gap-[0.4375rem]",
        className
      )}
    >
      <div
        className={twMerge(
          "h-[1px] min-w-2 bg-[#E53E7640] -translate-y-[0.35rem]",
          dashClassName
        )}
      />
      {children}
    </div>
  );
}
