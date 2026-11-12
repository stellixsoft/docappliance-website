import { Icon } from "@/components/ui/Icon";
import { ManagedForm } from "@/components/forms/ManagedForm";
import { Captcha } from "@/components/forms/Captcha";

/** Page content for /phoenix-az (ported from the live CMS markup). */
export default function PhoenixAzContent() {
  return (
    <div className="avb-main page-phoenix-az">
      <section data-id="1" className="avb-designer-contact avb-typography dsg-contact-1">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom">
            <iframe className="dsg-contact-1__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.637820147176!2d-112.220905!3d33.4587413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef82b663bb4d703%3A0x7ae71117375f8c66!2sDoctor%20Appliance!5e0!3m2!1sen!2sus!4v1776288598462!5m2!1sen!2sus" allowFullScreen loading="lazy" title="Map"></iframe>
          </div>
          <div className="avb-grid__column avb-grid__column--large-3 avb-grid__column--medium-4">
            <div className="dsg-contact-1__content">
              <div className="avb-picture dsg-contact-1-picture">
                <img alt="Phoenix, AZ storefront" src="/media/doctor-appliance/phoenix-az-w600.jpg" className="avb-picture__image dsg-contact-1-image" loading="lazy" width={120} height={120} />
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--large-6 avb-grid__column--medium-8">
            <div className="avb-grid">
              <div className="avb-grid__column avb-grid__column--small-12">
                <div className="dsg-contact-1__content dsg-contact-1__content-main">
                  <h1 className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-dark dsg-contact-1__heading">
                    <span className="dsg-contact-1__heading-line-1">
                      {"Phoenix, AZ"}
                    </span>
                  </h1>
                  <div className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-contact-1__sub-heading dsg-tools-fw-bold">
                    {" America's Most Trusted Appliance Repair. Serving the Arizona Valley and Rim Country! "}
                  </div>
                  <div className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-contact-1__address">
                    <span className="dsg-contact-1__address-line">
                      {" 7150 W Roosevelt St, Unit D129 "}
                    </span>
                    <span className="dsg-contact-1__address-line">
                      {" Phoenix, AZ 85043 "}
                    </span>
                    <a href="https://www.google.com/maps/dir//Doctor+Appliance,+7500+W+Roosevelt+St+Suite+D129,+Phoenix,+AZ+85043/@33.4599812,-112.2196963,17z/data=!3m2!4b1!5s0x872b3fd36f0d9b07:0x2656634c790aae9!4m8!4m7!1m0!1m5!1m1!1s0x8ef82b663bb4d703:0x7ae71117375f8c66!2m2!1d-112.220905!2d33.4587413!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D" className="dsg-tools-main-paragraph dsg-tools-fw-bold dsg-contact-1__link avb-link" target="_blank">
                      {" Get Directions "}
                      <Icon name="long-arrow-alt-right" variant="solid" className="dsg-contact-1__link-icon" />
                      {" "}
                    </a>
                  </div>
                  <ul className="avb-list dsg-tools-main-paragraph dsg-tools-color-dark avb-list--noBullet">
                    <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-dark">
                      {" Local number: "}
                      <a href="tel:602-428-2502" className="dsg-tools-fw-bold dsg-contact-1__link avb-link">
                        {" 602-428-2502 "}
                      </a>
                    </li>
                    <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-dark">
                      {" Toll-free number: "}
                      <a href="tel:800-298-8643" className="dsg-tools-fw-bold dsg-contact-1__link avb-link">
                        {" 800-298-8643 "}
                      </a>
                    </li>
                    <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-dark">
                      {" Email: "}
                      <a href="mailto:customercare@docappliance.com" className="dsg-tools-fw-bold dsg-contact-1__link avb-link">
                        {" customercare@docappliance.com "}
                      </a>
                    </li>
                  </ul>
                  <div className="dsg-contact-1__hours">
                    <h2 className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-dark dsg-contact-1__heading">
                      {"Hours"}
                    </h2>
                    <ul className="avb-list dsg-tools-main-paragraph dsg-tools-color-dark avb-list--noBullet dsg-tools-nomp">
                      <li className="avb-list__item">
                        {" Monday - Friday 8:00 AM - 4:00 PM "}
                      </li>
                      <li className="avb-list__item">
                        {" Saturday & Sunday Closed "}
                      </li>
                    </ul>
                  </div>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-contact-1__paragraph dsg-tools-fw-bold dsg-tools-nomp">
                    {" Service Hub Managers: "}
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-contact-1__paragraph dsg-tools-nomp">
                    {" Franklin Colorado - "}
                    <a href="mailto:Franklin@docappliance.com" className="dsg-tools-fw-bold dsg-contact-1__link avb-link">
                      {"Franklin@docappliance.com"}
                    </a>
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-contact-1__paragraph">
                    {" Kenneth Field - "}
                    <a href="mailto:Kenneth@docappliance.com" className="dsg-tools-fw-bold dsg-contact-1__link avb-link">
                      {"Kenneth@docappliance.com"}
                    </a>
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-contact-1__paragraph">
                    <span className="dsg-tools-fw-bold">
                      {"Doctor Appliance has been serving customers since 2017, with our Phoenix team supporting homeowners across the Valley and Arizona’s Rim Country."}
                    </span>
                    {" Covering a wide service area from Phoenix to Payson, we focus on accurate diagnostics, efficient repairs, and dependable service. "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--large-3">
            <div className="dsg-contact-1__content dsg-contact-1__form">
              <h2 className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-dark dsg-contact-1__heading">
                {" Send Us A Message "}
              </h2>
              <div className="avb-magento-form magento-form">
                <ManagedForm endpoint="/api/forms" className="avb-form">
                  {" "}
                  <label className="avb-textbox">
                    {" "}
                    <span className="avb-textbox__label avb-textbox__label--sr">
                      {"Name"}
                    </span>
                    {" "}
                    <input type="text" placeholder="Name" required className="avb-textbox__input" name="name" />
                    {" "}
                  </label>
                  {" "}
                  <label className="avb-textbox">
                    {" "}
                    <span className="avb-textbox__label avb-textbox__label--sr">
                      {"Email"}
                    </span>
                    {" "}
                    <input type="email" placeholder="Email (e.g. example@domain.com)" required className="avb-textbox__input" name="email" />
                    {" "}
                  </label>
                  {" "}
                  <label className="avb-textbox">
                    {" "}
                    <span className="avb-textbox__label avb-textbox__label--sr">
                      {"Phone Number"}
                    </span>
                    {" "}
                    <input type="tel" placeholder="Phone number (numbers only)" title="Phone number may only contain 9-10 numbers" pattern={"\\d{9,10}"} required className="avb-textbox__input" name="phone" />
                    {" "}
                  </label>
                  {" "}
                  <label className="avb-textarea">
                    {" "}
                    <span className="avb-textarea__label avb-textarea__label--sr">
                      {"Message"}
                    </span>
                    {" "}
                    <textarea name="message" placeholder="Message" required className="avb-textarea__input" />
                    {" "}
                  </label>
                  {" "}
                  <Captcha />
                  {" "}
                  <div className="dsg-contact-1__form-buttons">
                    {" "}
                    <button className="avb-button dsg-tools-main-button dsg-contact-1__submit" type="submit">
                      {"Submit"}
                    </button>
                    {" "}
                  </div>
                  {" "}
                  <div className="dsg-contact-1__form-responses">
                    {" "}
                    <p data-response-type="success" className="avb-typography__paragraph dsg-contact-1__form-success">
                      {"Your message was submitted successfully. Thank you!"}
                    </p>
                    {" "}
                    <p data-response-type="failure" className="avb-typography__paragraph dsg-contact-1__form-failure"></p>
                    {" "}
                  </div>
                  {" "}
                  <input type="hidden" name="sender" defaultValue="custom1" />
                  {" "}
                  <input type="hidden" name="type" defaultValue="contacts" />
                  {" "}
                  <input type="hidden" name="subject" defaultValue="Your Contact Message" />
                  {" "}
                  <input type="hidden" name="template" defaultValue="customforms_default_email_template" />
                  {" "}
                </ManagedForm>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
