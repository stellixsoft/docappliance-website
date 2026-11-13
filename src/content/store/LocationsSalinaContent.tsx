import { Icon } from "@/components/ui/Icon";
import { ManagedForm } from "@/components/forms/ManagedForm";
import { Captcha } from "@/components/forms/Captcha";

/** Page content for /locations/salina (ported from the live CMS markup). */
export default function LocationsSalinaContent() {
  return (
    <div className="avb-main store-page-locations_salina">
      <section data-id="1" className="avb-designer-contact avb-typography dsg-contact-1">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom">
            <ul className="avb-list avb-list--noBullet dsg-contact-1__list">
              <li className="avb-list__item dsg-contact-1__list-item dsg-contact-1__list-item-01"></li>
              <li className="avb-list__item dsg-contact-1__list-item dsg-contact-1__list-item-02">
                <iframe className="dsg-contact-1__map" src="https://www.google.com/maps?q=Doctor+Appliance+213+S+Broadway+Blvd+Salina,+KS+67401&hl=en&output=embed" title="iFrame title"></iframe>
              </li>
            </ul>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom">
            <div className="avb-grid">
              <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom">
                <div className="dsg-contact-1__content">
                  <h1 className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-primary dsg-contact-1__heading">
                    {" Salina "}
                  </h1>
                  <div className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-contact-1__address">
                    <span className="dsg-contact-1__address-line">
                      {" 213 S Broadway Blvd "}
                    </span>
                    <span className="dsg-contact-1__address-line">
                      {" Salina, KS 67401 "}
                    </span>
                    <a href="https://www.google.com/maps/dir//Doctor+Appliance+213+S+Broadway+Blvd+Salina,+KS+67401,+United+States/?hl=en" className="dsg-tools-main-paragraph dsg-tools-txt-link dsg-contact-1__link avb-link" target="_blank">
                      {" Get Directions "}
                      <Icon name="long-arrow-alt-right" variant="solid" className="dsg-tools-txt-link dsg-contact-1__link-icon" />
                      {" "}
                    </a>
                  </div>
                  <ul className="avb-list dsg-tools-main-paragraph dsg-tools-color-dark avb-list--noBullet">
                    <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-dark">
                      {" Phone: "}
                      <a href="tel:7852019241" className="dsg-tools-txt-link dsg-contact-1__link avb-link">
                        {" 785-201-9241 "}
                      </a>
                    </li>
                    <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-dark">
                      {" Email: "}
                      <a href="mailto:customercare@docappliance.com" className="dsg-tools-txt-link dsg-contact-1__link avb-link">
                        {" customercare@docappliance.com "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom">
                <div className="dsg-contact-1__content">
                  <h2 className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-primary dsg-contact-1__heading">
                    {"Hours"}
                  </h2>
                  <ul className="avb-list dsg-tools-main-paragraph dsg-tools-color-dark avb-list--noBullet">
                    <li className="avb-list__item">
                      <ul className="avb-list avb-list--noBullet">
                        <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-hours">
                          {" Monday - Friday 8:00 AM - 4:00 PM "}
                        </li>
                        <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-hours">
                          {" Saturday & Sunday Closed "}
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-contact-1__paragraph">
                    <span className="dsg-tools-fw-bold dsg-tools-color-primary">
                      {"Disclaimer:"}
                    </span>
                    {" New appliance sales in the Salina market are handled through our retail partner. Please call for details. "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom">
            <div className="dsg-contact-1__content">
              <h2 className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-primary dsg-contact-1__heading">
                {" Send Us a Message "}
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
                    <p data-response-type="failure" className="avb-typography__paragraph dsg-contact-1__form-failure">
                      {"Something went wrong. Check your information and try again."}
                    </p>
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
