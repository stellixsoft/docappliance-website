"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { mainNav, site, type NavItem } from "@/data/site";
import { SearchBar } from "./SearchBar";
import { MobileMenu } from "./MobileMenu";
import { LocationIcon, MenuIcon, PhoneIcon } from "./icons";
import { CartIcon, HeartIcon, PersonIcon } from "../store/icons";
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

type UtilityItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  /** Link used by the icon-only (tablet/mobile) version, e.g. tel: for the phone. */
  compactHref?: string;
  /** Hide on tablet/mobile. */
  desktopOnly?: boolean;
};

const UTILITY: Record<"service" | "store", UtilityItem[]> = {
  service: [
    { label: "Location", href: "/contacts", icon: LocationIcon },
    { label: site.phone.display, href: "/contacts", compactHref: site.phone.href, icon: PhoneIcon },
  ],
  store: [
    { label: "Account", href: "/customer/account", icon: PersonIcon, desktopOnly: true },
    { label: "List", href: "/wishlist", icon: HeartIcon, desktopOnly: true },
    { label: "Location", href: "/contacts", icon: LocationIcon },
    { label: site.phone.display, href: site.phone.href, icon: PhoneIcon },
    { label: "Cart (0)", href: "/checkout/cart", icon: CartIcon },
  ],
};

function UtilityNav({ items, compact = false }: { items: UtilityItem[]; compact?: boolean }) {
  return (
    <nav className={styles.utility} aria-label="Store information">
      <ul>
        {items
          .filter((it) => !(compact && it.desktopOnly))
          .map((it) => {
            const href = compact && it.compactHref ? it.compactHref : it.href;
            const Icon = it.icon;
            const inner = (
              <>
                <span className={styles.utilityIcon}>
                  <Icon />
                </span>
                {!compact && <span className={styles.utilityLabel}>{it.label}</span>}
              </>
            );
            return (
              <li key={it.label}>
                {href.startsWith("/") ? (
                  <Link href={href} className={styles.utilityLink} aria-label={it.label}>
                    {inner}
                  </Link>
                ) : (
                  <a href={href} className={styles.utilityLink} aria-label={it.label}>
                    {inner}
                  </a>
                )}
              </li>
            );
          })}
      </ul>
    </nav>
  );
}

/** Desktop navigation row with hover dropdowns. */
function MainNav({ nav }: { nav: NavItem[] }) {
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
            {nav.map((item, i) => (
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
                {item.children && open === i && item.children.some((c) => c.children) && (
                  <div className={styles.mega}>
                    {item.children.map((group) => (
                      <ul key={group.href} className={styles.megaGroup}>
                        <li>
                          <NavLink item={group} className={styles.megaHeading} onClick={() => setOpen(null)} />
                        </li>
                        {group.children && (
                          <li>
                            <NavLink item={{ ...group, label: `Shop All ${group.label}` }} className={styles.megaLink} onClick={() => setOpen(null)} />
                          </li>
                        )}
                        {group.children?.map((c) => (
                          <li key={c.href}>
                            <NavLink item={c} className={styles.megaLink} onClick={() => setOpen(null)} />
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                )}
                {item.children && open === i && !item.children.some((c) => c.children) && (
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

type HeaderProps = {
  nav?: NavItem[];
  /** Which utility links to show next to the search box. */
  utility?: "service" | "store";
  /** Extra class on the header wrapper so a site can restyle it (the store uses a different utility row). */
  className?: string;
  /** Logo to show instead of the service site's; `mobileSrc` is used below 1280px. */
  logo?: { src: string; mobileSrc?: string; alt: string };
};

export function Header({ nav = mainNav, utility: variant = "service", className, logo: brand }: HeaderProps = {}) {
  const utility = UTILITY[variant];
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

  /* eslint-disable @next/next/no-img-element -- plain logo images, sized by CSS */
  const logo = (small = false) => (
    <Link href="/" className={small ? styles.logoSmall : styles.logo} aria-label={`${site.name} home`}>
      {brand ? (
        <picture>
          {brand.mobileSrc && <source media="(max-width: 1279px)" srcSet={brand.mobileSrc} />}
          <img src={brand.src} alt={brand.alt} />
        </picture>
      ) : (
        <img src={site.logo.src} alt={site.logo.alt} width={site.logo.width} height={site.logo.height} />
      )}
    </Link>
  );

  return (
    <>
      <div className={[styles.headerWrap, className].filter(Boolean).join(" ")} ref={headerRef} id="header">
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
                  <UtilityNav items={utility} />
                </div>
                <div className={styles.utilityCellCompact}>
                  <UtilityNav items={utility} compact />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.searchRowMobile}>
            <SearchBar />
          </div>
          <MainNav nav={nav} />
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
          <UtilityNav items={utility} />
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} nav={nav} />
    </>
  );
}
