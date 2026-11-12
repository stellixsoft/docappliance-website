import { Icon } from "@/components/ui/Icon";
import { ManagedForm } from "@/components/forms/ManagedForm";
import { Captcha } from "@/components/forms/Captcha";

/** Page content for /salina-ks (ported from the live CMS markup). */
export default function SalinaKsContent() {
  return (
    <div className="avb-main page-salina-ks">
      <section data-id="1" className="avb-designer-contact avb-typography dsg-contact-1">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom">
            <iframe className="dsg-contact-1__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.772618565205!2d-97.62440600000001!3d38.837668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87bccf14ae2046dd%3A0xff1c779640e0d90c!2sDoctor%20Appliance!5e0!3m2!1sen!2sus!4v1774447052119!5m2!1sen!2sus" allowFullScreen loading="lazy" title="Map"></iframe>
          </div>
          <div className="avb-grid__column avb-grid__column--large-4 avb-grid__column--medium-6">
            <div className="dsg-contact-1__content">
              <div className="avb-picture dsg-contact-1-picture">
                <img alt="Salina, KS storefront" src="/media/doctor-appliance/salina-ks-w600.jpg" className="avb-picture__image dsg-contact-1-image" loading="lazy" width={120} height={120} />
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--large-5 avb-grid__column--medium-6">
            <div className="avb-grid">
              <div className="avb-grid__column avb-grid__column--small-12">
                <div className="dsg-contact-1__content dsg-contact-1__content-main">
                  <h1 className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-dark dsg-contact-1__heading">
                    <span className="dsg-contact-1__heading-line-1">
                      {"Salina, KS"}
                    </span>
                  </h1>
                  <div className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-contact-1__sub-heading dsg-tools-fw-bold">
                    {" America's Most Trusted Appliance Repair. Serving all of central Kansas! "}
                  </div>
                  <div className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-contact-1__address">
                    <span className="dsg-contact-1__address-line">
                      {" 213 S Broadway Blvd "}
                    </span>
                    <span className="dsg-contact-1__address-line">
                      {" Salina, KS 67401 "}
                    </span>
                    <a href="https://www.google.com/maps/dir//Doctor+Appliance,+213+S+Broadway+Blvd,+Salina,+KS+67401/@38.837668,-97.624406,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x87bccf14ae2046dd:0xff1c779640e0d90c!2m2!1d-97.624406!2d38.837668!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D" className="dsg-tools-main-paragraph dsg-tools-fw-bold dsg-contact-1__link avb-link" target="_blank">
                      {" Get Directions "}
                      <Icon name="long-arrow-alt-right" variant="solid" className="dsg-contact-1__link-icon" />
                      {" "}
                    </a>
                  </div>
                  <ul className="avb-list dsg-tools-main-paragraph dsg-tools-color-dark avb-list--noBullet">
                    <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-dark">
                      {" Local number: "}
                      <a href="tel:785-201-9241" className="dsg-tools-fw-bold dsg-contact-1__link avb-link">
                        {" 785-201-9241 "}
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
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-contact-1__paragraph">
                    <span className="dsg-tools-fw-bold">
                      {"Service Hub Manager:"}
                    </span>
                    {" Andrew Pepper - "}
                    <a href="mailto:Drew@docappliance.com" className="dsg-tools-fw-bold dsg-contact-1__link avb-link">
                      {"Drew@docappliance.com"}
                    </a>
                  </p>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-contact-1__paragraph">
                    <span className="dsg-tools-fw-bold">
                      {"Doctor Appliance has been serving customers since 2017, with our Salina team supporting homeowners across Central Kansas."}
                    </span>
                    {" From Salina to Abilene, McPherson, Junction City, Manhattan, and Wichita, we provide reliable appliance repair with experienced technicians and responsive local service. "}
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
