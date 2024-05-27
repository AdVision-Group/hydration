import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
// having a default because of storybook
import LockIcon from "./assets/lock.svg";

export type DevsAndSecurityItemProps = {
  title: string;
  description: string;
  icon?: {
    image: StaticImport;
    alt: string;
  };
};

export default function DevsAndSecurityItem({
  title,
  description,
  icon = {
    image: LockIcon,
    alt: "Lock",
  },
}: DevsAndSecurityItemProps) {
  return (
    <div className="flex gap-5 p-2 bg-white-0 rounded-md border border-pink">
      <div className="rounded-sm bg-white-0 shadow-pink-inset w-[4.875rem] h-[6.125rem] flex justify-center items-center">
        <Image src={icon.image} alt={icon.alt} />
      </div>
      <div className="flex flex-col gap-4 max-w-[351px]">
        <h4 className="font-geist font-medium text-2xl text-purple leading-7 pt-2">
          {title}
        </h4>
        <p className="font-geist font-normal text-sm text-purple-dim leading-4 ">
          {description}
        </p>
      </div>
    </div>
  );
}
