import { Accordion, AccordionItem } from "@/components/ui/Accordion";

/** Page content for /faq (ported from the live CMS markup). */
export default function FaqContent() {
  return (
    <div className="avb-main page-faq">
      <section data-id="1" className="avb-designer-block avb-typography dsg-block-1">
        <div className="avb-grid">
          <div className="avb-grid__column avb-grid__column--small-12 dsg-block-1__grid-column">
            <div className="avb-wrapper avb-wrapper--background dsg-block-1__background dsg-tools-bgcolor-gradient">
              <div className="avb-wrapper dsg-block-1__content">
                <h1 className="avb-typography__heading avb-typography__heading--title dsg-tools-nom">
                  <span className="avb-typography__heading-line dsg-tools-main-heading dsg-tools-color-light dsg-tools-uppercase dsg-block-1__heading-line-1">
                    {" FAQ "}
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
              <h3 className="avb-typography__heading">
                <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-sub-heading dsg-tools-color-dark dsg-block-26__heading-line-3">
                  {" Premium and Commercial Service FAQ "}
                </span>
              </h3>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph">
                {" Clarifies pricing structure differences for premium brands and commercial units. "}
              </p>
              <Accordion className="dsg-block-26__accordion avb-accordion">
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" Do premium brands have different pricing? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Yes. Premium brands require specialized service and pricing reflects that. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Premium brands such as Sub-Zero, Wolf, Viking and similar lines require advanced diagnostics, specialized tooling, and senior technicians. Service call and repair pricing reflect the increased complexity and care required. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" If the issue persists, schedule professional diagnostic service with Doctor Appliance. "}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" Why is commercial appliance service priced differently? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Commercial appliances require different liability, diagnostics, and routing. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Commercial appliances operate under different load conditions and liability environments. Commercial service calls and repair pricing reflect additional complexity and scheduling considerations. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" If the issue persists, schedule professional diagnostic service with Doctor Appliance. "}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" Do you use senior technicians for premium brands? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Yes. Premium work is assigned to experienced technicians. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Premium and complex refrigeration systems are assigned to highly trained technicians to protect equipment integrity and customer expectations. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" If the issue persists, schedule professional diagnostic service with Doctor Appliance. "}
                    </p>
                  </div>
                </AccordionItem>
              </Accordion>
              <div className="avb-divider dsg-block-26-divider avb-divider"></div>
              <h3 className="avb-typography__heading">
                <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-sub-heading dsg-tools-color-dark dsg-block-26__heading-line-3">
                  {" Freezer FAQ "}
                </span>
              </h3>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph">
                {" Standalone freezer and chest freezer concerns. "}
              </p>
              <Accordion className="dsg-block-26__accordion avb-accordion">
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" My freezer is not freezing properly. What can cause that? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Airflow restriction, thermostat issues, or sealed system problems are common causes. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Freezers depend on proper airflow and refrigeration pressure. Temperature control faults, blocked airflow, or refrigerant-related issues may reduce freezing performance. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" If the issue persists, schedule professional diagnostic service with Doctor Appliance. "}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" My freezer has frost buildup. Why? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Door seal leaks or defrost system issues are common causes. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Frost can result from door seal damage, moisture intrusion, or defrost cycle problems. Persistent frost reduces efficiency and cooling consistency. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" If the issue persists, schedule professional diagnostic service with Doctor Appliance. "}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" My freezer is making loud noises. Is that normal? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Some compressor noise is normal; loud grinding or knocking is not. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Freezers produce compressor and fan noise during operation. Loud mechanical sounds may indicate component wear. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" If the issue persists, schedule professional diagnostic service with Doctor Appliance. "}
                    </p>
                  </div>
                </AccordionItem>
              </Accordion>
              <div className="avb-divider dsg-block-26-divider avb-divider"></div>
              <h3 className="avb-typography__heading">
                <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-sub-heading dsg-tools-color-dark dsg-block-26__heading-line-3">
                  {" Garbage Disposal FAQ "}
                </span>
              </h3>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph">
                {" Common disposal questions and symptoms. "}
              </p>
              <Accordion className="dsg-block-26__accordion avb-accordion">
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" My garbage disposal will not turn on. What should I check? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Power supply or internal reset may be involved. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" If the disposal does not respond, check power supply and reset button. If still unresponsive, internal motor or jam issues may require professional service. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" If the issue persists, schedule professional diagnostic service with Doctor Appliance. "}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" My garbage disposal is humming but not spinning. Why? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" It may be jammed or mechanically restricted. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" A humming disposal often indicates a jammed impeller or seized motor. Avoid forcing the unit; professional service may be needed to prevent damage. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" If the issue persists, schedule professional diagnostic service with Doctor Appliance. "}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" My disposal is leaking. What causes that? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Leaks can come from mounting assembly, seals, or housing cracks. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Disposal leaks can originate from sink flange seals, dishwasher connections, or internal housing cracks. Inspection prevents cabinet damage. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" If the issue persists, schedule professional diagnostic service with Doctor Appliance. "}
                    </p>
                  </div>
                </AccordionItem>
              </Accordion>
              <div className="avb-divider dsg-block-26-divider avb-divider"></div>
              <h3 className="avb-typography__heading">
                <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-sub-heading dsg-tools-color-dark dsg-block-26__heading-line-3">
                  {" Vent Hood FAQ "}
                </span>
              </h3>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph">
                {" Range hood and downdraft ventilation concerns. "}
              </p>
              <Accordion className="dsg-block-26__accordion avb-accordion">
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" My vent hood is not pulling air properly. Why? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Filter restriction or duct blockage are common causes. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Vent performance depends on airflow path and clean filters. Blocked ducts or worn fan motors can reduce performance. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" If the issue persists, schedule professional diagnostic service with Doctor Appliance. "}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" My vent hood light works but fan does not. What could be wrong? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Fan motor or control issues may be involved. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" If lighting works but airflow does not, the fan motor, speed switch, or control circuit may require service. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" If the issue persists, schedule professional diagnostic service with Doctor Appliance. "}
                    </p>
                  </div>
                </AccordionItem>
              </Accordion>
              <div className="avb-divider dsg-block-26-divider avb-divider"></div>
              <h3 className="avb-typography__heading">
                <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-sub-heading dsg-tools-color-dark dsg-block-26__heading-line-3">
                  {" Wine Cooler FAQ "}
                </span>
              </h3>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph">
                {" Wine and beverage refrigeration units. "}
              </p>
              <Accordion className="dsg-block-26__accordion avb-accordion">
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" My wine cooler is not holding temperature. Why? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Thermostat, airflow, or sealed system issues may be involved. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Wine coolers require stable temperature control. Sensor faults, airflow restriction, or refrigerant issues may cause fluctuation. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" If the issue persists, schedule professional diagnostic service with Doctor Appliance. "}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" My beverage center is noisy. Is that normal? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Light humming is normal; loud knocking or grinding is not. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Compact refrigeration systems produce light compressor noise. Loud irregular sounds may indicate wear. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" If the issue persists, schedule professional diagnostic service with Doctor Appliance. "}
                    </p>
                  </div>
                </AccordionItem>
              </Accordion>
              <div className="avb-divider dsg-block-26-divider avb-divider"></div>
              <h3 className="avb-typography__heading">
                <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-sub-heading dsg-tools-color-dark dsg-block-26__heading-line-3">
                  {" Stacked / Compact Laundry FAQ "}
                </span>
              </h3>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph">
                {" Apartment-style and stack units. "}
              </p>
              <Accordion className="dsg-block-26__accordion avb-accordion">
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" My stacked washer/dryer unit is vibrating excessively. Why? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Leveling and load balance are common causes. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Stacked units amplify vibration when not level or when loads are uneven. Persistent vibration may indicate suspension wear. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" If the issue persists, schedule professional diagnostic service with Doctor Appliance. "}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" My compact washer is not draining fully. What causes that? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Pump restriction or drainage routing issues are common. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Compact systems rely on efficient drainage routing. Obstructions or pump wear may prevent full drain. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" If the issue persists, schedule professional diagnostic service with Doctor Appliance. "}
                    </p>
                  </div>
                </AccordionItem>
              </Accordion>
              <div className="avb-divider dsg-block-26-divider avb-divider"></div>
              <h3 className="avb-typography__heading">
                <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-sub-heading dsg-tools-color-dark dsg-block-26__heading-line-3">
                  {" Deposits and High-Value Repairs FAQ "}
                </span>
              </h3>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph">
                {" Clarifies deposit policies for higher-dollar repairs and special scenarios. "}
              </p>
              <Accordion className="dsg-block-26__accordion avb-accordion">
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" Do you require deposits on high-value repairs? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" In some cases, yes. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" For higher-dollar repairs such as sealed system or compressor replacements, we may require a deposit before ordering parts or beginning repair. This protects scheduling integrity and reduces non-completion risk. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" If the issue persists, schedule professional diagnostic service with Doctor Appliance. "}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" Why is payment confirmed before diagnostic begins? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" To protect scheduling and reduce non-payment risk. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Confirming payment method before beginning diagnostic protects both the customer and company from disputes or abandoned invoices. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" If the issue persists, schedule professional diagnostic service with Doctor Appliance. "}
                    </p>
                  </div>
                </AccordionItem>
                <AccordionItem className="dsg-block-26__accordion-item avb-accordion__item" titleClassName="dsg-tools-main-paragraph dsg-tools-color-light dsg-block-26__accordion-heading avb-accordion__item-title"
                  title={<>
                    <h3>
                      {" Is the sealed system diagnostic refundable? "}
                    </h3>
                  </>}>
                  <div className="dsg-block-26__accordion-content">
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" No. Once performed, it is non-refundable. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" Sealed system diagnostic requires specialized tools and procedure. Once completed, the fee is non-refundable but is applied toward an approved sealed system repair. "}
                    </p>
                    <p className="dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__accordion-paragraph">
                      {" If the issue persists, schedule professional diagnostic service with Doctor Appliance. "}
                    </p>
                  </div>
                </AccordionItem>
              </Accordion>
              <div className="avb-divider dsg-block-26-divider avb-divider"></div>
              <h3 className="avb-typography__heading">
                <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-tools-sub-heading dsg-tools-color-dark dsg-block-26__heading-line-3">
                  {" General Company Statement "}
                </span>
              </h3>
              <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-26__paragraph">
                {" Doctor Appliance provides professional appliance repair, warranty service, preventative maintenance, and care plan membership across Tennessee, Arizona, and Kansas. We use transparent flat rate pricing and provide a 1-Year Workmanship Warranty on customer-paid retail repairs. Warranty service follows manufacturer or contract administrator terms. Service availability and routing zones vary by location. "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
