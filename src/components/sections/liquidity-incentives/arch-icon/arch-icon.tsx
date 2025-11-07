import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { twMerge } from "tailwind-merge";

type ArchIconProps = {
  icon: StaticImport;
  background: StaticImport;
  border?: StaticImport;
  iconClassName?: string;
};

export default function ArchIcon({
  icon,
  background,
  border,
  iconClassName,
}: ArchIconProps) {
  return (
    <figure className="relative aspect-square">
      <Image
        src={background}
        alt="Background"
        className="absolute inset-0 w-full h-full"
      />

      <Image
        src={icon}
        alt="Icon"
        className={twMerge(
          "absolute w-[70%] h-[70%] transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2",
          iconClassName
        )}
      />
      {border && (
        <Image
          src={border}
          alt="Border"
          className="absolute inset-0 animate-spin duration w-full h-full"
          style={{ animationDuration: "10s", scale: 0.93 }}
        />
      )}
    </figure>
  );
}
