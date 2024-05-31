import Arch from "./arch";
import HollarArchIcon from "./arch-icon/hollar-icon";
import LendingArchIcon from "./arch-icon/lending-icon";

export default function Arches() {
  return (
    <div className="container mx-auto relative flex justify-between gap-8">
      <Arch
        empty={false}
        title="Lending & Borrowing"
        description="Borrow a multitude of digital assets after providing collateral in one or several accepted currencies."
        Icon={<LendingArchIcon />}
      />
      <Arch
        empty={false}
        title="HOLLAR"
        description="The future deserves the HOLLAR - a decentralized, over-collateralized digital currency designed to be price-stable."
        Icon={<HollarArchIcon />}
      />
      <Arch empty={true} className="absolute top-0 right-[calc(100%_-_32px)]" />
      <Arch
        empty={true}
        className="absolute bottom-0 left-[calc(100%_-_32px)]"
      />
    </div>
  );
}
