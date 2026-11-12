import Link from "next/link";

/** Page content for /privacy-policies/california-privacy-rights (ported from the live CMS markup). */
export default function PrivacyPoliciesCaliforniaPrivacyRightsContent() {
  return (
    <div className="avb-main page-privacy-policies_california-privacy-rights">
      <section data-id="26" className="avb-designer-block avb-typography dsg-block-26">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom">
            <div className="avb-wrapper dsg-block-26__content">
              <h1 className="dsg__heading-title1">
                {" California Privacy Rights"}
              </h1>
              <p className="avb-typography__paragraph dsg-block-26__paragraph">
                {"Residents of California have additional data privacy rights under the California Consumer Privacy Act (CCPA) regarding collection of their personal information. These consumer, individual or user rights include:"}
              </p>
              <ul className="avb-list dsg-block-1-list">
                <li className="avb-list__item dsg-block-1-list-item">
                  {"The right to know which information about an individual is collected or sold, including: "}
                  <ul className="avb-list dsg-block-1-list list">
                    <li className="avb-list__item dsg-block-1-list-item">
                      {"Types of personal information that have been collected or sold"}
                    </li>
                    <li className="avb-list__item dsg-block-1-list-item">
                      {"Types of sources whence their personal information has been collected "}
                    </li>
                    <li className="avb-list__item dsg-block-1-list-item">
                      {"How the collected information is used or being used "}
                    </li>
                    <li className="avb-list__item dsg-block-1-list-item">
                      {"Which categories of personal information are disclosed or sold to third parties "}
                    </li>
                    <li className="avb-list__item dsg-block-1-list-item">
                      {"Types of third parties to whom the individual’s personal information was disclosed or sold "}
                    </li>
                  </ul>
                </li>
                <li className="avb-list__item dsg-block-1-list-item">
                  {"The right to request notice of which specific personal information was collected about the individual over the preceding 12 months. "}
                </li>
                <li className="avb-list__item dsg-block-1-list-item">
                  {"The right to request that personal information collected about them be deleted, excepting scenarios in which that personal information is necessary to perform specific business actions including but not limited to: "}
                  <ul className="avb-list dsg-block-1-list">
                    <li className="avb-list__item dsg-block-1-list-item">
                      {"Completing transactions "}
                    </li>
                    <li className="avb-list__item dsg-block-1-list-item">
                      {"Delivering services or goods requested by the individual "}
                    </li>
                    <li className="avb-list__item dsg-block-1-list-item">
                      {"Detecting and protecting the individual against security threats, or for prosecuting the parties responsible for such security threats "}
                    </li>
                    <li className="avb-list__item dsg-block-1-list-item">
                      {"Maintain compliance with specific legal obligations or rights"}
                    </li>
                  </ul>
                </li>
                <li className="avb-list__item dsg-block-1-list-item">
                  {"The right to opt out or not consent to the sale of the individual’s personal information. Follow the link "}
                  <Link href="/privacy-policies/do-not-sell-my-personal-information" className="dsg-block-1-link avb-link">
                    {"Do Not Sell My Personal Information"}
                  </Link>
                  {" to opt out and revoke consent to have your personal information sold. "}
                </li>
                <li className="avb-list__item dsg-block-1-list-item">
                  {"The right for an individual to not face discrimination for exercising their privacy rights under CCPA. "}
                </li>
              </ul>
              <div className="avb-divider dsg-block-1-divider avb-divider"></div>
              <h2 className="avb-typography__heading avb-typography__heading--title">
                <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-block-26__heading-line-1">
                  {"Contact us to exercise your rights to:"}
                </span>
              </h2>
              <ul className="avb-list dsg-block-1-list">
                <li className="avb-list__item dsg-block-1-list-item">
                  {"Request to know which of your personal information has been collected "}
                </li>
                <li className="avb-list__item dsg-block-1-list-item">
                  {"Request deletion of personal information collected about you "}
                </li>
              </ul>
              <p className="avb-typography__paragraph dsg-block-26__paragraph">
                {"To exercise these rights, "}
                <Link href="/privacy-policies/do-not-sell-my-personal-information" className="dsg-block-1-link avb-link">
                  {"please submit your request here"}
                </Link>
                {"."}
              </p>
              <p className="avb-typography__paragraph dsg-block-26__paragraph">
                {"We will return your correspondence within 45 days of receipt of your request. We may need to ask you questions or request information from you to verify your identity. If we need more than 45 days (up to one 90-day extension allowed by CCPA), we will let you know and provide our reason for delay."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
