import Arrow from "@/components/icons/arrow";
import Star from "@/components/icons/star";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonAction =
  | {
      onClick: () => {};
    }
  | {
      href: string;
      target?: "_blank";
    };

type Decoration = "arrow" | "star";

export type ButtonProps = {
  role: "primary" | "secondary" | "tertiary" | "footer";
  action?: ButtonAction;
  decoration?: Decoration;
  children: React.ReactNode;
};

export default function Button({
  role,
  action,
  decoration,
  children,
}: ButtonProps) {
  let colorClassName = "";

  if (role === "primary") {
    colorClassName = "bg-flamingo text-white-0";
  } else if (role === "secondary") {
    colorClassName = "bg-white-300 text-purple";
  } else if (role === "tertiary") {
    colorClassName = "bg-transparent text-purple";
  } else if (role === "footer") {
    colorClassName = "bg-purple text-pink shadow-pink-inset";
  }

  return (
    <ButtonWrapper action={action}>
      <button
        className={twMerge(
          colorClassName,
          "cursor-pointer rounded-lg px-5 py-3 font-geist text-base leading-6 font-normal"
        )}
      >
        <ButtonContent decoration={decoration}>{children}</ButtonContent>
      </button>
    </ButtonWrapper>
  );
}

function ButtonWrapper({
  action,
  children,
}: {
  action?: ButtonAction;
  children: React.ReactNode;
}) {
  if (action === undefined) {
    return children;
  }

  if ("href" in action) {
    return (
      <Link href={action.href} target={action.target}>
        {children}
      </Link>
    );
  }
}

function ButtonContent({
  children,
  decoration,
}: {
  children: React.ReactNode;
  decoration?: Decoration;
}) {
  if (decoration === "arrow") {
    return (
      <div className="flex items-center gap-2.5">
        {children} <Arrow />
      </div>
    );
  }

  if (decoration === "star") {
    return (
      <div className="flex items-center gap-2.5">
        <Star />
        {children}
        <Star />
      </div>
    );
  }

  return children;
}
