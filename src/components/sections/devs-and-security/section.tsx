import Image from "next/image";
import PoolImage from "./assets/pool.png";
import SectionLabel from "@/components/ui/labels/section";
import DevsAndSecurityItem, { DevsAndSecurityItemProps } from "./item";

import Heading from "@/components/ui/typography/heading";
import Paragraph from "@/components/ui/typography/paragraph";
import LockIcon from "./icons/lock";
import CodeIcon from "./icons/code";
import GithubIcon from "./icons/github";
import DocumentIcon from "./icons/document";

const items: DevsAndSecurityItemProps[] = [
  {
    title: "Hydration security",
    description: "Find and report vulnerabilities, receive generous rewards.",
    icon: LockIcon,
  },
  {
    title: "SDK for frontend applications",
    description:
      "Utilize our SDK to streamline frontend development and enhance user experiences.",
    icon: CodeIcon,
  },
  {
    title: "Github",
    description:
      "Explore our open-source repository for collaborative development and access to essential resources.",
    icon: GithubIcon,
  },
  {
    title: "Developer docs",
    description:
      "Access comprehensive documentation for seamless integration and optimization of our APIs.",
    icon: DocumentIcon,
  },
];

export default function DevsAndSecuritySection() {
  return (
    <section className="relative w-full">
      <Image
        src={PoolImage}
        alt="Pool"
        objectFit="cover"
        layout="fill"
        className="z-[5]"
      />
      <div className="pt-[16.938rem] flex gap-6 container flex-col mx-auto items-center max-w-[550px] relative z-10">
        <SectionLabel captionClassName="text-blue">
          Developers and Security
        </SectionLabel>
        <Heading className="text-center text-white" size="large">
          Help build the <br /> future of finance
        </Heading>
        <Paragraph size="large" className="text-white text-center">
          Hydration provides the liquidity layer which empowers developers to
          build the financial apps of tomorrow.
        </Paragraph>
      </div>
      <div className="pt-[4.375rem] pb-[16.938rem] flex flex-col gap-4 items-center z-10 relative">
        {items.map((item) => (
          <DevsAndSecurityItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
