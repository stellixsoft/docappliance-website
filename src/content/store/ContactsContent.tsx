import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

/** Page content for /contacts (ported from the live CMS markup). */
export default function ContactsContent() {
  return (
    <div className="avb-main store-page-contacts">
      <section data-id="3" className="avb-designer-contact avb-typography dsg-contact-3">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom">
            <h1 className="avb-typography__headline dsg-tools-main-heading dsg-tools-color-primary dsg-tools-fw-bold dsg-contact-3__heading">
              {" Our Locations "}
            </h1>
            <iframe className="dsg-contact-3__map" src="https://www.google.com/maps/d/embed?mid=1gAmm51QmP0t6HIr2S_hGYFBwNEvD9Lk&ehbc=2E312F" loading="lazy" title="Map"></iframe>
            <div className="avb-grid">
              <div className="avb-grid__column avb-grid__column--autogrow avb-grid__column--marginBottom dsg-contact-3__grid-column">
                <div className="avb-wrapper dsg-tools-fill-light dsg-contact-3__location">
                  <h2 className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-primary dsg-tools-fw-bold dsg-contact-3__location-name">
                    {" Estill Springs "}
                  </h2>
                  <div className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-contact-3__address">
                    <span className="dsg-contact-3__address-line">
                      {" 9185 Tullahoma Hwy "}
                    </span>
                    <span className="dsg-contact-3__address-line">
                      {" Estill Springs, TN 37330 "}
                    </span>
                  </div>
                  <a href="https://www.google.com/maps/dir//Doctor+Appliance+9185+Tullahoma+Hwy+Estill+Springs,+TN+37330+%C3%89tats-Unis/@35.2998774,-86.1544598,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88617bdf1752d905:0xda96bf56eb1ff39f!2m2!1d-86.1544598!2d35.2998774?hl=en&entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D" className="dsg-tools-fw-bold dsg-contact-3__link dsg-tools-main-paragraph dsg-contact-3__directions avb-link" target="_blank">
                    {" Get Directions "}
                    <Icon name="arrow-right-long" variant="solid" className="dsg-contact-3__directions-icon" />
                    {" "}
                  </a>
                  <ul className="avb-list avb-list--noBullet">
                    <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-dark">
                      {" Phone: "}
                      <a href="tel:9313139083" className="dsg-tools-fw-bold dsg-contact-3__link avb-link">
                        {" 931-313-9083 "}
                      </a>
                    </li>
                    <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-dark">
                      {" Email: "}
                      <a href="mailto:customercare@docappliance.com" className="dsg-tools-fw-bold dsg-contact-3__link avb-link">
                        {" customercare@docappliance.com "}
                      </a>
                    </li>
                  </ul>
                  <Link href="/locations/estill-springs" className="avb-button dsg-tools-main-button dsg-contact-3__button avb-link">
                    {" Contact This Location "}
                  </Link>
                </div>
              </div>
              <div className="avb-grid__column avb-grid__column--autogrow avb-grid__column--marginBottom dsg-contact-3__grid-column">
                <div className="avb-wrapper dsg-tools-fill-light dsg-contact-3__location">
                  <h2 className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-primary dsg-tools-fw-bold dsg-contact-3__location-name">
                    {" Knoxville "}
                  </h2>
                  <div className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-contact-3__address">
                    <span className="dsg-contact-3__address-line">
                      {" 3535 Papermill Dr NW "}
                    </span>
                    <span className="dsg-contact-3__address-line">
                      {" Knoxville, TN 37909 "}
                    </span>
                  </div>
                  <a href="https://www.google.com/maps/dir//Doctor+Appliance+3535+Papermill+Dr+NW+Knoxville,+TN+37909+United+States/@35.9605474,-83.9668165,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x885c3dd55b98ad57:0x662e30b71098b10e" className="dsg-tools-fw-bold dsg-contact-3__link dsg-tools-main-paragraph dsg-contact-3__directions avb-link" target="_blank">
                    {" Get Directions "}
                    <Icon name="arrow-right-long" variant="solid" className="dsg-contact-3__directions-icon" />
                    {" "}
                  </a>
                  <ul className="avb-list avb-list--noBullet">
                    <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-dark">
                      {" Phone: "}
                      <a href="tel:8652722606" className="dsg-tools-fw-bold dsg-contact-3__link avb-link">
                        {" 865-272-2606 "}
                      </a>
                    </li>
                    <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-dark">
                      {" Email: "}
                      <a href="mailto:customercare@docappliance.com" className="dsg-tools-fw-bold dsg-contact-3__link avb-link">
                        {" customercare@docappliance.com "}
                      </a>
                    </li>
                  </ul>
                  <Link href="/locations/knoxville" className="avb-button dsg-tools-main-button dsg-contact-3__button avb-link">
                    {" Contact This Location "}
                  </Link>
                </div>
              </div>
              <div className="avb-grid__column avb-grid__column--autogrow avb-grid__column--marginBottom dsg-contact-3__grid-column">
                <div className="avb-wrapper dsg-tools-fill-light dsg-contact-3__location">
                  <h2 className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-primary dsg-tools-fw-bold dsg-contact-3__location-name">
                    {" Phoenix "}
                  </h2>
                  <h2 className="avb-typography__heading dsg-tools-sub-heading dsg-tools-color-dark dsg-tools-fw-bold dsg-contact-3__location-name-2">
                    {" (Pick-Up Only) "}
                  </h2>
                  <div className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-contact-3__address">
                    <span className="dsg-contact-3__address-line">
                      {" 7150 W Roosevelt St "}
                    </span>
                    <span className="dsg-contact-3__address-line">
                      {" Unit D129 "}
                    </span>
                    <span className="dsg-contact-3__address-line">
                      {" Phoenix, AZ 85043 "}
                    </span>
                  </div>
                  <a href="https://www.google.com/maps/dir//7150+W+Roosevelt+St+Suite+D-129+Phoenix,+AZ+85043+USA/@33.4610803,-112.2152091,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x872b157548955555:0x638959b1e83ff642" className="dsg-tools-fw-bold dsg-contact-3__link dsg-tools-main-paragraph dsg-contact-3__directions avb-link" target="_blank">
                    {" Get Directions "}
                    <Icon name="arrow-right-long" variant="solid" className="dsg-contact-3__directions-icon" />
                    {" "}
                  </a>
                  <ul className="avb-list avb-list--noBullet">
                    <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-dark">
                      {" Phone: "}
                      <a href="tel:6024282502" className="dsg-tools-fw-bold dsg-contact-3__link avb-link">
                        {" 602-428-2502 "}
                      </a>
                    </li>
                  </ul>
                  <Link href="/locations/phoenix" className="avb-button dsg-tools-main-button dsg-contact-3__button avb-link">
                    {" Contact This Location "}
                  </Link>
                </div>
              </div>
              <div className="avb-grid__column avb-grid__column--autogrow avb-grid__column--marginBottom dsg-contact-3__grid-column">
                <div className="avb-wrapper dsg-tools-fill-light dsg-contact-3__location">
                  <h2 className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-primary dsg-tools-fw-bold dsg-contact-3__location-name">
                    {" Salina "}
                  </h2>
                  <div className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-contact-3__address">
                    <span className="dsg-contact-3__address-line">
                      {" 213 S Broadway Blvd "}
                    </span>
                    <span className="dsg-contact-3__address-line">
                      {" Salina, KS 67401 "}
                    </span>
                  </div>
                  <a href="https://www.google.com/maps/dir//Doctor+Appliance+213+S+Broadway+Blvd+Salina,+KS+67401+United+States/@38.837668,-97.624406,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x87bccf14ae2046dd:0xff1c779640e0d90c" className="dsg-tools-fw-bold dsg-contact-3__link dsg-tools-main-paragraph dsg-contact-3__directions avb-link" target="_blank">
                    {" Get Directions "}
                    <Icon name="arrow-right-long" variant="solid" className="dsg-contact-3__directions-icon" />
                    {" "}
                  </a>
                  <ul className="avb-list avb-list--noBullet">
                    <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-dark">
                      {" Phone: "}
                      <a href="tel:7852019241" className="dsg-tools-fw-bold dsg-contact-3__link avb-link">
                        {" 785-201-9241 "}
                      </a>
                    </li>
                    <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-dark">
                      {" Email: "}
                      <a href="mailto:customercare@docappliance.com" className="dsg-tools-fw-bold dsg-contact-3__link avb-link">
                        {" customercare@docappliance.com "}
                      </a>
                    </li>
                  </ul>
                  <Link href="/locations/salina" className="avb-button dsg-tools-main-button dsg-contact-3__button avb-link">
                    {" Contact This Location "}
                  </Link>
                </div>
              </div>
            </div>
            <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-contact-3__footnote">
              <span className="dsg-tools-fw-bold dsg-tools-color-primary">
                {"Salina, KS Notice:"}
              </span>
              {" This location does not offer new appliance sales. We provide appliance repair, appliance parts sales, and mini-split installation/service. Call for details. "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
