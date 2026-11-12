import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

/** Page content for /contacts (ported from the live CMS markup). */
export default function ContactsContent() {
  return (
    <div className="avb-main page-contacts">
      <section data-id="3" className="avb-designer-contact avb-typography dsg-contact-3">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom">
            <h1 className="avb-typography__headline dsg-tools-main-heading dsg-tools-color-primary dsg-tools-fw-bold dsg-contact-3__heading">
              {" America’s Most Trusted Appliance Repair. "}
            </h1>
            <iframe className="dsg-contact-3__map" src="https://www.google.com/maps/d/embed?mid=1mohuXBMg12qJJvHWjfzaOV6NeL0b9zA&ehbc=2E312F&noprof=1" allowFullScreen loading="lazy" title="Map"></iframe>
            <div className="avb-grid">
              <div className="avb-grid__column avb-grid__column--autogrow avb-grid__column--marginBottom dsg-contact-3__grid-column">
                <div className="avb-wrapper dsg-contact-3__location">
                  <h2 className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-primary dsg-tools-fw-bold dsg-contact-3__location-name">
                    {" Estill Springs, TN "}
                  </h2>
                  <div className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-contact-3__address">
                    <span className="dsg-contact-3__address-line">
                      {" 9185 Tullahoma Hwy "}
                    </span>
                    <span className="dsg-contact-3__address-line">
                      {" Estill Springs TN 37330 "}
                    </span>
                  </div>
                  <a href="https://www.google.com/maps/dir//Doctor+Appliance,+9185+Tullahoma+Hwy,+Estill+Springs,+TN+37330/@35.2998774,-86.1544598,17z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88617bdf1752d905:0xda96bf56eb1ff39f!2m2!1d-86.1544598!2d35.2998774!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D" className="dsg-tools-fw-bold dsg-contact-3__link dsg-tools-main-paragraph dsg-contact-3__directions avb-link" target="_blank">
                    {" Get Directions "}
                    <Icon name="long-arrow-alt-right" variant="solid" className="dsg-contact-3__directions-icon" />
                    {" "}
                  </a>
                  <ul className="avb-list avb-list--noBullet">
                    <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-dark">
                      {" Phone: "}
                      <a href="tel:931-313-9083" className="dsg-tools-fw-bold dsg-contact-3__link avb-link">
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
                  <Link href="/estill-springs-tn" className="avb-button dsg-tools-main-button dsg-contact-3__button avb-link">
                    {" Contact This Location "}
                  </Link>
                </div>
              </div>
              <div className="avb-grid__column avb-grid__column--autogrow avb-grid__column--marginBottom dsg-contact-3__grid-column">
                <div className="avb-wrapper dsg-contact-3__location">
                  <h2 className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-primary dsg-tools-fw-bold dsg-contact-3__location-name">
                    {" Knoxville, TN "}
                  </h2>
                  <div className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-contact-3__address">
                    <span className="dsg-contact-3__address-line">
                      {" 3535 Papermill Dr NW "}
                    </span>
                    <span className="dsg-contact-3__address-line">
                      {" Knoxville, TN 37909 "}
                    </span>
                  </div>
                  <a href="https://www.google.com/maps/dir//Doctor+Appliance,+3535+Papermill+Dr+NW,+Knoxville,+TN+37909/@35.9622768,-83.967329,17z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x885c3dd55b98ad57:0x662e30b71098b10e!2m2!1d-83.9668165!2d35.9605474!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D" className="dsg-tools-fw-bold dsg-contact-3__link dsg-tools-main-paragraph dsg-contact-3__directions avb-link" target="_blank">
                    {" Get Directions "}
                    <Icon name="long-arrow-alt-right" variant="solid" className="dsg-contact-3__directions-icon" />
                    {" "}
                  </a>
                  <ul className="avb-list avb-list--noBullet">
                    <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-dark">
                      {" Phone: "}
                      <a href="tel:865-272-2606" className="dsg-tools-fw-bold dsg-contact-3__link avb-link">
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
                  <Link href="/knoxville-tn" className="avb-button dsg-tools-main-button dsg-contact-3__button avb-link">
                    {" Contact This Location "}
                  </Link>
                </div>
              </div>
              <div className="avb-grid__column avb-grid__column--autogrow avb-grid__column--marginBottom dsg-contact-3__grid-column">
                <div className="avb-wrapper dsg-contact-3__location">
                  <h2 className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-primary dsg-tools-fw-bold dsg-contact-3__location-name">
                    {" Phoenix, AZ "}
                  </h2>
                  <div className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-contact-3__address">
                    <span className="dsg-contact-3__address-line">
                      {" 7150 W Roosevelt St, Unit D129 "}
                    </span>
                    <span className="dsg-contact-3__address-line">
                      {" Phoenix, AZ 85043 "}
                    </span>
                  </div>
                  <a href="https://www.google.com/maps/dir//Doctor+Appliance,+7500+W+Roosevelt+St+Suite+D129,+Phoenix,+AZ+85043/@33.4599812,-112.2196963,17z/data=!3m2!4b1!5s0x872b3fd36f0d9b07:0x2656634c790aae9!4m8!4m7!1m0!1m5!1m1!1s0x8ef82b663bb4d703:0x7ae71117375f8c66!2m2!1d-112.220905!2d33.4587413!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D" className="dsg-tools-fw-bold dsg-contact-3__link dsg-tools-main-paragraph dsg-contact-3__directions avb-link" target="_blank">
                    {" Get Directions "}
                    <Icon name="long-arrow-alt-right" variant="solid" className="dsg-contact-3__directions-icon" />
                    {" "}
                  </a>
                  <ul className="avb-list avb-list--noBullet">
                    <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-dark">
                      {" Phone: "}
                      <a href="tel:602-428-2502" className="dsg-tools-fw-bold dsg-contact-3__link avb-link">
                        {" 602-428-2502 "}
                      </a>
                    </li>
                    <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-dark">
                      {" Email: "}
                      <a href="mailto:customercare@docappliance.com" className="dsg-tools-fw-bold dsg-contact-3__link avb-link">
                        {" customercare@docappliance.com "}
                      </a>
                    </li>
                  </ul>
                  <Link href="/phoenix-az" className="avb-button dsg-tools-main-button dsg-contact-3__button avb-link">
                    {" Contact This Location "}
                  </Link>
                </div>
              </div>
              <div className="avb-grid__column avb-grid__column--autogrow avb-grid__column--marginBottom dsg-contact-3__grid-column">
                <div className="avb-wrapper dsg-contact-3__location">
                  <h2 className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-primary dsg-tools-fw-bold dsg-contact-3__location-name">
                    {" Salina, KS "}
                  </h2>
                  <div className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-contact-3__address">
                    <span className="dsg-contact-3__address-line">
                      {" 213 S Broadway Blvd "}
                    </span>
                    <span className="dsg-contact-3__address-line">
                      {" Salina, KS 67401 "}
                    </span>
                  </div>
                  <a href="https://www.google.com/maps/dir//Doctor+Appliance,+213+S+Broadway+Blvd,+Salina,+KS+67401/@38.837668,-97.624406,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x87bccf14ae2046dd:0xff1c779640e0d90c!2m2!1d-97.624406!2d38.837668!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D" className="dsg-tools-fw-bold dsg-contact-3__link dsg-tools-main-paragraph dsg-contact-3__directions avb-link" target="_blank">
                    {" Get Directions "}
                    <Icon name="long-arrow-alt-right" variant="solid" className="dsg-contact-3__directions-icon" />
                    {" "}
                  </a>
                  <ul className="avb-list avb-list--noBullet">
                    <li className="avb-list__item dsg-tools-main-paragraph dsg-tools-color-dark">
                      {" Phone: "}
                      <a href="tel:785-201-9241" className="dsg-tools-fw-bold dsg-contact-3__link avb-link">
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
                  <Link href="/salina-ks" className="avb-button dsg-tools-main-button dsg-contact-3__button avb-link">
                    {" Contact This Location "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
