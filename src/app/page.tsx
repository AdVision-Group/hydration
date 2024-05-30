import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Galaxy from "@/components/sections/bring-your-gas/galaxy";
import BuiltToBeUnstoppableSection from "@/components/sections/built-to-be-unstoppable/section";
import DevsAndSecuritySection from "@/components/sections/devs-and-security/section";
import EffectiveTradingSection from "@/components/sections/efficient-trading/section";
import EmpoweringDaosSection from "@/components/sections/empowering-daos/section";
import HeroSection from "@/components/sections/hero/section";
import Stats from "@/components/stats/stats";

export default function Home() {
  return (
    <main className="">
      <Header className="fixed top-4 left-1/2 transform -translate-x-1/2 " />
      <HeroSection />
      <Stats />
      {/* <Galaxy /> */}
      <EffectiveTradingSection />
      <BuiltToBeUnstoppableSection />
      <EmpoweringDaosSection />
      <DevsAndSecuritySection />
      <Footer />
    </main>
  );
}
