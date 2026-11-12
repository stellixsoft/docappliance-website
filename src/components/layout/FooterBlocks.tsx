import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { ManagedForm } from "@/components/forms/ManagedForm";
import { Captcha } from "@/components/forms/Captcha";

/** Newsletter, link columns and copyright (ported from the CMS footer). */
export function FooterBlocks() {
  return (
    <div className="avb-footer">
      <section data-id="1" className="avb-designer-footer avb-typography dsg-footer-1">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12">
            <h2 className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-light dsg-footer-1__heading">
              {" Sign Up For Appliance Maintenance Tips & Tricks "}
            </h2>
            <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-footer-1__paragraph">
              {" Be the first to learn about our special offers and coupons on your service or repair. We promise to keep your information private. "}
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
                    <button className="avb-button avb-button--expand dsg-tools-secondary-button dsg-footer-1__form-submit" type="submit">
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
                        {"You have successfully subscribed. Thank you!"}
                      </p>
                      {" "}
                      <p data-response-type="failure" className="avb-typography__paragraph dsg-footer-1__form-failure">
                        {"Something went wrong. Check your information and try again."}
                      </p>
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
          <div className="avb-grid__column avb-grid__column--large-8">
            <div className="avb-grid avb-grid--container">
              <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom">
                <h2 className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-dark dsg-tools-fw-bold dsg-footer-2__heading">
                  {" Doctor Appliance "}
                </h2>
                <ul className="avb-list avb-list--noBullet dsg-footer-2__menu">
                  <li data-for="menu-item" className="avb-list__item dsg-footer-2__menu-item">
                    <Link href="/services#schedule-service" data-for="menu-item-link" className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-footer-2__link">
                      {"Schedule Service Now"}
                    </Link>
                  </li>
                  <li data-for="menu-item" className="avb-list__item dsg-footer-2__menu-item">
                    <Link data-for="menu-item-link" className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-footer-2__link" href="/contacts">
                      {"Locations"}
                    </Link>
                  </li>
                  <li data-for="menu-item" className="avb-list__item dsg-footer-2__menu-item">
                    <Link data-for="menu-item-link" className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-footer-2__link" href="/services">
                      {"Services"}
                    </Link>
                  </li>
                  <li data-for="menu-item" className="avb-list__item dsg-footer-2__menu-item">
                    <Link data-for="menu-item-link" className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-footer-2__link" href="/household-care-plan">
                      {"Care Plans"}
                    </Link>
                  </li>
                  <li data-for="menu-item" className="avb-list__item dsg-footer-2__menu-item">
                    <Link data-for="menu-item-link" className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-footer-2__link" href="/parts">
                      {"Parts"}
                    </Link>
                  </li>
                  <li data-for="menu-item" className="avb-list__item dsg-footer-2__menu-item">
                    <Link data-for="menu-item-link" className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-footer-2__link" href="/home-store-partnership-program-hsp">
                      {"Partnerships"}
                    </Link>
                  </li>
                  <li data-for="menu-item" className="avb-list__item dsg-footer-2__menu-item">
                    <Link data-for="menu-item-link" className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-footer-2__link" href="/about-us">
                      {"About Us"}
                    </Link>
                  </li>
                  <li data-for="menu-item" className="avb-list__item dsg-footer-2__menu-item">
                    <Link data-for="menu-item-link" className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-footer-2__link" href="/contacts">
                      {"Contact Us"}
                    </Link>
                  </li>
                  <li data-for="menu-item" className="avb-list__item dsg-footer-2__menu-item">
                    <Link data-for="menu-item-link" className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-footer-2__link" href="/faq">
                      {"FAQ"}
                    </Link>
                  </li>
                  <li data-for="menu-item" className="avb-list__item dsg-footer-2__menu-item">
                    <a data-for="menu-item-link" className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-footer-2__link" target="_blank" href="https://sales.docappliance.com/">
                      {"Appliance Sales"}
                    </a>
                  </li>
                  <li className="avb-list__item dsg-footer-2__menu-item">
                    <Link href="/return-and-store-policies" className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-footer-2__link avb-link">
                      {"Return & Store Policies"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom">
                <div className="avb-grid avb-grid--container">
                  <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom">
                    <div className="avb-wrapper">
                      <h2 className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-dark dsg-tools-fw-bold dsg-footer-2__heading">
                        {" Locations "}
                      </h2>
                      <ul className="avb-list avb-list--noBullet">
                        <li className="avb-list__item">
                          <Link href="/estill-springs-tn" className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-footer-2__link avb-link">
                            {" Estill Springs, TN "}
                          </Link>
                        </li>
                        <li className="avb-list__item">
                          <Link href="/knoxville-tn" className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-footer-2__link avb-link">
                            {" Knoxville, TN "}
                          </Link>
                        </li>
                        <li className="avb-list__item">
                          <Link href="/phoenix-az" className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-footer-2__link avb-link">
                            {" Phoenix, AZ "}
                          </Link>
                        </li>
                        <li className="avb-list__item">
                          <Link href="/salina-ks" className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-footer-2__link avb-link">
                            {" Salina, KS "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--large-4">
            <div className="avb-grid avb-grid--container">
              <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--medium-6 avb-grid__column--large-12 avb-grid__column--marginBottom">
                <div className="avb-wrapper">
                  <h2 className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-dark dsg-tools-fw-bold dsg-footer-2__heading">
                    {" Connect With Us "}
                  </h2>
                  <ul className="avb-list avb-list--horizontal dsg-footer-2__social-media">
                    <li className="avb-list__item dsg-footer-2-list-item-social">
                      <a href="https://www.facebook.com/DoctorAppliance/" className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-footer-2__link avb-link" target="_blank">
                        {" "}
                        <Icon name="facebook-f" variant="brands" className="dsg-footer-2__icon" />
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
      <section data-id="3" className="avb-designer-footer avb-typography dsg-tools-main-paragraph dsg-tools-color-dark dsg-footer-3">
        {" Doctor Appliance Copyright 2026 "}
      </section>
    </div>
  );
}
