import {test,expect,type Page} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
async function loadVisibleMedia(page:Page){
  const pictures=page.locator('main img:visible');
  for(let i=0;i<await pictures.count();i++){
    const picture=pictures.nth(i);await picture.scrollIntoViewIfNeeded();
    await expect(picture).toHaveJSProperty('complete',true);
    expect(await picture.evaluate((image:HTMLImageElement)=>image.naturalWidth)).toBeGreaterThan(0);
  }
  await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));
}
test('responsive layouts, loaded images, and screenshots',async({page})=>{
  test.setTimeout(180000);
  for(const [width,height] of [[1440,900],[1280,800],[1280,650],[768,1024],[390,844],[320,740]]){
    await page.setViewportSize({width,height});await page.goto('/');await page.evaluate(()=>document.fonts.ready);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('img').first()).toHaveJSProperty('complete',true);
    expect(await page.locator('img').first().evaluate((image:HTMLImageElement)=>image.naturalWidth)).toBeGreaterThan(0);
    const overflow=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,elements:[...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right>innerWidth+1).map(e=>({tag:e.tagName,cls:e.className,right:e.getBoundingClientRect().right})).slice(0,8)}));
    expect(overflow.scroll,JSON.stringify(overflow)).toBeLessThanOrEqual(width);
    await loadVisibleMedia(page);
    await page.screenshot({path:`test-results/home-${width}-${height}.png`,fullPage:true});
    await page.screenshot({path:`test-results/hero-${width}-${height}.png`});
    if(width===1440)await page.screenshot({path:'test-results/desktop-preview.png'});
  }
});
test('filters, URL state, navigation and capability keyboard interaction',async({page})=>{
  await page.goto('/');
  const offline=page.getByRole('button',{name:'03 Offline'});await offline.focus();await page.keyboard.press('Enter');
  await expect(page.getByRole('heading',{name:'Keep the content close.'})).toBeVisible();
  await page.getByRole('button',{name:'Reveal the engineering'}).click();await expect(page.getByText('Product APIs & real-time events')).toBeVisible();
  await page.getByRole('button',{name:'Web / Frontend',exact:true}).click();await expect(page).toHaveURL(/category=Web/);await expect(page.getByText('3 projects · Web / Frontend')).toBeVisible();
  await page.reload();await expect(page.getByRole('button',{name:'Web / Frontend',exact:true})).toHaveAttribute('aria-pressed','true');
  await page.goto('/work/100xdev');await expect(page.getByRole('heading',{name:'100xDev',exact:true})).toBeVisible();
  await page.goto('/work/not-a-project');await expect(page.getByRole('heading',{name:'A different direction.'})).toBeVisible();
});
test('mobile navigation and reduced motion',async({page})=>{
  await page.setViewportSize({width:390,height:844});await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');
  await page.getByRole('button',{name:'Menu'}).click();await expect(page.getByRole('navigation',{name:'Main navigation'})).toBeVisible();
  await page.getByRole('link',{name:'Engineering',exact:true}).click();await expect(page.getByRole('button',{name:'Menu'})).toHaveAttribute('aria-expanded','false');
  expect(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
});
test('accessibility home and case study',async({page})=>{
  test.setTimeout(180000);
  for(const route of ['/','/work','/work/100xdev','/work/huntiq','/work/dodo-documentation','/work/alba-cars','/work/video-on-demand']){await page.goto(route);const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();expect(results.violations,route).toEqual([])}
});

test('case studies retain layout and truthful visitor-facing content across viewports',async({page})=>{
  test.setTimeout(240000);
  const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
  for(const [width,height] of [[1440,900],[1280,800],[1280,650],[768,1024],[390,844],[320,740]]){
    await page.setViewportSize({width,height});
    for(const slug of ['index','100xdev','huntiq','dodo-documentation','alba-cars','video-on-demand']){
      await page.goto(slug==='index'?'/work':`/work/${slug}`);
      await page.evaluate(()=>document.fonts.ready);
      expect(await page.evaluate(()=>document.documentElement.scrollWidth),`${slug} at ${width}`).toBeLessThanOrEqual(width);
      await expect(page.locator('main')).not.toContainText(/public source|developer.supplied|requires confirmation|not presented as shipped|author.confirmed|evidence pending|release status|public presentation|current README|media to be supplied/i);
      await loadVisibleMedia(page);
      await page.screenshot({path:`test-results/${slug}-${width}-${height}.png`,fullPage:true});
      await page.screenshot({path:`test-results/${slug}-hero-${width}-${height}.png`});
    }
  }
  expect(errors).toEqual([]);
});

test('archive priority and interactive accessibility',async({page})=>{
  await page.goto('/work');
  const rows=page.locator('main a[href^="/work/"]').filter({has:page.locator('h3')});
  await expect(rows.nth(0)).toHaveAttribute('href','/work/huntiq');
  await expect(rows.nth(1)).toHaveAttribute('href','/work/dodo-documentation');
  await expect(rows.nth(2)).toHaveAttribute('href','/work/alba-cars');
  await page.goto('/');
  await page.getByRole('button',{name:'Reveal the engineering'}).click();
  await page.getByRole('button',{name:'03 Offline'}).click();
  expect((await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze()).violations).toEqual([]);
});

test('web engineering, curated order and resume download',async({page,request})=>{
  await page.goto('/');
  const order=await page.locator('main section[id]').evaluateAll(nodes=>nodes.map(n=>n.id));
  expect(order.indexOf('work')).toBeLessThan(order.indexOf('100xdev'));
  await page.getByRole('button',{name:'Web / Full Stack',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Across the whole product.'})).toBeVisible();
  await page.getByRole('button',{name:'04 Search & Navigation'}).focus();await page.keyboard.press('Enter');
  await expect(page.getByRole('heading',{name:'The next useful page.'})).toBeVisible();
  expect((await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze()).violations).toEqual([]);
  await page.getByRole('button',{name:'Flutter',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Room for complexity.'})).toBeVisible();
  const download=page.getByRole('link',{name:'Download resume'}).first();
  await expect(download).toHaveAttribute('download','');
  const pdf=await request.get('/resume/Althafar-Ali-Resume.pdf');
  expect(pdf.ok()).toBeTruthy();expect((await pdf.body()).subarray(0,5).toString()).toBe('%PDF-');
});


test('homepage reveals finish once and respect reduced motion on desktop and mobile',async({page})=>{
  for(const width of [1280,390]){
    await page.setViewportSize({width,height:800});
    await page.emulateMedia({reducedMotion:'no-preference'});await page.goto('/');
    const group=page.locator('#about [data-scroll-reveal]').first();
    await expect(group).toHaveAttribute('data-reveal-pending','');
    await group.scrollIntoViewIfNeeded();
    await expect(group).not.toHaveAttribute('data-reveal-pending');
    await expect(group).toHaveCSS('opacity','1');
    await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));
    await expect(group).not.toHaveAttribute('data-reveal-pending');
    await page.emulateMedia({reducedMotion:'reduce'});
    await expect(page.locator('[data-reveal-pending]')).toHaveCount(0);
    await page.reload();await expect(page.locator('[data-reveal-pending]')).toHaveCount(0);
  }
});
