import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

/** Black promotions bar shown under the store header. */
export function PromoBar() {
  return (
    <div className="avb-header-after">
    <section data-id="27" className="avb-designer-block avb-grid avb-typography dsg-tools-fill-dark dsg-tools-main-paragraph dsg-block-27-header-after">
      <div className="avb-grid__column avb-grid__column--small-12 dsg-tools-nop">
        <Icon name="badge-dollar" variant="solid" className="dsg-block-27-header-after__icon" />
        <Link href="/promotions" className="avb-wrapper dsg-block-27-header-after__content avb-link">
          <span className="dsg-block-27-header-after__headline">
            {"Unlock Exclusive Deals with Our Promotions & Rebates"}
          </span>
          {" "}
        </Link>
      </div>
    </section>
    </div>
  );
}
