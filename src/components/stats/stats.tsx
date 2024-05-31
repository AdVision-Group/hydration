import { fetchStats } from "@/api/stats";
import { Stat, StatProps } from "./stat";

export default async function Stats() {
  const data = await fetchStats();

  const stats: StatProps[] = [
    {
      title: "Total value locked",
      value: {
        value: data.tvl,
        prefix: "$",
      },
    },
    {
      title: "Trading volume",
      mobileTitle: "Trading vol.",
      value: {
        value: data.vol_30d,
        prefix: "$",
      },
      tagline: "Last 30D",
    },
    {
      title: "Cross-Chain volume",
      value: {
        value: data.xcm_vol_30d,
        prefix: "$",
      },
      tagline: "Last 30D",
      className: "order-1 lg:order-none col-span-2",
    },
    {
      title: "Tradable assets",
      value: {
        value: data.assets_count,
      },
    },
    {
      title: "Total accounts",
      value: {
        value: data.accounts_count,
      },
    },
  ];

  return (
    <section className="bg-purple pt-11 pb-12">
      <div className="container mx-auto grid grid-cols-2 lg:flex justify-between flex-wrap lg:gap-8 gap-2 gap-y-8">
        {stats.map((stat) => (
          <Stat key={stat.title} {...stat} />
        ))}
      </div>
    </section>
  );
}
