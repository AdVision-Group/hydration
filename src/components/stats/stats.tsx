import useAnimatedValue from "@/hooks/useAnimatedValue";

// TODO: get from api
const stats: StatProps[] = [
  {
    title: "Total value locked",
    value: {
      value: 250,
      displayFn: (value) => `$${value}M`,
    },
  },
  {
    title: "Trading volume",
    value: {
      value: 250,
      displayFn: (value) => `$${value}K`,
    },
    tagline: "Last 30D",
  },
  {
    title: "Cross-Chain volume",
    value: {
      value: 250,
      displayFn: (value) => `$${value}K`,
    },
    tagline: "Last 30D",
  },
  {
    title: "Tradable assets",
    value: {
      value: 1500,
      displayFn: (value) => `${value}+`,
    },
  },
  {
    title: "Total accounts",
    value: {
      value: 250,
      displayFn: (value) => `${value}K`,
    },
  },
];

export default function Stats() {
  return (
    <section className="bg-purple pt-11 pb-12">
      <div className="container mx-auto flex justify-between">
        {stats.map((stat) => (
          <Stat key={stat.title} {...stat} />
        ))}
      </div>
    </section>
  );
}

type StatProps = {
  title: string;
  tagline?: string;
  animated?: boolean;
  value: {
    displayFn: (value: number) => string;
    value: number;
  };
};

function Stat({ title, value, tagline, animated = true }: StatProps) {
  const animatedValue = useAnimatedValue({
    initialValue: 0,
    finalValue: value.value,
    duration: 4000,
  });
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3.5">
        <p className="font-geist font-normal text-sm leading-4 text-lavender">
          {title}
        </p>
        {tagline && (
          <p className="px-1.5 py-1 font-inter uppercase font-semibold text-purple bg-lavender leading-3 text-2xs rounded-2xl">
            {tagline}
          </p>
        )}
      </div>
      <p className="font-gazpacho font-bold text-[2rem] leading-10 text-lavender">
        {value.displayFn(animated ? animatedValue : value.value)}
      </p>
    </div>
  );
}
