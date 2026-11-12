import Link from "next/link";

/** Blue service-area bar shown above the header. */
export function TopBar() {
  return (
    <div className="avb-header-before">
    <section data-id="28" className="avb-designer-block avb-typography dsg-block-28-header-before">
      <div className="avb-grid">
        <div className="avb-grid__column avb-grid__column--small-12 dsg-block-28-header-before__no-padding">
          <div className="avb-wrapper dsg-block-28-header-before__content">
            <span className="avb-typography__heading dsg-block-28-header-before__heading">
              <span className="dsg-tools-fw-bold">
                {"Our Service Areas Include: "}
              </span>
              <span className="dsg-block-28-header-before__location-mobile">
                <Link href="/estill-springs-tn" className="dsg-block-28-header-before__link avb-link">
                  {" Estill Springs, TN "}
                </Link>
                <span className="dsg-block-28-header-before__hider-mobile">
                  {" | "}
                </span>
              </span>
              <span className="dsg-block-28-header-before__location-mobile">
                <Link href="/knoxville-tn" className="dsg-block-28-header-before__link avb-link">
                  {" Knoxville, TN "}
                </Link>
                <span className="dsg-block-28-header-before__hider-mobile">
                  {" | "}
                </span>
              </span>
              <span className="dsg-block-28-header-before__location-mobile">
                <Link href="/phoenix-az" className="dsg-block-28-header-before__link avb-link">
                  {" Phoenix, AZ "}
                </Link>
                <span className="dsg-block-28-header-before__hider-mobile">
                  {" | "}
                </span>
              </span>
              <span className="dsg-block-28-header-before__location-mobile">
                <Link href="/salina-ks" className="dsg-block-28-header-before__link avb-link">
                  {" Salina, KS "}
                </Link>
                <span className="dsg-block-28-header-before__hider-mobile">
                  {" | "}
                </span>
              </span>
              <span className="dsg-block-28-header-before__location-mobile">
                <Link href="/services#schedule-service" className="dsg-block-28-header-before__link avb-link">
                  {" "}
                  <span className="dsg-tools-fw-bold">
                    {"SCHEDULE SERVICE NOW"}
                  </span>
                  {" "}
                </Link>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
