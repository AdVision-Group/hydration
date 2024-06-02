import SectionLabel from "@/components/ui/labels/section";
import Heading from "@/components/ui/typography/heading";
import BuiltToBeUnstoppableDesktopContent from "./desktop/content";
import BuiltToBeUnstoppableMobileContent from "./mobile/content";

export default function BuiltToBeUnstoppableSection() {
  return (
    <section className="bg-white ~py-12/[7.5rem]">
      <div className="container mx-auto flex flex-col ~gap-12/[9.375rem]">
        <div className="flex flex-col gap-6">
          <SectionLabel>Built to be Unstoppable</SectionLabel>
          <Heading size="large" className="max-w-[666px]">
            Hydration is a fully decentralized Protocol run by on-chain
            governance
          </Heading>
        </div>
        <BuiltToBeUnstoppableDesktopContent />
        <BuiltToBeUnstoppableMobileContent />
      </div>
    </section>
  );
}
