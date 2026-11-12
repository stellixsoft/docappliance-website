import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

/** Page content for / (ported from the live CMS markup). */
export default function HomeContent() {
  return (
    <div className="avb-main page-home">
      <section data-id="4" className="avb-designer-block avb-typography dsg-block-4">
        <div className="avb-grid avb-grid--container">
          <div className="avb-agrid__column avb-grid__column--medium-7 avb-grid__column--marginBottom">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-4__background-1">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-4__content">
                <div className="avb-wrapper">
                  <h1 className="avb-typography__heading avb-typography__heading--title">
                    <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-main-heading dsg-tools-color-light dsg-block-4__heading-line-1">
                      {" America’s Most Trusted Appliance Repair. "}
                    </span>
                  </h1>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-4__paragraph">
                    {" Professional diagnostics. Transparent pricing. Crafted service delivered with care to the heartbeat of your home. "}
                  </p>
                  <span className="dsg-block-4__button-wrap">
                    <Link href="/services#schedule-service" className="avb-button avb-button--primary dsg-tools-secondary-button dsg-block-4__button avb-link">
                      {" Schedule Service "}
                    </Link>
                    <Link href="/contacts" className="avb-button avb-button--primary dsg-tools-secondary-button dsg-block-4__button avb-link">
                      {" Find Your Location "}
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="28" className="avb-designer-block avb-typography dsg-block-28 dsg-tools-bgcolor-gradient">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom">
            <div className="avb-wrapper dsg-block-28__content">
              <h2 className="avb-typography__heading avb-typography__heading--title dsg-tools-main-heading dsg-tools-color-light dsg-block-28__heading">
                {" We Work on All Brands of Appliances! "}
              </h2>
              <p className="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-28__paragraph">
                {" You can trust that you will never be told we don’t or can’t work on any particular brand of appliance. Our helpful staff is waiting by to answer any questions you may have. "}
              </p>
              <ul className="avb-list avb-list--horizontal dsg-block-28-list">
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-amana-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-bertazzoni_2_w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-broan-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-bosch-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-ge-cafe-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/dacor-logo-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-danby-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-frigidaire-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-ge-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/hotpoint-logo-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-jenn-air-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-kitchenaid-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-lg-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-lynx-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-magic-chief-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-maytag.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/miele-w-cropped.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-samsung-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-speed-queen-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-sub-zero-frame-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-summit-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-thermador-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/u-line-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-vent-a-hood-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-whirlpool-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-wolf-framed-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
                <li className="avb-list__item dsg-block-28-list-item">
                  <div className="avb-picture dsg-block-28-picture">
                    <img alt="Brand logo" src="/media/promotions/responsive-banners/logos/logo-zephyr-ventilation-w.png" className="avb-picture__image dsg-block-28-image" loading="lazy" width={120} height={120} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section data-id="27" className="avb-designer-block avb-typography dsg-block-27 dsg-tools-fill-dark">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12">
            <div className="avb-wrapper dsg-block-27__content">
              <ul className="avb-list avb-list--horizontal dsg-block-27__list">
                <li className="avb-list__item dsg-block-27__list-item">
                  <Link href="/services#appliance-service" className="dsg-block-27__link avb-link">
                    {" "}
                    <Icon name="tools" variant="light" className="dsg-tools-color-light dsg-block-27__icon" />
                    {" "}
                    <span className="dsg-tools-sub-heading dsg-tools-color-light dsg-block-27__heading">
                      {" Appliance Repairs "}
                    </span>
                    {" "}
                    <span className="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-27__paragraph dsg-tools-hide-mobile">
                      {" We pride ourselves on quality and excellent service. Our friendly team of factory-trained technicians are happy to help with all your service needs! "}
                    </span>
                    {" "}
                  </Link>
                </li>
                <li className="avb-list__item dsg-block-27__list-item">
                  <Link href="/services#warranties" className="dsg-block-27__link avb-link">
                    {" "}
                    <Icon name="shield-check" variant="light" className="dsg-tools-color-light dsg-block-27__icon" />
                    {" "}
                    <span className="dsg-tools-sub-heading dsg-tools-color-light dsg-block-27__heading">
                      {" Warranties "}
                    </span>
                    {" "}
                    <span className="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-27__paragraph dsg-tools-hide-mobile">
                      {" You can’t put a price on peace of mind. Our Expert Protection packages offer extended service for your purchase after the manufacturer's warranty runs out. "}
                    </span>
                    {" "}
                  </Link>
                </li>
                <li className="avb-list__item dsg-block-27__list-item">
                  <Link href="/services#installation" className="dsg-block-27__link avb-link">
                    {" "}
                    <Icon name="toolbox" variant="light" className="dsg-tools-color-light dsg-block-27__icon" />
                    {" "}
                    <span className="dsg-tools-sub-heading dsg-tools-color-light dsg-block-27__heading">
                      {" Installations "}
                    </span>
                    {" "}
                    <span className="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-27__paragraph dsg-tools-hide-mobile">
                      {" Performed with care by our in-house certified professionals to ensure your appliances are installed and working properly. "}
                    </span>
                    {" "}
                  </Link>
                </li>
                <li className="avb-list__item dsg-block-27__list-item">
                  <Link href="/services#consultations" className="dsg-block-27__link avb-link">
                    {" "}
                    <Icon name="clipboard-list-check" variant="light" className="dsg-tools-color-light dsg-block-27__icon" />
                    {" "}
                    <span className="dsg-tools-sub-heading dsg-tools-color-light dsg-block-27__heading">
                      {" Consultations "}
                    </span>
                    {" "}
                    <span className="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-27__paragraph dsg-tools-hide-mobile">
                      {" Navigate the world of modern appliances with confidence. Get personalized, honest advice from seasoned experts. "}
                    </span>
                    {" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section data-id="26" className="avb-designer-block avb-typography dsg-block-26 dsg-tools-fill-light">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom dsg-tools-nomp">
            <div className="avb-wrapper dsg-block-26__content dsg-tools-bgcolor-gradient">
              <h2 className="avb-typography__heading">
                <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-main-heading dsg-tools-color-light dsg-block-26__heading-line-1">
                  {" Doctor Appliance is In! "}
                </span>
              </h2>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__paragraph">
                {" Doctor Appliance provides professional in-home appliance repair for most major brands, including washers, dryers, refrigerators, ovens, and more. Our technicians focus on accurate diagnostics, efficient repairs, and dependable service. We work with major manufacturers and warranty providers to deliver authorized service, and stand behind our work with a one-year workmanship warranty on customer‑paid repairs. "}
              </p>
              <Link href="/preventative-maintenance" className="avb-button dsg-tools-secondary-button dsg-block-26__button avb-link">
                {" Learn More "}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section data-id="29" className="avb-designer-block avb-typography dsg-block-29">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom dsg-tools-nomp">
            <div className="avb-wrapper dsg-block-29__content">
              <h2 className="avb-typography__heading dsg-block-29__heading">
                <span className="avb-typography__heading dsg-tools-color-dark dsg-tools-main-heading">
                  {" Customer Reviews "}
                </span>
              </h2>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-29__heading-paragraph">
                {" Our customers are our family, and we love to hear what they have to say. Check out their rave reviews right here. "}
              </p>
              <ul className="avb-list avb-list--horizontal dsg-block-29-list">
                <li className="avb-list__item dsg-block-29-list-item">
                  <span className="dsg-block-29__stars-container-single">
                    <Icon name="star" variant="solid" className="dsg-block-29__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29__star-single" />
                  </span>
                  <Icon name="quote-left" variant="solid" className="dsg-tools-color-primary dsg-block-29-icon" />
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-29__review">
                    {" Great service and fair prices. They were able to come out the same day I called and quickly repaired my dryer. I would definitely recommend. "}
                  </p>
                  <Icon name="quote-right" variant="solid" className="dsg-tools-color-primary dsg-block-29-icon" />
                  <span className="dsg-block-29-bottom">
                    <span className="dsg-tools-main-paragraph dsg-tools-color-primary dsg-block-29-name">
                      {" Lisa C. "}
                    </span>
                  </span>
                </li>
                <li className="avb-list__item dsg-block-29-list-item">
                  <span className="dsg-block-29__stars-container-single">
                    <Icon name="star" variant="solid" className="dsg-block-29__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29__star-single" />
                  </span>
                  <Icon name="quote-left" variant="solid" className="dsg-tools-color-primary dsg-block-29-icon" />
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-29__review">
                    {" Derek repaired a GE Advantium oven and a Samsung refrigerator for us. He quickly diagnosed the problems, ordered and installed needed parts, all while providing excellent service at an extremely reasonable price. Problems, call Doctor Appliance! "}
                  </p>
                  <Icon name="quote-right" variant="solid" className="dsg-tools-color-primary dsg-block-29-icon" />
                  <span className="dsg-block-29-bottom">
                    <span className="dsg-tools-main-paragraph dsg-tools-color-primary dsg-block-29-name">
                      {" Ross R. "}
                    </span>
                  </span>
                </li>
                <li className="avb-list__item dsg-block-29-list-item">
                  <span className="dsg-block-29__stars-container-single">
                    <Icon name="star" variant="solid" className="dsg-block-29__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29__star-single" />
                  </span>
                  <Icon name="quote-left" variant="solid" className="dsg-tools-color-primary dsg-block-29-icon" />
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-29__review">
                    {" Excellent service! We had another repair company come out to fix our Bosch oven. After 3 visits they said it could not be repaired. Didn’t give up, called Doctor Appliance, they came right out, immediately found the wiring problem and repaired same day. Couldn’t be happier, highly recommend! "}
                  </p>
                  <Icon name="quote-right" variant="solid" className="dsg-tools-color-primary dsg-block-29-icon" />
                  <span className="dsg-block-29-bottom">
                    <span className="dsg-tools-main-paragraph dsg-tools-color-primary dsg-block-29-name">
                      {" Laura "}
                    </span>
                  </span>
                </li>
                <li className="avb-list__item dsg-block-29-list-item">
                  <span className="dsg-block-29__stars-container-single">
                    <Icon name="star" variant="solid" className="dsg-block-29__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29__star-single" />
                    <Icon name="star" variant="solid" className="dsg-block-29__star-single" />
                  </span>
                  <Icon name="quote-left" variant="solid" className="dsg-tools-color-primary dsg-block-29-icon" />
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-29__review">
                    {" Derek came the same day I called and fixed my dryer in less than an hour. Did a thorough job and was so professional! I highly recommend their services! "}
                  </p>
                  <Icon name="quote-right" variant="solid" className="dsg-tools-color-primary dsg-block-29-icon" />
                  <span className="dsg-block-29-bottom">
                    <span className="dsg-tools-main-paragraph dsg-tools-color-primary dsg-block-29-name">
                      {" Jennifer C. "}
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section data-id="1" className="avb-designer-block avb-typography dsg-block-1">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom dsg-block-1__grid-column">
            <div className="avb-wrapper avb-wrapper--background dsg-block-1__background">
              <div className="avb-wrapper dsg-block-1__content">
                <h2 className="avb-typography__heading avb-typography__heading--title">
                  <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-main-heading dsg-tools-color-light dsg-block-1__heading-line-1">
                    <Icon name="map-marker-alt" variant="light" className="dsg-block-1-icon" />
                    {" We proudly "}
                    <span className="dsg-block-1-text">
                      {" Service "}
                    </span>
                    {" the following areas: "}
                  </span>
                </h2>
                <ul className="avb-list avb-list--horizontal dsg-block-1-list">
                  <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-light dsg-block-1-list-item">
                    <Link href="/estill-springs-tn" className="dsg-block-1__link avb-link">
                      {" Estill Springs, TN "}
                    </Link>
                    <span className="dsg-block-1__divider">
                      {"|"}
                    </span>
                  </li>
                  <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-light dsg-block-1-list-item">
                    <Link href="/knoxville-tn" className="dsg-block-1__link avb-link">
                      {" Knoxville, TN "}
                    </Link>
                    <span className="dsg-block-1__divider">
                      {"|"}
                    </span>
                  </li>
                  <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-light dsg-block-1-list-item">
                    <Link href="/phoenix-az" className="dsg-block-1__link avb-link">
                      {" Phoenix, AZ "}
                    </Link>
                    <span className="dsg-block-1__divider">
                      {"|"}
                    </span>
                  </li>
                  <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-light dsg-block-1-list-item">
                    <Link href="/salina-ks" className="dsg-block-1__link avb-link">
                      {" Salina, KS "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
