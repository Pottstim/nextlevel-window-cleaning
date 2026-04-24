// BeforeAfter.tsx — Interactive drag-to-reveal before/after slider
// Design: Local Pride Modernism — clean, tactile, works on touch and mouse
import { useState, useRef, useCallback, useEffect } from "react";
import { ArrowLeftRight } from "lucide-react";

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
  /** Aspect ratio as a CSS value, e.g. "4/3" or "16/9". Defaults to "4/3" */
  aspectRatio?: string;
}

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  alt = "Before and after comparison",
  aspectRatio = "4/3",
}: BeforeAfterProps) {
  const [position, setPosition] = useState(50); // percentage 0–100
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
    updatePosition(e.clientX);
  };

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => {
    setDragging(true);
    updatePosition(e.touches[0].clientX);
  };

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    };
    const onUp = () => setDragging(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [dragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl select-none shadow-lg"
      style={{ aspectRatio, cursor: dragging ? "grabbing" : "grab" }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* AFTER image (full width, underneath) */}
      <img
        src={afterSrc}
        alt={`${alt} — after`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />

      {/* BEFORE image (clipped to left of slider) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeSrc}
          alt={`${alt} — before`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }}
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-md pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      />

      {/* Drag handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-none z-10"
        style={{ left: `${position}%` }}
      >
        <ArrowLeftRight size={18} style={{ color: "var(--brand-aqua)" }} strokeWidth={2.5} />
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 pointer-events-none">
        <span
          className="text-xs font-bold text-white px-2.5 py-1 rounded-full"
          style={{ backgroundColor: "rgba(0,0,0,0.55)", fontFamily: "Manrope, sans-serif" }}
        >
          {beforeLabel}
        </span>
      </div>
      <div className="absolute top-3 right-3 pointer-events-none">
        <span
          className="text-xs font-bold text-white px-2.5 py-1 rounded-full"
          style={{ backgroundColor: "var(--brand-aqua)", fontFamily: "Manrope, sans-serif" }}
        >
          {afterLabel}
        </span>
      </div>

      {/* Hint text (fades after first interaction) */}
      {position === 50 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none">
          <span
            className="text-xs font-semibold text-white px-3 py-1 rounded-full"
            style={{ backgroundColor: "rgba(0,0,0,0.45)", fontFamily: "Manrope, sans-serif" }}
          >
            ← Drag to compare →
          </span>
        </div>
      )}
    </div>
  );
}
