import Image from "next/image";
import Logo from "./assets/logo.svg";

export default function Divider() {
  return (
    <div className="h-[2px] bg-pink relative">
      {/* Align to the middle of the line */}
      <Image
        src={Logo}
        alt="divider"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
