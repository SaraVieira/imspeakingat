import { type RefObject, useCallback, useRef } from "react";

export const ImageComparison = ({
  firstImageUrl,
  secondImageUrl,
}: {
  firstImageUrl: string;
  secondImageUrl: string;
}) => {
  const containerRef = useRef<HTMLDivElement>();
  const firstHalfRef = useRef<HTMLImageElement>();
  const secondHalfRef = useRef<HTMLImageElement>();
  const resizerRef = useRef<HTMLDivElement>();

  const handleMouseDown = useCallback((e: MouseEvent) => {
    const startPos = {
      x: e.clientX,
      y: e.clientY,
    };
    const currentLeftWidth = resizerRef.current
      ? parseFloat(window.getComputedStyle(resizerRef.current).left)
      : 0;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - startPos.x;

      updateWidth(currentLeftWidth, dx);
      updateCursor();
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      resetCursor();
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    const startPos = {
      x: touch?.clientX ?? 0,
      y: touch?.clientY ?? 0,
    };
    const currentLeftWidth = resizerRef.current
      ? parseFloat(window.getComputedStyle(resizerRef.current).left)
      : 0;

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const dx = (touch?.clientX ?? 0) - startPos.x;
      updateWidth(currentLeftWidth, dx);
      updateCursor();
    };

    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      resetCursor();
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  }, []);

  const updateWidth = (currentLeftWidth: number, dx: number) => {
    const container = containerRef.current;
    const firstHalfEle = firstHalfRef.current;
    const resizerEle = resizerRef.current;

    if (!container || !firstHalfEle || !resizerEle) {
      return;
    }

    const containerWidth = container.getBoundingClientRect().width;
    const delta = currentLeftWidth + dx;
    const newFirstHalfWidth = (delta * 100) / containerWidth;
    const normalizedWidth = Math.min(Math.max(10, newFirstHalfWidth), 90);

    firstHalfEle.style.clipPath = `inset(0 0 0 ${normalizedWidth}%)`;
    resizerEle.style.left = `${normalizedWidth}%`;
  };

  const updateCursor = () => {
    const container = containerRef.current;
    const firstHalfEle = firstHalfRef.current;
    const resizerEle = resizerRef.current;
    const secondHalfEle = secondHalfRef.current;

    if (!container ?? !firstHalfEle ?? !resizerEle ?? !secondHalfEle) {
      return;
    }

    resizerEle.style.cursor = "ew-resize";
    document.body.style.cursor = "ew-resize";
    firstHalfEle.style.userSelect = "none";
    firstHalfEle.style.pointerEvents = "none";
    secondHalfEle.style.userSelect = "none";
    secondHalfEle.style.pointerEvents = "none";
  };

  const resetCursor = () => {
    const container = containerRef.current;
    const firstHalfEle = firstHalfRef.current;
    const resizerEle = resizerRef.current;
    const secondHalfEle = secondHalfRef.current;

    if (!container ?? !firstHalfEle ?? !resizerEle ?? !secondHalfEle) {
      return;
    }

    resizerEle.style.removeProperty("cursor");
    document.body.style.removeProperty("cursor");
    firstHalfEle.style.removeProperty("user-select");
    firstHalfEle.style.removeProperty("pointer-events");
    secondHalfEle.style.removeProperty("user-select");
    secondHalfEle.style.removeProperty("pointer-events");
  };

  return (
    <div
      className="absolute top-[17px] select-none sm:top-[31px]"
      ref={containerRef as RefObject<HTMLDivElement> | null}
    >
      <div
        className="absolute left-0 top-0 h-full w-full"
        style={{ clipPath: "inset(0 0 0 70%)" }}
        ref={firstHalfRef as RefObject<HTMLDivElement> | null}
      >
        <img
          className="box-border h-auto max-h-full w-full object-cover object-center"
          src={firstImageUrl}
          alt="dashboard"
        />{" "}
      </div>
      <span className="absolute bottom-2 left-2 text-xs text-muted-foreground">
        Dashboard
      </span>
      <div
        className="absolute left-[70%] top-0 h-full w-0.5 -translate-x-full cursor-w-resize select-none bg-muted-foreground"
        style={{
          touchAction: "none",
        }}
        ref={resizerRef as RefObject<HTMLDivElement> | null}
        /*
        // @ts-ignore */
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      />

      <img
        className="box-border h-auto max-h-full w-full object-cover object-center"
        src={secondImageUrl}
        ref={secondHalfRef as RefObject<HTMLImageElement> | null}
        alt="Profile page"
      />
      <span className="absolute bottom-2 right-8 text-xs text-muted-foreground sm:right-2">
        Profile Page
      </span>
    </div>
  );
};
