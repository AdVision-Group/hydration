import LiquidityIncentivesArches from "./arches";
import LiquidityIncentivesCans from "./cans";

export default function LiquidityIncentivesSection() {
  return (
    <section className="bg-beige pb-20 ~pt-10/[6.625rem] rounded-t-[4rem]">
      <div className="container flex flex-col ~gap-[5.438rem]/40 mx-auto">
        <LiquidityIncentivesCans />
        <LiquidityIncentivesArches />
      </div>
    </section>
  );
}
