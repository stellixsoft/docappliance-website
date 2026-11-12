import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/site";

/** Shell for the service site (www.docappliance.com). */
export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <address className="a11y-notice">
        <p>
          For screen reader problems with this website, please call <a href="tel:8002988643">{site.phone.display}</a>.
          Standard carrier rates apply to texts.
        </p>
      </address>
      <div className="top-bar">
        <TopBar />
      </div>
      <Header />
      <main className="site-main">{children}</main>
      <Footer />
    </>
  );
}
