import React from "react";
import CentrifugeIcon from "./assets/centrifuge.svg";
import DaiIcon from "./assets/dai.svg";
import HydrationIcon from "./assets/hydration.svg";
import PhalaIcon from "./assets/phala.svg";
import PolkadotIcon from "./assets/polkadot.svg";
import TetherIcon from "./assets/tether.svg";
import UsdcIcon from "./assets/usdc.svg";
import BitcoinIcon from "./assets/bitcoin.svg";
import KiltIcon from "./assets/kilt.svg";
import EthereumIcon from "./assets/ethereum.svg";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { twMerge } from "tailwind-merge";

export default function Galaxy() {
  return (
    <div className="w-[full] mx-auto max-w-[750px] aspect-square relative bg-white">
      <FirstRank />
      <SecondRank />
      <ThirdRank />
      <FourthRank />
    </div>
  );
}

function FirstRank() {
  const size = 90;
  const secondsPerSpin = 50;
  const elements = [
    { image: CentrifugeIcon, alt: "Centrifuge", offsetPercentage: 0 },
    { image: HydrationIcon, alt: "Hydration", offsetPercentage: 11 },
    { image: PolkadotIcon, alt: "Polkadot", offsetPercentage: 27 },
    { image: EthereumIcon, alt: "Ethereum", offsetPercentage: 43 },
    { image: PhalaIcon, alt: "Phala", offsetPercentage: 59 },
    { image: KiltIcon, alt: "Kilt", offsetPercentage: 70 },
  ];

  return (
    <>
      <Orbit size={size} secondsPerSpin={secondsPerSpin} borderOpacity={0.1} />
      {elements.map((element) => (
        <Orbit
          key={element.alt}
          size={size}
          secondsPerSpin={secondsPerSpin}
          offsetPercentage={element.offsetPercentage}
          element={element}
        />
      ))}
    </>
  );
}

function SecondRank() {
  const size = 70;
  const secondsPerSpin = 30;

  const elements = [
    { image: DaiIcon, alt: "Dai", offsetPercentage: 0 },
    { image: TetherIcon, alt: "Tether", offsetPercentage: 23 },
    { image: BitcoinIcon, alt: "Bitcoin", offsetPercentage: 56 },
  ];

  return (
    <>
      <Orbit size={size} secondsPerSpin={secondsPerSpin} borderOpacity={0.1} />
      {elements.map((element) => (
        <Orbit
          key={element.alt}
          size={size}
          secondsPerSpin={secondsPerSpin}
          offsetPercentage={element.offsetPercentage}
          element={element}
        />
      ))}
    </>
  );
}

function ThirdRank() {
  const size = 50;
  const secondsPerSpin = 40;

  const elements = [{ image: UsdcIcon, alt: "Usdc", offsetPercentage: 0 }];

  return (
    <>
      <Orbit size={size} secondsPerSpin={secondsPerSpin} borderOpacity={0.1} />
      {elements.map((element) => (
        <Orbit
          key={element.alt}
          size={size}
          secondsPerSpin={secondsPerSpin}
          offsetPercentage={element.offsetPercentage}
          element={element}
        />
      ))}
    </>
  );
}

function FourthRank() {
  const size = 30;
  const secondsPerSpin = 50;

  return (
    <>
      <Orbit size={size} secondsPerSpin={secondsPerSpin} borderOpacity={0.1} />
    </>
  );
}

type OrbitProps = {
  size: number;
  secondsPerSpin?: number;
  offsetPercentage?: number;
  element?: {
    image: StaticImport;
    alt: string;
  };
  borderOpacity?: number;
  className?: string;
};

function Orbit({
  size,
  secondsPerSpin = 1,
  offsetPercentage = 0,
  element,
  className,
  borderOpacity = 0,
}: OrbitProps) {
  const pos = `${(size - 30) / 12 + 5}%`;
  return (
    <div
      className={twMerge(
        "absolute rounded-full animate-spin",
        className,
        element && "z-20"
      )}
      style={{
        width: `${size}%`,
        height: `${size}%`,
        left: `calc(50% - ${size}% / 2)`,
        top: `calc(50% - ${size}% / 2)`,
        animationDuration: `${secondsPerSpin}s`,
        animationDelay: `-${secondsPerSpin * (offsetPercentage / 100)}s`,
        border: `1px solid rgba(36, 14, 50, ${borderOpacity})`,
      }}
    >
      {element && (
        <div
          className="absolute w-16 h-16 bg-blue rounded-full animate-counter-spin "
          style={{
            // apply counter rotation to make the element appear stationary
            animationDuration: `${secondsPerSpin}s`,
            animationDelay: `-${secondsPerSpin * (offsetPercentage / 100)}s`,
            top: pos,
            left: pos,
          }}
        >
          <Image
            src={element.image}
            alt={element.alt}
            width={64}
            height={64}
            className=""
          />
        </div>
      )}
    </div>
  );
}
