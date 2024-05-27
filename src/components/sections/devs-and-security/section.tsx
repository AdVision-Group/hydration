import Image from "next/image";
import PoolImage from "./assets/pool.png";
import SectionLabel from "@/components/ui/labels/section";
import DevsAndSecurityItem, { DevsAndSecurityItemProps } from "./item";
import LockIcon from "./assets/lock.svg";
import CodeIcon from "./assets/code.svg";
import GithubIcon from "./assets/github.svg";
import DocumentIcon from "./assets/document.svg";

const items: DevsAndSecurityItemProps[] = [
  {
    title: "Hydration security",
    description: "Find and report vulnerabilities, receive generous rewards.",
    icon: {
      image: LockIcon,
      alt: "Lock",
    },
  },
  {
    title: "SDK for frontend applications",
    description:
      "Utilize our SDK to streamline frontend development and enhance user experiences.",
    icon: {
      image: CodeIcon,
      alt: "Code",
    },
  },
  {
    title: "Github",
    description:
      "Explore our open-source repository for collaborative development and access to essential resources.",
    icon: {
      image: GithubIcon,
      alt: "Github",
    },
  },
  {
    title: "Developer docs",
    description:
      "Access comprehensive documentation for seamless integration and optimization of our APIs.",
    icon: {
      image: DocumentIcon,
      alt: "Document",
    },
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
        className="-z-10"
      />
      <div className="pt-[16.938rem] flex gap-6 container z-0 flex-col mx-auto items-center max-w-[550px]">
        <SectionLabel>Developers and Security</SectionLabel>
        <h2 className="font-gazpacho font-bold text-5xl leading-[3.3rem] tracking-tight text-center">
          Help build the <br /> future of finance
        </h2>
        <p className="font-geist font-normal text-lg leading-6 text-center text-white-300">
          Hydration provides the liquidity layer which empowers developers to
          build the financial apps of tomorrow.
        </p>
      </div>
      <div className="pt-[4.375rem] pb-[16.938rem] flex flex-col gap-4 items-center">
        {items.map((item) => (
          <DevsAndSecurityItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
