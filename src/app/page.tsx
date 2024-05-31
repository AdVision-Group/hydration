import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Galaxy from "@/components/sections/bring-your-own-gas/galaxy";
import BringYourOwnGasSection from "@/components/sections/bring-your-own-gas/section";
import BuiltToBeUnstoppableSection from "@/components/sections/built-to-be-unstoppable/section";
import DevsAndSecuritySection from "@/components/sections/devs-and-security/section";
import EffectiveTradingSection from "@/components/sections/efficient-trading/section";
import EmpoweringDaosSection from "@/components/sections/empowering-daos/section";
import HeroSection from "@/components/sections/hero/section";
import LiquidityIncentivesSection from "@/components/sections/liquidity-incentives/section";
import ReferralsSection from "@/components/sections/referrals/section";
import Stats from "@/components/stats/stats";

export default function Home() {
  return (
    <main className="bg-white-100">
      <Header className="fixed top-4 left-1/2 transform -translate-x-1/2 " />
      <HeroSection />
      <Stats />
      <BringYourOwnGasSection />
      <EffectiveTradingSection />
      <LiquidityIncentivesSection />
      <ReferralsSection />
      <BuiltToBeUnstoppableSection />
      <EmpoweringDaosSection />
      <DevsAndSecuritySection />
      <Footer />
    </main>
  );
}
