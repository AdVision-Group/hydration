import Badge from "./badge";
import Image from "next/image";
import PolkadotLogo from "./assets/polkadot.svg";

export default function SecuredByBadge() {
  return (
    <Badge>
      Secured by
      <Image className="py-2.5" src={PolkadotLogo} alt="polkadot logo" />
    </Badge>
  );
}
