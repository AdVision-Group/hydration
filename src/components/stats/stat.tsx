"use client";
import useAnimatedValue from "@/hooks/useAnimatedValue";
import { twMerge } from "tailwind-merge";

export type StatProps = {
  title: string;
  mobileTitle?: string;
  tagline?: string;
  animated?: boolean;
  className?: string;
  value: {
    value: number;
    prefix?: string;
  };
};

export function Stat({
  title,
  value,
  tagline,
  animated = true,
  className,
  mobileTitle,
}: StatProps) {
  const animatedValue = useAnimatedValue({
    initialValue: 0,
    finalValue: value.value,
    duration: 2000,
  });
  return (
    <div className={twMerge("flex flex-col gap-0", className)}>
      <div className="flex gap-3.5">
        <p className="font-geist font-normal text-sm leading-4 text-lavender">
          <span className="hidden lg:inline">{title}</span>
          <span className="lg:hidden">{mobileTitle ?? title}</span>
        </p>
        {tagline && (
          <p className="px-1.5 py-1 font-inter uppercase font-semibold text-purple bg-lavender leading-3 text-2xs rounded-2xl">
            {tagline}
          </p>
        )}
      </div>
      <p className="font-gazpacho font-bold text-[2rem] leading-10 text-lavender">
        {value.prefix}
        {animated ? animatedValue : value.value}
      </p>
    </div>
  );
}
