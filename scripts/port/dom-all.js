const { chromium } = require('playwright');
(async () => {
  const [,, out, ...paths] = process.argv;
  const b = await chromium.launch();
  const ctx = await b.newContext({viewport:{width:1440,height:900},userAgent:'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36'});
  const p = await ctx.newPage();
  for (const path of paths) {
    await p.goto('https://www.docappliance.com'+path,{waitUntil:'networkidle',timeout:60000}).catch(()=>{});
    for (let y=0;y<15000;y+=600){await p.mouse.wheel(0,600);await p.waitForTimeout(80)}
    await p.waitForTimeout(1200);
    const html = await p.evaluate(()=>document.documentElement.outerHTML);
    const name = path==='/'?'home':path.slice(1).replace(/\//g,'_');
    require('fs').writeFileSync(`${out}/${name}.html`, html);
    console.log(name, html.length);
  }
  await b.close();
})();
