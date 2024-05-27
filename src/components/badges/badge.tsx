import { twMerge } from "tailwind-merge";

export type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className }: BadgeProps) {
  return (
    <div
      className={twMerge(
        "flex gap-2 text-purple rounded-sm bg-white-300 px-4 uppercase font-geist font-medium items-center text-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
