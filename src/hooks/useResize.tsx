import { useState, useEffect, useRef } from "react";

// A simple throttle function
const throttle = <F extends (...args: any[]) => void>(
  func: F,
  limit: number
) => {
  let inThrottle: boolean;
  let lastFunc: NodeJS.Timeout;
  let lastRan: number;
  return function (this: ThisType<F>, ...args: Parameters<F>) {
    if (!inThrottle) {
      func.apply(this, args);
      lastRan = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(
        () => {
          if (Date.now() - lastRan >= limit) {
            func.apply(this, args);
            lastRan = Date.now();
          }
        },
        limit - (Date.now() - lastRan)
      );
    }
  } as F;
};

// Custom hook to handle the window resize event with throttling
function useResize(
  callback: (opts: { width: number; height: number }) => void,
  limit: number = 200,
  runOnMount: boolean = true
): void {
  const savedCallback = useRef(callback);

  // Update ref when function changes
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    // Handler that invokes the callback with the current window dimensions
    const handleResize = () => {
      savedCallback.current({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Run the callback on mount if runOnMount is true
    if (runOnMount) {
      handleResize();
    }

    // Create a throttled version of the resize event handler
    const throttledResizeHandler = throttle(handleResize, limit);

    // Attach the throttled event handler
    window.addEventListener("resize", throttledResizeHandler);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", throttledResizeHandler);
    };
  }, [limit, runOnMount]); // Add runOnMount to the dependencies array
}

export default useResize;
