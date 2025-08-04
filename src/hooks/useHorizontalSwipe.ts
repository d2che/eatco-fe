import { useRef, useEffect } from "react";

export function useHorizontalSwipe() {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    // --- 마우스 휠 로직은 그대로입니다 ---
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollTo({
        left: el.scrollLeft + e.deltaY,
        behavior: "smooth",
      });
    };

    // --- 마우스 드래그 로직을 수정했습니다 ---
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      el.classList.add("active");
      // 마우스 클릭 시작점과 현재 스크롤 위치를 기록합니다.
      startX = e.pageX;
      scrollLeft = el.scrollLeft;
    };

    const onMouseLeaveOrUp = () => {
      isDown = false;
      el.classList.remove("active");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      // 현재 마우스 위치와 시작점의 차이를 계산합니다.
      const walk = (e.pageX - startX) * 2; // 드래그 속도 조절
      // 시작점의 스크롤 위치에서 마우스가 움직인 거리만큼 스크롤합니다.
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("wheel", onWheel);
    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeaveOrUp);
    el.addEventListener("mouseup", onMouseLeaveOrUp);
    el.addEventListener("mousemove", onMouseMove);

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeaveOrUp);
      el.removeEventListener("mouseup", onMouseLeaveOrUp);
      el.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return elRef;
}
