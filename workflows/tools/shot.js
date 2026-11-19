// usage: node shot.js <html> <outprefix>  -> <prefix>-desktop-top.png, -desktop-full.png, -phone-top.png, -anim.png
const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const [,,file,pre]=process.argv;
const body=fs.readFileSync(file,'utf8');
const html=`<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0">${body}</body></html>`;
const tmp=require('path').resolve(pre+'-page.html');fs.writeFileSync(tmp,html);
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1280,height:900}});
await p.goto('file://'+tmp);await p.waitForTimeout(900);
await p.screenshot({path:pre+'-anim.png'});           // 그려지는 중간
await p.waitForTimeout(4000);
await p.screenshot({path:pre+'-desktop-top.png'});
await p.screenshot({path:pre+'-desktop-full.png',fullPage:true});
const m=await b.newPage({viewport:{width:390,height:844}});
await m.goto('file://'+tmp);await m.waitForTimeout(4500);
await m.screenshot({path:pre+'-phone-top.png'});
const sw=await m.evaluate(()=>document.documentElement.scrollWidth);
console.log('phone scrollWidth',sw,'(390 = 가로스크롤 없음)');
await b.close();})();
