import { useRef, useEffect } from "react";

export function useHorizontalSwipe() {
  const elRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();

      const speedMultiplier = 3;

      el.scrollBy({
        left: e.deltaY * speedMultiplier,
        behavior: "smooth",
      });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, []);
  return elRef;
}
