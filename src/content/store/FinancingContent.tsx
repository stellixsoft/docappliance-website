/** Page content for /financing (ported from the live CMS markup). */
export default function FinancingContent() {
  return (
    <div className="avb-main store-page-financing">
      <section data-id="2" className="avb-designer-block avb-typography dsg-block-2">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 dsg-block-2__grid-column">
            <div className="avb-wrapper avb-wrapper--background dsg-block-2__background">
              <div className="avb-grid">
                <div className="avb-grid__column avb-grid__column--small-6">
                  <div className="avb-wrapper dsg-block-2__content">
                    <h1 className="avb-typography__heading avb-typography__heading--title">
                      <span className="avb-typography__heading-line dsg-block-2__heading-line-1">
                        {"EXPLORE OUR FINANCING OPTIONS*"}
                      </span>
                      <span className="avb-typography__heading-line avb-typography__heading-line--light avb-typography__heading-line--medium dsg-block-2__heading-line-2">
                        {"Apply Online or In-Store, and Get Financing Today*"}
                      </span>
                    </h1>
                    <p className="avb-typography__paragraph dsg-block-2__paragraph">
                      {"We offer convenient in-store financing on your purchase."}
                    </p>
                    <p className="avb-typography__paragraph dsg-block-2__paragraph-disclaimer">
                      {"*Subject to credit approval. Restrictions apply. See store for details."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="6a" className="avb-designer-block avb-typography dsg-block-6__syncrony">
        <div className="avb-grid avb-grid--container dsg-block-6__syncrony__border">
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-block-6__synchrony-row">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-6__background-1">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-6__syncrony__content">
                <div className="avb-wrapper">
                  <div className="avb-picture dsg-block-6__syncrony-picture">
                    <img alt="Synchrony Financial Credit Card" src="/media/finance/synchrony/synchrony-welcome-home-card-w1600.png" className="avb-picture__image dsg-block-6__syncrony-image" loading="lazy" width={120} height={120} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="avb-grid__column avb-grid__column--medium-6 avb-grid__column--marginBottom dsg-block-6__synchrony-row">
            <div className="avb-wrapper avb-wrapper--flex avb-wrapper--tall avb-wrapper--background dsg-block-6__syncrony__background-2">
              <div className="avb-wrapper avb-wrapper--horizontal avb-wrapper--horizontalCenter avb-wrapper--vertical avb-wrapper--verticalCenter dsg-block-6__syncrony__content dsg-block-6__syncrony__content-2">
                <div className="avb-wrapper">
                  <h2 className="avb-typography__heading avb-typography__heading--title">
                    <span className="avb-typography__heading-line avb-typography__heading-line--marginBottom dsg-block-6__syncrony__heading-line-1 dsg-tools-margin-neg">
                      {"Promotional Financing is Available* "}
                    </span>
                    <span className="avb-typography__heading-line avb-typography__heading-line--light avb-typography__heading-line--medium dsg-block-6__syncrony__heading-line-2">
                      {"with the Synchrony HOME™ Credit Card."}
                    </span>
                  </h2>
                  <a href="synchrony-financing" className="avb-link avb-button avb-button--primary dsg-block-6__syncrony__button avb-link">
                    {" LEARN MORE "}
                  </a>
                  <a href="https://www.mysynchrony.com/locations-near-me.html" className="avb-link avb-button avb-button--primary dsg-block-6__syncrony__button avb-link" target="_blank">
                    {" Apply Now "}
                  </a>
                  <p className="avb-typography__paragraph dsg-block-6__syncrony__paragraph">
                    {"*Subject to credit approval. Restrictions apply. See store for details."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
