import type { Metadata } from "next";
import "@/styles/store.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TopBar } from "@/components/store/TopBar";
import { PromoBar } from "@/components/store/PromoBar";
import { FooterBlocks } from "@/components/store/FooterBlocks";
import { store, storeLegalNav, storeNav } from "@/data/store";

export const metadata: Metadata = {
  metadataBase: new URL(store.url),
};

/** Shell for the store (sales.docappliance.com). Same header component as the service site, store menus. */
export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="store">
      <address className="a11y-notice">
        <p>
          For screen reader problems with this website, please call <a href={store.phone.href}>{store.phone.display}</a>.
          Standard carrier rates apply to texts.
        </p>
      </address>
      <div className="top-bar">
        <TopBar />
      </div>
      <Header nav={storeNav} utility="store" className="store-header" logo={{ src: store.logo.src, mobileSrc: "/media/brand/store-logo-mobile.png", alt: store.logo.alt }} />
      <div className="promo-bar">
        <PromoBar />
      </div>
      <main className="site-main">{children}</main>
      <Footer blocks={<FooterBlocks />} legal={storeLegalNav} />
    </div>
  );
}
