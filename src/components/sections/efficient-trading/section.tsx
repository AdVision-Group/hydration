"use client";

import SectionLabel from "@/components/ui/labels/section";
import EfficientTradingCard from "./card";
import Button from "@/components/ui/buttons/button";

import HandIcon from "./assets/hand.svg";
import HandshakeIcon from "./assets/handshake.svg";
import AssetsIcon from "./assets/assets.svg";
import CandlesticksIcon from "./assets/candlesticks.svg";
import ScrollAnchor from "@/components/scroll-anchor";
import { fadeUp, slideIn } from "@/animation/variants";
import AnimateOnView from "@/animation/motion-section";
import useScreenSize from "@/hooks/useScreenSize";
import { ReactNode, useMemo } from "react";

export default function EffectiveTradingSection() {
  const { width: screenWidth } = useScreenSize();
  const isDesktop = useMemo(() => screenWidth > 1024, [screenWidth]);

  const cardVariants = useMemo(
    () =>
      isDesktop
        ? [
            slideIn({ x: -100 }),
            slideIn({ y: -100 }),
            slideIn({ y: 100 }),
            slideIn({ x: 100 }),
          ]
        : [fadeUp(), fadeUp(), fadeUp(), fadeUp()],
    [isDesktop]
  );

  console.log({ isDesktop });
  return (
    <AnimateOnView className="pb-20">
      <div className="container mx-auto flex flex-col ~gap-3/5 relative">
        <ScrollAnchor id="trade" />
        <SectionLabel>Efficient Trading</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-10 ~gap-4/8 ">
          <EfficientTradingCard
            cardAnimationVariants={cardVariants[0]}
            title="Split your trades"
            description="No trade is too large for Hydration. Our user-friendly trading app will help you minimize slippage by allowing you to easily split your order in several consecutive trades."
            theme="lavander"
            icon={{ src: HandIcon, alt: "Hand icon" }}
            buttons={[
              <Button
                key="1"
                role="secondary"
                action={{
                  href: "https://app.hydration.net/trade/swap",
                  target: "_blank",
                }}
                decoration="arrow"
              >
                Discover split trading
              </Button>,
            ]}
            className="lg:col-span-4"
          />
          <EfficientTradingCard
            cardAnimationVariants={cardVariants[1]}
            title="Swap your favorite assets"
            description="Hydration combines several types of trading AMMs to offer the best execution for your swaps: Omnipool, Stablepools and Isolated Pools. Jump into an ocean of interconnected liquidity with lower slippage and fewer hops."
            theme="purple"
            icon={{ src: AssetsIcon, alt: "Assets icon" }}
            buttons={[
              <Button
                key="1"
                role="secondary"
                action={{
                  href: "https://app.hydration.net/trade/swap",
                  target: "_blank",
                }}
                decoration="arrow"
              >
                Find your next swap
              </Button>,
            ]}
            className="lg:col-span-6"
          />
          <EfficientTradingCard
            cardAnimationVariants={cardVariants[2]}
            title="Automate your trades"
            description="Gain exposure to assets over time by automating your trades using our on-chain DCA. Place DCA orders like a pro with a few clicks: Just set your budget and the time period over which the order should be executed."
            theme="blue"
            icon={{ src: CandlesticksIcon, alt: "Candlesticks icon" }}
            buttons={[
              <Button
                key="1"
                role="secondary"
                action={{
                  href: "https://app.hydration.net/trade/dca",
                  target: "_blank",
                }}
                decoration="arrow"
              >
                Try automated trading
              </Button>,
              //   <Button
              //     key="2"
              //     role="secondary"
              //     fill="outline"
              //     action={{ href: "/app" }}
              //   >
              //     Learn more
              //   </Button>,
            ]}
            className="lg:col-span-6"
          />
          <EfficientTradingCard
            cardAnimationVariants={cardVariants[3]}
            title="Trade over-the-counter"
            description="Trade any asset over-the-counter without trusted third parties or slippage. Place an OTC order and let others fill."
            theme="green"
            icon={{ src: HandshakeIcon, alt: "Handshake icon" }}
            buttons={[
              <Button
                key="1"
                role="secondary"
                action={{
                  href: "https://app.hydration.net/trade/otc",
                  target: "_blank",
                }}
                decoration="arrow"
              >
                Place an OTC order
              </Button>,
            ]}
            className="lg:col-span-4"
          />
        </div>
      </div>
    </AnimateOnView>
  );
}
