"use client";

import { useRef, useState, type ReactNode } from "react";

/** Wrapper for a group of collapsible FAQ-style items. */
export function Accordion({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  );
}

type ItemProps = {
  title: ReactNode;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  defaultOpen?: boolean;
};

/** One accordion row. Animates height like the original avb-accordion element. */
export function AccordionItem({ title, children, className = "", titleClassName = "", defaultOpen = false }: ItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>(defaultOpen ? "auto" : "0px");

  const toggle = () => {
    const el = contentRef.current;
    if (!el) return;
    const full = `${el.scrollHeight}px`;
    if (open) {
      setHeight(full);
      requestAnimationFrame(() => requestAnimationFrame(() => setHeight("0px")));
    } else {
      setHeight(full);
    }
    setOpen(!open);
  };

  return (
    <div className={`${className}${open ? " avb-accordion__item--open" : ""}`}>
      <div
        className={titleClassName}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
      >
        {title}
      </div>
      <div
        ref={contentRef}
        className="avb-accordion__item-content"
        style={{ height }}
        onTransitionEnd={() => open && setHeight("auto")}
      >
        {children}
      </div>
    </div>
  );
}
