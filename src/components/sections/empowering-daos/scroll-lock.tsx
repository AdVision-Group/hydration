import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

type ScrollLockProps = {
  durationPx: number; // The height the content should occupy when fixed.
  render: (progress: number) => React.ReactNode; // Render prop to render content based on progress.
};

// const useAnimationFrame = (callback: (deltaTime: number) => {}) => {
//   // Use useRef for mutable variables that we want to persist
//   // without triggering a re-render on their change
//   const requestRef = React.useRef<any>();
//   const previousTimeRef = React.useRef<any>();

//   const animate = (time: number) => {
//     if (previousTimeRef.current != undefined) {
//       const deltaTime = time - previousTimeRef.current;
//       callback(deltaTime);
//     }
//     previousTimeRef.current = time;
//     requestRef.current = requestAnimationFrame(animate);
//   };

//   React.useEffect(() => {
//     requestRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(requestRef.current);
//   }, []); // Make sure the effect runs only once
// };

export default function ScrollLock({ durationPx, render }: ScrollLockProps) {
  const [scrollY, setScrollY] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const initialTopRef = useRef<number | null>(null); // Store the initial top offset here

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    // Set initial top offset once when the component mounts
    if (placeholderRef.current && initialTopRef.current === null) {
      initialTopRef.current =
        placeholderRef.current.offsetTop - window.innerHeight;
    }
  }, []);

  const uncappedProgress = useMemo(() => {
    if (initialTopRef.current !== null) {
      return ((scrollY - initialTopRef.current) / durationPx) * 100;
    }
    return -99999;
  }, [scrollY, durationPx]);

  const progress = useMemo(() => {
    if (initialTopRef.current !== null) {
      if (scrollY < initialTopRef.current) {
        return 0; // Before the fixed range starts
      } else if (scrollY > initialTopRef.current + durationPx) {
        return 100; // After the fixed range ends
      } else {
        // Calculate progress percentage within the fixed range
        const progressWithinRange =
          ((scrollY - initialTopRef.current) / durationPx) * 100;
        return progressWithinRange;
      }
    }
    return 0; // Default to 0 if no initial top is set
  }, [scrollY, durationPx]);

  const getStyle = useCallback(() => {
    if (progress > 0 && progress < 100) {
      // When the scroll position is within the fixed range.
      return {
        position: "fixed" as const,
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 10, // Ensure it stacks above other content.
      };
    }
    return {
      position: "static" as const,
      zIndex: 10,
    };
  }, [progress]);

  return (
    <>
      {/* Placeholder to maintain space when content is fixed */}
      <div ref={contentRef} style={getStyle()}>
        {render(progress)}
      </div>
      {/* TODO: swap for a prop color */}
      {uncappedProgress > -10 && uncappedProgress < 40 && (
        <div className="fixed bg-purple h-[50vh] w-screen bottom-0 left-0 z-[5]"></div>
      )}
      {uncappedProgress < 110 && uncappedProgress > 60 && (
        <div className="fixed bg-purple h-[50vh] w-screen top-0 left-0 z-[5]"></div>
      )}
      <div
        ref={placeholderRef}
        style={{ height: `calc(${durationPx}px  - 100vh)` }}
      />
      <div className="z-[9]">{render(100)}</div>
    </>
  );
}
