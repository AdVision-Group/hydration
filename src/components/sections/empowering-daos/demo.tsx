import Heading from "@/components/ui/typography/heading";
import ScrollLock from "./scroll-lock";

export default function ScrollLockDemo() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-lavender">
      <div className="p-[600px] bg-pink w-full" />
      <ScrollLock
        durationPx={2000}
        render={(progress) => (
          <div className="bg-purple w-screen h-screen flex justify-center items-center gap-4 relative">
            {/* display progress nicely with a circular progress bar */}
            <Heading className="absolute top-4 left-4 text-white" size="large">
              Top text
            </Heading>
            <Heading className="text-white" size="large">
              Loading
            </Heading>
            {Array.from({ length: 1 }, (_, i) => (
              <div
                key={i}
                className="w-20 h-20 bg-white rounded-full "
                style={{
                  clipPath: `polygon(0 0, 0 100%, ${progress}% 100%, ${progress}% 0)`,
                }}
              />
            ))}
            <Heading
              className="absolute bottom-4 right-4 text-white"
              size="large"
            >
              Bottom text
            </Heading>
          </div>
        )}
      />
      <div className="p-[600px] bg-pink w-full" />
    </main>
  );
}
