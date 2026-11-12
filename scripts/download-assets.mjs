// Downloads every remote image referenced by the ported pages into /public.
import fs from 'node:fs'; import path from 'node:path';
const map = JSON.parse(fs.readFileSync(new URL('./assets.json', import.meta.url)));
map['https://assets.avbportal.com/assets/store-logos/h0136_1.png'] = '/media/brand/logo.png';
map['https://cdn.avbportal.com/magento-media/favicon/websites/3384/h0136-favicon_1.png'] = '/media/brand/favicon.png';
let ok = 0, fail = 0;
for (const [url, local] of Object.entries(map)) {
  const dest = path.join('public', local);
  if (fs.existsSync(dest)) { ok++; continue; }
  const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' } });
  if (!res.ok) { console.log('FAIL', res.status, url); fail++; continue; }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer())); ok++;
}
console.log({ ok, fail });
