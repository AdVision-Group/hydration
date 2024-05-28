"use client";

import ScrollLock from "@/components/sections/empowering-daos/scroll-lock";
import Button from "@/components/ui/buttons/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-purple">
      <div className="p-[600px] bg-lavender" />
      <ScrollLock
        durationPx={2000}
        render={(progress) => (
          <div className="bg-purple w-screen h-screen flex justify-center items-center">
            {/* display progress nicely with a circular progress bar */}
            <div
              className="w-20 h-20 bg-white rounded-full "
              style={{
                clipPath: `polygon(0 0, 0 100%, ${progress}% 100%, ${progress}% 0)`,
              }}
            />
          </div>
        )}
      />
      <div className="p-[3600px] bg-pink" />
    </main>
  );
}
