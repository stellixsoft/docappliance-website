import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import * as solid from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";
import { faFacebookF, faGoogle, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

/**
 * Icon set used by the site content.
 *
 * The live site uses Font Awesome Pro (licensed through the AVB platform). This maps every
 * icon name used on the site to the closest Font Awesome Free icon. Swap the definitions here
 * for Pro icons (@fortawesome/pro-*-svg-icons) once the client has a Pro licence.
 */
type Variant = "solid" | "regular" | "light" | "brands";
type IconSet = { solid: IconDefinition; regular?: IconDefinition };

const ICONS: Record<string, IconSet> = {
  "arrow-progress": { solid: solid.faBarsProgress },
  "arrow-up": { solid: solid.faArrowUp },
  "calendar-lines-pen": { solid: solid.faCalendarDays, regular: regular.faCalendarDays },
  "chart-line": { solid: solid.faChartLine },
  "circle-check": { solid: solid.faCircleCheck, regular: regular.faCircleCheck },
  "clipboard-list-check": { solid: solid.faClipboardList },
  clock: { solid: solid.faClock, regular: regular.faClock },
  envelope: { solid: solid.faEnvelope, regular: regular.faEnvelope },
  heart: { solid: solid.faHeart, regular: regular.faHeart },
  "id-card": { solid: solid.faIdCard, regular: regular.faIdCard },
  "location-check": { solid: solid.faLocationDot },
  "long-arrow-alt-right": { solid: solid.faLongArrowAltRight },
  "map-marker-alt": { solid: solid.faLocationDot },
  megaphone: { solid: solid.faBullhorn },
  mobile: { solid: solid.faMobileScreenButton },
  "quote-left": { solid: solid.faQuoteLeft },
  "quote-right": { solid: solid.faQuoteRight },
  "shield-check": { solid: solid.faShieldHalved },
  star: { solid: solid.faStar, regular: regular.faStar },
  store: { solid: solid.faStore },
  toolbox: { solid: solid.faToolbox },
  tools: { solid: solid.faScrewdriverWrench },
  "truck-fast": { solid: solid.faTruckFast },
  users: { solid: solid.faUsers },
  wrench: { solid: solid.faWrench },
  "facebook-f": { solid: faFacebookF },
  "angle-right": { solid: solid.faAngleRight },
  "arrow-right-long": { solid: solid.faArrowRightLong },
  award: { solid: solid.faAward },
  "badge-dollar": { solid: solid.faCircleDollarToSlot },
  "caret-circle-right": { solid: solid.faCircleChevronRight },
  "circle-dollar": { solid: solid.faCircleDollarToSlot },
  "circle-play": { solid: solid.faCirclePlay, regular: regular.faCirclePlay },
  "map-location": { solid: solid.faMapLocationDot },
  "person-dolly": { solid: solid.faPersonWalkingLuggage },
  "shield-halved": { solid: solid.faShieldHalved },
  "star-sharp": { solid: solid.faStar, regular: regular.faStar },
  google: { solid: faGoogle },
  "square-facebook": { solid: faSquareFacebook },
  "facebook-square": { solid: faSquareFacebook },
};

type Props = { name: string; variant?: Variant; className?: string; title?: string };

/**
 * Renders like a Font Awesome <i>: an inline-block box one line (1em) tall, so icons sit on the
 * text baseline exactly where the live site's icon font put them. Site CSS targets the <i>.
 */
export function Icon({ name, variant = "solid", className, title }: Props) {
  const cls = ["svg-icon", className].filter(Boolean).join(" ");

  // Numbered circles (Pro-only) are drawn directly.
  const num = /^circle-(\d)$/.exec(name);
  if (num) {
    return (
      <i className={cls}>
        <svg className="svg-icon__glyph" viewBox="0 0 512 512" aria-hidden={title ? undefined : true} role={title ? "img" : undefined}>
          {title && <title>{title}</title>}
          <circle cx="256" cy="256" r="256" fill="currentColor" />
          <text x="256" y="256" dy=".35em" textAnchor="middle" fontSize="300" fontWeight="700" fontFamily="Arial, sans-serif" fill="#000" fillOpacity=".85">
            {num[1]}
          </text>
        </svg>
      </i>
    );
  }

  const set = ICONS[name];
  if (!set) return null;
  const def = (variant === "regular" || variant === "light") && set.regular ? set.regular : set.solid;
  const [width, height, , , path] = def.icon;
  const paths = Array.isArray(path) ? path : [path];
  return (
    <i className={cls}>
      <svg className="svg-icon__glyph" viewBox={`0 0 ${width} ${height}`} aria-hidden={title ? undefined : true} role={title ? "img" : undefined}>
        {title && <title>{title}</title>}
        {paths.map((d, i) => (
          <path key={i} fill="currentColor" d={d} />
        ))}
      </svg>
    </i>
  );
}
