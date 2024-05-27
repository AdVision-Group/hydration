import Button from "@/components/ui/buttons/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-pink">
      <Button role="primary" decoration="arrow">
        Hello
      </Button>
    </main>
  );
}
