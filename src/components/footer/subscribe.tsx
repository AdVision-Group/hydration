import { twMerge } from "tailwind-merge";
import Button from "../ui/buttons/button";
import Input from "../ui/input/input";

type Props = {
  className?: string;
};

export default function SubscribeToNewsletter({ className }: Props) {
  return (
    <div className={twMerge("flex flex-col gap-4 mt-4 lg:mt-0", className)}>
      <p className="leading-5 font-medium font-inter lg:text-purple-dim text-purple">
        Get the latest from Hydration
      </p>
      <form className="flex gap-4 bg-beige rounded-xl p-1 h-[3rem] sm:max-w-[22.7rem] justify-between">
        <Input placeholder="Email address" className="min-w-0" />
        <Button role="primary" decoration="arrow" className="py-2 min-w-[7rem]">
          Join Us
        </Button>
      </form>
    </div>
  );
}
