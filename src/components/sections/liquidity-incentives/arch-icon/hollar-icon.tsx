import Background from "../assets/hollar/bg.svg";
import Icon from "../assets/hollar/icon.svg";
import Border from "../assets/hollar/border.svg";
import ArchIcon from "./arch-icon";

export default function HollarArchIcon() {
  return (
    <ArchIcon
      icon={Icon}
      background={Background}
      border={Border}
      iconClassName="w-[50%] h-[50%]"
    />
  );
}
