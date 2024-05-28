import SectionLabel from "@/components/ui/labels/section";
import Divider from "./divider";
import Item, { ItemProps } from "./item";
import Heading from "@/components/ui/typography/heading";

const items: ItemProps[] = [
  {
    align: "left",
    title: "On-Chain Governance",
    description:
      "Decisions for the Hydration Protocol are democratically made through transparent processes with broad community involvement. ",
  },
  {
    align: "left",
    title: "Powered by HDX Token",
    description:
      "HDX is Hydration's native token, granting governance access. It also incentivizes beneficial actions by redistributing Hydration's revenue streams.",
  },
  {
    align: "right",
    title: "Incentivizing Participation with Staking",
    description:
      "Hydration incentivizes governance participation with staking rewards. Users can stake their HDX and use it to vote in referenda.",
  },
  {
    align: "right",
    title: "Protocol Owned Liquidity",
    description:
      "Liquidity is foundational to Hydration. The Protocol disposes over a large Treasury which is continuously diversified through on-chain governance.",
  },
];

export default function BuiltToBeUnstoppableSection() {
  return (
    <section className="bg-white py-[7.5rem]">
      <div className="container mx-auto flex flex-col gap-[9.375rem]">
        <div className="flex flex-col gap-6">
          <SectionLabel>Built to be Unstoppable</SectionLabel>
          <Heading size="large" className="max-w-[666px]">
            Hydration is a fully decentralized Protocol run by on-chain
            governance
          </Heading>
        </div>
        <div>
          <Divider />
          <div className="grid grid-cols-4">
            {items.map((item, index) => (
              <Item key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
