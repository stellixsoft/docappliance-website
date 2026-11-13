import { ManagedForm } from "@/components/forms/ManagedForm";
import { Captcha } from "@/components/forms/Captcha";

/** Page content for /request-quote (ported from the live CMS markup). */
export default function RequestQuoteContent() {
  return (
    <div className="avb-main store-page-request-quote">
      <section data-id="6" className="avb-designer-block avb-typography dsg-block-6">
        <div className="avb-grid avb-grid--container dsg-block-6-container">
          <div className="avb-grid__column avb-grid__column--medium-6 dsg-block-6-column-left aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-6__background-1">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-6__content">
                <div className="avb-wrapper aos-init aos-animate" data-aos="fade" data-aos-duration="3000" data-aos-once="true">
                  <div className="avb-picture dsg-block-6-icon-picture">
                    <img alt="Request More Info" src="/media/demo/request_quote-icon.png" className="avb-picture__image dsg-block-6-icon-image" loading="lazy" width={120} height={120} />
                  </div>
                  <h1 className="avb-typography__heading avb-typography__heading--title">
                    <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-main-heading dsg-tools-color-light dsg-block-6__heading-line-1">
                      {" Request More Information "}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-6 dsg-block-6-column-right aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-6__background-2">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-6__content">
                <div className="avb-wrapper">
                  <span className="dsg-tools-main-paragraph dsg-block-6-required-text">
                    <span className="dsg-block-6-required-red">
                      {"*"}
                    </span>
                    {" indicates required "}
                  </span>
                  <div className="avb-magento-form magento-form">
                    <ManagedForm endpoint="/api/forms" className="dsg-block-6-form">
                      {" "}
                      <div className="dsg-block-6-form__field">
                        {" "}
                        <span className="dsg-block-6-form__field-required-container">
                          {" "}
                          <span className="dsg-block-6-form__field-required">
                            {" * "}
                          </span>
                          {" "}
                        </span>
                        {" "}
                        <input type="text" id="form-name" className="dsg-tools-main-paragraph dsg-block-6__form-input" required placeholder="Name" name="name" />
                        {" "}
                      </div>
                      {" "}
                      <div className="dsg-block-6-form__field">
                        {" "}
                        <span className="dsg-block-6-form__field-required-container">
                          {" "}
                          <span className="dsg-block-6-form__field-required">
                            {" * "}
                          </span>
                          {" "}
                        </span>
                        {" "}
                        <input type="email" id="email" className="dsg-tools-main-paragraph dsg-block-6__form-input" required placeholder="Email" name="email" />
                        {" "}
                      </div>
                      {" "}
                      <div className="dsg-block-6-form__field">
                        {" "}
                        <span className="dsg-block-6-form__field-required-container">
                          {" "}
                          <span className="dsg-block-6-form__field-required">
                            {" * "}
                          </span>
                          {" "}
                        </span>
                        {" "}
                        <input type="text" title="Zip code may only contain 5 numbers" pattern={"\\d{5}"} id="zipCode" className="dsg-tools-main-paragraph dsg-block-6__form-input" required placeholder="Zip Code" name="zipCode" />
                        {" "}
                      </div>
                      {" "}
                      <div className="dsg-block-6-form__field">
                        {" "}
                        <span className="dsg-block-6-form__field-required-container">
                          {" "}
                          <span className="dsg-block-6-form__field-required">
                            {" * "}
                          </span>
                          {" "}
                        </span>
                        {" "}
                        <input type="tel" title="Phone number may only contain 9-10 numbers" pattern={"\\d{9,10}"} id="phone" className="dsg-tools-main-paragraph dsg-block-6__form-input" required placeholder="Phone" name="phone" />
                        {" "}
                      </div>
                      {" "}
                      <div className="dsg-block-6-product-details">
                        {" "}
                        <span className="dsg-tools-main-paragraph dsg-block-6-product-details-text">
                          {"Product Details"}
                        </span>
                        {" "}
                        <div className="dsg-block-6-form__field dsg-block-6-form__field-autofilled">
                          {" "}
                          <input id="productName" type="text" disabled placeholder="Product Name" className="dsg-tools-main-paragraph dsg-block-6__form-input dsg-block-6__form-input-autofilled" name="productName" defaultValue="" />
                          {" "}
                        </div>
                        {" "}
                        <div className="dsg-block-6-form__field dsg-block-6-form__field-autofilled">
                          {" "}
                          <input id="productSKU" type="text" disabled placeholder="Product SKU" className="dsg-tools-main-paragraph dsg-block-6__form-input dsg-block-6__form-input-autofilled" name="productSKU" defaultValue="" />
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                      <div className="dsg-block-6-form__field">
                        {" "}
                        <textarea name="message" id="message" className="dsg-tools-main-paragraph dsg-block-6__form-input-area" placeholder="Message" />
                        {" "}
                      </div>
                      {" "}
                      <div className="dsg-block-26__form-bottom">
                        {" "}
                        <Captcha />
                        {" "}
                        <div className="dsg-block-6-form__response dsg-block-6__success" data-response-type="success"></div>
                        {" "}
                        <div className="dsg-block-6-form__response dsg-block-6__failure" data-response-type="failure"></div>
                        {" "}
                        <input className="avb-button avb-button--primary avb-button--dark dsg-tools-main-paragraph dsg-block-6__button" type="submit" defaultValue="Submit Request" />
                        {" "}
                        <input type="hidden" id="sender" name="sender" defaultValue="sales" />
                        {" "}
                        <input type="hidden" id="subject" name="subject" defaultValue="Product Quote Request Inquiry from Doctor Appliance" />
                        {" "}
                        <input type="hidden" id="type" name="type" defaultValue="quote" />
                        {" "}
                        <input id="productID" type="hidden" name="productID" defaultValue="" />
                        {" "}
                      </div>
                      {" "}
                    </ManagedForm>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
