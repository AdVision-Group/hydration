import Button from "../ui/buttons/button";
import Input from "../ui/input/input";

export default function SubscribeToNewsletter() {
  return (
    <div className="flex flex-col gap-4">
      <p className="leading-5 font-medium font-inter text-purple-dim">
        Get the latest from Hydration
      </p>
      <form className="flex gap-4 bg-beige rounded-xl p-1 h-[3rem] max-w-[23rem]">
        <Input placeholder="Email address" className="w-[14.375rem]" />
        <Button role="primary" decoration="arrow" className="py-2 w-[7rem]">
          Join Us
        </Button>
      </form>
    </div>
  );
}
