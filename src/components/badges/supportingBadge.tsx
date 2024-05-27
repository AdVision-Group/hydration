import Image from "next/image";
import Badge from "./badge";

import MetaMaskLogo from "./assets/metamask.svg";
import NovaLogo from "./assets/nova.png";
import SubwalletLogo from "./assets/subwallet.svg";
import TalismanLogo from "./assets/talisman.svg";

export default function SupportingBadge() {
  return (
    <Badge className="pr-1">
      Supporting <Icons />
    </Badge>
  );
}

function Icons() {
  return (
    <div className="flex gap-1 py-1 pl-1">
      <Image width={32} height={32} src={MetaMaskLogo} alt="metamask logo" />
      <Image width={32} height={32} src={NovaLogo} alt="nova logo" />
      <Image width={32} height={32} src={SubwalletLogo} alt="subwallet logo" />
      <Image width={32} height={32} src={TalismanLogo} alt="talisman logo" />
    </div>
  );
}
