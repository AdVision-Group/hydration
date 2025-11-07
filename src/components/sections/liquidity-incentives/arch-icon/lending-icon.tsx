import Background from "../assets/lending/bg.svg";
import Icon from "../assets/lending/icon.svg";

import ArchIcon from "./arch-icon";

export default function LendingArchIcon() {
  return (
    <ArchIcon
      icon={Icon}
      background={Background}
      iconClassName="w-[67%] h-[67%]"
    />
  );
}
