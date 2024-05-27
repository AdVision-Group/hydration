import Button from "../ui/buttons/button";
import Input from "../ui/input/input";

export default function SubscribeToNewsletter() {
  return (
    <div className="flex flex-col gap-4">
      <p className="leading-5 font-medium font-inter text-purple">
        Get the latest from Hydration
      </p>
      <form className="flex gap-4">
        <Input placeholder="Email address" className="min-w-[275px]" />
        <Button role="footer" decoration="star">
          Join Us
        </Button>
      </form>
    </div>
  );
}
