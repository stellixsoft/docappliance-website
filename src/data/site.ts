/** Business details and navigation. Move these to a CMS later; everything reads from here. */

export const site = {
  name: "Doctor Appliance",
  url: "https://www.docappliance.com",
  salesUrl: "https://sales.docappliance.com/",
  phone: { display: "800-298-8643", href: "tel:800-298-8643" },
  logo: { src: "/media/brand/logo.png", width: 134, height: 80, alt: "Doctor Appliance" },
  facebook: "https://www.facebook.com/DoctorAppliance/",
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  /** Draws the blue outline used on a few top-level items. */
  outlined?: boolean;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  { label: "Schedule Service Now", href: "/services#schedule-service", outlined: true },
  {
    label: "Locations",
    href: "/contacts",
    children: [
      { label: "Estill Springs, TN", href: "/estill-springs-tn" },
      { label: "Knoxville, TN", href: "/knoxville-tn" },
      { label: "Phoenix, AZ", href: "/phoenix-az" },
      { label: "Salina, KS", href: "/salina-ks" },
    ],
  },
  { label: "Services", href: "/services" },
  {
    label: "Care Plans",
    href: "/household-care-plan",
    children: [
      { label: "Household Care Plan", href: "/household-care-plan" },
      { label: "Preventative Maintenance", href: "/preventative-maintenance" },
    ],
  },
  { label: "Parts", href: "/parts" },
  {
    label: "Partnerships",
    href: "/home-store-partnership-program-hsp",
    children: [
      { label: "Home Store Partnership Program (HSP)", href: "/home-store-partnership-program-hsp" },
      { label: "Service Network Partnership", href: "/service-network-partnership" },
    ],
  },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contacts", outlined: true, children: [{ label: "Careers", href: "/careers" }] },
  { label: "FAQ", href: "/faq" },
  { label: "Appliance Sales", href: site.salesUrl, external: true, outlined: true },
];

export const legalNav: NavItem[] = [
  { label: "Terms & Conditions", href: "/privacy-policies/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policies/general-privacy-policy" },
];
