// Converts the live site's rendered CMS markup into JSX components + scoped CSS.
// Usage: node convert.js <renderedDir> <projectDir>
const fs = require('fs');
const path = require('path');
const { parseDocument } = require('htmlparser2');
const postcss = require('postcss');
// Browsers skip malformed CMS rules instead of failing; the safe parser does the same.
const safeParser = require('postcss-safe-parser');
const prefixer = require('postcss-prefix-selector');

const [, , RENDERED, PROJECT] = process.argv;
// NS=store ports the sales site into its own folders so the service site's files are never touched.
const STORE = process.env.NS === 'store';
const SITE = STORE ? 'https://sales.docappliance.com' : 'https://www.docappliance.com';
const OUT = STORE
  ? { content: 'src/content/store', styles: 'src/styles/store/pages', scope: 'store-page-', manifest: 'scripts/store-pages-manifest.json', layout: 'src/components/store', layoutCss: 'src/styles/store', assets: 'scripts/store-assets.json' }
  : { content: 'src/content/pages', styles: 'src/styles/pages', scope: 'page-', manifest: 'scripts/pages-manifest.json', layout: 'src/components/layout', layoutCss: 'src/styles/layout', assets: 'scripts/assets.json' };
const assets = new Map(); // remote url -> local public path

// ---------- helpers ----------
const ATTR_MAP = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly', maxlength: 'maxLength',
  minlength: 'minLength', autocomplete: 'autoComplete', frameborder: 'frameBorder', allowfullscreen: 'allowFullScreen',
  srcset: 'srcSet', autoplay: 'autoPlay', playsinline: 'playsInline', crossorigin: 'crossOrigin', fetchpriority: 'fetchPriority', novalidate: 'noValidate',
  enctype: 'encType', 'accept-charset': 'acceptCharset', spellcheck: 'spellCheck', colspan: 'colSpan', rowspan: 'rowSpan',
  'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap', 'stroke-linejoin': 'strokeLinejoin',
  'fill-rule': 'fillRule', 'clip-rule': 'clipRule', 'xlink:href': 'xlinkHref', viewbox: 'viewBox',
  'stroke-miterlimit': 'strokeMiterlimit', referrerpolicy: 'referrerPolicy', datetime: 'dateTime',
  allowtransparency: 'allowTransparency', marginheight: 'marginHeight', marginwidth: 'marginWidth', scrolling: 'scrolling',
};
const BOOL_ATTRS = new Set(['required', 'disabled', 'allowfullscreen', 'readonly', 'multiple', 'novalidate', 'hidden', 'autofocus', 'autoplay', 'muted', 'loop', 'playsinline', 'controls']);
// React types these as numbers.
const NUM_ATTRS = new Set(['tabindex', 'colspan', 'rowspan', 'maxlength', 'minlength', 'width', 'height']);
const VOID = new Set(['img', 'br', 'hr', 'input', 'meta', 'link', 'source', 'area', 'col', 'wbr', 'embed']);
const camel = s => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const q = s => JSON.stringify(s);

function localAsset(url) {
  if (!/^https?:\/\/(cdn|assets)\.avbportal\.com\//.test(url)) return url;
  // Manufacturer videos (100MB+) stay on the CDN; images are copied into /public.
  if (/\.(mp4|webm|mov)(\?|$)/i.test(url)) return url;
  if (assets.has(url)) return assets.get(url);
  const u = new URL(url);
  let p = u.pathname.replace(/^\/(magento-media|assets)\//, '/').replace(/\/members\/h0136_1-doctor-appliance\//, '/doctor-appliance/');
  const w = u.searchParams.get('w');
  if (w) p = p.replace(/(\.[a-z0-9]+)$/i, `-w${w}$1`);
  const local = '/media' + p;
  assets.set(url, local);
  return local;
}

function relLink(href) {
  if (!href) return href;
  if (href.startsWith(SITE)) return href.slice(SITE.length) || '/';
  return href;
}

function styleObj(s) {
  const o = {};
  s.split(';').map(x => x.trim()).filter(Boolean).forEach(d => {
    const i = d.indexOf(':');
    const k = d.slice(0, i).trim(); const v = d.slice(i + 1).trim();
    o[k.startsWith('--') ? k : camel(k)] = v;
  });
  return '{' + JSON.stringify(o) + '}';
}

function attrsToJsx(name, attribs, opts = {}) {
  const out = [];
  for (let [k, v] of Object.entries(attribs)) {
    const lk = k.toLowerCase();
    // attributes the browser ignores on these tags (and React's types reject)
    if ((name === 'textarea' || name === 'select') && lk === 'type') continue;
    // legacy <a name="x"> anchors -> id (same in-page jump target, valid JSX)
    if (name === 'a' && lk === 'name') { if (!attribs.id) out.push(`id=${q(v)}`); continue; }
    if (lk.startsWith('on')) continue;
    if (lk === 'data-src') continue;
    if (lk === 'style') { out.push(`style=${styleObj(v)}`); continue; }
    if (lk === 'src' || lk === 'poster') v = relLink(localAsset(v));
    if (lk === 'href') v = relLink(v);
    if (name === 'input' && lk === 'value') { out.push(`defaultValue=${q(v)}`); continue; }
    if (name === 'input' && lk === 'checked') { out.push('defaultChecked'); continue; }
    if (name === 'svg' && lk === 'focusable') { out.push(`focusable=${q(v)}`); continue; }
    const jk = ATTR_MAP[lk] || (lk.startsWith('data-') || lk.startsWith('aria-') ? lk : camel(lk));
    if (BOOL_ATTRS.has(lk) && (v === '' || v === lk)) { out.push(jk); continue; }
    if (NUM_ATTRS.has(lk) && /^-?\d+$/.test(v)) { out.push(`${jk}={${v}}`); continue; }
    out.push(/[\\"]/.test(v) ? `${jk}={${q(v)}}` : `${jk}=${q(v)}`);
  }
  return out.length ? ' ' + out.join(' ') : '';
}

function textToJsx(t) {
  if (!t) return '';
  if (/^\s+$/.test(t)) return '{" "}';
  const collapsed = t.replace(/[ \t\n\r\f]+/g, ' ');
  return `{${q(collapsed)}}`;
}

const cls = el => (el.attribs && el.attribs.class) || '';
const hasCls = (el, c) => cls(el).split(/\s+/).includes(c);
const kids = el => (el.children || []);
const elKids = el => kids(el).filter(c => c.type === 'tag');

// Font Awesome classes -> Icon component
function iconFromClasses(c) {
  const parts = c.split(/\s+/);
  const names = parts.filter(p => /^fa-/.test(p) && !['fa-sharp', 'fa-solid', 'fa-light', 'fa-regular', 'fa-brands', 'fa-utility', 'fa-semibold', 'fa-thin', 'fa-duotone', 'fa-fw'].includes(p));
  if (!names.length) return null;
  const variant = parts.includes('fab') ? 'brands' : (parts.includes('fal') || parts.includes('fa-light')) ? 'light' : (parts.includes('far') ? 'regular' : 'solid');
  const rest = parts.filter(p => !/^fa-/.test(p) && !['fa', 'fas', 'fal', 'far', 'fab'].includes(p)).join(' ');
  return { name: names[0].slice(3), variant, className: rest };
}

const used = new Set();

function convert(node, ind = 0, ctx = {}) {
  const pad = '  '.repeat(ind);
  if (node.type === 'text') { const t = textToJsx(node.data); return t ? pad + t : ''; }
  if (node.type === 'comment' || node.type === 'directive') return '';
  if (node.type === 'script' || node.type === 'style') return '';
  if (node.type !== 'tag') return '';
  let name = node.name;
  const a = { ...node.attribs };
  const c = a.class || '';

  // honeypot fieldset added by platform -> handled inside ManagedForm
  if (name === 'fieldset' && (a.style || '').includes('display:none')) return '';
  if (name === 'noscript') return '';

  // Font Awesome icons
  if ((name === 'i' || name === 'span') && /\bfa[slrb]?\b|\bfa-/.test(c) && !kids(node).some(k => k.type === 'tag')) {
    const ic = iconFromClasses(c);
    if (ic) {
      used.add('Icon');
      return `${pad}<Icon name=${q(ic.name)} variant=${q(ic.variant)}${ic.className ? ` className=${q(ic.className)}` : ''} />`;
    }
  }

  // Accordion
  if (hasCls(node, 'avb-accordion')) {
    used.add('Accordion');
    const items = [];
    const find = n => elKids(n).forEach(k => hasCls(k, 'avb-accordion__item') ? items.push(k) : find(k));
    find(node);
    const body = items.map(it => {
      const title = elKids(it).find(k => hasCls(k, 'avb-accordion__item-title'));
      const content = elKids(it).find(k => hasCls(k, 'avb-accordion__item-content'));
      const titleJsx = kids(title).map(k => convert(k, ind + 3)).filter(Boolean).join('\n');
      const inner = content ? elKids(content) : [];
      const contentJsx = inner.map(k => convert(k, ind + 2)).filter(Boolean).join('\n');
      const innerCls = inner.length === 1 ? '' : '';
      return `${pad}  <AccordionItem className=${q(cls(it))} titleClassName=${q(cls(title))}\n${pad}    title={<>\n${titleJsx}\n${pad}    </>}>\n${contentJsx}\n${pad}  </AccordionItem>`;
    }).join('\n');
    return `${pad}<Accordion className=${q(c)}>\n${body}\n${pad}</Accordion>`;
  }

  // Magento contact/newsletter forms
  if (name === 'form' && /\/api\/rest\/(forms|newsletter)\//.test(a.action || '')) {
    used.add('ManagedForm');
    const endpoint = a.action.includes('newsletter') ? '/api/newsletter' : '/api/forms';
    const body = kids(node).map(k => convert(k, ind + 1, ctx)).filter(Boolean).join('\n');
    return `${pad}<ManagedForm endpoint=${q(endpoint)} className=${q(c)}>\n${body}\n${pad}</ManagedForm>`;
  }
  // reCAPTCHA placeholder -> component slot
  if (hasCls(node, 'captcha')) { used.add('Captcha'); return `${pad}<Captcha />`; }

  // Platform carousel (mobile only) -> MobileCarousel
  if (/carousel\b/.test(c) && /mui-[a-z0-9]+-carousel\b/.test(c)) {
    const slides = [];
    const walk = n => elKids(n).forEach(k => /carouselItem\b|carouselItem-/.test(cls(k)) ? (!/Hidden/.test(cls(k)) && slides.push(k)) : walk(k));
    walk(node);
    const extra = c.split(/\s+/).filter(x => !x.startsWith('mui-')).join(' ');
    const body = slides.map(s => `${pad}  <div className="mobile-carousel__slide">\n${kids(s).map(k => convert(k, ind + 2)).filter(Boolean).join('\n')}\n${pad}  </div>`).join('\n');
    // product carousel ("Featured Products"): the platform renders these tiles in the browser, so emit a
    // component that loads the same products instead of copying the rendered tile markup
    const productKeys = slides.map(sl => { const a = findFirst(sl, n => n.name === 'a' && /^\/product\//.test((n.attribs && n.attribs.href) || '')); return a ? a.attribs.href.replace(/^\/product\//, '') : null; });
    if (slides.length && productKeys.every(Boolean) && slides.every(sl => findFirst(sl, n => n.name === 'article'))) {
      used.add('FeaturedProducts');
      const inner0 = findFirst(node, n => /carouselItemsInner/.test(cls(n)));
      const pct0 = inner0 && /grid-auto-columns:\s*([\d.]+)%/.exec((inner0.attribs && inner0.attribs.style) || '');
      return `${pad}<FeaturedProducts productKeys={${JSON.stringify(productKeys)}} perView={${pct0 ? Math.round(100 / parseFloat(pct0[1])) : 4}} />`;
    }
    used.add('MobileCarousel');
    // items per view at capture width, from the track's inline grid-auto-columns (e.g. 25% -> 4)
    const inner = findFirst(node, n => /carouselItemsInner/.test(cls(n)));
    const pct = inner && /grid-auto-columns:\s*([\d.]+)%/.exec((inner.attribs && inner.attribs.style) || '');
    // a desktop-hidden carousel is a mobile strip: one item per view
    const perView = pct && !/desktop-hide/.test(extra) ? Math.round(100 / parseFloat(pct[1])) : 1;
    return `${pad}<MobileCarousel className=${q(extra)}${perView > 1 ? ` perView={${perView}}` : ''}>\n${body}\n${pad}</MobileCarousel>`;
  }

  // custom elements -> divs with class
  if (name.startsWith('avb-') || name.startsWith('dsg-')) {
    a.class = (name + ' ' + c).trim();
    name = name === 'avb-designer-block' || name === 'avb-designer-contact' || name === 'avb-designer-footer' ? 'section' : 'div';
  }
  // strip emotion hashes but keep a readable alias for the form wrapper
  if (a.class) {
    a.class = a.class.split(/\s+/).map(x => x === 'mui-1x4pf05-form' ? 'magento-form' : x).map(x => x === 'MuiTypography-body1' ? 'typography-body1' : x).filter(x => !/^mui-/.test(x) && !/^Mui/.test(x)).join(' ');
    if (!a.class) delete a.class;
  }
  if (name === 'embed' && /google\.com\/maps/.test(a.src || '')) { name = 'iframe'; a.loading = 'lazy'; a.title = a.title || 'Map'; }

  let tag = name;
  if (name === 'a' && a.href) {
    const h = relLink(a.href);
    if (h.startsWith('/') && !h.startsWith('//') && a.target !== '_blank') { tag = 'Link'; used.add('Link'); }
  }
  const attrStr = attrsToJsx(name, a);
  if (VOID.has(name)) return `${pad}<${tag}${attrStr} />`;
  const children = kids(node).map(k => convert(k, ind + 1, ctx)).filter(Boolean);
  if (name === 'textarea') return `${pad}<textarea${attrStr} />`;
  if (!children.length) return `${pad}<${tag}${attrStr}></${tag}>`;
  return `${pad}<${tag}${attrStr}>\n${children.join('\n')}\n${pad}</${tag}>`;
}

function imports() {
  const lines = [];
  if (used.has('Link')) lines.push(`import Link from "next/link";`);
  if (used.has('Icon')) lines.push(`import { Icon } from "@/components/ui/Icon";`);
  if (used.has('Accordion')) lines.push(`import { Accordion, AccordionItem } from "@/components/ui/Accordion";`);
  if (used.has('ManagedForm')) lines.push(`import { ManagedForm } from "@/components/forms/ManagedForm";`);
  if (used.has('Captcha')) lines.push(`import { Captcha } from "@/components/forms/Captcha";`);
  if (used.has('MobileCarousel')) lines.push(`import { MobileCarousel } from "@/components/ui/MobileCarousel";`);
  if (used.has('FeaturedProducts')) lines.push(`import { FeaturedProducts } from "@/components/store/FeaturedProducts";`);
  return lines.join('\n');
}

function findFirst(node, pred) {
  for (const k of kids(node).filter(c => ['tag', 'style', 'script'].includes(c.type))) { if (pred(k)) return k; const r = findFirst(k, pred); if (r) return r; }
  return null;
}
function styleTexts(node, acc = []) {
  for (const k of kids(node)) { if (k.type === 'style') acc.push(kids(k).map(t => t.data).join('')); else if (k.type === 'tag') styleTexts(k, acc); }
  return acc;
}

// rewrite tag selectors (avb-foo) to classes and localise urls
function cleanCss(css) {
  css = css.replace(/url\((['"]?)(https?:\/\/(?:cdn|assets)\.avbportal\.com\/[^'")]+)\1\)/g, (_, qt, u) => `url(${localAsset(u)})`);
  // broken placeholder images on the live site (relative CMS tokens) -> no image, same as live
  css = css.replace(/url\((['"]?)(?!\/|data:|https?:)[^'")]*\1\)/g, 'none');
  // browsers auto-close unbalanced blocks at the end of a <style>; do the same
  { const open = (css.match(/{/g) || []).length - (css.match(/}/g) || []).length; if (open > 0) css += '}'.repeat(open); }
  const root = safeParser(css);
  root.walkRules(r => {
    if (r.parent && r.parent.type === 'atrule' && /keyframes/.test(r.parent.name)) return;
    r.selector = r.selector.replace(/(^|[\s>+~,(])((?:avb|dsg)-[a-z-]+)(?=$|[\s.:#\[>+~,)])/g, '$1.$2');
  });
  // Drop declarations a browser would ignore (e.g. "order 2" without a colon, "color: #000, !important"),
  // so the stylesheet also passes the strict parser used by Next.js.
  root.walkDecls(d => {
    const v = d.value.replace(/url\([^)]*\)/g, 'url()');
    if (!/^(--)?-?[a-zA-Z][a-zA-Z0-9-]*$/.test(d.prop) || /;|!important\s*\S/.test(v) || /^,|,\s*$/.test(v.trim()) || /[,;]\s*!important/.test(v)) d.remove();
  });
  return strictSafe(root.toString());
}

/** Remove stray characters (an extra "}" etc.) until the strict parser accepts the CSS, like a browser recovers. */
function strictSafe(css) {
  for (let i = 0; i < 50; i++) {
    try { postcss.parse(css); return css; } catch (e) {
      if (!e.input || e.input.offset === undefined) throw e;
      const at = e.input.offset;
      if (css[at] === '}') { css = css.slice(0, at) + css.slice(at + 1); continue; }
      // drop the rest of the broken statement up to the next ; or }
      const end = css.slice(at).search(/[;}]/);
      css = css.slice(0, at) + (end < 0 ? '' : css.slice(at + end + (css[at + end] === ';' ? 1 : 0)));
    }
  }
  return css;
}
function scopeCss(css, scope) {
  return postcss([prefixer({
    prefix: scope,
    transform(prefix, selector, prefixed) {
      if (/^(html|body|:root)\b/.test(selector)) return selector.replace(/^(html|body|:root)/, prefix);
      return prefixed;
    },
  })]).process(css, { from: undefined, parser: safeParser }).css;
}

function componentName(slug) {
  return slug.split(/[-_]/).filter(Boolean).map(s => s[0].toUpperCase() + s.slice(1)).join('') + 'Content';
}

function write(f, s) { fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, s); }

// ---------- pages ----------
const pages = fs.readdirSync(RENDERED).filter(f => f.endsWith('.html')).map(f => f.slice(0, -5));
const manifest = [];
for (const slug of pages) {
  const doc = parseDocument(fs.readFileSync(path.join(RENDERED, slug + '.html'), 'utf8'));
  const main = findFirst(doc, n => n.name === 'main');
  const avbMain = findFirst(main, n => n.name === 'avb-main') || main;
  used.clear();
  const body = kids(avbMain).map(k => convert(k, 3)).filter(Boolean).join('\n');
  const comp = componentName(slug);
  const scope = `${OUT.scope}${slug}`;
  const tsx = `${imports()}\n\n/** Page content for /${slug === 'home' ? '' : slug.replace(/_/g, '/')} (ported from the live CMS markup). */\nexport default function ${comp}() {\n  return (\n    <div className="avb-main ${scope}">\n${body}\n    </div>\n  );\n}\n`;
  write(path.join(PROJECT, OUT.content, comp + '.tsx'), tsx.replace(/^\n+/, ''));
  // page css from head <style data-from="cms">
  const head = findFirst(doc, n => n.name === 'head');
  // a page can carry its CMS css in more than one <style data-from="cms">
  const cmsStyles = kids(head).filter(n => n.name === 'style' && n.attribs && n.attribs['data-from'] === 'cms');
  let css = cmsStyles.map(st => kids(st).map(t => t.data).join('')).join('\n');
  css += '\n' + styleTexts(main).join('\n');
  write(path.join(PROJECT, OUT.styles, slug + '.css'), scopeCss(cleanCss(css), '.' + scope));
  const title = (findFirst(head, n => n.name === 'title') || { children: [] }).children.map(t => t.data).join('');
  const descEl = findFirst(head, n => n.name === 'meta' && n.attribs.name === 'description');
  manifest.push({ slug, route: slug === 'home' ? '/' : '/' + slug.replace(/_/g, '/'), component: comp, title, description: descEl ? descEl.attribs.content : '' });
}
write(path.join(PROJECT, OUT.manifest), JSON.stringify(manifest, null, 2));

// ---------- shared blocks (top bar + footer) from home ----------
{
  const doc = parseDocument(fs.readFileSync(path.join(RENDERED, 'home.html'), 'utf8'));
  const hb = findFirst(doc, n => n.name === 'avb-header-before');
  used.clear();
  let body = kids(hb).map(k => convert(k, 2)).filter(Boolean).join('\n');
  write(path.join(PROJECT, OUT.layout, 'TopBar.tsx'),
    `${imports()}\n\n/** Blue service-area bar shown above the header. */\nexport function TopBar() {\n  return (\n    <div className="avb-header-before">\n${body}\n    </div>\n  );\n}\n`.replace(/^\n+/, ''));
  write(path.join(PROJECT, OUT.layoutCss, 'top-bar.css'), cleanCss(styleTexts(hb.parent).join('\n')));

  const footer = findFirst(doc, n => n.name === 'footer');
  const avbFooter = findFirst(footer, n => n.name === 'avb-footer');
  used.clear();
  body = kids(avbFooter).map(k => convert(k, 3)).filter(Boolean).join('\n');
  write(path.join(PROJECT, OUT.layout, 'FooterBlocks.tsx'),
    `${imports()}\n\n/** Newsletter, link columns and copyright (ported from the CMS footer). */\nexport function FooterBlocks() {\n  return (\n    <div className="avb-footer">\n${body}\n    </div>\n  );\n}\n`.replace(/^\n+/, ''));
  write(path.join(PROJECT, OUT.layoutCss, 'footer.css'), cleanCss(styleTexts(footer).join('\n')));

  const ha = STORE && findFirst(doc, n => n.name === 'avb-header-after');
  if (ha) {
    used.clear();
    const hbody = kids(ha).map(k => convert(k, 2)).filter(Boolean).join('\n');
    write(path.join(PROJECT, OUT.layout, 'PromoBar.tsx'),
      `${imports()}\n\n/** Black promotions bar shown under the store header. */\nexport function PromoBar() {\n  return (\n    <div className="avb-header-after">\n${hbody}\n    </div>\n  );\n}\n`.replace(/^\n+/, ''));
    write(path.join(PROJECT, OUT.layoutCss, 'promo-bar.css'), cleanCss(styleTexts(ha.parent).join('\n')));
  }
  if (STORE) {
    const head = findFirst(doc, n => n.name === 'head');
    const ssi = findFirst(head, n => n.name === 'style' && n.attribs['data-from'] === 'static-block-site-styles-inline');
    write(path.join(PROJECT, OUT.layoutCss, 'theme.css'), '/* Doctor Appliance store theme tokens and dsg-tools utility classes. */\n' + cleanCss(kids(ssi).map(t => t.data).join('')));
  }
  // emotion css for the magento form wrapper
  if (!STORE) {
  const emo = [];
  const walkStyles = n => kids(n).forEach(k => { if (k.type === 'style') emo.push(kids(k).map(t => t.data).join('')); else if (k.type === 'tag') walkStyles(k); });
  walkStyles(doc);
  const formCss = emo.join('\n').match(/\.mui-1x4pf05-form[^{]*\{[^}]*\}/g) || [];
  write(path.join(PROJECT, 'src/styles/design-system/magento-form.css'), formCss.join('\n').replace(/\.mui-1x4pf05-form/g, '.magento-form'));
  }
}

// ---------- global stylesheets ----------
const CSSDIR = path.join(RENDERED, '..', 'css');
if (!STORE) {
write(path.join(PROJECT, 'src/styles/design-system/avb-ui.css'), '/* AVB UI design system (grid, typography, buttons, forms). Ported from the live site. */\n' + cleanCss(fs.readFileSync(path.join(CSSDIR, 'avb-ui-styles.css'), 'utf8')));
write(path.join(PROJECT, 'src/styles/theme.css'), '/* Doctor Appliance theme tokens and dsg-tools utility classes. */\n' + cleanCss(fs.readFileSync(path.join(CSSDIR, 'static-block-site-styles-inline.css'), 'utf8')));
}
write(path.join(PROJECT, OUT.assets), JSON.stringify(Object.fromEntries(assets), null, 2));
console.log('pages', pages.length, 'assets', assets.size);
module.exports = { cleanCss, localAsset };
