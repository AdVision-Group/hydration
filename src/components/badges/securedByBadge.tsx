import Badge from "./badge";
import Image from "next/image";
import PolkadotLogo from "./assets/polkadot.svg";

export default function SecuredByBadge() {
  return (
    <Badge className="bg-transparent px-0">
      Secured by
      <Image className="py-2.5" src={PolkadotLogo} alt="polkadot logo" />
    </Badge>
  );
}
