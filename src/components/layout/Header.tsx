"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { mainNav, site, type NavItem } from "@/data/site";
import { SearchBar } from "./SearchBar";
import { MobileMenu } from "./MobileMenu";
import { LocationIcon, MenuIcon, PhoneIcon } from "./icons";
import styles from "./Header.module.css";

function NavLink({ item, className, onClick }: { item: NavItem; className?: string; onClick?: () => void }) {
  if (item.external) {
    return (
      <a href={item.href} className={className} onClick={onClick}>
        {item.label}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className} onClick={onClick}>
      {item.label}
    </Link>
  );
}

function UtilityNav({ compact = false }: { compact?: boolean }) {
  return (
    <nav className={styles.utility} aria-label="Store information">
      <ul>
        <li>
          <Link href="/contacts" className={styles.utilityLink} aria-label="Location">
            <span className={styles.utilityIcon}>
              <LocationIcon />
            </span>
            {!compact && <span className={styles.utilityLabel}>Location</span>}
          </Link>
        </li>
        <li>
          <a href={compact ? site.phone.href : "/contacts"} className={styles.utilityLink} aria-label={`Call ${site.phone.display}`}>
            <span className={styles.utilityIcon}>
              <PhoneIcon />
            </span>
            {!compact && <span className={styles.utilityLabel}>{site.phone.display}</span>}
          </a>
        </li>
      </ul>
    </nav>
  );
}

/** Desktop navigation row with hover dropdowns. */
function MainNav() {
  const [open, setOpen] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const show = (i: number | null) => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(i);
  };
  const hide = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(null), 120);
  };

  return (
    <div className={styles.navRow}>
      <div className={styles.container}>
        <nav aria-label="Main">
          <ul className={styles.nav}>
            {mainNav.map((item, i) => (
              <li
                key={item.label}
                className={[styles.navItem, item.outlined && styles.navItemOutlined, open === i && styles.navItemOpen]
                  .filter(Boolean)
                  .join(" ")}
                onMouseEnter={() => show(item.children ? i : null)}
                onMouseLeave={hide}
                onFocus={() => show(item.children ? i : null)}
              >
                <div className={styles.navItemInner}>
                  <NavLink item={item} className={styles.navLink} />
                </div>
                {item.children && open === i && (
                  <div className={styles.dropdown}>
                    <ul>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <NavLink item={child} className={styles.dropdownLink} onClick={() => setOpen(null)} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {open !== null && <div className={styles.backdrop} aria-hidden onMouseEnter={hide} />}
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = headerRef.current;
      if (!el) return;
      setStuck(el.getBoundingClientRect().bottom < 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logo = (small = false) => (
    <Link href="/" className={small ? styles.logoSmall : styles.logo} aria-label={`${site.name} home`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={site.logo.src} alt={site.logo.alt} width={site.logo.width} height={site.logo.height} />
    </Link>
  );

  return (
    <>
      <div className={styles.headerWrap} ref={headerRef} id="header">
        <header className={styles.header}>
          <div className={styles.topRow}>
            <div className={styles.container}>
              <div className={styles.grid}>
                <div className={styles.menuButtonCell}>
                  <button type="button" className={styles.iconButton} aria-label="Open menu" onClick={() => setMenuOpen(true)}>
                    <MenuIcon />
                  </button>
                </div>
                <div className={styles.logoCell}>{logo()}</div>
                <div className={styles.searchCell}>
                  <SearchBar />
                </div>
                <div className={styles.utilityCell}>
                  <UtilityNav />
                </div>
                <div className={styles.utilityCellCompact}>
                  <UtilityNav compact />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.searchRowMobile}>
            <SearchBar />
          </div>
          <MainNav />
        </header>
      </div>

      {/* Compact header that slides in once the main header scrolls away (desktop). */}
      <div className={`${styles.mini} ${stuck ? styles.miniVisible : ""}`} aria-hidden={!stuck}>
        <div className={styles.miniInner}>
          <button type="button" className={styles.miniMenuButton} onClick={() => setMenuOpen(true)} tabIndex={stuck ? 0 : -1}>
            <MenuIcon />
            <span>Open Menu</span>
          </button>
          {logo(true)}
          <div className={styles.miniSearch}>
            <SearchBar />
          </div>
          <UtilityNav />
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
