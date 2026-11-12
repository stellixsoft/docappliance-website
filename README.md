# Doctor Appliance website (Next.js)

A rebuild of **www.docappliance.com** in Next.js 15 (App Router, TypeScript), matched to the live site page by page.
It's set up so the **sales.docappliance.com** store can be added to the same project later.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Node 20+ is required.

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

## Project structure

```
src/
  app/
    layout.tsx                 html/body, fonts, global CSS
    (service)/                 www.docappliance.com
      layout.tsx               top bar + header + footer
      page.tsx, services/, faq/, ...   one folder per live URL
    store/                     placeholder for sales.docappliance.com
    api/forms, api/newsletter  form endpoints (add email/CRM here)
    sitemap.ts, robots.ts
  middleware.ts                routes sales.* host to /store, so one deployment serves both domains
  components/
    layout/                    Header, MobileMenu, SearchBar, TopBar, Footer
    ui/                        Accordion, Icon, MobileCarousel
    forms/                     ManagedForm, Captcha
  content/pages/               page bodies (JSX ported from the live CMS markup)
  data/site.ts                 phone, logo, navigation (one place to edit menus)
  styles/
    design-system/avb-ui.css   grid, typography, buttons and form styles from the live theme
    theme.css                  brand colours and utility classes
    pages/*.css                per-page styles, scoped with .page-<slug>
public/media/                  images and logo
scripts/                       route generator, asset downloader, port/ (tools used to capture the live site)
```

## Next steps (backend phase)

1. **Forms:** `src/app/api/forms/route.ts` and `api/newsletter/route.ts` accept submissions and return success.
   Connect them to email (Resend, SendGrid) or a CRM, and turn on reCAPTCHA in `components/forms/Captcha.tsx`.
2. **Search:** the search box sends people to `/search?q=`. That page is still to be built.
3. **CMS:** page text lives in `src/content/pages`. It can move to a headless CMS (Sanity, Payload, Strapi) if the client wants to edit pages.
4. **Store:** build the store under `src/app/store` using the same URLs (`/catalog/...`, `/product/...`), then point
   `sales.docappliance.com` at this deployment.
5. **Icons:** the live site uses Font Awesome Pro. This build maps those icons to Font Awesome Free in `components/ui/Icon.tsx`,
   so a few icons look slightly different. Swap in Pro icons if the client buys a licence.
6. **Analytics:** add GA4/GTM, Meta Pixel, Clarity and the cookie banner, using the client's own accounts.

## Deploy

Works on Vercel or any Node host. Add both `www.docappliance.com` and `sales.docappliance.com` as domains on the same project.
