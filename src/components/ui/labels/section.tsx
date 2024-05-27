import Image from "next/image";
import Diamond from "./assets/diamond.svg";

export default function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex gap-[0.35rem] items-center">
      <Image src={Diamond} alt="Diamond" />
      <h4 className="font-geist font-semibold text-base leading-5 text-pink uppercase">
        {children}
      </h4>
    </div>
  );
}
