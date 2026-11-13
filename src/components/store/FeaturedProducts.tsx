import { MobileCarousel } from "@/components/ui/MobileCarousel";
import { getProduct } from "@/lib/store/live";
import { ProductTile } from "./catalog/ProductTile";

/**
 * "Featured Products" strip on CMS pages. The live platform fills it in the browser; here the products
 * named in the CMS block are loaded on the server (cached like every product page) and shown as tiles.
 */
export async function FeaturedProducts({ productKeys, perView = 4 }: { productKeys: string[]; perView?: number }) {
  const results = await Promise.allSettled(productKeys.map((k) => getProduct(k)));
  const products = results.flatMap((r) => (r.status === "fulfilled" ? [r.value] : []));
  if (!products.length) return null;
  return (
    <MobileCarousel className="featured-products" perView={perView}>
      {products.map((p) => (
        <div key={p.id} className="mobile-carousel__slide featured-products__slide">
          <ProductTile product={p} />
        </div>
      ))}
    </MobileCarousel>
  );
}
