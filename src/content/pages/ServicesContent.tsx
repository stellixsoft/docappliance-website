import { Icon } from "@/components/ui/Icon";
import { MobileCarousel } from "@/components/ui/MobileCarousel";

/** Page content for /services (ported from the live CMS markup). */
export default function ServicesContent() {
  return (
    <div className="avb-main page-services">
      <section data-id="1" className="avb-designer-block avb-typography dsg-block-1">
        <div className="avb-grid">
          <div className="avb-grid__column avb-grid__column--small-12 dsg-block-1__grid-column">
            <div className="avb-wrapper avb-wrapper--background dsg-block-1__background dsg-tools-bgcolor-gradient">
              <div className="avb-wrapper dsg-block-1__content">
                <h1 className="avb-typography__heading avb-typography__heading--title dsg-tools-nom">
                  <span className="avb-typography__heading-line dsg-tools-main-heading dsg-tools-color-light dsg-tools-uppercase dsg-block-1__heading-line-1">
                    {" Services "}
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="37" className="avb-designer-block avb-typography dsg-tools-fill-dark dsg-block-37">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom dsg-block-37__grid-column dsg-tools-nom">
            <div className="avb-wrapper dsg-block-37__content">
              <MobileCarousel className="dsg-tools-desktop-hide">
                <div className="mobile-carousel__slide">
                  <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-37__content-section">
                    <a href="#schedule-service" className="avb-button dsg-tools-secondary-button dsg-block-37__button avb-link">
                      {" "}
                      <Icon name="calendar-lines-pen" variant="light" className="dsg-block-37-icon" />
                      {" Schedule Service "}
                    </a>
                  </div>
                </div>
                <div className="mobile-carousel__slide">
                  <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-37__content-section">
                    <a href="mailto:customercare@docappliance.com?cc=dispatch@docappliance.com" className="avb-button dsg-tools-secondary-button dsg-block-37__button avb-link" target="_blank">
                      {" "}
                      <Icon name="envelope" variant="light" className="dsg-block-37-icon" />
                      {" Email Us "}
                    </a>
                  </div>
                </div>
                <div className="mobile-carousel__slide">
                  <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-37__content-section">
                    <a href="tel:800-298-8643" className="avb-button dsg-tools-secondary-button dsg-block-37__button avb-link">
                      {" "}
                      <Icon name="mobile" variant="light" className="dsg-block-37-icon" />
                      {" Call Us "}
                    </a>
                  </div>
                </div>
              </MobileCarousel>
              <div className="dsg-tools-mobile-hide dsg-block-37-desktop-list">
                <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-37__content-section">
                  <a href="#schedule-service" className="avb-button dsg-tools-secondary-button dsg-block-37__button avb-link">
                    {" "}
                    <Icon name="calendar-lines-pen" variant="light" className="dsg-block-37-icon" />
                    {" Schedule Service "}
                  </a>
                </div>
                <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-37__content-section">
                  <a href="mailto:customercare@docappliance.com?cc=dispatch@docappliance.com" className="avb-button dsg-tools-secondary-button dsg-block-37__button avb-link" target="_blank">
                    {" "}
                    <Icon name="envelope" variant="light" className="dsg-block-37-icon" />
                    {" Email Us "}
                  </a>
                </div>
                <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-37__content-section">
                  <a href="tel:800-298-8643" className="avb-button dsg-tools-secondary-button dsg-block-37__button avb-link">
                    {" "}
                    <Icon name="mobile" variant="light" className="dsg-block-37-icon" />
                    {" Call Us "}
                  </a>
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
                  {" America’s Most Trusted Appliance Repair "}
                </span>
              </h2>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph">
                {" Doctor Appliance is built to serve customers who need real solutions, not excuses. We service most major appliance brands and provide reliable diagnostics, repairs, warranty support, and installation with experienced technicians and responsive local service. "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section data-id="30" className="avb-designer-block avb-typography dsg-tools-mobile-hide dsg-block-30a">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 dsg-tools-nomp">
            <ul className="avb-list avb-list--horizontal dsg-block-30a-list">
              <li className="avb-list__item dsg-block-30a-list-item">
                <a href="#appliance-service" className="dsg-block-30a-link avb-link">
                  {" "}
                  <span className="dsg-tools-sub-heading dsg-tools-color-dark dsg-block-30a__list-headline">
                    {" "}
                    <Icon name="tools" variant="solid" className="dsg-tools-color-primary dsg-block-30a-icon" />
                    {" Appliance Service → "}
                  </span>
                  {" "}
                </a>
              </li>
              <li className="avb-list__item dsg-block-30a-list-item">
                <a href="#warranties" className="dsg-block-30a-link avb-link">
                  {" "}
                  <span className="dsg-tools-sub-heading dsg-tools-color-dark dsg-block-30a__list-headline">
                    {" "}
                    <Icon name="shield-check" variant="solid" className="dsg-tools-color-primary dsg-block-30a-icon" />
                    {" Warranties → "}
                  </span>
                  {" "}
                </a>
              </li>
              <li className="avb-list__item dsg-block-30a-list-item">
                <a href="#installation" className="dsg-block-30a-link avb-link">
                  {" "}
                  <span className="dsg-tools-sub-heading dsg-tools-color-dark dsg-block-30a__list-headline">
                    {" "}
                    <Icon name="toolbox" variant="solid" className="dsg-tools-color-primary dsg-block-30a-icon" />
                    {" Installation → "}
                  </span>
                  {" "}
                </a>
              </li>
              <li className="avb-list__item dsg-block-30a-list-item">
                <a href="#consultations" className="dsg-block-30a-link avb-link">
                  {" "}
                  <span className="dsg-tools-sub-heading dsg-tools-color-dark dsg-block-30a__list-headline">
                    {" "}
                    <Icon name="clipboard-list-check" variant="solid" className="dsg-tools-color-primary dsg-block-30a-icon" />
                    {" Consultations → "}
                  </span>
                  {" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section data-id="6" className="avb-designer-block avb-typography dsg-tools-fill-light dsg-block-6" id="appliance-service">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-block-6__order-a dsg-tools-nomp">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-6__background-1">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-6__content">
                <div className="avb-wrapper">
                  <h2 className="avb-typography__heading dsg-tools-sub-heading dsg-block-6-heading">
                    <span className="dsg-block-6-icon dsg-tools-color-primary">
                      <Icon name="tools" variant="solid" />
                    </span>
                    <span className="avb-typography__heading-line dsg-tools-color-dark dsg-block-6__heading-line-1">
                      {" Appliance Service "}
                    </span>
                  </h2>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-6__paragraph">
                    {" Doctor Appliance provides reliable appliance repair and post-purchase service support for most major brands. From the initial diagnostic to final repair, our technicians focus on quality workmanship, clear communication, and dependable follow‑through. "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-primary dsg-block-6__paragraph dsg-tools-fw-bold dsg-tools-nom">
                    {" Service Call Policy: "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-6__paragraph">
                    {" Our service call includes travel, professional diagnostic evaluation, and preparation of a repair estimate. Diagnostic fees are applied toward the total repair cost when service is approved. Payment authorization is required prior to diagnostic service being performed. "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-primary dsg-block-6__paragraph dsg-tools-fw-bold dsg-tools-nom">
                    {" Sealed System Diagnostic: "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-6__paragraph">
                    {" If accessing the sealed refrigeration system is required, a Sealed System Diagnostic fee applies. This includes system access, gauge connection, and integrity testing. The fee is non-refundable once performed and is applied toward sealed system repair if approved. Customer authorization is required prior to sealed system access. "}
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
                    <img alt="Appliance Service" src="/media/vendor-assets/appliances/services/service-repair-w800.jpg" className="avb-picture__image dsg-block-6-image" loading="lazy" width={120} height={120} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="6" className="avb-designer-block avb-typography dsg-block-6" id="warranties">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-tools-nomp">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-6__background-1">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-6__content">
                <div className="avb-wrapper">
                  <div className="avb-picture dsg-block-6-picture">
                    <img alt="Warranties" src="/media/vendor-assets/appliances/services/services-warranty-w800.jpg" className="avb-picture__image dsg-block-6-image" loading="lazy" width={120} height={120} />
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
                      <Icon name="shield-check" variant="solid" />
                    </span>
                    <span className="avb-typography__heading-line dsg-tools-color-dark dsg-block-6__heading-line-1">
                      {" Warranties "}
                    </span>
                  </h2>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-6__paragraph">
                    {" Doctor Appliance works with major manufacturers and third-party warranty providers to deliver authorized service and support. Our team follows required processes for diagnosis, documentation, and repair to ensure claims are handled correctly and efficiently while keeping customers informed throughout the process. "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-primary dsg-block-6__paragraph dsg-tools-fw-bold dsg-tools-nom">
                    {" Manufacturer Warranty Service: "}
                  </p>
                  <ul className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark avb-list dsg-block-6-list">
                    <li className="avb-list__item dsg-block-6-list-item">
                      {" Warranty coverage is governed by the manufacturer or contract administrator. "}
                    </li>
                    <li className="avb-list__item dsg-block-6-list-item">
                      {" Proof of purchase is required prior to scheduling manufacturer warranty service. "}
                    </li>
                    <li className="avb-list__item dsg-block-6-list-item">
                      {" Acceptable proof may include retail receipt, invoice, or new construction closing documentation. "}
                    </li>
                    <li className="avb-list__item dsg-block-6-list-item">
                      {" Warranty coverage may be denied due to infestation, misuse, abuse, neglect, installation defects, or customer education issues. "}
                    </li>
                    <li className="avb-list__item dsg-block-6-list-item">
                      {" If warranty coverage is denied, service charges may become the responsibility of the customer. "}
                    </li>
                  </ul>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-primary dsg-block-6__paragraph dsg-tools-fw-bold dsg-tools-nom">
                    {" Retail Repair Warranty: "}
                  </p>
                  <ul className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark avb-list dsg-block-6-list">
                    <li className="avb-list__item dsg-block-6-list-item">
                      {" Doctor Appliance provides a One-Year Workmanship Warranty on customer paid repairs. "}
                    </li>
                    <li className="avb-list__item dsg-block-6-list-item">
                      {" Workmanship warranty covers defects in installation or labor only. "}
                    </li>
                    <li className="avb-list__item dsg-block-6-list-item">
                      {" Manufacturer parts warranties remain subject to manufacturer policy. "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="6" className="avb-designer-block avb-typography dsg-tools-fill-light dsg-block-6" id="installation">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-block-6__order-a dsg-tools-nomp">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-6__background-1">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-6__content">
                <div className="avb-wrapper">
                  <h2 className="avb-typography__heading dsg-tools-sub-heading dsg-block-6-heading">
                    <span className="dsg-block-6-icon dsg-tools-color-primary">
                      <Icon name="toolbox" variant="solid" />
                    </span>
                    <span className="avb-typography__heading-line dsg-tools-color-dark dsg-block-6__heading-line-1">
                      {" Installation "}
                    </span>
                  </h2>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-6__paragraph">
                    {" We provide professional appliance installation to ensure your equipment is set up safely and correctly. Our technicians verify proper connections, test operation, and address any setup issues so your appliance is ready for reliable use. "}
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
                    <img alt="Installation" src="/media/vendor-assets/appliances/services/installation/services-installation-w800.jpg" className="avb-picture__image dsg-block-6-image" loading="lazy" width={120} height={120} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="6" className="avb-designer-block avb-typography dsg-block-6" id="consultations">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-tools-nomp">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-6__background-1">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-6__content">
                <div className="avb-wrapper">
                  <div className="avb-picture dsg-block-6-picture">
                    <img alt="Consultations" src="/media/vendor-assets/appliances/services/repair/repair-service-laundry-v1-w800.jpg" className="avb-picture__image dsg-block-6-image" loading="lazy" width={120} height={120} />
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
                      <Icon name="clipboard-list-check" variant="solid" />
                    </span>
                    <span className="avb-typography__heading-line dsg-tools-color-dark dsg-block-6__heading-line-1">
                      {" Consultations "}
                    </span>
                  </h2>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-6__paragraph">
                    {" Our consultation services help customers make informed decisions about repair versus replacement. An experienced technician can evaluate your appliance, assess your space if needed, and provide practical recommendations based on cost, performance, and long‑term reliability. "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="30" className="avb-designer-block avb-typography dsg-tools-bgcolor-gradient dsg-block-30" id="schedule-service">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom dsg-block-30-form-grid dsg-tools-nomp">
            <h2 id="service-form" className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-light dsg-block-30__heading">
              {" Schedule Service "}
            </h2>
            <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-30__paragraph">
              {" Send us your details, and one of our friendly and knowledgeable professionals will reach out. "}
            </p>
            <iframe className="dsg-block-30__form" title="Receive our service today by requesting an appointment below." src="https://avbmarketing.formstack.com/forms/h0136_1_service_and_repair_form" frameBorder="0"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
