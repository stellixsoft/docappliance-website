const { chromium } = require('playwright');
// node shoot2.js <base> <outdir> <delayMs> <widths comma> paths...
(async () => {
  const [,, base, outdir, delay, widths, ...paths] = process.argv;
  const b = await chromium.launch();
  for (const w of widths.split(',').map(Number)) {
    const ctx = await b.newContext({ viewport:{width:w,height:900}, deviceScaleFactor:1, userAgent:'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36' });
    const p = await ctx.newPage();
    for (const path of paths) {
      await p.goto(base+path, { waitUntil:'networkidle', timeout:60000 }).catch(()=>console.log('timeout',path));
      await p.addStyleTag({content:'#onetrust-consent-sdk,#onetrust-banner-sdk,[class*=miniHeader],[data-id=minified-sticky-header]{display:none!important} *{transition:none!important;animation:none!important}'}).catch(()=>{});
      const h = await p.evaluate(()=>document.body.scrollHeight);
      for (let y=0;y<h;y+=700){await p.evaluate(y=>window.scrollTo(0,y),y);await p.waitForTimeout(120)}
      await p.evaluate(()=>window.scrollTo(0,0)); await p.waitForTimeout(800);
      const name = (path==='/'?'home':path.slice(1).replace(/\//g,'_'));
      await p.screenshot({ path:`${outdir}/${name}-${w}.png`, fullPage:true });
      console.log(w, path);
      await p.waitForTimeout(+delay);
    }
    await ctx.close();
  }
  await b.close();
})();
