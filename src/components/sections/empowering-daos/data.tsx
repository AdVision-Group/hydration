export type BulletPointData = {
  title: React.ReactNode;
  description: string;
};

export const bulletPoints: BulletPointData[] = [
  {
    title: "Accessible market making",
    description:
      "Hydration provides a cost-efficient, permissionless platform for market making any asset, without hidden costs or listing fees. DAOs can register their token and create an Isolated Pool, making their token tradable against all other assets on Hydration.",
  },
  {
    title: "Single-sided LPing",
    description:
      "The Hydration Omnipool allows single-sided LPing, enabling DAOs to add assets to the AMM without needing a second asset. Unlike Isolated Pools, listings in the Omnipool are permissioned and governed by the Hydration Protocol's guidelines.",
  },
  {
    title: "Treasury diversification",
    description:
      "DAOs can build up Protocol Owned Liquidity and diversify their Treasury holdings using one of the Hydration AMMs or by placing an OTC order. They can also schedule an on-chain DCA order, allowing them to accumulate assets gradually over time.",
  },
  {
    title: (
      <div>
        Price discovery and initial <br /> token distribution
      </div>
    ),
    description:
      "DAOs in their early stages can start a Liquidity Bootstrapping Pool (LBP) to distribute their tokens without the risk of sniping bots and to navigate initial price discovery.",
  },
  {
    title: "Supporting decentralization",
    description:
      "All DAOs running on the Polkadot network can manage their Treasuries on Hydration in a fully decentralized and non-custodial manner, using the Governance of their chain and cross-chain communication (XCM). No multisigs required.",
  },
];
