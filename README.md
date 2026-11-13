# Doctor Appliance website (Next.js)

A rebuild of **www.docappliance.com** and the **sales.docappliance.com** store in one Next.js 15 project
(App Router, TypeScript), matched to the live sites page by page. One deployment serves both domains.

## Run it

```bash
npm install
npm run dev        # service site: http://localhost:3000   store: http://sales.localhost:3000
npm run build && npm start
```

Node 20+ is required. The store reads live catalog data over the internet (see below), so the machine needs network access.

## What's included

* Every URL in the live sitemap (31), on the same paths with the same titles, meta descriptions and robots tags, so search rankings carry over:
  * 29 pages: `/`, `/services`, `/contacts`, `/estill-springs-tn`, `/knoxville-tn`, `/phoenix-az`, `/salina-ks`,
    `/household-care-plan`, `/preventative-maintenance`, `/preventative-maintenance-test`, `/parts`,
    `/home-store-partnership-program-hsp`, `/service-network-partnership`, `/about-us`, `/careers`, `/faq`,
    `/return-and-store-policies`, `/promotions`, `/brands`, `/reviews357246`, `/request-quote` (noindex, as live),
    `/bodewell-membership-terms`, `/privacy`, `/privacy/california-privacy-rights`, `/privacy-policy-cookie-restriction-mode`,
    `/privacy-policies/terms-and-conditions`, `/privacy-policies/general-privacy-policy`,
    `/privacy-policies/california-privacy-rights`, `/privacy-policies/do-not-sell-my-personal-information`
  * `/home` 301-redirects to `/`, as on the live site
  * `/accessibility` is listed in the live sitemap but returns 404 there too, so it is left as a 404
* `sitemap.xml` and `robots.txt` matching the live rules
* Header with hover dropdowns, the compact sticky header, the mobile slide-out menu and search box
* FAQ accordions, the mobile carousel on /services, the contact forms (location pages) and the newsletter form
* The service request, parts, care plan, partnership and careers forms, which stay on Formstack through the same embeds as today
* Fonts (Exo 2, Open Sans) and all images are self-hosted, so nothing depends on the AVB CDN

## Store (sales.docappliance.com)

* **Every URL in the live store sitemap (10,965)** answers on the same path:
  * 57 content pages (home, brand overviews, financing, services, locations, policies, ...), ported from the live CMS
    with their own titles and descriptions. `/request-quote` is noindex, as live; `/home` 308-redirects to `/`.
  * 515 category pages, `/catalog/<key>`: breadcrumbs, sub-category chips, filter bar with the live filters, "All Filters"
    drawer, sort menu, result count, product grid and paging. Landing categories (Laundry, Cooking, ...) show their sub-category tiles.
  * 10,392 product pages, `/product/<key>`: gallery with videos, price and savings, "At A Glance", services box,
    feature overview, documents and the full spec table.
  * `/promotions`: the live rebates grid with category, brand and sort filters; "Shop Now" opens
    `/catalog/special/promotion/<program>`.
  * `sitemap.xml` and `robots.txt` match the live ones.
* Query strings are the live ones, so existing links and ads keep working: `?page=2`, `?order=price&dir=asc`,
  `?<filter attribute>=<value>` (for example `?manufacturer=LG`), and on /promotions `?manufacturer=LG,Viking&category=Laundry`.
* Header with the Appliances mega menu, store utility links (Account, List, Location, phone, Cart), the store logo,
  the warranty bar, promotions bar and store footer.
* Checked against the live store with screenshots at 1440px and 390px.

**Where the data comes from (demo):** the store is a demo of the front end. `src/lib/store/live.ts` reads category,
product and promotion data from the live store pages and caches each page for an hour. When the new backend exists,
only that file needs to change. Category menus come from snapshots in `src/data/store/*.json`.

**Not included (needs the backend):** cart, checkout, account, wishlist, compare, search results and the "Ask Sam" AI chat
(a third-party chatbot on live product pages). Product videos stream from the existing CDN.

## Project structure

```
src/
  app/
    layout.tsx                 html/body, fonts, global CSS
    (service)/                 www.docappliance.com
      layout.tsx               top bar + header + footer
      page.tsx, services/, faq/, ...   one folder per live URL
    store/                     sales.docappliance.com (content pages, catalog/, product/, promotions/)
    api/forms, api/newsletter  form endpoints (add email/CRM here)
    sitemap.ts, robots.ts
  middleware.ts                routes sales.* host to /store, so one deployment serves both domains
  lib/store/                   live.ts (store data, swap for the backend), categories.ts
  components/
    layout/                    Header, MobileMenu, SearchBar, TopBar, Footer (shared by both sites)
    store/                     ProductTile, FilterBar, Pagination, ProductDetail, Gallery, promotions, FeaturedProducts
    ui/                        Accordion, Icon, MobileCarousel
    forms/                     ManagedForm, Captcha
  content/pages/, content/store/   page bodies (JSX ported from the live CMS markup)
  data/site.ts, data/store.ts  phone, logo, navigation (one place to edit menus)
  styles/
    design-system/avb-ui.css   grid, typography, buttons and form styles from the live theme
    theme.css                  brand colours and utility classes
    pages/*.css                per-page styles, scoped with .page-<slug>
    store/                     store theme, bars, footer and per-page styles (.store-page-<slug>)
public/media/                  images and logo
scripts/                       route generator, asset downloader, port/ (tools used to capture the live site)
```

## Next steps (backend phase)

1. **Forms:** `src/app/api/forms/route.ts` and `api/newsletter/route.ts` accept submissions and return success.
   Connect them to email (Resend, SendGrid) or a CRM, and turn on reCAPTCHA in `components/forms/Captcha.tsx`.
2. **Search:** the search box sends people to `/search?q=`. That page is still to be built.
3. **CMS:** page text lives in `src/content/pages`. It can move to a headless CMS (Sanity, Payload, Strapi) if the client wants to edit pages.
4. **Store backend:** replace `src/lib/store/live.ts` with the new catalog API, then build cart, checkout, account,
   wishlist and search on top. The templates stay as they are.
5. **Icons:** the live site uses Font Awesome Pro. This build maps those icons to Font Awesome Free in `components/ui/Icon.tsx`,
   so a few icons look slightly different. Swap in Pro icons if the client buys a licence.
6. **Analytics:** add GA4/GTM, Meta Pixel, Clarity and the cookie banner, using the client's own accounts.

## Deploy

Works on Vercel or any Node host. Add both `www.docappliance.com` and `sales.docappliance.com` as domains on the same project.
