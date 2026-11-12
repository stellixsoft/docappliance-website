"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNav, site, type NavItem } from "@/data/site";
import { ChevronLeftIcon, ChevronRightIcon, PhoneIcon } from "./icons";
import styles from "./MobileMenu.module.css";

/** Slide-out drawer used on tablet/mobile and from the sticky "Open Menu" button. */
export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sub, setSub] = useState<NavItem | null>(null);

  useEffect(() => {
    if (!open) setSub(null);
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const link = (item: NavItem, className: string) =>
    item.external ? (
      <a href={item.href} className={className} onClick={onClose}>
        {item.label}
      </a>
    ) : (
      <Link href={item.href} className={className} onClick={onClose}>
        {item.label}
      </Link>
    );

  return (
    <div className={`${styles.root} ${open ? styles.open : ""}`} aria-hidden={!open}>
      <div className={styles.backdrop} onClick={onClose} />
      <aside className={styles.drawer} role="dialog" aria-modal="true" aria-label="Menu">
        <div className={styles.quick}>
          <a href={site.phone.href} className={styles.quickLink}>
            <PhoneIcon className={styles.quickIcon} />
            <span>Call Us</span>
          </a>
        </div>
        {!sub ? (
          <ul className={styles.list}>
            <li className={styles.heading}>Main Menu</li>
            {mainNav.map((item) => (
              <li key={item.label} className={styles.item}>
                {item.children ? (
                  <button type="button" className={`${styles.row} ${styles.rowParent}`} onClick={() => setSub(item)}>
                    <span>{item.label}</span>
                    <ChevronRightIcon className={styles.chevron} />
                  </button>
                ) : (
                  link(item, styles.row)
                )}
              </li>
            ))}
          </ul>
        ) : (
          <ul className={styles.list}>
            <li className={styles.heading}>
              <button type="button" className={styles.back} onClick={() => setSub(null)}>
                <ChevronLeftIcon className={styles.backIcon} />
                Back to Main Menu
              </button>
            </li>
            <li className={styles.subHeading}>
              <span>{sub.label}</span>
              <Link href={sub.href} className={styles.view} onClick={onClose}>
                View
              </Link>
            </li>
            {sub.children!.map((child) => (
              <li key={child.href} className={styles.item}>
                {link(child, styles.row)}
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
}
