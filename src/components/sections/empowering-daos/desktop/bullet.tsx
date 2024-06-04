import { twMerge } from "tailwind-merge";

type BulletProps = {
  active: boolean;
};

export default function Bullet({ active }: BulletProps) {
  return (
    <div
      className={twMerge(
        "flex transition rounded-full w-3 h-3",
        active ? "bg-pink" : "bg-[#816093]"
      )}
    />
  );
}
