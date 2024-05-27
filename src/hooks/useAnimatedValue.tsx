import { useState, useEffect, useRef } from "react";

type UseAnimatedValueParams = {
  initialValue: number;
  finalValue: number;
  duration: number;
};

const useAnimatedValue = ({
  initialValue,
  finalValue,
  duration,
}: UseAnimatedValueParams): number => {
  const [value, setValue] = useState<number>(initialValue);
  const requestRef = useRef<number>();

  const animate = (
    startTime: number | null,
    previousTimestamp: number | null
  ) => {
    const runAnimation = (timestamp: number) => {
      // If startTime isn't set, set it to the current time
      if (!startTime) {
        startTime = timestamp;
      }

      // Calculate the progress as a ratio of time elapsed to total duration
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Calculate current value using ease-out effect (cubic)
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue =
        initialValue + (finalValue - initialValue) * easeOutProgress;
      setValue(currentValue);

      // If time is not yet up, keep animating
      if (progress < 1) {
        requestRef.current = requestAnimationFrame(runAnimation);
      }
    };

    // Cancel the previous animation frame
    if (previousTimestamp !== startTime) {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    }

    requestRef.current = requestAnimationFrame(runAnimation);
  };

  useEffect(() => {
    let startTime: number | null = null; // Timestamp when the animation should start
    animate(startTime, startTime);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [initialValue, finalValue, duration]);

  return Math.round(value);
};

export default useAnimatedValue;
