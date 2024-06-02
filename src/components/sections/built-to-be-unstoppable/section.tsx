import SectionLabel from "@/components/ui/labels/section";
import Heading from "@/components/ui/typography/heading";
import BuiltToBeUnstoppableDesktopContent from "./desktop/content";
import Image from "next/image";
import Logo from "./assets/logo.svg";
import Paragraph from "@/components/ui/typography/paragraph";
import Title from "@/components/ui/typography/title";
import { builtToBeUnstoppableItems } from "./data";
import { twMerge } from "tailwind-merge";

export default function BuiltToBeUnstoppableSection() {
  return (
    <section className="bg-white ~py-12/[7.5rem]">
      <div className="container mx-auto flex flex-col ~gap-12/[9.375rem]">
        <div className="flex flex-col gap-6">
          <SectionLabel>Built to be Unstoppable</SectionLabel>
          <Heading size="large" className="max-w-[666px]">
            Hydration is a fully decentralized Protocol run by on-chain
            governance
          </Heading>
        </div>
        <BuiltToBeUnstoppableDesktopContent />
        <BuiltToBeUnstoppableMobileContent />
      </div>
    </section>
  );
}

function BuiltToBeUnstoppableMobileContent() {
  const lastItem =
    builtToBeUnstoppableItems[builtToBeUnstoppableItems.length - 1];
  return (
    <div className="lg:hidden mt-[39.5px]">
      <div className="flex flex-col gap-8 border-l border-[#E53E7640]">
        <WithLeftDash
          className="-translate-y-[39.5px] -mb-[39.5px]"
          dashClassName="-translate-y-[38px]"
        >
          <Image src={Logo} width={79} height={79} alt="logo" />
        </WithLeftDash>
        {builtToBeUnstoppableItems.slice(0, 3).map((item, index) => (
          <Item key={index} {...item} />
        ))}
        <WithLeftDash className="translate-y-[0.67rem] -mt-[0.67rem]">
          <Title size="small">{lastItem.title}</Title>
        </WithLeftDash>
      </div>
      <Paragraph size="large" className="mt-4 ml-4">
        {lastItem.description}
      </Paragraph>
    </div>
  );
}

type ItemProps = {
  title: string;
  description: string;
};

function Item({ title, description }: ItemProps) {
  return (
    <WithLeftDash>
      <div className="flex flex-col gap-2">
        <Title size="small">{title}</Title>
        <Paragraph size="large">{description}</Paragraph>
      </div>
    </WithLeftDash>
  );
}

function WithLeftDash({
  children,
  className,
  dashClassName,
}: {
  children: React.ReactNode;
  className?: string;
  dashClassName?: string;
}) {
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
