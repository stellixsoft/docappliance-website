import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { MobileCarousel } from "@/components/ui/MobileCarousel";
import { FeaturedProducts } from "@/components/store/FeaturedProducts";

/** Page content for / (ported from the live CMS markup). */
export default function HomeContent() {
  return (
    <div className="avb-main store-page-home">
      <section data-id="32" className="avb-designer-block avb-typography dsg-tools-fill-dark dsg-block-32z">
        <div className="avb-grid dsg-block-32z-grid">
          <div className="avb-grid__column avb-grid__column--medium-4 dsg-tools-mobile-hide dsg-tools-nomp dsg-tools-fill-light dsg-block-32z-grid__column-left">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall dsg-block-32z-wrapper-left">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter avb-wrapper--background dsg-block-32z__background dsg-block-32z__background-1"></div>
              <div className="avb-wrapper dsg-block-32z__content">
                <h1 className="avb-typography__heading avb-typography__heading--title dsg-tools-nomp">
                  <span className="avb-typography__heading-line dsg-tools-nomp dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-32z__heading-line-0">
                    {" Speed Queen "}
                  </span>
                  <span className="avb-typography__heading-line dsg-tools-nomp dsg-tools-main-heading dsg-tools-color-dark dsg-block-32z__heading-line-1">
                    {" The Proven Performer "}
                  </span>
                  <span className="avb-typography__heading-line dsg-tools-nomp dsg-tools-sub-heading dsg-tools-color-dark dsg-block-32z__heading-line-2">
                    {" in Laundry "}
                  </span>
                </h1>
                <Link href="/speed-queen-overview" className="avb-button dsg-tools-main-button dsg-block-32z__button avb-link">
                  {"Shop Now"}
                </Link>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-4 dsg-tools-mobile-hide dsg-tools-nomp dsg-block-32z-grid__column-middle">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall dsg-block-32z-wrapper-sml">
              <div className="avb-grid dsg-tools-fill-light dsg-block-32z-grid-sml">
                <div className="avb-wrapper dsg-block-32z__content-sml">
                  <h2 className="avb-typography__heading avb-typography__heading--title dsg-tools-nomp">
                    <span className="avb-typography__heading-line dsg-tools-main-heading dsg-tools-color-dark dsg-block-32z__heading-line-1-sml">
                      {" Save More on the Appliance You Love "}
                    </span>
                  </h2>
                  <Link href="/catalog/special/brandsource_point_of_sale_marketing/Clearance" className="avb-button dsg-tools-secondary-button dsg-tools-btn-sml avb-link">
                    {"Shop Clearance"}
                  </Link>
                </div>
                <div className="avb-wrapper avb-wrapper--background dsg-block-32z__background-sml dsg-block-32z__background-2"></div>
              </div>
              <div className="avb-grid dsg-tools-fill-light dsg-block-32z-grid-sml">
                <div className="avb-wrapper avb-wrapper--background dsg-block-32z__background-sml dsg-block-32z__background-3"></div>
                <div className="avb-wrapper dsg-block-32z__content-sml">
                  <h2 className="avb-typography__heading avb-typography__heading--title dsg-tools-nomp">
                    <span className="avb-typography__heading-line dsg-tools-main-heading dsg-tools-color-dark dsg-block-32z__heading-line-1-sml">
                      {" Minor Scratches, Major Savings! "}
                    </span>
                  </h2>
                  <Link href="/catalog/special/brandsource_point_of_sale_marketing/Scratch%20and%20Dent" className="avb-button dsg-tools-secondary-button dsg-tools-btn-sml avb-link">
                    {"Shop Scratch & Dent"}
                  </Link>
                </div>
              </div>
              <div className="avb-grid dsg-tools-fill-light dsg-block-32z-grid-sml">
                <div className="avb-wrapper dsg-block-32z__content-sml">
                  <h2 className="avb-typography__heading avb-typography__heading--title dsg-tools-nomp">
                    <span className="avb-typography__heading-line dsg-tools-main-heading dsg-tools-color-dark dsg-block-32z__heading-line-1-sml">
                      {" As Good as New! "}
                    </span>
                  </h2>
                  <Link href="/appliance-repair" className="avb-button dsg-tools-secondary-button dsg-tools-btn-sml avb-link">
                    {"Appliance Repair"}
                  </Link>
                </div>
                <div className="avb-wrapper avb-wrapper--background dsg-block-32z__background-sml dsg-block-32z__background-4"></div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-4 dsg-tools-nomp dsg-tools-fill-light dsg-block-32z-grid__column-right">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall dsg-block-32z-wrapper-right">
              <div className="avb-wrapper avb-wrapper--background dsg-block-32z__background dsg-block-32z__background-5"></div>
              <div className="avb-wrapper dsg-block-32z__content">
                <h2 className="avb-typography__heading avb-typography__heading--title">
                  <span className="avb-typography__heading-line dsg-tools-nomp dsg-tools-sub-heading dsg-tools-color-dark dsg-block-32z__heading-line-2">
                    {" Interested in "}
                  </span>
                  <span className="avb-typography__heading-line dsg-tools-nomp dsg-tools-main-heading dsg-tools-color-dark dsg-block-32z__heading-line-1">
                    {" Quick & Easy Financing? "}
                  </span>
                </h2>
                <Link href="/financing" className="avb-button dsg-tools-main-button dsg-block-32z__button avb-link">
                  {"Learn More"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="37" className="avb-designer-block avb-typography dsg-block-37">
        <div className="avb-grid">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom dsg-tools-nomp">
            <div className="avb-wrapper dsg-block-37__content">
              <MobileCarousel className="" perView={4}>
                <div className="mobile-carousel__slide">
                  <Link href="/catalog/washers" className="dsg-block-37__item avb-link">
                    {" "}
                    <div className="avb-picture dsg-block-37__picture">
                      <img alt="Laundry" className="avb-picture__image dsg-block-37__image" loading="lazy" width={120} height={120} src="/media/members/h0136-doctor/cat-icon-laundry-v2-w200.png" />
                    </div>
                    {" "}
                    <span className="dsg-tools-sub-heading dsg-tools-color-dark dsg-block-37__text">
                      {"Laundry"}
                    </span>
                    {" "}
                  </Link>
                </div>
                <div className="mobile-carousel__slide">
                  <Link href="/catalog/refrigeration" className="dsg-block-37__item avb-link">
                    {" "}
                    <div className="avb-picture dsg-block-37__picture">
                      <img alt="Refrigeration" className="avb-picture__image dsg-block-37__image" loading="lazy" width={120} height={120} src="/media/members/h0136-doctor/cat-icon-refrigeration-v2-w200.png" />
                    </div>
                    {" "}
                    <span className="dsg-tools-sub-heading dsg-tools-color-dark dsg-block-37__text">
                      {"Refrigeration"}
                    </span>
                    {" "}
                  </Link>
                </div>
                <div className="mobile-carousel__slide">
                  <Link href="/catalog/cooking" className="dsg-block-37__item avb-link">
                    {" "}
                    <div className="avb-picture dsg-block-37__picture">
                      <img alt="Cooking" className="avb-picture__image dsg-block-37__image" loading="lazy" width={120} height={120} src="/media/members/h0136-doctor/cat-icon-cooking-v2-w200.png" />
                    </div>
                    {" "}
                    <span className="dsg-tools-sub-heading dsg-tools-color-dark dsg-block-37__text">
                      {"Cooking"}
                    </span>
                    {" "}
                  </Link>
                </div>
                <div className="mobile-carousel__slide">
                  <Link href="/catalog/dishwashers" className="dsg-block-37__item avb-link">
                    {" "}
                    <div className="avb-picture dsg-block-37__picture">
                      <img alt="Dishwashers" className="avb-picture__image dsg-block-37__image" loading="lazy" width={120} height={120} src="/media/members/h0136-doctor/cat-icon-dishwashers-v2-w200.png" />
                    </div>
                    {" "}
                    <span className="dsg-tools-sub-heading dsg-tools-color-dark dsg-block-37__text">
                      {"Dishwashers"}
                    </span>
                    {" "}
                  </Link>
                </div>
              </MobileCarousel>
            </div>
          </div>
        </div>
      </section>
      <section data-id="26" className="avb-designer-block avb-typography dsg-block-26">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom dsg-tools-nomp">
            <div className="avb-wrapper dsg-block-26__content">
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph">
                {" Doctor Appliance is built on the belief that appliance repair should feel like care, not chaos. We bring craftsmanship, honesty, and humanity to every service call, delivering accurate diagnostics, transparent communication, and true professionalism. Partnered with 25+ major manufacturers and serving multiple regions, we treat every home with respect and every customer with dignity. Our goal is simple: to set the new standard for appliance repair and restore confidence in the heartbeat of your home. "}
              </p>
              <Link href="/about-us" className="avb-button dsg-tools-main-button avb-link">
                {" Learn More "}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section data-id="44" className="avb-designer-block avb-typography dsg-tools-mobile-hide dsg-block-44">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom dsg-tools-nomp">
            <div className="avb-list avb-list--horizontal dsg-block-44-list">
              <div className="avb-list__item dsg-block-44-list-item">
                <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-44-width">
                  <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-44-width">
                    <Link href="/catalog/special/promotion/BuyMoreSaveMore1864en_US" className="dsg-block-44-width dsg-block-44-link avb-link">
                      {" "}
                      <div className="avb-wrapper dsg-block-44-grid">
                        {" "}
                        <div className="avb-picture dsg-block-44-picture">
                          <img alt="Frigidaire Pro Buy More Save More Rebate Banner" src="/media/vendor-assets/appliances/frigidaire/frigidaire-professional/Frigidaire-Professional-Vignette_35-w600.jpg" className="avb-picture__image dsg-block-44-image" loading="lazy" width={120} height={120} />
                        </div>
                        {" "}
                        <div className="dsg-block-44__content">
                          {" "}
                          <div className="avb-picture dsg-block-44-logo-picture">
                            <img alt="Frigidaire Pro Logo" src="/media/promotions/responsive-banners/logos/logo-frigidaire-professional-w110.png" className="avb-picture__image dsg-block-44-logo" loading="lazy" width={120} height={120} />
                          </div>
                          {" "}
                          <h2 className="avb-typography__heading avb-typography__heading--title dsg-block-44__heading">
                            {" "}
                            <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-sub-heading dsg-tools-color-dark dsg-block-44__heading-line-1">
                              {" Buy More Save More "}
                            </span>
                            {" "}
                          </h2>
                          {" "}
                          <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-44__paragraph">
                            {" Save up to $1000 on qualifying suite combinations. "}
                          </p>
                          {" "}
                          <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-44__paragraph-sml">
                            {" Valid Aug 21, 2025 - Dec 31, 2025 "}
                          </p>
                          {" "}
                          <div className="avb-link avb-link avb-button dsg-tools-main-button dsg-block-44__button" data-href="https://sales.docappliance.com/catalog/special/promotion/BuyMoreSaveMore1864en_US">
                            {" Shop Now "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="avb-list__item dsg-block-44-list-item">
                <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-44-width">
                  <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-44-width">
                    <Link href="/catalog/special/promotion/ConsumerRebate1573en_US" className="dsg-block-44-width dsg-block-44-link avb-link">
                      {" "}
                      <div className="avb-wrapper dsg-block-44-grid">
                        {" "}
                        <div className="avb-picture dsg-block-44-picture">
                          <img alt="GE & GE Profile Fit Guarantee Rebate Banner" src="/media/vendor-assets/appliances/ge/kitchen/241005_12_14_2022_3_13_12_PM-w600.jpg" className="avb-picture__image dsg-block-44-image" loading="lazy" width={120} height={120} />
                        </div>
                        {" "}
                        <div className="dsg-block-44__content">
                          {" "}
                          <div className="avb-picture dsg-block-44-logo-picture">
                            <img alt="GE Profile Logo" src="/media/manufacturers/GE%20Profile-w110.png" className="avb-picture__image dsg-block-44-logo" loading="lazy" width={120} height={120} />
                          </div>
                          {" "}
                          <h2 className="avb-typography__heading avb-typography__heading--title dsg-block-44__heading">
                            {" "}
                            <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-sub-heading dsg-tools-color-dark dsg-block-44__heading-line-1">
                              {" Up To $300 Fit Guarantee Rebate "}
                            </span>
                            {" "}
                          </h2>
                          {" "}
                          <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-44__paragraph">
                            {" Save up to $300 on qualifying purchases. "}
                          </p>
                          {" "}
                          <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-44__paragraph-sml">
                            {" Valid Jul 1, 2025 - Dec 31, 2025 "}
                          </p>
                          {" "}
                          <div className="avb-link avb-link avb-button dsg-tools-main-button dsg-block-44__button" data-href="https://sales.docappliance.com/catalog/special/promotion/ConsumerRebate1573en_US">
                            {" Shop Now "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="avb-list__item dsg-block-44-list-item">
                <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-44-width">
                  <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-44-width">
                    <Link href="/catalog/special/promotion/ConsumerRebate1301en_US" className="dsg-block-44-width dsg-block-44-link avb-link">
                      {" "}
                      <div className="avb-wrapper dsg-block-44-grid">
                        {" "}
                        <div className="avb-picture dsg-block-44-picture">
                          <img alt="Whirlpool up to $300 Fit Guarantee Rebate Banner" src="/media/vendor-assets/appliances/whirlpool/kitchen/full/set-p220261wc-015z-w600.jpg" className="avb-picture__image dsg-block-44-image" loading="lazy" width={120} height={120} />
                        </div>
                        {" "}
                        <div className="dsg-block-44__content">
                          {" "}
                          <div className="avb-picture dsg-block-44-logo-picture">
                            <img alt="Whirlpool Logo" src="/media/manufacturers/Whirlpool-w110?w=110.png" className="avb-picture__image dsg-block-44-logo" loading="lazy" width={120} height={120} />
                          </div>
                          {" "}
                          <h2 className="avb-typography__heading avb-typography__heading--title dsg-block-44__heading">
                            {" "}
                            <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-sub-heading dsg-tools-color-dark dsg-block-44__heading-line-1">
                              {" Up To $300 Fit Guarantee Rebate "}
                            </span>
                            {" "}
                          </h2>
                          {" "}
                          <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-44__paragraph">
                            {" Save up to $300 on qualifying purchases. "}
                          </p>
                          {" "}
                          <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-44__paragraph-sml">
                            {" Valid Jan 1, 2025 - Dec 31, 2025 "}
                          </p>
                          {" "}
                          <div className="avb-link avb-link avb-button dsg-tools-main-button dsg-block-44__button" data-href="https://sales.docappliance.com/catalog/special/promotion/ConsumerRebate1301en_US">
                            {" Shop Now "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="39" className="avb-designer-block avb-typography dsg-block-39">
        <div className="avb-grid">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom dsg-tools-nomp">
            <div className="avb-wrapper dsg-block-39__content">
              <h2 className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-primary dsg-block-39__heading">
                {" Featured Products "}
              </h2>
              <div>
                <FeaturedProducts productKeys={["frigidaire-gallery-36-256-cu-ft-smudge-proof-stainless-steel-side-by-side-refrigerator-grss2652af-739983","lg-45-cu-ft-white-top-load-washer-with-impeller-and-turbodrum-technology-wt7000cw-827536","lg-73-cu-ft-white-vented-electric-dryer-dle7000w-702153","speed-queen-tc5-32-cu-ft-matte-black-agitator-top-load-washer-tc5003bn-1595429"]} perView={4} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="29" className="avb-designer-block avb-typography dsg-tools-fill-pattern-01 dsg-block-29">
        <div className="avb-grid">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom dsg-tools-nomp">
            <div className="avb-wrapper dsg-block-29__content">
              <h2 className="avb-typography__heading dsg-tools-nomp">
                <span className="avb-typography__heading-line dsg-tools-main-heading dsg-tools-color-light dsg-block-29__heading-line-1">
                  {" Appliances Built to Last "}
                </span>
              </h2>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-29__paragraph">
                {" From the kitchen to the laundry room, create a functional, stylish and energy-efficient home with appliances designed for the busiest rooms in the house. "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section data-id="11" className="avb-designer-block avb-typography dsg-tools-fill-pattern-01 dsg-block-11">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--medium-7 avb-grid__column--marginBottom">
            <Link href="/catalog/refrigeration" className="avb-link">
              {" "}
              <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-11__background-1">
                {" "}
                <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter">
                  {" "}
                  <div className="avb-wrapper dsg-block-11__content">
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </Link>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-5">
            <div className="avb-grid">
              <div className="avb-grid__column avb-grid__column--medium-12 avb-grid__column--marginBottom">
                <Link href="/catalog/refrigeration" className="avb-link">
                  {" "}
                  <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-11__background-2">
                    {" "}
                    <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter">
                      {" "}
                      <div className="avb-wrapper dsg-block-11__content">
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </Link>
              </div>
              <div className="avb-grid__column avb-grid__column--medium-12 avb-grid__column--marginBottom">
                <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-tools-fill-light dsg-block-11__background-3">
                  <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter">
                    <div className="avb-wrapper dsg-block-11__content">
                      <h2 className="avb-typography__heading">
                        <span className="avb-typography__heading-line dsg-tools-main-heading dsg-tools-color-primary dsg-block-11__heading-line-1">
                          {" Sophistication in Refrigeration "}
                        </span>
                      </h2>
                      <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-11__paragraph">
                        {" Find the perfect refrigerator that will allow you to stay connected, have flexible storage and temperature settings with quick, easy access to everyday items. "}
                      </p>
                      <Link href="/catalog/refrigeration" className="avb-button dsg-tools-main-button dsg-block-11__button avb-link">
                        {" Shop Refrigeration "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="5" className="avb-designer-block avb-typography dsg-tools-fill-pattern-01 dsg-block-5">
        <div className="avb-grid avb-grid--container dsg-block-5__flex-reverse">
          <div className="avb-grid__column avb-grid__column--medium-5 avb-grid__column--marginBottom">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-tools-fill-primary dsg-block-5__background-1">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-5__content">
                <div className="avb-wrapper">
                  <h2 className="avb-typography__heading">
                    <span className="avb-typography__heading-line dsg-tools-main-heading dsg-tools-color-light dsg-block-5__heading-line-1">
                      {" Laundry Done Right "}
                    </span>
                  </h2>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-5__paragraph">
                    {" Give your clothes the clean they deserve. "}
                  </p>
                  <Link href="/catalog/laundry" className="avb-button dsg-tools-light-button dsg-block-5__button avb-link">
                    {" Shop Laundry "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-7 avb-grid__column--marginBottom">
            <Link href="/catalog/laundry" className="avb-link">
              {" "}
              <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-5__background-2 dsg-block-5__background-2a">
                {" "}
                <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-5__content">
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </Link>
          </div>
        </div>
      </section>
      <section data-id="4" className="avb-designer-block avb-typography dsg-tools-fill-pattern-01 dsg-block-4a">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--medium-7 avb-grid__column--marginBottom">
            <Link href="/catalog/cooking" className="avb-link">
              {" "}
              <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-4a__background-1">
                {" "}
                <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-4a__content">
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </Link>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-5 avb-grid__column--marginBottom">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-tools-fill-light dsg-block-4a__background-2">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-4a__content">
                <div className="avb-wrapper">
                  <h2 className="avb-typography__heading">
                    <span className="avb-typography__heading-line dsg-tools-main-heading dsg-tools-color-primary dsg-block-4a__heading-line-2">
                      {" Culinary Perfection "}
                    </span>
                  </h2>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-4a__paragraph">
                    {" Designed to make cooking easy and your kitchen remarkable. "}
                  </p>
                  <Link href="/catalog/cooking" className="avb-button dsg-tools-main-button dsg-block-4a__button avb-link">
                    {" Shop Cooking "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="5" className="avb-designer-block avb-typography dsg-tools-fill-pattern-01 dsg-block-5 dsg-block-5--padding-bottom">
        <div className="avb-grid avb-grid--container dsg-block-5__flex-reverse">
          <div className="avb-grid__column avb-grid__column--medium-5 avb-grid__column--marginBottom">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-tools-fill-accent dsg-block-5__background-1">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-5__content">
                <div className="avb-wrapper">
                  <h2 className="avb-typography__heading">
                    <span className="avb-typography__heading-line dsg-tools-main-heading dsg-tools-color-light dsg-block-5__heading-line-1">
                      {" The Cleanest Dishes "}
                    </span>
                  </h2>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-5__paragraph">
                    {" Energy-efficient and Smart Technology dishwashers that are smart, sleek & silent. "}
                  </p>
                  <Link href="/catalog/dishwashers" className="avb-button dsg-tools-main-button dsg-block-5__button avb-link">
                    {" Shop Dishwashers "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-7 avb-grid__column--marginBottom">
            <Link href="/catalog/dishwashers" className="avb-link">
              {" "}
              <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-5__background-2 dsg-block-5__background-2b">
                {" "}
                <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-5__content">
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </Link>
          </div>
        </div>
      </section>
      <section data-id="20" className="avb-designer-block avb-typography dsg-block-20">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-tools-nomp">
            <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter">
              <div className="avb-wrapper dsg-block-20__content">
                <Link href="/catalog/freezers" className="dsg-block-20__link avb-link">
                  {" "}
                  <div className="avb-wrapper avb-wrapper--background dsg-block-20__picture dsg-block-20__picture-1"></div>
                  {" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-tools-nomp">
            <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-20__content-height">
              <div className="avb-wrapper dsg-block-20__content">
                <h2 className="avb-typography__heading">
                  <span className="avb-typography__heading-line dsg-tools-main-heading dsg-tools-color-accent dsg-block-20__heading-line-1">
                    {" Chilled to the Bone "}
                  </span>
                </h2>
                <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-20__paragraph">
                  {" Whether you're preserving leftovers, buying in bulk, preparing for holidays or just need more food storage space; our selection of chest freezers and upright freezers offer numerous features to help you freeze food quickly, keep it at the right temperature and access it quickly and easily. "}
                </p>
                <Link href="/catalog/freezers" className="avb-button dsg-tools-main-button dsg-block-20__button avb-link">
                  {" Shop Freezers "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="21" className="avb-designer-block avb-typography dsg-tools-fill-pattern-02 dsg-block-21 dsg-block-21__margin-top">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--medium-6 dsg-block-21__grid-column-1 dsg-tools-nomp">
            <div className="avb-grid">
              <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom dsg-tools-nomp">
                <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall">
                  <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter">
                    <div className="avb-wrapper dsg-block-21__content">
                      <h2 className="avb-typography__heading">
                        <span className="avb-typography__heading-line dsg-tools-main-heading dsg-tools-color-light dsg-block-21__heading-line-1">
                          {" Looking for efficient, flexible heating and cooling? "}
                        </span>
                      </h2>
                      <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-21__paragraph">
                        {" Doctor Appliance offers ductless mini-split sales and service to keep your home comfortable year-round. "}
                      </p>
                      <Link href="/contacts" className="avb-button dsg-tools-secondary-button dsg-block-21__button avb-link">
                        {" Contact Us "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-6 dsg-block-21__grid-column-2 dsg-tools-nomp">
            <Link href="/catalog/appliances" className="avb-link">
              {" "}
              <div className="avb-wrapper avb-wrapper--background dsg-block-21__picture dsg-block-21__picture-1"></div>
              {" "}
            </Link>
          </div>
        </div>
      </section>
      <section data-id="6" className="avb-designer-block avb-typography dsg-block-6a">
        <div className="avb-grid">
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-block-6a__grid-column">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-tools-fill-accent dsg-block-6a__background-1">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-6a__content">
                <div className="avb-wrapper">
                  <h2 className="avb-typography__heading">
                    <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-main-heading dsg-tools-color-light dsg-block-6a__heading-line-1">
                      {" Luxury Brands "}
                    </span>
                    <span className="avb-typography__heading-line dsg-tools-sub-heading dsg-tools-color-light dsg-block-6a__heading-line-2">
                      {" Elevate Your Cooking and Home Living Experience "}
                    </span>
                  </h2>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6a__paragraph">
                    {" With our wide range of premium appliances. "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-tools-nomp">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-6a__background-2">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-6a__content-a">
                <div className="avb-wrapper">
                  <ul className="avb-list avb-list--noBullet dsg-block-6a__list">
                    <li className="avb-list__item dsg-block-6a__list-item dsg-block-6a__list-item-01">
                      <Link href="/viking-overview" className="dsg-block-6a__link avb-link">
                        {" "}
                        <span className="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6a__text">
                          {" Viking "}
                        </span>
                        {" "}
                      </Link>
                    </li>
                    <li className="avb-list__item dsg-block-6a__list-item dsg-block-6a__list-item-02">
                      <Link href="/scotsman-overview" className="dsg-block-6a__link avb-link">
                        {" "}
                        <span className="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6a__text">
                          {" Scotsman "}
                        </span>
                        {" "}
                      </Link>
                    </li>
                    <li className="avb-list__item dsg-block-6a__list-item dsg-block-6a__list-item-03">
                      <Link href="/zephyr-overview" className="dsg-block-6a__link avb-link">
                        {" "}
                        <span className="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6a__text">
                          {" Zephyr "}
                        </span>
                        {" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="28" className="avb-designer-block avb-typography dsg-tools-fill-primary dsg-block-28a">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom dsg-tools-nomp">
            <div className="avb-wrapper dsg-block-28a__content">
              <h2 className="avb-typography__heading avb-typography__heading--title dsg-block-28a__heading">
                <a href="https://www.facebook.com/DoctorAppliance/" className="dsg-tools-main-heading dsg-tools-color-light dsg-block-28a__link avb-link" target="_blank">
                  {" "}
                  <Icon name="facebook-square" variant="brands" className="dsg-block-28a__icon" />
                  {" Follow Us On Facebook! "}
                </a>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section data-id="29" className="avb-designer-block avb-typography dsg-block-29a">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom dsg-tools-nomp">
            <div className="avb-wrapper dsg-block-29a__content">
              <span className="dsg-tools-color-accent dsg-block-29a__stars-container">
                <Icon name="star" variant="solid" className="dsg-block-29a__star" />
                <Icon name="star" variant="solid" className="dsg-block-29a__star" />
                <Icon name="star" variant="solid" className="dsg-block-29a__star" />
                <Icon name="star" variant="solid" className="dsg-block-29a__star" />
                <Icon name="star" variant="solid" className="dsg-block-29a__star" />
              </span>
              <h2 className="avb-typography__heading dsg-block-29a__heading">
                <span className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-primary dsg-block-29a__heading-line-1">
                  {" Customer Reviews "}
                </span>
              </h2>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-29a__heading-line-2">
                {" Our customers are our family, and we love to hear what they have to say. Check out their rave reviews right here. "}
              </p>
              <ul className="avb-list avb-list--horizontal dsg-block-29a-list">
                <li className="avb-list__item dsg-block-29a-list-item">
                  <span className="dsg-tools-color-accent dsg-block-29a__stars-container-single">
                    <Icon name="star" variant="solid" className="dsg-block-29a__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29a__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29a__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29a__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29a__star-single" />
                  </span>
                  <Icon name="quote-left" variant="solid" className="dsg-tools-color-accent dsg-block-29a-icon" />
                  <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-29a__review">
                    {" Ken was very knowledgeable and professional! He took his time explaining how my induction cook top works, answered all my questions and also followed up with a phone call. This was a very pleasurable experience. "}
                  </p>
                  <Icon name="quote-right" variant="solid" className="dsg-tools-color-accent dsg-block-29a-icon" />
                  <span className="dsg-block-29a-bottom">
                    <Icon name="google" variant="brands" className="dsg-tools-color-accent dsg-block-29a-platform" />
                    <span className="dsg-tools-main-paragraph dsg-tools-color-primary dsg-tools-fw-bold dsg-block-29a-name">
                      {" April A. "}
                    </span>
                  </span>
                </li>
                <li className="avb-list__item dsg-block-29a-list-item">
                  <span className="dsg-tools-color-accent dsg-block-29a__stars-container-single">
                    <Icon name="star" variant="solid" className="dsg-block-29a__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29a__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29a__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29a__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29a__star-single" />
                  </span>
                  <Icon name="quote-left" variant="solid" className="dsg-tools-color-accent dsg-block-29a-icon" />
                  <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-29a__review">
                    {" Today Richard came to our home to assess our broken dishwasher for Frigidaire. He was timely, polite, very friendly and fixed the appliance in no time. He cleaned up after himself and I have to say he was one of the nicest and most professional technicians I’ve ever met. Really appreciated him! "}
                  </p>
                  <Icon name="quote-right" variant="solid" className="dsg-tools-color-accent dsg-block-29a-icon" />
                  <span className="dsg-block-29a-bottom">
                    <Icon name="google" variant="brands" className="dsg-tools-color-accent dsg-block-29a-platform" />
                    <span className="dsg-tools-main-paragraph dsg-tools-color-primary dsg-tools-fw-bold dsg-block-29a-name">
                      {" Kim R. "}
                    </span>
                  </span>
                </li>
                <li className="avb-list__item dsg-block-29a-list-item">
                  <span className="dsg-tools-color-accent dsg-block-29a__stars-container-single">
                    <Icon name="star" variant="solid" className="dsg-block-29a__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29a__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29a__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29a__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29a__star-single" />
                  </span>
                  <Icon name="quote-left" variant="solid" className="dsg-tools-color-accent dsg-block-29a-icon" />
                  <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-29a__review">
                    {" We had two visits from two different technicians who had to drive over an hour to get here to diagnose the problem, order parts and then complete the repair. They were both very professional and competent. We'll use them again and recommend them to others. This was a warranty repair so there was no cost to us. "}
                  </p>
                  <Icon name="quote-right" variant="solid" className="dsg-tools-color-accent dsg-block-29a-icon" />
                  <span className="dsg-block-29a-bottom">
                    <Icon name="google" variant="brands" className="dsg-tools-color-accent dsg-block-29a-platform" />
                    <span className="dsg-tools-main-paragraph dsg-tools-color-primary dsg-tools-fw-bold dsg-block-29a-name">
                      {" Karla S. "}
                    </span>
                  </span>
                </li>
                <li className="avb-list__item dsg-block-29a-list-item">
                  <span className="dsg-tools-color-accent dsg-block-29a__stars-container-single">
                    <Icon name="star" variant="solid" className="dsg-block-29a__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29a__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29a__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29a__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29a__star-single" />
                  </span>
                  <Icon name="quote-left" variant="solid" className="dsg-tools-color-accent dsg-block-29a-icon" />
                  <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-29a__review">
                    {" Great service from DoctorAppliance! They were the only people who could service our Beko refrigerator (ice-maker). Landon diagnosed the problem and Ken installed the new ice-maker. It was all done professionally and quickly. We highly recommend Doctor Appliance. "}
                  </p>
                  <Icon name="quote-right" variant="solid" className="dsg-tools-color-accent dsg-block-29a-icon" />
                  <span className="dsg-block-29a-bottom">
                    <Icon name="google" variant="brands" className="dsg-tools-color-accent dsg-block-29a-platform" />
                    <span className="dsg-tools-main-paragraph dsg-tools-color-primary dsg-tools-fw-bold dsg-block-29a-name">
                      {" Mary R. "}
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section data-id="7" className="avb-designer-block avb-typography dsg-block-7a">
        <div className="avb-grid">
          <div className="avb-grid__column avb-grid__column--xsmall-6 avb-grid__column--medium-4 avb-grid__column--marginBottom">
            <div className="avb-lightbox-item dsg-block-7a-lightbox-item" tabIndex={0} role="button">
              <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-7a__background dsg-block-7a__background-1">
                <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-7a__content"></div>
              </div>
              <span></span>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--xsmall-6 avb-grid__column--medium-4 avb-grid__column--marginBottom">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-tools-fill-accent dsg-block-7a__background dsg-block-7a__background-2">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-7a__content">
                <div className="avb-wrapper">
                  <h2 className="avb-typography__heading">
                    <span className="avb-typography__heading-line dsg-tools-main-heading dsg-tools-color-light dsg-block-7a__heading-line-1">
                      {" Get Inspired! "}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--xsmall-12 avb-grid__column--medium-4 avb-grid__column--marginBottom">
            <div className="avb-lightbox-item dsg-block-7a7-lightbox-item" tabIndex={0} role="button">
              <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-7a__background dsg-block-7a__background-3">
                <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-7a__content"></div>
              </div>
              <span></span>
            </div>
          </div>
        </div>
      </section>
      <section data-id="7" className="avb-designer-block avb-typography dsg-block-7a">
        <div className="avb-grid">
          <div className="avb-grid__column avb-grid__column--xsmall-6 avb-grid__column--medium-4 avb-grid__column--marginBottom">
            <div className="avb-lightbox-item dsg-block-7a-lightbox-item" tabIndex={0} role="button">
              <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-7a__background dsg-block-7a__background-4">
                <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-7a__content"></div>
              </div>
              <span></span>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--xsmall-6 avb-grid__column--medium-4 avb-grid__column--marginBottom">
            <div className="avb-lightbox-item dsg-block-7a-lightbox-item" tabIndex={0} role="button">
              <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-7a__background dsg-block-7a__background-5">
                <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-7a__content"></div>
              </div>
              <span></span>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--xsmall-12 avb-grid__column--medium-4 avb-grid__column--marginBottom">
            <div className="avb-lightbox-item dsg-block-7a-lightbox-item" tabIndex={0} role="button">
              <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-7a__background dsg-block-7a__background-6">
                <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-7a__content"></div>
              </div>
              <span></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
