/** Page content for /privacy-policies/do-not-sell-my-personal-information (ported from the live CMS markup). */
export default function PrivacyPoliciesDoNotSellMyPersonalInformationContent() {
  return (
    <div className="avb-main store-page-privacy-policies_do-not-sell-my-personal-information">
      <section data-id="26" className="avb-designer-block avb-typography dsg-block-26">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom">
            <div className="avb-wrapper dsg-block-26__content">
              <h1 className="dsg__heading-title1">
                {" Do Not Sell My Personal Information"}
              </h1>
              <p className="avb-typography__paragraph dsg-block-26__paragraph">
                {" We do not sell your personally identifiable information to anyone. We use your data to provide and improve your experience while visiting our website. However, under California law, residents of California have the following privacy rights to:"}
              </p>
              <ul className="avb-list dsg-block-1-list">
                <li className="avb-list__item dsg-block-1-list-item">
                  {"Request to know which of your personal information has been collected "}
                </li>
                <li className="avb-list__item dsg-block-1-list-item">
                  {"Request deletion of personal information collected about you "}
                </li>
              </ul>
              <div className="avb-divider dsg-block-1-divider avb-divider"></div>
              <p className="avb-typography__paragraph dsg-block-26__paragraph">
                {"To exercise these rights, please submit your request below."}
              </p>
              <iframe className="dsg-form-iframe" src="/cms-iframehtml/avb-global/formstack-ccpa-request-persona-information.html" title="Request My Personal Information Form"></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
