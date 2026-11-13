/** Store (sales.docappliance.com) details and navigation. Category menus come from the catalog snapshot. */
import type { NavItem } from "./site";
import headerCategories from "./store/header-categories.json";
import menuItems from "./store/menu-items.json";

export const store = {
  name: "Doctor Appliance",
  url: "https://sales.docappliance.com",
  serviceUrl: "https://www.docappliance.com/",
  phone: { display: "800-298-8643", href: "tel:800-298-8643" },
  logo: { src: "/media/brand/store-logo.png", alt: "Doctor Appliance" },
  titleSuffix: " | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS",
  placeholderImage: "/media/brand/no-image.jpg",
  pageSize: 24,
};

type HeaderCategory = { entity_id: number; name: string; url_key: string; children: HeaderCategory[] };
type MenuItem = { node_id: string; parent_node_id: string; sort_order: string; label: string; href_override: string | null; target: string | null };

const isExternal = (href: string) => /^https?:\/\//.test(href);

function fromCategory(c: HeaderCategory): NavItem {
  return {
    label: c.name,
    href: `/catalog/${c.url_key}`,
    children: c.children.length ? c.children.map(fromCategory) : undefined,
  };
}

function fromMenu(items: MenuItem[], parent = "0"): NavItem[] {
  return items
    .filter((m) => m.parent_node_id === parent)
    .sort((a, b) => Number(a.sort_order) - Number(b.sort_order))
    .map((m) => {
      const href = m.href_override ?? "/";
      const kids = fromMenu(items, m.node_id);
      return { label: m.label, href, external: isExternal(href), children: kids.length ? kids : undefined };
    });
}

/** Top navigation: catalog categories (Appliances mega menu) followed by the CMS menu items. */
export const storeNav: NavItem[] = [
  ...(headerCategories as HeaderCategory[]).map(fromCategory),
  ...fromMenu(menuItems as MenuItem[]),
];

export const storeLegalNav: NavItem[] = [
  { label: "Terms & Conditions", href: "/privacy-policies/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policies/general-privacy-policy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "ADA Accessibility Menu", href: "#ada-menu", external: true },
];
