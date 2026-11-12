import { Accordion, AccordionItem } from "@/components/ui/Accordion";

/** Page content for /household-care-plan (ported from the live CMS markup). */
export default function HouseholdCarePlanContent() {
  return (
    <div className="avb-main page-household-care-plan">
      <section data-id="1" className="avb-designer-block avb-typography dsg-block-1">
        <div className="avb-grid">
          <div className="avb-grid__column avb-grid__column--small-12 dsg-block-1__grid-column">
            <div className="avb-wrapper avb-wrapper--background dsg-block-1__background dsg-tools-bgcolor-gradient">
              <div className="avb-wrapper dsg-block-1__content">
                <h1 className="avb-typography__heading avb-typography__heading--title dsg-tools-nom">
                  <span className="avb-typography__heading-line dsg-tools-main-heading dsg-tools-color-light dsg-tools-uppercase dsg-block-1__heading-line-1">
                    {" Household Care Plan "}
                  </span>
                </h1>
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
                <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-main-heading dsg-tools-color-dark dsg-block-26__heading-line-1">
                  {" Household Care Plan - Bronze ($12 per month) "}
                </span>
              </h2>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__intro">
                {" A simple membership that makes appliance care easier: priority scheduling, retail discounts, and one annual service token you can use when you need us most. "}
              </p>
              <span className="dsg-block-26__button-wrap">
                <a href="#join-bronze" className="avb-button avb-button--primary dsg-tools-main-button dsg-block-26__button avb-link">
                  {" Join Bronze "}
                </a>
                <a href="tel:800-298-8643" className="avb-button avb-button--primary dsg-tools-main-button dsg-block-26__button avb-link">
                  {" Call Us (800-298-8643) "}
                </a>
              </span>
              <div className="avb-divider dsg-block-26-divider avb-divider"></div>
              <div className="avb-grid avb-grid--container dsg-tools-fill-light">
                <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom">
                  <div className="avb-wrapper avb-wrapper--vertical avb-wrapper--verticalCenter avb-wrapper--tall">
                    <div className="avb-wrapper dsg-block-26__content-b">
                      <h3 className="avb-typography__heading">
                        <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-sub-heading dsg-tools-color-dark dsg-block-26__heading-line-3">
                          {" Benefits "}
                        </span>
                      </h3>
                      <ul className="avb-list dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26-list">
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" Priority scheduling (within designated service areas) "}
                        </li>
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" 10% off retail repair service (flat-rate invoice) while your membership is active "}
                        </li>
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" One (1) annual service token (per membership year) "}
                        </li>
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" Clear communication, consistent standards, and respectful in‑home service "}
                        </li>
                      </ul>
                      <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph">
                        {" Retail repairs only. Not valid for manufacturer warranty or third-party contract work. Not combinable with other offers. "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom">
                  <div className="avb-wrapper avb-wrapper--vertical avb-wrapper--verticalCenter avb-wrapper--tall dsg-block-26__content-b">
                    <div className="avb-picture dsg-block-26-picture">
                      <img alt="Household Care Plan" src="/media/vendor-assets/appliances/services/service-repair-w800.jpg" className="avb-picture__image dsg-block-26-image" loading="lazy" width={120} height={120} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="avb-divider dsg-block-26-divider avb-divider"></div>
              <div className="avb-grid avb-grid--container dsg-tools-fill-light">
                <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom">
                  <div className="avb-wrapper avb-wrapper--vertical avb-wrapper--verticalCenter avb-wrapper--tall">
                    <div className="avb-wrapper dsg-block-26__content-b">
                      <h3 className="avb-typography__heading">
                        <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-sub-heading dsg-tools-color-dark dsg-block-26__heading-line-3">
                          {" How the Annual Service Token Works "}
                        </span>
                      </h3>
                      <ul className="avb-list avb-list--ordered dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26-list">
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" Join Bronze for $12 per month (automatic monthly billing). "}
                        </li>
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" You receive one (1) service token per membership year. "}
                        </li>
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" Use the token for either (a) one diagnostic visit OR (b) one preventative maintenance service. "}
                        </li>
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" If you use your token during the membership year, a minimum 12-month commitment applies. "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom">
                  <div className="avb-wrapper avb-wrapper--vertical avb-wrapper--verticalCenter avb-wrapper--tall dsg-block-26__content-b">
                    <div className="avb-picture dsg-block-26-picture">
                      <img alt="Household Care Plan" src="/media/vendor-assets/appliances/services/services-appliance-parts-w800.jpg" className="avb-picture__image dsg-block-26-image" loading="lazy" width={120} height={120} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="avb-divider dsg-block-26-divider avb-divider"></div>
              <div className="avb-grid avb-grid--container dsg-tools-fill-light">
                <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom">
                  <div className="avb-wrapper avb-wrapper--vertical avb-wrapper--verticalCenter avb-wrapper--tall">
                    <div className="avb-wrapper dsg-block-26__content-b">
                      <h3 className="avb-typography__heading">
                        <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-sub-heading dsg-tools-color-dark dsg-block-26__heading-line-3">
                          {" What You Can Use the Token For "}
                        </span>
                      </h3>
                      <ul className="avb-list dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26-list">
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" One diagnostic visit (retail diagnostic) "}
                        </li>
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" OR one preventative maintenance service "}
                        </li>
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" The token may be gifted to a friend or family member for diagnostic use only "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom">
                  <div className="avb-wrapper avb-wrapper--vertical avb-wrapper--verticalCenter avb-wrapper--tall dsg-block-26__content-b">
                    <div className="avb-picture dsg-block-26-picture">
                      <img alt="Household Care Plan" src="/media/vendor-assets/appliances/services/repair/repair-service-dishwasher-v2-w800.jpg" className="avb-picture__image dsg-block-26-image" loading="lazy" width={120} height={120} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="avb-divider dsg-block-26-divider avb-divider"></div>
              <div className="avb-grid avb-grid--container dsg-tools-fill-light">
                <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom">
                  <div className="avb-wrapper avb-wrapper--vertical avb-wrapper--verticalCenter avb-wrapper--tall">
                    <div className="avb-wrapper dsg-block-26__content-b">
                      <h3 className="avb-typography__heading">
                        <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-sub-heading dsg-tools-color-dark dsg-block-26__heading-line-3">
                          {" Who Bronze is For "}
                        </span>
                      </h3>
                      <ul className="avb-list dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26-list">
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" Homes that want a simple, affordable plan for appliance support "}
                        </li>
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" Busy families that value priority scheduling and clear communication "}
                        </li>
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" Homeowners who want predictable benefits and retail discounts "}
                        </li>
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" Customers who prefer having a yearly service token ready when something goes wrong "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom">
                  <div className="avb-wrapper avb-wrapper--vertical avb-wrapper--verticalCenter avb-wrapper--tall dsg-block-26__content-b">
                    <div className="avb-picture dsg-block-26-picture">
                      <img alt="Household Care Plan" src="/media/vendor-assets/appliances/services/dishwasher-installation-928084662-1989x1326-w800.jpg" className="avb-picture__image dsg-block-26-image" loading="lazy" width={120} height={120} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="avb-divider dsg-block-26-divider avb-divider"></div>
              <div className="avb-grid avb-grid--container dsg-tools-fill-light">
                <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom">
                  <div className="avb-wrapper avb-wrapper--vertical avb-wrapper--verticalCenter avb-wrapper--tall">
                    <div className="avb-wrapper dsg-block-26__content-b">
                      <h3 className="avb-typography__heading">
                        <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-sub-heading dsg-tools-color-dark dsg-block-26__heading-line-3">
                          {" Membership Terms "}
                        </span>
                      </h3>
                      <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph dsg-tools-fw-bold">
                        {" $12 per month "}
                      </p>
                      <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph">
                        {" Membership Terms: "}
                      </p>
                      <ul className="avb-list dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26-list">
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" Membership requires a valid credit or debit card on file. "}
                        </li>
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" Enrollment authorizes automatic recurring monthly billing. "}
                        </li>
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" Membership renews automatically unless canceled by the member. "}
                        </li>
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" One (1) service token is issued per membership year. "}
                        </li>
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" The service token may be used for one diagnostic visit or one preventative maintenance service. "}
                        </li>
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" Service tokens have no cash value and do not roll over. "}
                        </li>
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" A service token may be gifted to a friend or family member for diagnostic use only. Preventative maintenance services are not transferable. "}
                        </li>
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" If a service token is used during a membership year, a minimum 12-month commitment applies. "}
                        </li>
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" Membership benefits, including discounts and priority scheduling, apply only within Doctor Appliance’s designated service areas. "}
                        </li>
                        <li className="avb-list__item dsg-block-26-list-item">
                          {" Membership discounts apply to retail repair services only and do not apply to manufacturer warranty or third-party contract work. "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom">
                  <div className="avb-wrapper avb-wrapper--vertical avb-wrapper--verticalCenter avb-wrapper--tall dsg-block-26__content-b">
                    <div className="avb-picture dsg-block-26-picture">
                      <img alt="Household Care Plan" src="/media/vendor-assets/appliances/services/repair/repair-service-laundry-v1-w800.jpg" className="avb-picture__image dsg-block-26-image" loading="lazy" width={120} height={120} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="avb-divider dsg-block-26-divider avb-divider"></div>
              <h3 className="avb-typography__heading">
                <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-sub-heading dsg-tools-color-dark dsg-block-26__heading-line-3">
                  {" FAQ "}
                </span>
              </h3>
              <Accordion className="dsg-block-26__accordion avb-accordion">
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" How do I join Bronze? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      <a href="#join-bronze" className="dsg-block-26-link avb-link">
                        {"Join using the form on this page"}
                      </a>
                      {" or call our main line at 800-298-8643. Enrollment requires a credit or debit card on file for recurring billing. "}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" What does the 10% discount apply to? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" It applies to retail repair service (flat-rate invoice) while your membership is active. It does not apply to manufacturer warranty or third-party contract work and cannot be combined with other offers. "}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" How do I use my service token? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Once you are a member, you receive one token per membership year. When you need service, tell us you are a Bronze member and whether you want to apply your token to a diagnostic visit or preventative maintenance. "}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" What if I do not use my token this year? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Tokens do not roll over and have no cash value. You receive a new token each membership year while your membership remains active. "}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" Can I gift my token to someone else? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Yes. You may gift a token to a friend or family member for diagnostic use only. Preventative maintenance services are not transferable. "}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" Does Bronze cover manufacturer warranty or extended warranty work? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" No. Bronze benefits and discounts apply to retail repair services only and do not apply to manufacturer warranty or third-party contract work. "}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" Is Bronze an insurance policy or an extended warranty? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" No. The Household Care Plan is not an insurance policy and does not extend manufacturer warranties. "}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" What areas are covered? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Membership benefits apply within Doctor Appliance’s designated service areas. If you are unsure whether you are in-range, call the main line and we will confirm. "}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" How do I cancel? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" You may cancel at any time. If a service token has been used during the membership year, a minimum 12-month commitment applies before cancellation can take effect. "}
                    </p>
                  </div>
                </AccordionItem>
              </Accordion>
              <div className="avb-divider dsg-block-26-divider avb-divider"></div>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph">
                {" *Household Care Plan is not an insurance policy and does not extend manufacturer warranties. "}
              </p>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph">
                <a href="#join-bronze" className="dsg-block-26-link avb-link">
                  {"Join the Household Care Plan"}
                </a>
                {" | Call Us (800-298-8643) if you have questions. "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section data-id="30" className="avb-designer-block avb-typography dsg-tools-bgcolor-gradient dsg-block-30" id="join-bronze">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom dsg-block-30-form-grid dsg-tools-nomp">
            <h2 id="service-form" className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-light dsg-block-30__heading">
              {" Join the Household Care Plan ‑ Bronze "}
            </h2>
            <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-light dsg-block-30__paragraph">
              {" Send us your details, and one of our friendly and knowledgeable professionals will reach out. "}
            </p>
            <iframe className="dsg-block-30__form" title="Join the Household Care Plan - Bronze" src="https://avbmarketing.formstack.com/forms/h0136_1_join_household_care_plan_bronze" frameBorder="0"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
