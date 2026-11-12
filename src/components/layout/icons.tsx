/** Material icons used in the header (same glyphs as the live site). */
type P = { className?: string };
const svg = (d: React.ReactNode) =>
  function SvgIcon({ className }: P) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false" width="1em" height="1em" fill="currentColor">
        {d}
      </svg>
    );
  };

export const MenuIcon = svg(<path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />);
export const SearchIcon = svg(
  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14" />,
);
export const LocationIcon = svg(
  <>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9" />
    <circle cx="12" cy="9" r="2.5" />
  </>,
);
export const PhoneIcon = svg(
  <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1m-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5-4H7V4h9z" />,
);
export const ChevronRightIcon = svg(<path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />);
export const ChevronLeftIcon = svg(<path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />);
