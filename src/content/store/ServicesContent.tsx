import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { MobileCarousel } from "@/components/ui/MobileCarousel";

/** Page content for /services (ported from the live CMS markup). */
export default function ServicesContent() {
  return (
    <div className="avb-main store-page-services">
      <section data-id="21" className="avb-designer-block avb-typography dsg-tools-fill-accent dsg-block-21">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--medium-6 dsg-block-21__grid-column-1">
            <div className="avb-grid">
              <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom">
                <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall">
                  <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter">
                    <div className="avb-wrapper dsg-block-21__content">
                      <h1 className="avb-typography__heading">
                        <span className="avb-typography__heading-line dsg-tools-main-heading dsg-tools-color-light dsg-block-21__heading-line-1">
                          {" Our Services "}
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-block-21__grid-column-2">
            <div className="avb-wrapper avb-wrapper--background dsg-block-21__picture"></div>
          </div>
        </div>
      </section>
      <section data-id="37" className="avb-designer-block avb-typography dsg-tools-fill-light dsg-block-37">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom dsg-block-37__grid-column dsg-tools-nom">
            <div className="avb-wrapper dsg-block-37__content">
              <MobileCarousel className="dsg-tools-desktop-hide">
                <div className="mobile-carousel__slide">
                  <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-37__content-section">
                    <a href="#schedule-service" className="avb-button dsg-tools-secondary-button dsg-block-37__button avb-link">
                      {" "}
                      <Icon name="calendar-lines-pen" variant="light" className="dsg-tools-color-light dsg-block-37-icon" />
                      {" Request Service "}
                    </a>
                  </div>
                </div>
                <div className="mobile-carousel__slide">
                  <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-37__content-section">
                    <a href="mailto:customercare@docappliance.com?cc=dispatch@docappliance.com" className="avb-button dsg-tools-secondary-button dsg-block-37__button avb-link" target="_blank">
                      {" "}
                      <Icon name="envelope" variant="light" className="dsg-tools-color-light dsg-block-37-icon" />
                      {" Email Us "}
                    </a>
                  </div>
                </div>
                <div className="mobile-carousel__slide">
                  <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-37__content-section">
                    <Link href="/contacts" className="avb-button dsg-tools-secondary-button dsg-block-37__button avb-link">
                      {" "}
                      <Icon name="mobile" variant="light" className="dsg-tools-color-light dsg-block-37-icon" />
                      {" Call Us "}
                    </Link>
                  </div>
                </div>
              </MobileCarousel>
              <div className="dsg-tools-mobile-hide dsg-block-37-desktop-list">
                <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-37__content-section">
                  <a href="#schedule-service" className="avb-button dsg-tools-secondary-button dsg-block-37__button avb-link">
                    {" "}
                    <Icon name="calendar-lines-pen" variant="light" className="dsg-tools-color-light dsg-block-37-icon" />
                    {" Request Service "}
                  </a>
                </div>
                <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-37__content-section">
                  <a href="mailto:customercare@docappliance.com?cc=dispatch@docappliance.com" className="avb-button dsg-tools-secondary-button dsg-block-37__button avb-link" target="_blank">
                    {" "}
                    <Icon name="envelope" variant="light" className="dsg-tools-color-light dsg-block-37-icon" />
                    {" Email Us "}
                  </a>
                </div>
                <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-37__content-section">
                  <Link href="/contacts" className="avb-button dsg-tools-secondary-button dsg-block-37__button avb-link">
                    {" "}
                    <Icon name="mobile" variant="light" className="dsg-tools-color-light dsg-block-37-icon" />
                    {" Call Us "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="26" className="avb-designer-block avb-typography dsg-block-26">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom dsg-tools-nomp">
            <div className="avb-wrapper dsg-block-26__content">
              <h2 className="avb-typography__heading">
                <span className="avb-typography__heading-line dsg-tools-main-heading dsg-tools-color-dark dsg-block-26__heading-line-1">
                  {" Service You Can Depend On "}
                </span>
              </h2>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph">
                {" Doctor Appliance was created with a belief that craftsmanship, care, and humanity should never disappear from the trades. We exist to restore dignity to a field that has long been treated as routine, even though it touches the heart of every home. Appliance repair is not just a service; it is a craft. It is a chance to bring order, comfort, and peace back into a family's daily rhythm. "}
              </p>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph">
                {" Our purpose is larger than fixing machines. Our purpose is to care for people. We believe that great service should be personal, reassuring, and shaped by the same bedside manner that once defined the classic neighborhood doctor. The doctor who knew your name in the grocery store; the doctor who took pride in his work; the doctor who treated you as a human being, not a task on a list. This is the spirit we bring to every home we serve. "}
              </p>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph">
                {" Doctor Appliance strives to be the most trusted name in the industry; the company manufacturers rely on; the partner property managers believe in; the service provider homeowners feel comfortable with. Trust is earned through consistency, clarity, transparency, and a commitment to doing the right thing every time. "}
              </p>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph">
                {" Our technicians are not simply repair professionals; they are craftsmen. They approach every diagnosis with precision, every repair with pride, and every customer with empathy and respect. They carry with them a belief that; "}
              </p>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph">
                {" Their work matters. "}
              </p>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph">
                {" Their skill matters. "}
              </p>
              <p className="avb-typography__paragraph dsg-tools-fw-bold dsg-tools-main-paragraph dsg-tools-color-primary dsg-block-26__paragraph">
                {" Most importantly their customers matter. "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section data-id="30" className="avb-designer-block avb-typography dsg-tools-fill-light dsg-tools-mobile-hide dsg-block-30a">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 dsg-tools-nomp">
            <ul className="avb-list avb-list--horizontal dsg-block-30a-list">
              <li className="avb-list__item dsg-block-30a-list-item aos-init aos-animate" data-aos="flip-right">
                <a href="#repairs-parts" className="dsg-block-30a-link avb-link">
                  {" "}
                  <span className="dsg-tools-sub-heading dsg-tools-color-dark dsg-block-30a__list-headline">
                    {" "}
                    <Icon name="toolbox" variant="solid" className="dsg-tools-color-primary dsg-block-30a-icon" />
                    {" Repairs & Parts → "}
                  </span>
                  {" "}
                </a>
              </li>
              <li className="avb-list__item dsg-block-30a-list-item aos-init aos-animate" data-aos="flip-right">
                <a href="#delivery" className="dsg-block-30a-link avb-link">
                  {" "}
                  <span className="dsg-tools-sub-heading dsg-tools-color-dark dsg-block-30a__list-headline">
                    {" "}
                    <Icon name="truck-fast" variant="solid" className="dsg-tools-color-primary dsg-block-30a-icon" />
                    {" Delivery → "}
                  </span>
                  {" "}
                </a>
              </li>
              <li className="avb-list__item dsg-block-30a-list-item aos-init aos-animate" data-aos="flip-right">
                <a href="#installation" className="dsg-block-30a-link avb-link">
                  {" "}
                  <span className="dsg-tools-sub-heading dsg-tools-color-dark dsg-block-30a__list-headline">
                    {" "}
                    <Icon name="tools" variant="solid" className="dsg-tools-color-primary dsg-block-30a-icon" />
                    {" Installation → "}
                  </span>
                  {" "}
                </a>
              </li>
              <li className="avb-list__item dsg-block-30a-list-item aos-init aos-animate" data-aos="flip-right">
                <a href="#haul-away" className="dsg-block-30a-link avb-link">
                  {" "}
                  <span className="dsg-tools-sub-heading dsg-tools-color-dark dsg-block-30a__list-headline">
                    {" "}
                    <Icon name="person-dolly" variant="solid" className="dsg-tools-color-primary dsg-block-30a-icon" />
                    {" Haul Away → "}
                  </span>
                  {" "}
                </a>
              </li>
              <li className="avb-list__item dsg-block-30a-list-item aos-init aos-animate" data-aos="flip-right">
                <a href="#extended-warranties" className="dsg-block-30a-link avb-link">
                  {" "}
                  <span className="dsg-tools-sub-heading dsg-tools-color-dark dsg-block-30a__list-headline">
                    {" "}
                    <Icon name="shield-check" variant="solid" className="dsg-tools-color-primary dsg-block-30a-icon" />
                    {" Extended Warranties → "}
                  </span>
                  {" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section data-id="6" className="avb-designer-block avb-typography dsg-tools-fill-pattern-02 dsg-block-6" id="repairs-parts">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-block-6__order-a dsg-tools-nomp">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-6__background-1">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-6__content">
                <div className="avb-wrapper">
                  <h2 className="avb-typography__heading dsg-tools-sub-heading dsg-block-6-heading">
                    <span className="dsg-block-6-icon dsg-tools-color-light">
                      <Icon name="toolbox" variant="solid" />
                    </span>
                    <span className="avb-typography__heading-line dsg-tools-color-light dsg-block-6__heading-line-1">
                      {" Appliance Repairs & Maintenance "}
                    </span>
                  </h2>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6__paragraph">
                    {" Our factory trained technicians are readily available to service your appliance. We have a large selection of parts and can help you identify the correct piece you need to repair your appliance. "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6__paragraph dsg-tools-fw-bold dsg-tools-nom">
                    {" Need Appliance Parts? "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6__paragraph">
                    {" We have a large selection of parts, trust our friendly service staff to help you to help you find the right part for your appliance. "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6__paragraph dsg-tools-fw-bold dsg-tools-nom">
                    {" Comprehensive Appliance Repairs "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6__paragraph">
                    {" Fast and reliable repair services for all major home appliances including refrigerators, washers, dryers, dishwashers, ovens and more! "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6__paragraph dsg-tools-fw-bold dsg-tools-nom">
                    {" Customer-Focused Approach "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6__paragraph">
                    {" We prioritize clear communication, respectful service, and hassle-free repair experience. "}
                  </p>
                  <Link href="/appliance-repair" className="avb-link avb-button dsg-tools-light-button dsg-block-6__button avb-link">
                    {" Learn More "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-block-6__order-b dsg-tools-nomp">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-6__background-2">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-6__content">
                <div className="avb-wrapper">
                  <div className="avb-picture dsg-block-6-picture">
                    <img alt="Appliance Repairs & Parts" src="/media/vendor-assets/appliances/services/repair/repair-service-dishwasher-v2-w800.jpg" className="avb-picture__image dsg-block-6-image" loading="lazy" width={120} height={120} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="6" className="avb-designer-block avb-typography dsg-tools-fill-dark dsg-block-6" id="delivery">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-tools-nomp">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-6__background-1">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-6__content">
                <div className="avb-wrapper">
                  <div className="avb-picture dsg-block-6-picture">
                    <img alt="Appliance Delivery" src="/media/vendor-assets/appliances/services/delivery/delivery-truck-in-front-house-02-w800.jpg" className="avb-picture__image dsg-block-6-image" loading="lazy" width={120} height={120} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-tools-nomp">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-6__background-2">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-6__content">
                <div className="avb-wrapper">
                  <h2 className="avb-typography__heading dsg-tools-sub-heading dsg-block-6-heading">
                    <span className="dsg-block-6-icon dsg-tools-color-light">
                      <Icon name="truck-fast" variant="solid" />
                    </span>
                    <span className="avb-typography__heading-line dsg-tools-color-light dsg-block-6__heading-line-1">
                      {" Delivery "}
                    </span>
                  </h2>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6__paragraph">
                    {" From on-the-floor expertise to custom delivery, we have your back. We move quickly to get the job done, but we do it right and ensure your satisfaction before we leave. "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6__paragraph dsg-tools-fw-bold dsg-tools-nom">
                    {" Prompt & Reliable "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6__paragraph">
                    {" Our team is dedicated to making your delivery experience quick and hassle free. "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6__paragraph dsg-tools-fw-bold dsg-tools-nom">
                    {" Flexible Scheduling "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6__paragraph">
                    {" We're here to make sure your delivery fits seamlessly into your busy schedule. "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6__paragraph dsg-tools-fw-bold dsg-tools-nom">
                    {" Safe and Secure Handling "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6__paragraph">
                    {" Items are handled with care to navigate through challenging delivery environments. "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="6" className="avb-designer-block avb-typography dsg-tools-fill-mid dsg-block-6" id="installation">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-block-6__order-a dsg-tools-nomp">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-6__background-1">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-6__content">
                <div className="avb-wrapper">
                  <h2 className="avb-typography__heading dsg-tools-sub-heading dsg-block-6-heading">
                    <span className="dsg-block-6-icon dsg-tools-color-light">
                      <Icon name="tools" variant="solid" />
                    </span>
                    <span className="avb-typography__heading-line dsg-tools-color-light dsg-block-6__heading-line-1">
                      {" Installation "}
                    </span>
                  </h2>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6__paragraph">
                    {" Performed with care by our in-house certified professionals to ensure your appliances are installed and working properly. "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6__paragraph dsg-tools-fw-bold dsg-tools-nom">
                    {" Commitment to Excellent Service "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-6__paragraph">
                    {" When finished, we will clean up, answer any questions, and ensure you're 100% satisfied. "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-block-6__order-b dsg-tools-nomp">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-6__background-2">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-6__content">
                <div className="avb-wrapper">
                  <div className="avb-picture dsg-block-6-picture">
                    <img alt="Appliance Installation" src="/media/vendor-assets/appliances/services/installation/services-installation-w800.jpg" className="avb-picture__image dsg-block-6-image" loading="lazy" width={120} height={120} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="6" className="avb-designer-block avb-typography dsg-tools-fill-light dsg-block-6" id="haul-away">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-tools-nomp">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-6__background-1">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-6__content">
                <div className="avb-wrapper">
                  <div className="avb-picture dsg-block-6-picture">
                    <img alt="Haul Away Service" src="/media/vendor-assets/appliances/services/haul-away-v2-w800.jpg" className="avb-picture__image dsg-block-6-image" loading="lazy" width={120} height={120} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-tools-nomp">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-6__background-2">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-6__content">
                <div className="avb-wrapper">
                  <h2 className="avb-typography__heading dsg-tools-sub-heading dsg-block-6-heading">
                    <span className="dsg-block-6-icon dsg-tools-color-primary">
                      <Icon name="person-dolly" variant="solid" />
                    </span>
                    <span className="avb-typography__heading-line dsg-tools-color-dark dsg-block-6__heading-line-1">
                      {" Haul Away "}
                    </span>
                  </h2>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-6__paragraph">
                    {" Out with the old, in with the new. You can trust us to safely remove your old product when we deliver a new one. "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-primary dsg-block-6__paragraph dsg-tools-fw-bold dsg-tools-nom">
                    {" Safe & Professional "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-6__paragraph">
                    {" We use the right tools and techniques to safely remove your old appliances. "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="6" className="avb-designer-block avb-typography dsg-block-6" id="extended-warranties">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-block-6__order-a dsg-tools-nomp">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-6__background-1">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-6__content">
                <div className="avb-wrapper">
                  <h2 className="avb-typography__heading dsg-tools-sub-heading dsg-block-6-heading">
                    <span className="dsg-block-6-icon dsg-tools-color-primary">
                      <Icon name="shield-check" variant="solid" />
                    </span>
                    <span className="avb-typography__heading-line dsg-tools-color-dark dsg-block-6__heading-line-1">
                      {" Extended Warranties "}
                    </span>
                  </h2>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-6__paragraph">
                    {" You can't put a price on peace of mind, which is why we don't! We provide all major appliances with an extended limited 10-year warranty. Contact us to learn more! "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-6__paragraph dsg-tools-fw-bold dsg-tools-nom">
                    {" At Doctor Appliance, We Care! "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-6__paragraph">
                    {" Our extended service plans provide protection you can trust and a solution you can depend on after the manufacturer's warranty runs out. "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-block-6__order-b dsg-tools-nomp">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-6__background-2">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-6__content">
                <div className="avb-wrapper">
                  <div className="avb-picture dsg-block-6-picture">
                    <img alt="Extended Warranty Protection" src="/media/vendor-assets/appliances/services/warranty/sales-associate-v1-w800.jpg" className="avb-picture__image dsg-block-6-image" loading="lazy" width={120} height={120} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="30" className="avb-designer-block avb-typography dsg-block-30" id="schedule-service">
        <div className="avb-grid dsg-form-background-color">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom dsg-block-30-form-grid dsg-tools-nomp">
            <h2 id="service-form" className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-primary dsg-block-30__heading">
              {" Schedule Service "}
            </h2>
            <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-30__paragraph">
              {" Send us your details, and one of our friendly and knowledgeable professionals will reach out. "}
            </p>
            <iframe className="dsg-block-30__form" title="Receive our service today by requesting an appointment below." src="/cms-iframehtml/h0136/formstack-h0136-service-request-form.html" frameBorder="0"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
