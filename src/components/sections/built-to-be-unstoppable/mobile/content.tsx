import Image from "next/image";
import { builtToBeUnstoppableItems } from "../data";
import WithLeftDash from "./with-left-dash";
import Item from "./item";
import Title from "@/components/ui/typography/title";
import Paragraph from "@/components/ui/typography/paragraph";
import Logo from "../assets/logo.svg";

export default function BuiltToBeUnstoppableMobileContent() {
  const lastItem =
    builtToBeUnstoppableItems[builtToBeUnstoppableItems.length - 1];
  return (
    <div className="lg:hidden mt-[39.5px]">
      <div className="flex flex-col gap-8 border-l border-[#E53E7640]">
        <WithLeftDash
          className="-translate-y-[39.5px] -mb-[39.5px]"
          dashClassName="-translate-y-[38px]"
        >
          <Image src={Logo} width={79} height={79} alt="logo" />
        </WithLeftDash>
        {builtToBeUnstoppableItems.slice(0, 3).map((item, index) => (
          <Item key={index} {...item} />
        ))}
        <WithLeftDash className="translate-y-[0.67rem] -mt-[0.67rem]">
          <Title size="small">{lastItem.title}</Title>
        </WithLeftDash>
      </div>
      <Paragraph size="large" className="mt-4 ml-4">
        {lastItem.description}
      </Paragraph>
    </div>
  );
}
