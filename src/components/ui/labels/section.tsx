import Image from "next/image";
import Diamond from "./assets/diamond.svg";
import Caption from "../typography/caption";

export default function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex gap-[0.35rem] items-center">
      <Image src={Diamond} alt="Diamond" />
      <Caption className="text-lavender">{children}</Caption>
    </div>
  );
}
