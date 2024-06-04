export type BulletPointData = {
  title: React.ReactNode;
  description: string;
  active: (progress: number) => boolean;
};

export const bulletPoints: BulletPointData[] = [
  {
    title: "Accessible market making",
    description:
      "Hydration provides a cost-efficient, permissionless platform for market making any asset, without hidden costs or listing fees. DAOs can register their token and create an Isolated Pool, making their token tradable against all other assets on Hydration.",
    //  active: (progress: number) => progress >= 6 && progress <= 29,
    active: (progress: number) => progress >= 0 && progress <= 20,
  },
  {
    title: "Single-sided LPing",
    description:
      "The Hydration Omnipool allows single-sided LPing, enabling DAOs to add assets to the AMM without needing a second asset. Unlike Isolated Pools, listings in the Omnipool are permissioned and governed by the Hydration Protocol's guidelines.",
    //  active: (progress: number) => progress >= 29 && progress <= 51,
    active: (progress: number) => progress >= 20 && progress <= 40,
  },
  {
    title: "Treasury diversification",
    description:
      "DAOs can build up Protocol Owned Liquidity and diversify their Treasury holdings using one of the Hydration AMMs or by placing an OTC order. They can also schedule an on-chain DCA order, allowing them to accumulate assets gradually over time.",
    //  active: (progress: number) => progress >= 51 && progress <= 71,
    active: (progress: number) => progress >= 40 && progress <= 60,
  },
  {
    title: "Price discovery and initial token distribution",
    description:
      "DAOs in their early stages can start a Liquidity Bootstrapping Pool (LBP) to distribute their tokens without the risk of sniping bots and to navigate initial price discovery.",
    //  active: (progress: number) => progress >= 71 && progress <= 91,
    active: (progress: number) => progress >= 60 && progress <= 80,
  },
  {
    title: "Supporting decentralization",
    description:
      "All DAOs running on the Polkadot network can manage their Treasuries on Hydration in a fully decentralized and non-custodial manner, using the Governance of their chain and cross-chain communication (XCM). No multisigs required.",
    //  active: (progress: number) => progress >= 91 && progress <= 100,
    active: (progress: number) => progress >= 80 && progress <= 100,
  },
];
