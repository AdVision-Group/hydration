import Background from "../assets/lending/bg.svg";
import Icon from "../assets/lending/icon.svg";
import Border from "../assets/lending/border.svg";
import ArchIcon from "./arch-icon";

export default function LendingArchIcon() {
  return (
    <ArchIcon
      icon={Icon}
      background={Background}
      border={Border}
      iconClassName="w-[67%] h-[67%]"
    />
  );
}
