import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

type ScrollLockProps = {
  durationPx: number;
  render: (progress: number) => React.ReactNode;
};

export default function ScrollLock({ durationPx, render }: ScrollLockProps) {
  const [scrollY, setScrollY] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  const [top, setTop] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  const handleResize = useCallback(() => {
    if (placeholderRef.current) {
      setTop(placeholderRef.current.offsetTop - window.innerHeight);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll(); // Initialize scroll position
    handleResize(); // Initialize resize handling
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  const progress = useMemo(() => {
    const start = top;
    const end = start + durationPx;
    return scrollY < start
      ? 0
      : scrollY > end
        ? 100
        : ((scrollY - start) / durationPx) * 100;
  }, [scrollY, durationPx, top]);

  const getStyle = useCallback(() => {
    if (progress > 0 && progress < 100) {
      return {
        position: "fixed" as const,
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 10,
      };
    }
    return { position: "static" as const, zIndex: 10 };
  }, [progress]);

  return (
    <>
      <div ref={contentRef} style={getStyle()}>
        {render(progress)}
      </div>
      <div
        className="bg-purple"
        ref={placeholderRef}
        style={{ height: `calc(${durationPx}px  - 100vh)` }}
      />
      <div className="z-[9]">{render(100)}</div>
    </>
  );
}
