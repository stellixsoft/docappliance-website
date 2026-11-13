import Link from "next/link";

/** Page content for /accessibility (ported from the live CMS markup). */
export default function AccessibilityContent() {
  return (
    <div className="avb-main store-page-accessibility">
      <section data-id="26" className="avb-designer-block avb-typography dsg-block-26">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom">
            <div className="avb-wrapper dsg-block-26__content">
              <h1 className="dsg__heading-title1">
                {" Accessibility Statement "}
              </h1>
              <p className="avb-typography__paragraph dsg-block-26__paragraph">
                {" Updated: January 2022. "}
              </p>
              <h2 className="dsg__heading-title2">
                {" General "}
              </h2>
              <p className="avb-typography__paragraph dsg-block-26__paragraph">
                <span>
                  {"Doctor Appliance"}
                </span>
                {" strives to ensure that its services are accessible to people with disabilities. "}
                <span>
                  {"Doctor Appliance"}
                </span>
                {" has invested a significant amount of resources to help ensure that its website is made easier to use and more accessible for people with disabilities, with the strong belief that every person has the right to live with dignity, equality, comfort and independence. "}
              </p>
              <h2 className="dsg__heading-title2">
                {" Accessibility on our website "}
              </h2>
              <p className="avb-typography__paragraph dsg-block-26__paragraph">
                <span>
                  {"Doctor Appliance"}
                </span>
                {" website makes available the "}
                <a href="https://UserWay.org" title="Free Website Accessibility Widget" target="_blank" className="avb-link">
                  {" UserWay Website Accessibility Widget "}
                </a>
                {" that is powered by a dedicated accessibility server. The software allows "}
                <span>
                  {"Doctor Appliance"}
                </span>
                {" website to improve its compliance with the Web Content Accessibility Guidelines (WCAG 2.1). "}
              </p>
              <h2 className="dsg__heading-title2">
                {" Enabling the Accessibility Menu "}
              </h2>
              <p className="avb-typography__paragraph dsg-block-26__paragraph">
                {" The "}
                <span>
                  {"Doctor Appliance"}
                </span>
                {" website accessibility menu can be enabled either by hitting the tab key when the page first loads or by clicking the accessibility menu icon that appears on the right or left side of the page. After triggering the accessibility menu, please wait a moment for the accessibility menu to load in its entirety. "}
              </p>
              <h2 className="dsg__heading-title2">
                {" Disclaimer "}
              </h2>
              <p className="avb-typography__paragraph dsg-block-26__paragraph">
                <span>
                  {"Doctor Appliance"}
                </span>
                {" continues its efforts to constantly improve the accessibility of its site and services in the belief that it is our collective moral obligation to allow seamless, accessible and unhindered use also for those of us with disabilities. "}
              </p>
              <p className="avb-typography__paragraph dsg-block-26__paragraph">
                {" In an ongoing effort to continually improve and remediate accessibility issues, we also regularly scan our website with UserWay's "}
                <a href="https://UserWay.org/scanner" title="Free Website Accessibility Scanner" target="_blank" className="avb-link">
                  {" Accessibility Scanner "}
                </a>
                {" to identify and fix every possible accessibility barrier on our site. Despite our efforts to make all pages and content on our website fully accessible, some content may not have yet been fully adapted to the strictest accessibility standards. This may be a result of not having found or identified the most appropriate technological solution. "}
              </p>
              <h2 className="dsg__heading-title2">
                {" Here For You "}
              </h2>
              <p className="avb-typography__paragraph dsg-block-26__paragraph">
                {" If you are experiencing difficulty with any content on our website or require assistance with any part of our site, please contact us during normal business hours as detailed below and we will be happy to assist. "}
              </p>
              <h2 className="dsg__heading-title2">
                {" Contact Us "}
              </h2>
              <p className="avb-typography__paragraph dsg-block-26__paragraph">
                {" If you wish to report an accessibility issue, have any questions or need assistance, please "}
                <Link href="/contacts" className="dsg-block-1-link avb-link">
                  {" contact us. "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
