// Downloads every remote image referenced by the ported pages into /public.
import fs from 'node:fs'; import path from 'node:path';
const read = (f) => (fs.existsSync(new URL(f, import.meta.url)) ? JSON.parse(fs.readFileSync(new URL(f, import.meta.url))) : {});
// Service site and store (sales) images.
const map = { ...read('./assets.json'), ...read('./store-assets.json') };
map['https://assets.avbportal.com/assets/store-logos/h0136_1.png'] = '/media/brand/logo.png';
map['https://cdn.avbportal.com/magento-media/favicon/websites/3384/h0136-favicon_1.png'] = '/media/brand/favicon.png';
map['https://assets.avbportal.com/assets/store-logos/h0136.png'] = '/media/brand/store-logo.png';
map['https://assets.avbportal.com/assets/mobile-store-logos/h0136-mobile.png'] = '/media/brand/store-logo-mobile.png';
map['https://cdn.avbportal.com/magento-media/catalog/product/placeholder/default/image.jpg'] = '/media/brand/no-image.jpg';
map['https://sales.docappliance.com/images/energy-star-logo.svg'] = '/media/brand/energy-star-logo.svg';
let ok = 0, fail = 0;
for (const [url, local] of Object.entries(map)) {
  const dest = path.join('public', decodeURIComponent(local)); // the URL is %-encoded; the file name is not
  if (fs.existsSync(dest)) { ok++; continue; }
  const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' } }).catch(() => null);
  if (!res) { console.log('FAIL network', url); fail++; continue; }
  if (!res.ok) { console.log('FAIL', res.status, url); fail++; continue; }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer())); ok++;
}
console.log({ ok, fail });
