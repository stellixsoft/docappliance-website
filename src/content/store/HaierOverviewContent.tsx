import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

/** Page content for /haier-overview (ported from the live CMS markup). */
export default function HaierOverviewContent() {
  return (
    <div className="avb-main store-page-haier-overview">
      <section data-id="4" className="avb-designer-block avb-typography dsg-block-4">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--medium-7 avb-grid__column--marginBottom dsg-block-4-grid__column-order-1">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-4__background-1">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-4__content dsg-block-4__content-a">
                <div className="avb-wrapper">
                  <img className="dsg-block-4-image-h-sml" src="/media/catalog-pages/brands/haier-kitchen-catalog-sml-w600.jpg" alt="Haier: Discover appliances designed for city living" />
                  <img className="dsg-block-4-image-h-lrg" src="/media/catalog-pages/brands/haier-kitchen-catalog-lrg-w1200.jpg" alt="Haier: Discover appliances designed for city living" />
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-5 avb-grid__column--marginBottom dsg-block-4-grid__column-order-2">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-4__background-2">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-4__content dsg-block-4__content-b">
                <div className="avb-wrapper">
                  <h1 className="avb-typography__heading avb-typography__heading--title">
                    <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-block-4__heading-line-1">
                      <img className="dsg-block-4-image" src="/media/promotions/responsive-banners/logos/logo-haier-w-w400.png" alt="Haier Appliances Logo" />
                    </span>
                    <span className="avb-typography__heading-line avb-typography__heading-line--light avb-typography__heading-line--medium dsg-block-4__heading-line-2">
                      {"Bring The"}
                    </span>
                    <span className="avb-typography__heading-line avb-typogrcaphy__heading-line--light avb-typography__heading-line--medium dsg-block-4__heading-line-2">
                      {"Unexpected To Life"}
                    </span>
                  </h1>
                  <Link href="/catalog/special/manufacturer/Haier" className="avb-link avb-button avb-button--primary dsg-block-4__button avb-link">
                    {"Shop All Haier Appliances"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="31" className="avb-designer-block avb-typography dsg-block-31 dsg-block-31-row1">
        <div className="avb-grid avb-grid--container dsg-block-31-row-border">
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--large-3 avb-grid__column--marginBottom dsg-block-31__column-border">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalTop avb-wrapper--background dsg-block-31__background">
                <div className="avb-wrapper dsg-block-31__content">
                  <h2 className="avb-typography__heading avb-typography__heading--title">
                    <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-block-31__heading-line-1">
                      <img className="dsg-block-31-image" src="/media/icons/washer-w-1-300-w100.png" alt="" />
                    </span>
                    <Link href="/catalog/laundry?display_mode=products&manufacturer=36405" className="dsg-block-1-link avb-link">
                      <span className="avb-typography__heading-line avb-typography__heading-line--light avb-typography__heading-line--medium dsg-block-31__heading-line-2">
                        {"Haier Laundry "}
                        <Icon name="angle-right" variant="regular" />
                      </span>
                    </Link>
                  </h2>
                  <ul className="avb-list dsg-block-31-list">
                    <li className="avb-list__item avb-list--noBullet dsg-block-31-list-item">
                      <Link href="/catalog/laundry?display_mode=products&manufacturer=36405" className="dsg-block-31-link avb-link">
                        {"Front Load Washer Dryer Combos"}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--large-3 avb-grid__column--marginBottom dsg-block-31__column-border">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalTop avb-wrapper--background dsg-block-31__background">
                <div className="avb-wrapper dsg-block-31__content">
                  <h2 className="avb-typography__heading avb-typography__heading--title">
                    <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-block-31__heading-line-1">
                      <img className="dsg-block-31-image" src="/media/icons/refrigerator-w-1-300-w100.png" alt="" />
                    </span>
                    <Link href="/catalog/refrigeration?display_mode=products&manufacturer=36405" className="dsg-block-1-link avb-link">
                      <span className="avb-typography__heading-line avb-typography__heading-line--light avb-typography__heading-line--medium dsg-block-31__heading-line-2">
                        {"Haier Refrigeration "}
                        <Icon name="angle-right" variant="regular" />
                      </span>
                    </Link>
                  </h2>
                  <ul className="avb-list dsg-block-31-list">
                    <li className="avb-list__item avb-list--noBullet dsg-block-31-list-item">
                      <Link href="/catalog/french-door-refrigerator?display_mode=products&manufacturer=36405" className="dsg-block-31-link avb-link">
                        {"French Door Refrigerators"}
                      </Link>
                    </li>
                    <li className="avb-list__item avb-list--noBullet dsg-block-31-list-item">
                      <Link href="/catalog/counter-depth-refrigerator?display_mode=products&manufacturer=36405" className="dsg-block-31-link avb-link">
                        {"Counter Depth Refrigerators"}
                      </Link>
                    </li>
                    <li className="avb-list__item avb-list--noBullet dsg-block-31-list-item">
                      <Link href="/catalog/top-freezer-refrigerator?display_mode=products&manufacturer=36405" className="dsg-block-31-link avb-link">
                        {"Top Freezer Refrigerators"}
                      </Link>
                    </li>
                    <li className="avb-list__item avb-list--noBullet dsg-block-31-list-item">
                      <Link href="/catalog/bottom-freezer-refrigerator?display_mode=products&manufacturer=36405" className="dsg-block-31-link avb-link">
                        {"Bottom Freezer Refrigerators"}
                      </Link>
                    </li>
                    <li className="avb-list__item avb-list--noBullet dsg-block-31-list-item">
                      <Link href="/catalog/refrigerators?display_mode=products&manufacturer=36405" className="dsg-block-31-link avb-link">
                        {"Other Refrigerators"}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--large-3 avb-grid__column--marginBottom dsg-block-31__column-border">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalTop avb-wrapper--background dsg-block-31__background">
                <div className="avb-wrapper dsg-block-31__content">
                  <h2 className="avb-typography__heading avb-typography__heading--title">
                    <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-block-31__heading-line-1">
                      <img className="dsg-block-31-image" src="/media/icons/range-w-1-600-w100.png" alt="" />
                    </span>
                    <Link href="/catalog/cooking?display_mode=products&manufacturer=36405" className="dsg-block-1-link avb-link">
                      <span className="avb-typography__heading-line avb-typography__heading-line--light avb-typography__heading-line--medium dsg-block-31__heading-line-2">
                        {"Haier Cooking "}
                        <Icon name="angle-right" variant="regular" />
                      </span>
                    </Link>
                  </h2>
                  <ul className="avb-list dsg-block-31-list">
                    <li className="avb-list__item avb-list--noBullet dsg-block-31-list-item">
                      <Link href="/catalog/ranges?display_mode=products&manufacturer=36405" className="dsg-block-31-link avb-link">
                        {"Ranges"}
                      </Link>
                    </li>
                    <li className="avb-list__item avb-list--noBullet dsg-block-31-list-item">
                      <Link href="/catalog/cooktops?display_mode=products&manufacturer=36405" className="dsg-block-31-link avb-link">
                        {"Cooktops"}
                      </Link>
                    </li>
                    <li className="avb-list__item avb-list--noBullet dsg-block-31-list-item">
                      <Link href="/catalog/wall-ovens?display_mode=products&manufacturer=36405" className="dsg-block-31-link avb-link">
                        {"Wall Ovens"}
                      </Link>
                    </li>
                    <li className="avb-list__item avb-list--noBullet dsg-block-31-list-item">
                      <Link href="/catalog/microwaves?display_mode=products&manufacturer=36405" className="dsg-block-31-link avb-link">
                        {"Microwaves"}
                      </Link>
                    </li>
                    <li className="avb-list__item avb-list--noBullet dsg-block-31-list-item">
                      <Link href="/catalog/ventilation?display_mode=products&manufacturer=36405" className="dsg-block-31-link avb-link">
                        {"Ventilation"}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--large-3 avb-grid__column--marginBottom dsg-block-31__column-border">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalTop avb-wrapper--background dsg-block-31__background">
                <div className="avb-wrapper dsg-block-31__content">
                  <h2 className="avb-typography__heading avb-typography__heading--title">
                    <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-block-31__heading-line-1">
                      <img className="dsg-block-31-image" src="/media/icons/dishwasher-w-1-300-w100.png" alt="" />
                    </span>
                    <Link href="/catalog/dishwashers?display_mode=products&manufacturer=36405" className="dsg-block-1-link avb-link">
                      <span className="avb-typography__heading-line avb-typography__heading-line--light avb-typography__heading-line--medium dsg-block-31__heading-line-2">
                        {"Haier Clean Up "}
                        <Icon name="angle-right" variant="regular" />
                      </span>
                    </Link>
                  </h2>
                  <ul className="avb-list dsg-block-31-list">
                    <li className="avb-list__item avb-list--noBullet dsg-block-31-list-item">
                      <Link href="/catalog/built-in-dishwasher?display_mode=products&manufacturer=36405" className="dsg-block-31-link avb-link">
                        {"Built In Dishwashers"}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="31" className="avb-designer-block avb-typography dsg-block-31 dsg-block-31-row2">
        <div className="avb-grid avb-grid--container dsg-block-31-row-border">
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--large-3 avb-grid__column--marginBottom dsg-block-31__column-border">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalTop avb-wrapper--background dsg-block-31__background">
                <div className="avb-wrapper dsg-block-31__content">
                  <h2 className="avb-typography__heading avb-typography__heading--title">
                    <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-block-31__heading-line-1">
                      <img className="dsg-block-31-image dsg-block-31-image-b" src="/media/icons/is-air-conditioner-w-1-300-w200.png" alt="" />
                    </span>
                    <Link href="/catalog/small-appliances-and-accessories?display_mode=products&manufacturer=36405" className="dsg-block-1-link avb-link">
                      <span className="avb-typography__heading-line avb-typography__heading-line--light avb-typography__heading-line--medium dsg-block-31__heading-line-2">
                        {"Haier Other Appliances "}
                        <Icon name="angle-right" variant="regular" />
                      </span>
                    </Link>
                  </h2>
                  <ul className="avb-list dsg-block-31-list">
                    <li className="avb-list__item avb-list--noBullet dsg-block-31-list-item">
                      <Link href="/catalog/dehumidifier?display_mode=products&manufacturer=36405" className="dsg-block-31-link avb-link">
                        {"Dehumidifiers"}
                      </Link>
                    </li>
                    <li className="avb-list__item avb-list--noBullet dsg-block-31-list-item">
                      <Link href="/catalog/air-conditioners?display_mode=products&manufacturer=36405" className="dsg-block-31-link avb-link">
                        {"Air Conditioners"}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="26" className="avb-designer-block avb-typography dsg-block-26">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom">
            <div className="avb-wrapper dsg-block-26__content">
              <h2 className="avb-typography__heading avb-typography__heading--title"></h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
