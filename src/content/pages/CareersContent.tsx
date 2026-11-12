/** Page content for /careers (ported from the live CMS markup). */
export default function CareersContent() {
  return (
    <div className="avb-main page-careers">
      <section data-id="1" className="avb-designer-block avb-typography dsg-block-1">
        <div className="avb-grid">
          <div className="avb-grid__column avb-grid__column--small-12 dsg-block-1__grid-column">
            <div className="avb-wrapper avb-wrapper--background dsg-block-1__background dsg-tools-bgcolor-gradient">
              <div className="avb-wrapper dsg-block-1__content">
                <h1 className="avb-typography__heading avb-typography__heading--title dsg-tools-nom">
                  <span className="avb-typography__heading-line dsg-tools-main-heading dsg-tools-color-light dsg-tools-uppercase dsg-block-1__heading-line-1">
                    {" Careers "}
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-id="30" className="avb-designer-block avb-typography dsg-block-30">
        <div className="avb-grid avb-grid--container">
          <div className="avb-grid__column avb-grid__column--small-12 avb-grid__column--marginBottom dsg-block-30-form-grid dsg-tools-nomp">
            <h2 id="service-form" className="avb-typography__heading dsg-tools-main-heading dsg-tools-color-dark dsg-block-30__heading">
              {" Employment Application "}
            </h2>
            <p className="avb-typography__paragraph dsg-tools-main-paragraph dsg-tools-color-dark dsg-block-30__paragraph">
              {" Send us your details, and someone from our team will reach out. "}
            </p>
            <iframe className="dsg-block-30__form" title="Employment Application" src="https://avbmarketing.formstack.com/forms/h0136_1_doctor_appliance_employment_application" frameBorder="0"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
