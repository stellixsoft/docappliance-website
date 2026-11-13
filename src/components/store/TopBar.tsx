import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

/** Blue service-area bar shown above the header. */
export function TopBar() {
  return (
    <div className="avb-header-before">
    <section data-id="28" className="avb-designer-block avb-typography dsg-block-28-header-before">
      <div className="avb-grid">
        <div className="avb-grid__column avb-grid__column--small-12 dsg-tools-nop">
          <div className="avb-wrapper dsg-block-28-header-before__content dsg-tools-main-paragraph">
            <Icon name="shield-check" variant="solid" className="dsg-block-28-header-before__icon" />
            <Link href="/services#extended-warranties" className="dsg-block-28-header-before__link dsg-tools-main-paragraph avb-link">
              <span className="dsg-block-28-header-before__tablet-only">
                {"We Provide Free Extended Limited 10-Year Warranties on All Major Domestic Appliance Purchases"}
              </span>
              <span className="dsg-block-28-header-before__mobile-only">
                {"Free Extended Limited 10-Year Warranties on All Major Domestic Appliance"}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
