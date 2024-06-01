import Badge from "./badge";
import Image from "next/image";
import PolkadotLogo from "./assets/polkadot.svg";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

export default function SecuredByBadge({ className }: Props) {
  return (
    <Badge className={twMerge("bg-transparent px-0", className)}>
      Secured by
      <Image className="py-2.5" src={PolkadotLogo} alt="polkadot logo" />
    </Badge>
  );
}
