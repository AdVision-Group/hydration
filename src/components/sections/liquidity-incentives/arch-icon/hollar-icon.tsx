import Background from "../assets/hollar/bg.svg";
import Icon from "../assets/hollar/icon.svg";

import ArchIcon from "./arch-icon";

export default function HollarArchIcon() {
  return (
    <ArchIcon
      icon={Icon}
      background={Background}
      iconClassName="w-[50%] h-[50%]"
    />
  );
}
