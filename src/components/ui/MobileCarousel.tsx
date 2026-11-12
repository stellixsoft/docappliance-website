"use client";

import { Children, useRef, useState, type ReactNode } from "react";

const Arrow = ({ flip }: { flip?: boolean }) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden style={flip ? { transform: "scaleX(-1)" } : undefined}>
    <path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
);

/**
 * One-item-per-view carousel with arrows outside the slide (the mobile CTA strip on /services).
 * Matches the platform's avb-carousel settings: 1 item, outer arrows, no dots, loops.
 */
export function MobileCarousel({ className = "", children }: { className?: string; children: ReactNode }) {
  const slides = Children.toArray(children);
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const go = (i: number) => setIndex((i + slides.length) % slides.length);

  return (
    <div className={`mobile-carousel ${className}`}>
      <div className="mobile-carousel__wrapper">
        <button type="button" className="mobile-carousel__button" aria-label="Previous" onClick={() => go(index - 1)}>
          <span className="mobile-carousel__icon">
            <Arrow />
          </span>
        </button>
        <div
          className="mobile-carousel__viewport"
          onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - startX.current;
            if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
          }}
        >
          <div className="mobile-carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {slides}
          </div>
        </div>
        <button type="button" className="mobile-carousel__button" aria-label="Next" onClick={() => go(index + 1)}>
          <span className="mobile-carousel__icon">
            <Arrow flip />
          </span>
        </button>
      </div>
    </div>
  );
}
