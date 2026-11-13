"use client";

import { Children, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const Arrow = ({ flip }: { flip?: boolean }) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden style={flip ? { transform: "scaleX(-1)" } : undefined}>
    <path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
);

/** Items per view below the desktop breakpoint, for a carousel that shows `desktop` items at 1200px+. */
function itemsFor(width: number, desktop: number) {
  if (width >= 1200) return desktop;
  if (width >= 900) return Math.min(desktop, 4);
  return Math.min(desktop, 3);
}

/**
 * Carousel with arrows outside the slides, matching the platform's avb-carousel: outer arrows, no dots,
 * loops. `perView` is the number of items the live page shows at desktop width (1 for the mobile CTA
 * strip on /services); smaller screens show fewer. Arrows hide when every item fits.
 */
export function MobileCarousel({ className = "", perView = 1, children }: { className?: string; perView?: number; children: ReactNode }) {
  const slides = Children.toArray(children);
  const [index, setIndex] = useState(0);
  const [view, setView] = useState(perView);
  const startX = useRef(0);
  useEffect(() => {
    if (perView === 1) return;
    const update = () => setView(itemsFor(window.innerWidth, perView));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [perView]);
  const stops = Math.max(1, slides.length - view + 1);
  const go = (i: number) => setIndex((i + stops) % stops);
  const arrows = slides.length > view;
  const at = Math.min(index, stops - 1);

  return (
    <div className={`mobile-carousel ${className}`}>
      <div className="mobile-carousel__wrapper">
        {arrows && (
          <button type="button" className="mobile-carousel__button" aria-label="Previous" onClick={() => go(at - 1)}>
            <span className="mobile-carousel__icon">
              <Arrow />
            </span>
          </button>
        )}
        <div
          className="mobile-carousel__viewport"
          onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - startX.current;
            if (Math.abs(dx) > 40) go(at + (dx < 0 ? 1 : -1));
          }}
        >
          <div
            className="mobile-carousel__track"
            style={{ transform: `translateX(-${(at * 100) / view}%)`, ...(view > 1 ? ({ gridAutoColumns: `${100 / view}%` } as CSSProperties) : {}) }}
          >
            {slides}
          </div>
        </div>
        {arrows && (
          <button type="button" className="mobile-carousel__button" aria-label="Next" onClick={() => go(at + 1)}>
            <span className="mobile-carousel__icon">
              <Arrow flip />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
