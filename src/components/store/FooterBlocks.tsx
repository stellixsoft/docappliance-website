import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { ManagedForm } from "@/components/forms/ManagedForm";
import { Captcha } from "@/components/forms/Captcha";

/** Newsletter, link columns and copyright (ported from the CMS footer). */
export function FooterBlocks() {
  return (
    <div className="avb-footer">
      <section data-id="1" className="avb-designer-footer avb-typography dsg-footer-1 dsg-tools-fill-pattern-02">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12">
            <h2 className="avb-typography__heading avb-typography__heading--title dsg-tools-main-heading dsg-footer-1__heading">
              {"Sign Up for Savings!"}
            </h2>
            <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-footer-1__paragraph">
              {"Be the first to learn about our special offers and sales. We promise to keep your information private."}
            </p>
            <div className="avb-magento-form magento-form">
              <ManagedForm endpoint="/api/newsletter" className="avb-form dsg-footer-1__form">
                {" "}
                <div className="avb-grid">
                  {" "}
                  <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--offset-medium-2 avb-grid__column--large-4 avb-grid__column--offset-large-3">
                    {" "}
                    <label className="avb-textbox">
                      {" "}
                      <span className="avb-textbox__label avb-textbox__label--sr">
                        {"Sign Up for Savings"}
                      </span>
                      {" "}
                      <input type="email" placeholder="Email Address" required className="avb-textbox__input dsg-footer-1__form-input" name="email" />
                      {" "}
                    </label>
                    {" "}
                    <input type="hidden" name="type" defaultValue="sign-up-for-savings" />
                    {" "}
                    <Captcha />
                    {" "}
                  </div>
                  {" "}
                  <div className="avb-grid__column avb-grid__column--medium-2">
                    {" "}
                    <button className="avb-button avb-button--expand dsg-tools-light-button dsg-footer-1__form-submit" type="submit">
                      {"Sign Me Up"}
                    </button>
                    {" "}
                  </div>
                  {" "}
                  <div className="avb-grid__column avb-grid__column--small-12">
                    {" "}
                    <div className="dsg-footer-1__form-responses">
                      {" "}
                      <p data-response-type="success" className="avb-typography__paragraph dsg-footer-1__form-success">
                        {"You have successfully subscribed. Thank you!"}
                      </p>
                      {" "}
                      <p data-response-type="failure" className="avb-typography__paragraph dsg-footer-1__form-failure"></p>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </ManagedForm>
            </div>
          </div>
        </div>
      </section>
      <section data-id="2" className="avb-designer-footer avb-typography dsg-footer-2">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--large-7">
            <div className="avb-grid avb-grid--container">
              <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom">
                <h2 className="avb-typography__heading avb-typography__heading--title dsg-tools-main-heading dsg-footer-2__heading">
                  {"Doctor Appliance"}
                </h2>
                <ul className="avb-list avb-list--noBullet dsg-footer-2__menu">
                  <li data-for="category-item" className="avb-list__item dsg-tools-main-paragraph dsg-footer-2__menu-item">
                    <Link data-for="category-item-link" className="dsg-footer-2__link" href="/catalog/appliances">
                      {"Appliances"}
                    </Link>
                  </li>
                  <li data-for="menu-item" className="avb-list__item dsg-tools-main-paragraph dsg-footer-2__menu-item">
                    <Link data-for="menu-item-link" className="dsg-footer-2__link" href="/catalog/special/brandsource_point_of_sale_marketing/Outlet">
                      {"Outlet"}
                    </Link>
                  </li>
                  <li data-for="menu-item" className="avb-list__item dsg-tools-main-paragraph dsg-footer-2__menu-item">
                    <Link data-for="menu-item-link" className="dsg-footer-2__link" href="/promotions">
                      {"Promotions & Rebates"}
                    </Link>
                  </li>
                  <li data-for="menu-item" className="avb-list__item dsg-tools-main-paragraph dsg-footer-2__menu-item">
                    <Link data-for="menu-item-link" className="dsg-footer-2__link" href="/services">
                      {"Services"}
                    </Link>
                  </li>
                  <li data-for="menu-item" className="avb-list__item dsg-tools-main-paragraph dsg-footer-2__menu-item">
                    <Link data-for="menu-item-link" className="dsg-footer-2__link" href="/about-us">
                      {"About Us"}
                    </Link>
                  </li>
                  <li data-for="menu-item" className="avb-list__item dsg-tools-main-paragraph dsg-footer-2__menu-item">
                    <Link data-for="menu-item-link" className="dsg-footer-2__link" href="/financing">
                      {"Financing"}
                    </Link>
                  </li>
                  <li data-for="menu-item" className="avb-list__item dsg-tools-main-paragraph dsg-footer-2__menu-item">
                    <Link data-for="menu-item-link" className="dsg-footer-2__link" href="/contacts">
                      {"Contact Us"}
                    </Link>
                  </li>
                  <li data-for="menu-item" className="avb-list__item dsg-tools-main-paragraph dsg-footer-2__menu-item">
                    <a data-for="menu-item-link" className="dsg-footer-2__link" target="_blank" href="https://www.docappliance.com/">
                      {"Appliance Service"}
                    </a>
                  </li>
                  <li className="avb-list__item dsg-tools-main-paragraph dsg-footer-2__menu-item">
                    <Link href="/return-and-store-policies" className="dsg-footer-2__link avb-link">
                      {"Return & Store Policy"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom">
                <div className="avb-grid avb-grid--container">
                  <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom">
                    <div className="avb-wrapper">
                      <h2 className="avb-typography__heading avb-typography__heading--title dsg-tools-main-heading dsg-footer-2__heading">
                        {"Locations"}
                      </h2>
                      <div className="avb-wrapper dsg-footer-2__location">
                        <h3 className="avb-typography__paragraph dsg-tools-sub-heading dsg-footer-2__text dsg-footer-2__location-name">
                          <Link href="/locations/estill-springs" className="dsg-tools-sub-heading dsg-footer-2__link avb-link">
                            {" Estill Springs "}
                          </Link>
                        </h3>
                        <div className="avb-typography__paragraph dsg-tools-main-paragraph dsg-footer-2__text">
                          <span className="dsg-footer-2__address-line">
                            {"9185 Tullahoma Hwy"}
                          </span>
                          <span className="dsg-footer-2__address-line">
                            {"Estill Springs, TN 37330"}
                          </span>
                        </div>
                        <ul className="avb-list avb-list--noBullet dsg-tools-main-paragraph dsg-footer-2__text">
                          <li className="avb-list__item">
                            {" Phone: "}
                            <a href="tel:9313139083" className="dsg-footer-2__link avb-link">
                              {"931-313-9083"}
                            </a>
                          </li>
                          <li className="avb-list__item">
                            {" Email: "}
                            <a href="mailto:customercare@docappliance.com" className="dsg-footer-2__link avb-link">
                              {"customercare@docappliance.com"}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="avb-wrapper dsg-footer-2__location">
                        <h3 className="avb-typography__paragraph dsg-tools-sub-heading dsg-footer-2__text dsg-footer-2__location-name">
                          <Link href="/locations/knoxville" className="dsg-footer-2__link avb-link">
                            {" Knoxville "}
                          </Link>
                        </h3>
                        <div className="avb-typography__paragraph dsg-tools-main-paragraph dsg-footer-2__text">
                          <span className="dsg-footer-2__address-line">
                            {"3535 Papermill Dr NW"}
                          </span>
                          <span className="dsg-footer-2__address-line">
                            {"Knoxville, TN 37909"}
                          </span>
                        </div>
                        <ul className="avb-list avb-list--noBullet dsg-tools-main-paragraph dsg-footer-2__text">
                          <li className="avb-list__item">
                            {" Phone: "}
                            <a href="tel:8652722606" className="dsg-footer-2__link avb-link">
                              {"865-272-2606"}
                            </a>
                          </li>
                          <li className="avb-list__item">
                            {" Email: "}
                            <a href="mailto:customercare@docappliance.com" className="dsg-footer-2__link avb-link">
                              {"customercare@docappliance.com"}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="avb-wrapper dsg-footer-2__location">
                        <h3 className="avb-typography__paragraph dsg-tools-sub-heading dsg-footer-2__text dsg-footer-2__location-name">
                          <Link href="/locations/phoenix" className="dsg-footer-2__link avb-link">
                            {" Phoenix (Pick-Up Only) "}
                          </Link>
                        </h3>
                        <div className="avb-typography__paragraph dsg-tools-main-paragraph dsg-footer-2__text">
                          <span className="dsg-footer-2__address-line">
                            {"7150 W Roosevelt St"}
                          </span>
                          <span className="dsg-footer-2__address-line">
                            {"Unit D129"}
                          </span>
                          <span className="dsg-footer-2__address-line">
                            {"Phoenix, AZ 85043"}
                          </span>
                        </div>
                        <ul className="avb-list avb-list--noBullet dsg-tools-main-paragraph dsg-footer-2__text">
                          <li className="avb-list__item">
                            {" Phone: "}
                            <a href="tel:6024282502" className="dsg-footer-2__link avb-link">
                              {"602-428-2502"}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="avb-wrapper dsg-footer-2__location">
                        <h3 className="avb-typography__paragraph dsg-tools-sub-heading dsg-footer-2__text dsg-footer-2__location-name">
                          <Link href="/locations/salina" className="dsg-footer-2__link avb-link">
                            {" Salina "}
                          </Link>
                        </h3>
                        <div className="avb-typography__paragraph dsg-tools-main-paragraph dsg-footer-2__text">
                          <span className="dsg-footer-2__address-line">
                            {"213 S Broadway Blvd"}
                          </span>
                          <span className="dsg-footer-2__address-line">
                            {"Salina, KS 67401"}
                          </span>
                        </div>
                        <ul className="avb-list avb-list--noBullet dsg-tools-main-paragraph dsg-footer-2__text">
                          <li className="avb-list__item">
                            {" Phone: "}
                            <a href="tel:7852019241" className="dsg-footer-2__link avb-link">
                              {"785-201-9241"}
                            </a>
                          </li>
                          <li className="avb-list__item">
                            {" Email: "}
                            <a href="mailto:customercare@docappliance.com" className="dsg-footer-2__link avb-link">
                              {"customercare@docappliance.com"}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--large-5">
            <div className="avb-grid avb-grid--container">
              <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--medium-6 avb-grid__column--large-12 avb-grid__column--marginBottom">
                <div className="avb-wrapper">
                  <h2 className="avb-typography__heading avb-typography__heading--title dsg-tools-main-heading dsg-footer-2__heading">
                    {"Connect With Us"}
                  </h2>
                  <ul className="avb-list avb-list--horizontal dsg-footer-2__text">
                    <li className="avb-list__item">
                      <a href="https://www.facebook.com/DoctorAppliance/" className="dsg-footer-2__link avb-link" target="_blank">
                        {" "}
                        <Icon name="square-facebook" variant="solid" className="dsg-footer-2__link__icon" />
                        {" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="3" className="avb-designer-footer avb-typography dsg-tools-main-paragraph dsg-footer-3 dsg-tools-fill-pattern-02">
        {" Doctor Appliance Copyright 2026 "}
      </section>
    </div>
  );
}
