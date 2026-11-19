// ===== 펜 그림: 표지와 '장면으로 보는 수능' =====
// 기본값은 '다 그려진 그림'이에요. 움직임을 꺼 두지 않았고 IntersectionObserver가 있을 때만,
// 화면에 들어오기 직전에 윤곽 → 디테일 → 빗금 → 먹칠 순서로 다시 그려 보여 주고, 그동안 사인펜 촉이 선 끝을 따라가요.
(()=>{
let seed=20251113;
const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
const J=a=>(rnd()-.5)*2*a, F=n=>Math.round(n*10)/10;
function P(g,d,c){const p=el('path',{d},g);if(c)p.setAttribute('class',c);return p}
function E(g,cx,cy,rx,ry,c){const p=el('ellipse',{cx:F(cx),cy:F(cy),rx:F(rx),ry:F(ry)},g);if(c)p.setAttribute('class',c);return p}
function G(par,l,a){return el('g',Object.assign({'data-l':l},a||{}),par)}
const L3=par=>[G(par,1),G(par,2),G(par,3)];
function S(g,x1,y1,x2,y2,c){return P(g,`M${F(x1)} ${F(y1)} L${F(x2)} ${F(y2)}`,c)}
const pl=(pts,close=true)=>'M'+pts.map(p=>F(p[0])+' '+F(p[1])).join(' L')+(close?' Z':'');
function smooth(p){let d=`M${F(p[0][0])} ${F(p[0][1])}`;for(let i=0;i<p.length-1;i++){const p0=p[i-1]||p[i],p1=p[i],p2=p[i+1],p3=p[i+2]||p2;
  d+=` C${F(p1[0]+(p2[0]-p0[0])/6)} ${F(p1[1]+(p2[1]-p0[1])/6)} ${F(p2[0]-(p3[0]-p1[0])/6)} ${F(p2[1]-(p3[1]-p1[1])/6)} ${F(p2[0])} ${F(p2[1])}`}return d}
function ring(cx,cy,rx,ry=rx,n=24,a0=0,a1=Math.PI*2){const o=[];for(let i=0;i<=n;i++){const a=a0+(a1-a0)*i/n;o.push([cx+Math.cos(a)*rx,cy+Math.sin(a)*ry])}return o}
function T(g,x,y,s,size,a){const t=el('text',Object.assign({x,y,'font-size':size},a||{}),g);t.textContent=s;return t}
// 손맛 빗금: 다각형 안을 deg 방향으로 채우되, 간격·각도·길이를 조금씩 흔들고 살짝 휘게 그어요.
// 획 시작점에는 가끔 잉크가 고인 점이 남아요(오목한 모양도 짝수-홀수로 처리).
function hatch(g,pts,deg,gap,c='w0',o){
  o=o||{};const a0=deg*Math.PI/180,nx=-Math.sin(a0),ny=Math.cos(a0);
  let cx=0,cy=0;pts.forEach(p=>{cx+=p[0]/pts.length;cy+=p[1]/pts.length});
  let mn=1e9,mx=-1e9,R=1;pts.forEach(p=>{const v=(p[0]-cx)*nx+(p[1]-cy)*ny;mn=Math.min(mn,v);mx=Math.max(mx,v);R=Math.max(R,Math.hypot(p[0]-cx,p[1]-cy))});
  const aj=Math.min(.035,gap*.22/R),dotP=o.dots!=null?o.dots:(gap>=1.8?.28:0);
  for(let v=mn+gap*(.35+rnd()*.4);v<mx-gap*.25;v+=gap*(.8+rnd()*.4)){
    const a=a0+J(aj),dx=Math.cos(a),dy=Math.sin(a),bx=cx+nx*v,by=cy+ny*v,ts=[];
    for(let i=0;i<pts.length;i++){const A=pts[i],B=pts[(i+1)%pts.length],ex=B[0]-A[0],ey=B[1]-A[1],det=ex*dy-dx*ey;
      if(Math.abs(det)<1e-9)continue;const wx=A[0]-bx,wy=A[1]-by,t=(ex*wy-wx*ey)/det,s=(dx*wy-dy*wx)/det;if(s>=0&&s<1)ts.push(t)}
    ts.sort((p,q)=>p-q);
    for(let k=0;k+1<ts.length;k+=2){let t0=ts[k]+.5+rnd()*.9,t1=ts[k+1]-.5-rnd()*.9;const Ln=t1-t0;if(Ln<1.2)continue;
      if(rnd()<.5)t0+=Ln*rnd()*.14;else t1-=Ln*rnd()*.14;
      const x0=bx+dx*t0,y0=by+dy*t0,x1=bx+dx*t1,y1=by+dy*t1,bw=J(Math.min(.6,(t1-t0)*.025)+.12);
      P(g,`M${F(x0)} ${F(y0)} Q${F((x0+x1)/2-dy*bw)} ${F((y0+y1)/2+dx*bw)} ${F(x1)} ${F(y1)}`,c);
      if(t1-t0>4&&rnd()<dotP)E(g,x0,y0,.45,.45,'solid w0')}
  }
}
const rect=(x,y,w,h)=>[[x,y],[x+w,y],[x+w,y+h],[x,y+h]];
const rp=(x,y,w,h)=>pl(rect(x,y,w,h));
function drop(g,x,y,r,rot,c='w1 pf'){const q=el('g',{transform:`translate(${F(x)} ${F(y)}) rotate(${rot})`},g),[a,b]=L3(q);
  P(a,`M0 ${F(-2.2*r)} C${F(.6*r)} ${F(-1.2*r)} ${F(r)} ${F(-.4*r)} ${F(r)} ${F(.2*r)} A${F(r)} ${F(r)} 0 0 1 ${F(-r)} ${F(.2*r)} C${F(-r)} ${F(-.4*r)} ${F(-.6*r)} ${F(-1.2*r)} 0 ${F(-2.2*r)} Z`,c);
  P(b,`M${F(-.5*r)} ${F(.1*r)} Q${F(-.5*r)} ${F(-.6*r)} ${F(-.1*r)} ${F(-1*r)}`,'w0');
  S(b,0,-3.2*r,0,-4.6*r,'w0');S(b,-.7*r,-2.9*r,-1.1*r,-3.9*r,'w0');return q}
function clock(g,cx,cy,r,h,m,big){
  for(let i=0;i<(big?60:12);i++){const a=i/(big?60:12)*Math.PI*2,k=big?(i%5?.9:.78):.8;
    S(g,cx+Math.sin(a)*r*k,cy-Math.cos(a)*r*k,cx+Math.sin(a)*r*.97,cy-Math.cos(a)*r*.97,big&&i%5?'w0':'w1')}
  const ha=h/12*Math.PI*2,ma=m/60*Math.PI*2;
  S(g,cx,cy,cx+Math.sin(ha)*r*.5,cy-Math.cos(ha)*r*.5,'w2');S(g,cx,cy,cx+Math.sin(ma)*r*.78,cy-Math.cos(ma)*r*.78,'w1');
}
// 머리카락: 정수리에서 퍼지는 짧은 곡선 가닥(뒷모습). style 0 짧은 머리, 1 묶은 긴 머리, 2 아주 짧은 머리
function hairBack(g,x,y,rx,ry,k,style){
  const cr=[x+J(.6)*k,y-ry*.42],n=Math.round((style===2?10:16)+22*k);
  for(let i=0;i<n;i++){const u=i/(n-1),ph=Math.PI*(.9+u*1.2),tx=x+Math.cos(ph)*rx*.96,ty=y+Math.sin(ph)*ry*.96,f=.78+rnd()*.22;
    const ex=cr[0]+(tx-cr[0])*f,ey=cr[1]+(ty-cr[1])*f,mx=(cr[0]+ex)/2+J(1.4*k)+(ex-cr[0])*.08,my=(cr[1]+ey)/2-Math.abs(ex-cr[0])*.12;
    P(g,`M${F(cr[0]+J(.8*k))} ${F(cr[1]+J(.8*k))} Q${F(mx)} ${F(my)} ${F(ex)} ${F(ey)}`,'w0')}
  const m=Math.round(6+10*k),low=style===1?ry*1.95:ry*.7;
  for(let i=0;i<m;i++){const u=i/(m-1)*2-1,tx=x+u*rx*(style===1?.55:.8),ty=y+low+J(.8*k)-(style===1?0:Math.abs(u)*ry*.18),f=.85+rnd()*.15;
    P(g,`M${F(cr[0]+u*2*k)} ${F(cr[1]+2*k)} Q${F(x+u*rx*.95)} ${F(y+ry*.2)} ${F(cr[0]+(tx-cr[0])*f)} ${F(cr[1]+(ty-cr[1])*f)}`,'w0')}
  E(g,cr[0],cr[1],.7*k,.6*k,'solid w0');
}

// ---------- 표지: 시험장 책상 ----------
function drawHero(s){
  let [a,b,c]=L3(s);
  const lx=y=>34+(6-34)*(y-92)/224, rx=y=>446+30*(y-82)/222;
  // 바닥에 드리운 책상 그림자(다리 사이에만)
  hatch(c,[[36,336],[446,326],[434,352],[54,358]],18,5.4);
  // 책상 상판: 먼 쪽이 좁은 사다리꼴
  P(a,'M34 92 C150 89 320 85 446 82 L476 304 C330 308 160 312 6 316 Z','w3 dbl pf');
  P(a,'M6 316 L7 333 C160 329 330 325 476 321 L476 304','w2');
  // 휘어진 나뭇결과 옹이
  const kx=46,ky=190;
  for(let i=0;i<8;i++){const y0=100+i*28.5+J(4),pts=[];
    for(let x=lx(y0)+6;x<=rx(y0)-6;x+=11){const dk=y0-ky,bump=Math.exp(-((x-kx)**2)/1100-(dk*dk)/420)*15*(dk<0?-1:1);
      pts.push([x,y0-(x-34)*.024+Math.sin(x/53+i*1.7)*3.4+Math.sin(x/19+i)*.8+bump])}
    P(b,smooth(pts),'w0')}
  E(b,kx,ky,4,1.8,'w0');E(b,kx,ky,8.5,4,'w0');E(b,kx+1,ky,13,6.4,'w0');E(b,kx-.5,ky,1.4,.8,'solid w0');
  // 앞판: 결 방향 빗금과 성긴 2차 빗금
  const edge=[[6,316],[476,304],[476,321],[7,333]];hatch(c,edge,84,4.2);hatch(c,[[7,325],[476,313],[476,321],[7,333]],-6,6.5,'w0',{dots:0});
  for(let i=0;i<3;i++){const y=320+i*4.2;P(b,`M${F(40+i*60)} ${F(y-(40+i*60)*.025)} C${F(140+i*40)} ${F(y-4-i*1.5)} ${F(260+i*30)} ${F(y-6.5)} ${F(380+i*20)} ${F(y-9.2-i*.3)}`,'w0')}
  // 다리(뒤 다리는 가늘게) + 바닥 닿는 곳 잉크 고임
  [[62,330,72,350,'w1'],[410,322,420,344,'w1']].forEach(([x0,y0,x1,y1,w])=>P(a,pl([[x0,y0],[x1,y0],[x1,y1],[x0,y1]]),w+' pf'));
  [[[18,332],[34,332],[33,368],[19,368]],[[446,322],[462,322],[461,366],[447,366]]].forEach(q=>{P(a,pl(q),'w2 pf');
    hatch(c,[[q[0][0]+9,q[0][1]+1],[q[1][0]-1,q[1][1]+1],[q[2][0]-1,q[2][1]-1],[q[3][0]+9,q[3][1]-1]],80,2.2,'w0',{dots:0});
    E(b,q[3][0]+.5,q[3][1],1.1,1.1,'solid w0');E(b,q[2][0]-.5,q[2][1],1.1,1.1,'solid w0');
    for(let i=0;i<4;i++)S(c,q[2][0]+2+i*3,q[2][1]-.5,q[2][0]+5+i*3.6,q[2][1]-.5-J(.6),'w0')});
  // 지우개: 종이 띠를 두른 둥근 지우개, 닳은 끝과 지우개 가루
  let q=el('g',{transform:'translate(24 252) rotate(-14)'},s);[a,b,c]=L3(q);hatch(c,rect(4,6,36,15),40,1.7);[a,b,c]=L3(q);
  P(a,'M4 0 L33 0 Q36 0 36 3 L36 13 Q36 16 33 16 L6 16 Q0 15 0 9 L0 6 Q0 0 4 0 Z','w2 pf dbl');
  P(a,rp(13,-1,17,18),'w1 pf');T(b,14,10.6,'지우개',5.6);S(b,13,3,30,3,'w0');S(b,13,13.5,30,13.5,'w0');P(b,'M3 4 Q1.5 8 3 12','w0');
  a=G(s,2);P(a,'M14 282 q2 -2 3 0 t3 0 M26 287 q1.5 -1.5 3 0 M9 274 q1.5 -1.5 2.5 0','w0');
  // OMR 답안지
  q=el('g',{transform:'translate(58 106) rotate(-2.6)'},s);hatch(G(q,3),rect(5,5,211,191),35,3.2);[a,b,c]=L3(q);
  P(a,rp(0,0,210,190),'w2 dbl pf');
  S(a,12,20,202,20,'w1');T(b,14,15,'국어 영역 답안지',10.5);P(b,rp(146,6,34,12),'w0');T(b,150.5,15.5,'홀수형',9);
  for(let y=36;y<=180;y+=8)P(b,rp(3,y,5,3),'solid w0');
  P(b,rp(14,26,54,16),'w1');S(b,34,26,34,42,'w0');T(b,17,37,'성명',8.5);P(c,'M38 36 c3 -6 5 4 8 -2 s4 3 7 -1 s3 2 6 0','w1');
  P(a,rp(12,48,56,128),'w1');T(b,15,58.5,'수험번호',8.5);S(b,12,62,68,62,'w0');
  const num='038215';
  for(let k=0;k<6;k++){if(k)S(b,13.5+k*9,62,13.5+k*9,176,'w0');
    for(let r=0;r<10;r++)E(b,18+k*9,70+r*10.5,2.3,3,+num[k]===r?'solid w0':'w0')}
  for(let blk=0;blk<2;blk++){const x0=76+blk*66;P(a,rp(x0,26,62,150),'w1');
    for(let k=0;k<5;k++)T(b,x0+15.8+k*9,36.5,String(k+1),7.5);S(b,x0,39,x0+62,39,'w0');S(b,x0+13,26,x0+13,176,'w0');
    S(b,x0,105,x0+62,105,'w0');
    for(let r=0;r<10;r++){const y=48+r*12.6+(r>4?3:0),qn=blk*10+r+1,ans=(qn*7+3)%5;T(b,x0+2,y+2.8,String(qn),7.5);
      for(let k=0;k<5;k++)E(b,x0+18+k*9,y,2.8,3.6,k===ans?'solid w0':'w0')}}
  T(b,12,186.5,'※ 컴퓨터용 사인펜만 써요',7.5);
  // 수험표
  q=el('g',{transform:'translate(300 96) rotate(3)'},s);hatch(G(q,3),rect(5,5,140,80),35,2.6);[a,b,c]=L3(q);
  P(a,rp(0,0,140,80),'w2 dbl pf');T(b,52,14.5,'수험표',13);S(a,8,19,132,19,'w1');
  P(a,rp(8,24,32,48),'w1');E(b,24,40,7,8.5,'w1 pf');P(b,'M11 72 C11 58 37 58 37 72','w1');
  hatch(c,ring(24,39,7,8,12,Math.PI*1.05,Math.PI*1.95),40,1.4);hatch(c,[[12,72],[14,63],[20,59.5],[28,59.5],[34,63],[36,72]],-45,2);
  T(b,47,32,'수험번호',8);T(b,82,32,'12-345678',8.5);S(b,47,36,132,36,'w0');
  T(b,47,48,'성 명',8);S(b,47,52,104,52,'w0');T(b,47,64.5,'시험장',8);T(b,73,64.5,'○○고 3시험실',8);S(b,47,68,132,68,'w0');
  E(b,119,45,9,9,'w1');E(b,119,45,7,7,'w0');T(b,113,47.8,'확인',6.5);
  // 손목시계(책상 앞 모서리에 걸치지 않게 조금 위로)
  const wg=el('g',{transform:'translate(0 -13)'},s);
  hatch(G(wg,3),ring(434,264,27,27,20),30,1.9);
  hatch(G(wg,3),[[441,282],[446,282],[447,309],[443,309]],80,1.6,'w0',{dots:0});
  [a,b,c]=L3(wg);
  P(a,'M416 236 L418 208 L440 208 L441 236','w2 pf');P(a,'M416 280 L417 306 L440 305 L441 280','w2 pf');
  S(b,420,211,420,234,'w0');S(b,437,211,437,234,'w0');S(b,420,283,420,302,'w0');S(b,437,283,437,302,'w0');
  E(b,428.5,217,1.5,1.5,'w1');E(b,428.5,225,1.5,1.5,'w1');P(b,rp(419,290,19,6),'w1');
  P(a,rp(454,253,5,9),'w2 pf');
  E(a,428,258,26,26,'w3 dbl pf');E(b,428,258,22,22,'w1');
  clock(b,428,258,21,10.2,10,true);E(b,428,258,1.8,1.8,'solid');
  T(b,428,247,'12',6.5,{'text-anchor':'middle'});
  P(c,'M410 246 A22 22 0 0 1 420 238','w1');P(c,'M412 251 A20 20 0 0 1 417 245','w0');
  // 컴퓨터용 사인펜 뚜껑과 펜(아래쪽에 접지 그림자)
  const u=[172/206.6,-114/206.6],n=[-u[1],u[0]],ang=Math.atan2(u[1],u[0])*180/Math.PI;
  const at=(o0)=>(t,o)=>[o0[0]+u[0]*t+n[0]*o,o0[1]+u[1]*t+n[1]*o];
  let A=at([332,290]);hatch(G(s,3),[A(2,6),A(38,6),A(38,13),A(2,13)],ang+75,1.8);[a,b,c]=L3(s);
  P(a,pl([A(0,-6),A(2,-8),A(36,-8),A(37.5,-6),A(37.5,6),A(36,8),A(2,8),A(0,6)]),'w2 dbl pf');S(b,...A(30,-8),...A(30,8),'w1');S(b,...A(32,-8),...A(32,8),'w0');
  for(const t of [5,7.5,10])S(b,...A(t,-7.5),...A(t,-3),'w0');
  P(b,pl([A(4,-8),A(4,-11.5),A(24,-11.5),A(26,-9)],false),'w1');E(b,...A(22,-10),1,1,'solid w0');
  hatch(c,[A(3,2),A(35,2),A(35,7),A(3,7)],ang+66,2.1);
  A=at([236,300]);hatch(G(s,3),[A(10,6),A(196,6),A(196,13),A(10,13)],ang+75,1.8);[a,b,c]=L3(s);
  P(a,pl([A(22,-6.5),A(5,-2),A(0,0),A(5,2),A(22,6.5)]),'w2 pf');
  P(a,pl([A(22,-7),A(192,-7),A(196,-5),A(198,0),A(196,5),A(192,7),A(22,7)]),'w2 dbl pf');
  S(b,...A(5,-2),...A(5,2),'w1');
  for(const t of [40,44,170,174])S(b,...A(t,-7),...A(t,7),'w1');
  for(let t=25;t<=37;t+=3)S(b,...A(t,-5.5),...A(t,5.5),'w0');
  P(b,pl([A(150,-7),A(150,-10.5),A(186,-10.5),A(188,-8)],false),'w1');S(b,...A(153,-9),...A(184,-9),'w0');
  const tp=A(58,3);T(b,F(tp[0]),F(tp[1]),'컴퓨터용 사인펜',8.6,{transform:`rotate(${F(ang)} ${F(tp[0])} ${F(tp[1])})`});
  hatch(c,[A(46,4),A(168,4),A(168,6.5),A(46,6.5)],ang+66,2.1);
  hatch(c,[A(6,1),A(22,2),A(22,6),A(6,2)],ang+70,1.5);
}

// ---------- 1994 첫 수능 시험장 ----------
// 사람: 책상(먼 쪽) → 팔 → 몸통 → 머리와 머리카락 → 의자 등받이(가까운 쪽) 순서로 겹쳐요.
function seat(s,x,y,k,pose){
  const W=k<.7?'w1':'w2',w0='w0';let [a,b,c]=L3(s);
  const top=[[x-30*k,y],[x+30*k,y],[x+33*k,y+8*k],[x-33*k,y+8*k]];
  hatch(c,[[x-31*k,y+11*k],[x+31*k,y+11*k],[x+30*k,y+17*k],[x-30*k,y+17*k]],20,Math.max(1.6,2.4*k),'w0',{dots:0});
  P(a,pl(top),W+' pf');P(a,pl([[x-33*k,y+8*k],[x+33*k,y+8*k],[x+33*k,y+11*k],[x-33*k,y+11*k]]),'w1 pf');
  S(b,x-31*k,y+11*k,x-31*k,y+30*k,'w1');S(b,x+31*k,y+11*k,x+31*k,y+30*k,'w1');
  P(b,pl([[x+13*k,y+1.5*k],[x+26*k,y+1.5*k],[x+28*k,y+6.5*k],[x+15*k,y+6.5*k]]),'w0 pf');
  [a,b,c]=L3(s);
  const hx=x+(pose===2?2.6*k:0),hy=y+8*k;
  // 팔(팔꿈치를 책상에 올린 모양 / 턱을 괸 모양)
  const armR=`M${F(x+17*k)} ${F(y+21*k)} C${F(x+25*k)} ${F(y+20*k)} ${F(x+29*k)} ${F(y+14*k)} ${F(x+26*k)} ${F(y+8.5*k)} L${F(x+16*k)} ${F(y+8*k)} C${F(x+17*k)} ${F(y+12*k)} ${F(x+16*k)} ${F(y+16*k)} ${F(x+13*k)} ${F(y+19*k)} Z`;
  const armL=pose===1
    ?`M${F(x-17*k)} ${F(y+21*k)} C${F(x-25*k)} ${F(y+19*k)} ${F(x-27*k)} ${F(y+13*k)} ${F(x-24*k)} ${F(y+8*k)} C${F(x-22*k)} ${F(y+3*k)} ${F(x-16*k)} ${F(y)} ${F(x-12*k)} ${F(y+1.5*k)} L${F(x-10*k)} ${F(y+6*k)} C${F(x-14*k)} ${F(y+7*k)} ${F(x-17*k)} ${F(y+10*k)} ${F(x-15*k)} ${F(y+16*k)} Z`
    :`M${F(x-17*k)} ${F(y+21*k)} C${F(x-25*k)} ${F(y+20*k)} ${F(x-29*k)} ${F(y+14*k)} ${F(x-26*k)} ${F(y+8.5*k)} L${F(x-16*k)} ${F(y+8*k)} C${F(x-17*k)} ${F(y+12*k)} ${F(x-16*k)} ${F(y+16*k)} ${F(x-13*k)} ${F(y+19*k)} Z`;
  P(a,armR,W+' pf');P(a,armL,W+' pf');
  P(b,`M${F(x+22*k)} ${F(y+16*k)} q${F(2*k)} ${F(-2*k)} ${F(2.5*k)} ${F(-5*k)} M${F(x-22*k)} ${F(y+16*k)} q${F(-2*k)} ${F(-2*k)} ${F(-2.5*k)} ${F(-5*k)}`,w0);
  if(pose===1)E(a,x-10.5*k,y+3.5*k,3*k,2.6*k,'w1 pf');
  // 몸통(어깨와 등)
  P(a,`M${F(x-21*k)} ${F(y+46*k)} C${F(x-22*k)} ${F(y+27*k)} ${F(x-17*k)} ${F(y+20*k)} ${F(x-6*k)} ${F(y+18.5*k)} L${F(x+6*k)} ${F(y+18.5*k)} C${F(x+17*k)} ${F(y+20*k)} ${F(x+22*k)} ${F(y+27*k)} ${F(x+21*k)} ${F(y+46*k)}`,W+' pf');
  P(b,`M${F(x+.5*k)} ${F(y+23*k)} Q${F(x+1.5*k)} ${F(y+32*k)} ${F(x)} ${F(y+40*k)} M${F(x-12*k)} ${F(y+24*k)} q${F(3*k)} ${F(4*k)} ${F(2*k)} ${F(9*k)} M${F(x+12*k)} ${F(y+24*k)} q${F(-3*k)} ${F(4*k)} ${F(-2*k)} ${F(9*k)}`,w0);
  P(b,`M${F(x-5.5*k)} ${F(y+19*k)} Q${F(x)} ${F(y+22.5*k)} ${F(x+5.5*k)} ${F(y+19*k)}`,'w1');
  hatch(c,[[x+12*k,y+24*k],[x+18*k,y+22*k],[x+21*k,y+30*k],[x+20.5*k,y+34*k],[x+14*k,y+34*k]],62,Math.max(1.5,2*k),'w0',{dots:0});
  [a,b,c]=L3(s);
  S(a,hx-3.4*k,hy+7*k,hx-3.6*k,y+19*k,'w1');S(a,hx+3.4*k,hy+7*k,hx+3.6*k,y+19*k,'w1');
  P(a,`M${F(hx-8*k)} ${F(hy-1*k)} q${F(-2.8*k)} ${F(1.5*k)} ${F(-.2*k)} ${F(5.5*k)} M${F(hx+8*k)} ${F(hy-1*k)} q${F(2.8*k)} ${F(1.5*k)} ${F(.2*k)} ${F(5.5*k)}`,'w1');
  if(pose===1){P(a,`M${F(hx-7*k)} ${F(hy-6*k)} C${F(hx-11*k)} ${F(hy+4*k)} ${F(hx-9*k)} ${F(hy+16*k)} ${F(hx-4*k)} ${F(hy+20*k)} L${F(hx+4*k)} ${F(hy+20*k)} C${F(hx+9*k)} ${F(hy+16*k)} ${F(hx+11*k)} ${F(hy+4*k)} ${F(hx+7*k)} ${F(hy-6*k)} Z`,W+' pf')}
  E(a,hx,hy,8*k,9*k,W+' pf');
  hairBack(b,hx,hy,8*k,9*k,k,pose);
  if(pose===1){P(b,`M${F(hx-3*k)} ${F(hy+9*k)} q${F(3*k)} ${F(-1.5*k)} ${F(6*k)} 0`,'w1');E(b,hx,hy+9.6*k,1.6*k,1.1*k,'w1 pf')}
  // 의자 등받이(학생보다 앞)
  [a,b,c]=L3(s);
  const bk=[[x-14*k,y+31*k],[x,y+29.5*k],[x+14*k,y+31*k],[x+14*k,y+38*k],[x,y+36.5*k],[x-14*k,y+38*k]];
  P(a,`M${F(x-14*k)} ${F(y+31*k)} Q${F(x)} ${F(y+28*k)} ${F(x+14*k)} ${F(y+31*k)} L${F(x+14*k)} ${F(y+38*k)} Q${F(x)} ${F(y+35*k)} ${F(x-14*k)} ${F(y+38*k)} Z`,W+' pf');
  hatch(c,bk,-58,Math.max(1.4,2.2*k),'w0',{dots:0});
  S(a,x-12*k,y+38*k,x-12*k,y+52*k,W);S(a,x+12*k,y+38*k,x+12*k,y+52*k,W);
}
function draw1994(s){
  let [a,b,c]=L3(s);const VX=160,VY=64;
  P(a,'M0 122 L320 122','w2');
  for(let i=-7;i<=7;i++){const x2=VX+i*56,t=(122-VY)/(222-VY);S(b,VX+(x2-VX)*t,122,x2,222,'w0')}
  // 칠판: 글씨가 잘 보이게 가장자리에만 '닦은 자국'
  P(a,'M58 10 L262 8 L264 70 L56 72 Z','w3 dbl pf');P(b,pl([[62,14],[258,12],[260,66],[60,68]]),'w0');
  for(let i=0;i<52;i++){const r=rnd();let x,y;
    if(r<.3){x=68+rnd()*184;y=19.5+rnd()*3.5}else if(r<.5){x=68+rnd()*184;y=64+rnd()*1.5}
    else if(r<.75){x=64+rnd()*20;y=22+rnd()*42}else{x=236+rnd()*18;y=22+rnd()*40}
    const l=3.5+rnd()*5;S(c,x,y,x+l*.85,y-l*.5,'w0')}
  P(c,'M66 60 q9 -8 19 -3 M238 26 q9 -6 16 -1 M240 60 q6 -5 13 -2','w0');
  const bt=G(s,2);T(bt,160,38,'대학수학능력시험',17,{'text-anchor':'middle',class:'halo'});
  T(bt,160,60,'제1회 · 1993년 8월',13,{'text-anchor':'middle',class:'halo'});
  [a,b,c]=L3(s);P(a,'M50 76 L270 74','w2');P(b,'M84 75 l9 -.2 M98 75 l5 0','w2');P(a,rp(222,70,14,4.5),'w1 pf');hatch(c,rect(222,70,14,4.5),70,1.6,'w0',{dots:0});
  // 시계
  E(a,28,36,13,13,'w2 dbl pf');clock(b,28,36,12,9,0,false);E(b,28,36,1.3,1.3,'solid');
  // 창문과 한여름 해
  P(a,rp(280,16,36,88),'w2');S(b,298,16,298,104,'w1');S(b,280,60,316,60,'w1');P(a,'M277 106 L319 106','w2');
  E(b,307,33,6,6,'w1');for(let i=0;i<8;i++){const t=i/8*Math.PI*2;S(c,307+Math.cos(t)*9,33+Math.sin(t)*9,307+Math.cos(t)*12.5,33+Math.sin(t)*12.5,'w0')}
  for(let i=0;i<3;i++)P(c,`M${284+i*10} 98 c3 -5 -3 -9 0 -14 s-3 -9 0 -14`,'w0');
  hatch(c,rect(280,16,18,44),70,5);
  // 감독관: 얼굴, 넥타이, 팔짱 낀 팔, 교탁
  [a,b,c]=L3(s);
  S(a,157,93,157,97,'w1');S(a,163,93,163,97,'w1');
  P(a,'M139 116 C139 103 147 98 156.5 97 L163.5 97 C173 98 181 103 181 116','w2 pf');
  P(b,'M155.5 97.5 L160 102 L164.5 97.5','w1');P(b,'M160 102 L158.6 107 L160 109 L161.4 107 Z','w1 pf');
  hatch(c,[[170,100],[178,104],[180,112],[172,112]],60,1.5,'w0',{dots:0});
  [a,b,c]=L3(s);
  P(a,'M144 106 C150 102.5 170 102.5 176 106 C177.5 110 173 112 160 112 C147 112 142.5 110 144 106 Z','w1 pf');
  P(b,'M150 105 q5 2.5 11 1.6 M163 108 q4 -1 8 -3','w0');
  E(a,160,86,7,8,'w2 pf');P(a,'M153 83 q-2 1 -.4 4 M167 83 q2 1 .4 4','w0');
  P(a,'M153.2 82.5 C153 76 167 75.5 166.8 82.5 C163 79.5 157 79.5 153.2 82.5 Z','w1 pf');
  for(let i=0;i<12;i++){const u=i/11,tx=154+u*12,ty=82.3-Math.sin(Math.PI*u)*2.6;P(b,`M${F(158.5+J(.5))} 78.2 Q${F((158.5+tx)/2+J(.5))} ${F(78.5)} ${F(tx)} ${F(ty)}`,'w0')}
  E(b,157.3,86.2,.85,.85,'solid');E(b,162.7,86.2,.85,.85,'solid');P(b,'M157.5 90.4 q2.5 .9 5 0','w0');
  const tk=[[130,112],[190,112],[194,128],[126,128]];P(a,pl(tk),'w2 dbl pf');hatch(c,tk,82,3);
  P(b,pl([[140,110.5],[158,110.5],[159,112],[139,112]]),'w0 pf');
  // 책상 줄: 모두 같은 소실점(칠판 가운데 아래)을 향해 맞췄어요. 먼 줄부터 그려요.
  [132,158,188].forEach((y,ri)=>{const k=(y-VY)/124;
    for(let col=-1;col<=1;col++)seat(s,VX+col*.8*(y-VY)*1.04,y,k,(ri*3+col+4)%3)});
}

// ---------- 2001 물수능 ----------
function draw2001(s){
  let [a,b,c]=L3(s);
  const pud=ring(160,197,132,17,28);hatch(c,pud,0,3.6);
  E(a,160,197,132,17,'w2 dbl');E(b,160,198,92,10,'w0');E(b,160,199,50,5,'w0');
  // 웅덩이에 뜬 종이배(답안지 밖으로 옮겨 마킹을 가리지 않아요)
  [a,b,c]=L3(s);
  hatch(c,[[46,199],[86,199],[82,203],[50,203]],0,1.4,'w0',{dots:0});
  P(a,'M40 189 L90 189 L82 199 L48 199 Z','w2 pf dbl');P(a,'M64 189 L65 163 L84 187 Z','w1 pf');P(a,'M63 189 L62 170 L50 187 Z','w1 pf');S(b,65,163,64,189,'w0');
  hatch(c,[[42,190],[88,190],[81.5,198],[48.5,198]],62,1.9);hatch(c,[[62,172],[62.5,188],[51.5,187]],70,1.6,'w0',{dots:0});
  P(b,'M30 196 q5 -3 10 0 M88 197 q5 -3 10 0 t10 0 M36 204 q6 -2 12 0','w0');
  const q=el('g',{transform:'translate(96 40) rotate(-5)'},s);[a,b,c]=L3(q);
  // 양옆으로 넘쳐 흐르는 물줄기
  P(a,'M0 4 C-10 24 -4 64 -14 104 S-8 140 -16 158','w2');P(a,'M4 8 C-4 28 2 66 -6 104 S0 140 -6 154','w1');
  P(a,'M128 4 C138 26 132 66 142 104 S136 140 146 156','w2');P(a,'M124 8 C132 30 126 66 134 104 S128 140 136 152','w1');
  for(let i=0;i<5;i++){P(c,`M${F(-5+J(1))} ${30+i*26} q-2 7 -1 14`,'w0');P(c,`M${F(133+J(1))} ${30+i*26} q2 7 1 14`,'w0')}
  P(a,rp(0,0,128,150),'w3 dbl pf');T(b,8,13.5,'답안지',10.5);S(b,6,18,122,18,'w1');T(b,92,13.5,'2001',9);
  for(let k=0;k<3;k++)for(let r=0;r<9;r++){const x0=8+k*40,y=30+r*13;T(b,x0,y+2.5,String(k*9+r+1),6.5);
    const ans=(r*3+k*2+1)%5;for(let j=0;j<5;j++)E(b,x0+12+j*5.6,y,2.2,2.8,j===ans?'solid w0':'w0')}
  // 답안지 안에 찬 물: 물높이 선 + 줄 사이 물결(마킹 칸을 덮지 않아요)
  P(a,'M1 63 q8 -5 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t15 0','w2');
  for(let r=3;r<9;r++){const y=30+r*13+6.5;P(c,`M${F(3+J(2))} ${y} q4 -2 8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0`,'w0')}
  // 위로 넘치는 물마루: 말려 올라가는 파도 세 개
  P(a,'M-3 6 C2 -8 16 -16 28 -10 C34 -6 32 1 26 0 C22 -1 23 -6 27 -6 M28 -10 C40 -18 54 -14 62 -8 C66 -4 63 1 58 0 C54 -1 55 -5 59 -5 M62 -8 C74 -18 92 -18 100 -10 C104 -5 101 0 96 -1 C92 -2 93 -6 97 -6 M100 -10 C112 -16 126 -8 131 6','w2');
  P(b,'M6 2 q6 -6 12 -6 M40 -4 q6 -5 12 -5 M76 -4 q6 -6 14 -6 M110 -2 q6 -4 12 -2','w0');
  E(b,30,-15,1,1,'solid w0');E(b,66,-14,.8,.8,'solid w0');E(b,104,-16,1,1,'solid w0');E(b,46,-19,.7,.7,'solid w0');
  // 튀는 물방울(크기·기울기가 다르고, 떨어지는 자국이 있어요)
  [[132,14,5,-20],[160,6,3.4,12],[196,10,4.2,28],[104,10,2.6,-35],[226,30,2.8,44],[72,40,3,-46],[58,128,2.8,-8],[268,150,3.4,14],[42,168,2.2,0]]
    .forEach(([x,y,r,rot])=>drop(s,x,y,r,rot,'w1 pf'));
  // 물줄기가 웅덩이에 떨어지는 곳의 물보라
  [[94,197],[244,190]].forEach(([x,y])=>{[a,b]=L3(s);P(b,`M${x-9} ${y} q4 -6 7 -1 M${x+9} ${y} q-4 -6 -7 -1 M${x-3} ${y-4} l-1 -5 M${x+3} ${y-4} l1 -5`,'w0')});
  [a,b]=L3(s);T(a,276,74,'물수능!',20,{'text-anchor':'middle'});P(a,'M250 82 q6 -4 12 0 t12 0 t12 0 t12 0','w1');
  P(a,'M252 90 C244 102 238 108 232 112 M232 112 l7 -1 M232 112 l1 -7','w1');
}

// ---------- 2019 국어 31번 만유인력 ----------
function draw2019(s){
  let [a,b,c]=L3(s);
  // 나무: 둥치에서 뻗은 가지(카드 안에서 끝나요)
  P(a,'M6 140 C11 112 8 84 12 56 C14 42 17 34 22 28 L31 31 C27 42 25 62 25 90 C25 112 23 128 25 140','w3 pf');
  for(let i=0;i<9;i++){const y=50+i*10+J(2);P(b,`M${F(13+J(2))} ${F(y)} q2 4 0 8`,'w0')}
  P(b,'M8 140 q8 -3 17 0 M2 141 L32 141','w1');E(b,18,74,2,3,'w0');
  hatch(c,[[19,40],[25,34],[24,70],[23,138],[17,138],[19,100]],80,1.8,'w0',{dots:0});
  P(a,'M22 28 C44 22 56 14 80 26 C96 34 106 30 124 22','w3 dbl');P(a,'M28 34 C46 28 60 22 80 31','w2');
  P(a,'M18 30 C14 21 10 15 4 11 M56 18 C58 13 64 10 70 9 M84 29 C88 38 86 44 82 50','w2');
  [[34,26,110,22],[58,15,-40,20],[70,9,-60,14],[100,30,20,18],[118,24,-30,16],[82,50,100,14],[6,14,-160,12],[44,22,-70,15],[110,27,60,14]].forEach(([x,y,rot,l])=>{
    const g=el('g',{transform:`translate(${x} ${y}) rotate(${rot})`},s),[g1,g2,g3]=L3(g);
    P(g1,`M0 0 C${F(l*.3)} ${F(-l*.32)} ${F(l*.75)} ${F(-l*.3)} ${l} 0 C${F(l*.75)} ${F(l*.3)} ${F(l*.3)} ${F(l*.32)} 0 0 Z`,'w1 pf');
    S(g2,0,0,l*.92,0,'w0');for(const t of [.35,.6])S(g2,l*t,0,l*(t+.15),-l*.14,'w0');hatch(g3,[[l*.1,0],[l*.9,0],[l*.7,l*.2],[l*.3,l*.2]],60,1.6,'w0',{dots:0})});
  // 떨어지는 사과
  const x=80,y=96;[a,b,c]=L3(s);
  hatch(c,ring(x+3,y+3,12,11,16,-Math.PI/2,Math.PI/2),55,1.7);
  P(a,`M${x} ${y-9} C${x+6} ${y-14} ${x+15} ${y-10} ${x+14} ${y+1} C${x+13} ${y+12} ${x+5} ${y+15} ${x} ${y+12} C${x-5} ${y+15} ${x-13} ${y+12} ${x-14} ${y+1} C${x-15} ${y-10} ${x-6} ${y-14} ${x} ${y-9} Z`,'w2 dbl pf');
  P(b,`M${x} ${y-9} q1 -5 4 -8`,'w2');P(b,`M${x+2} ${y-13} c4 -5 10 -4 12 -2 c-4 3 -9 4 -12 2 Z`,'w1');P(b,`M${x-9} ${y-2} q1 -5 5 -7`,'w1');
  P(b,'M70 64 q1 4 0 8 M80 58 q1 5 0 10 M90 64 q-1 4 0 8','w1');
  // 지구(70%로 줄임)와 달 궤도: 궤도가 지구에 닿지 않게 넓혔어요. 먼 쪽은 가늘게, 가까운 쪽은 굵게.
  const ex=210,ey=130,er=30,rot=-12*Math.PI/180,orb=t=>{const X=Math.cos(t)*88,Y=Math.sin(t)*37;return [ex+X*Math.cos(rot)-Y*Math.sin(rot),ey+X*Math.sin(rot)+Y*Math.cos(rot)]};
  const back=[],front=[];for(let i=0;i<=36;i++){back.push(orb(Math.PI+i/36*Math.PI));front.push(orb(i/36*Math.PI))}
  [a,b,c]=L3(s);P(b,smooth(back),'w0');
  P(a,`M${ex} ${ey-er} A${er} ${er} 0 1 1 ${ex-.1} ${ey-er} Z`,'w3 dbl pf');
  P(b,'M196 112 c6 -4 13 0 14 6 s-4 10 -1 15 s-7 7 -11 3 s-6 -12 -2 -24 Z M213 133 c7 -3 15 1 16 7 s-5 9 -11 7 s-9 -9 -5 -14 Z M220 106 c4 0 7 3 5 6 s-5 1 -5 -6 Z','w1');
  P(b,'M188 118 A24 24 0 0 1 200 104','w0');
  // 밤 쪽: 터미네이터를 따라 한 방향 빗금, 가장자리에만 한 겹 더
  const night=[...ring(ex,ey,er-1.2,er-1.2,18,-Math.PI/2,Math.PI/2),...ring(ex,ey,11,er-1.2,14,Math.PI/2,-Math.PI/2)];
  hatch(c,night,48,2.3);
  hatch(c,[...ring(ex,ey,er-1.2,er-1.2,14,-Math.PI*.42,Math.PI*.42),...ring(ex,ey,21,er-6,12,Math.PI*.42,-Math.PI*.42)],-38,3,'w0',{dots:0});
  [a,b,c]=L3(s);P(a,smooth(front),'w1');
  const m=orb(.12*Math.PI);hatch(c,ring(m[0]+2,m[1]+2,8,8,12),30,1.6,'w0',{dots:0});
  [a,b,c]=L3(s);E(a,m[0],m[1],8,8,'w2 pf');E(b,m[0]-3,m[1]-2,1.8,1.8,'w0');E(b,m[0]+2.5,m[1]+3,1.3,1.3,'w0');
  hatch(c,ring(m[0],m[1],7.5,7.5,12,-Math.PI*.3,Math.PI*.7),45,1.5,'w0',{dots:0});
  // 서로 끌어당기는 힘: 화살표 양 끝, F는 화살표 가운데 위
  const A0=[95,101],A1=[180,123];
  P(a,`M${A0[0]} ${A0[1]} L${A1[0]} ${A1[1]}`,'w2');P(a,`M${A1[0]} ${A1[1]} l-9 -6 M${A1[0]} ${A1[1]} l-10 3`,'w2');P(a,`M${A0[0]} ${A0[1]} l9 -2 M${A0[0]} ${A0[1]} l7 6`,'w2');
  T(b,133,106,'F',13,{class:'halo','text-anchor':'middle'});
  T(b,252,34,'F = G·Mm / r²',16,{'text-anchor':'middle'});P(b,'M198 42 q7 -4 14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0','w1');
  // 국어 시험지 31번(궤도 그림이 있는 지문)
  const g=el('g',{transform:'translate(14 142) rotate(-6)'},s);hatch(G(g,3),rect(4,4,92,66),30,3);[a,b,c]=L3(g);P(a,rp(0,0,92,66),'w2 dbl pf');T(b,6,15,'31.',12);
  for(let i=0;i<7;i++){const w=50+rnd()*30;S(b,26-(i?20:0),11+i*7.5,Math.min(60,26-(i?20:0)+w*(i?1.1:.75)),11+i*7.5,'w0')}
  E(b,76,40,10,10,'w1');E(b,76,40,1.6,1.6,'solid');S(b,76,40,83,33,'w0');E(b,83,33,2.2,2.2,'w1 pf');T(b,77,46,'r',7);
  // 생각 풍선 하나: '?'
  [a,b]=L3(s);E(a,128,186,14,12,'w1 pf');E(a,110,198,3,2.5,'w1 pf');E(a,104,204,1.8,1.5,'w1 pf');T(b,128,193,'?',18,{'text-anchor':'middle'});
  // 오른쪽 아래: 연필과 계산 메모(거리 2배면 힘은 1/4)
  [a,b,c]=L3(s);
  hatch(c,[[224,207],[302,190],[303,195],[226,212]],70,1.7);
  [a,b,c]=L3(s);
  P(a,'M222 206 L230 201.5 L298 186 L300 192 L232 207.5 Z','w2 pf');S(b,230,201.5,232,207.5,'w1');S(b,290,188,292,193.8,'w1');P(a,'M222 206 L226 203.8 L227 205.5 Z','solid w0');
  T(b,268,170,'거리 2배 → 힘 ¼',11.5,{'text-anchor':'middle'});P(b,'M222 176 q8 3 16 0 t16 0 t16 0 t16 0 t16 0','w0');
}

// ---------- 2021 코로나 칸막이 교실 ----------
function draw2021(s){
  let [a,b,c]=L3(s);
  // 달력
  hatch(c,rect(17,15,44,40),35,2.6);[a,b,c]=L3(s);P(a,rp(14,12,44,40),'w2 dbl pf');hatch(c,rect(14,12,44,10),70,1.6,'w0',{dots:0});P(b,rp(14,12,44,10),'w1');
  T(b,36,31,'2020. 12월',7.5,{'text-anchor':'middle'});T(b,36,49,'3',18,{'text-anchor':'middle'});
  E(b,24,12,1.6,3,'w1');E(b,48,12,1.6,3,'w1');
  // 블라인드 창(줄과 손잡이)
  P(a,rp(252,10,58,52),'w2');for(let y=15;y<60;y+=4.5)S(b,253,y+J(.3),309,y+.4,'w0');S(b,281,10,281,62,'w0');P(a,'M248 64 L314 64','w2');
  S(b,305,12,305,52,'w0');E(b,305,54,1.4,2.2,'w1 pf');
  // 옆자리 칸막이: 카드 안에서 온전한 판으로 끝나요
  [[6,"L"],[286,"R"]].forEach(([x0,side])=>{[a,b,c]=L3(s);
    P(a,`M${side==='L'?0:320} 152 L${side==='L'?40:280} 152`,'w2');P(a,`M${side==='L'?0:320} 158 L${side==='L'?40:280} 158`,'w1');
    P(a,rp(x0,76,28,72),'w2 pf');P(b,rp(x0+2.5,78.5,23,67),'w0');
    P(b,`M${x0+5} 132 L${x0+22} 98 M${x0+8} 140 L${x0+24} 110`,'w0');
    P(a,rp(x0+3,146,6,6),'w1 pf');P(a,rp(x0+19,146,6,6),'w1 pf')});
  // 학생: 어깨, 팔, 손(답안지 위)
  [a,b,c]=L3(s);
  S(a,152,96,151,110,'w1');S(a,168,96,169,110,'w1');
  P(a,'M104 152 C104 126 118 112 142 108 L178 108 C202 112 216 126 216 152','w2 dbl pf');
  P(b,'M146 109 L160 124 L174 109','w1');P(b,'M131 122 q4 10 2 22 M189 122 q-4 10 -2 22 M160 128 l0 18','w0');
  hatch(c,[[196,116],[206,122],[212,134],[214,150],[204,150]],70,2.2,'w0',{dots:0});
  [a,b,c]=L3(s);
  E(a,160,77,20,23,'w2 dbl pf');P(b,'M140 74 q-6 2 -2 10 M180 74 q6 2 2 10','w1');
  P(a,'M140 72 C138 48 182 46 181 72 C176 60 150 58 140 72 Z','w1 pf');
  for(let i=0;i<30;i++){const u=i/29,tx=(1-u)**2*141+2*u*(1-u)*161+u*u*180,ty=(1-u)**2*71+2*u*(1-u)*57+u*u*71-1,cr=[160+J(2),50.5];
    P(b,`M${F(cr[0])} ${F(cr[1])} Q${F((cr[0]+tx)/2+(tx-160)*.25)} ${F((cr[1]+ty)/2-2)} ${F(tx)} ${F(ty)}`,'w0')}
  P(b,'M147 69 q4 -2 8 0 M165 69 q4 -2 8 0','w1');P(b,'M148 76 q3 -2.5 6 0 M166 76 q3 -2.5 6 0','w1');
  E(b,151,77.5,1.3,1.3,'solid');E(b,169,77.5,1.3,1.3,'solid');
  P(a,'M143 83 C150 80 170 80 177 83 L176 96 C170 104 150 104 144 96 Z','w2 pf');
  P(b,'M145 88 C152 86 168 86 175 88 M145 93 C152 91 168 91 175 93 M152 99 C156 97 164 97 168 99','w0');
  P(b,'M155 82 L165 82','w1');P(b,'M143 84 C137 84 137 92 144 94 M177 84 C183 84 183 92 176 94','w1');
  // 책상: 앞판은 한 방향 빗금, 그림자는 성기게
  [a,b,c]=L3(s);
  hatch(c,[[60,192],[260,192],[268,212],[52,212]],15,5.5,'w0',{dots:0});
  const top=[[70,148],[250,148],[272,176],[48,176]];P(a,pl(top),'w2 dbl pf');
  const fr=[[48,176],[272,176],[270,190],[50,190]];P(a,pl(fr),'w2 pf');hatch(c,fr,82,4.6);
  P(a,'M56 190 L58 218 M264 190 L262 218','w2');E(b,58,218,1.1,1.1,'solid w0');E(b,262,218,1.1,1.1,'solid w0');
  // 답안지
  [a,b,c]=L3(s);
  const sh=[[122,152],[194,152],[200,170],[116,170]];P(a,pl(sh),'w1 pf');
  for(let r=0;r<4;r++)for(let k=0;k<6;k++)E(b,132+k*9.5+r*.8,156+r*3.6,1.6,1,(k+r)%3?'w0':'solid w0');
  // 팔과 손(책상 위, 몸통보다 앞)
  [a,b,c]=L3(s);
  P(a,'M116 118 C105 128 101 142 105 156 C109 166 122 168 134 166 L136 158 C127 158 121 156 121 148 C121 139 124 131 128 125 Z','w2 pf');
  P(a,'M204 118 C215 128 219 142 215 156 C211 166 198 168 188 166 L186 158 C193 158 199 156 199 148 C199 139 196 131 192 125 Z','w2 pf');
  P(b,'M107 146 q4 2 8 0 M213 146 q-4 2 -8 0 M110 158 q3 -2 2 -5','w0');
  hatch(c,[[204,124],[214,136],[216,152],[208,152],[202,134]],70,1.8,'w0',{dots:0});
  P(a,'M134 158 C140 155 148 155 152 159 C154 162 151 166 146 166 L134 167 Z','w1 pf');P(b,'M140 158 l8 1.5 M140 161 l9 1 M140 164 l7 .5','w0');
  S(a,186,163,198,143,'w2');S(b,198,143,199.5,140.5,'w2');S(b,186,163,184.5,165.5,'w1');
  P(a,'M184 156 C179 156 175 160 177 164.5 C179 168 187 168 191 165 C193.5 162 191 157 184 156 Z','w1 pf');P(b,'M181 159 q3 1 5 4 M179.5 162 q3 1 5 3.5','w0');
  // 손소독제
  hatch(c,rect(252,140,13,30),80,2.2);[a,b,c]=L3(s);P(a,rp(250,138,13,30),'w2 pf');P(a,'M253 138 L253 132 L260 132 L260 138 M256 132 L256 127 L264 127','w1');T(b,251.5,156,'소독',5.8);
  // 투명 칸막이(앞에 있어서 맨 나중에 그려요)
  [a,b,c]=L3(s);
  P(a,'M78 66 L242 66 L244 174 L76 174 Z','w2');P(b,'M81 69 L239 69 L241 171 L79 171 Z','w0');
  P(a,rp(92,168,16,10),'w2 pf');P(a,rp(212,168,16,10),'w2 pf');hatch(c,rect(92,168,16,10),60,2,'w0',{dots:0});hatch(c,rect(212,168,16,10),60,2,'w0',{dots:0});
  P(b,'M86 124 L120 76 M94 132 L128 84 M222 164 L238 140 M230 168 L240 154','w0');P(b,'M90 112 L110 84 M226 154 L237 138','w1');
}

// ---------- 다 그려진 그림 위에 '그리는 순서'를 덧입혀요 ----------
const ARTS=[['#art-hero',drawHero],['#art-1994',draw1994],['#art-2001',draw2001],['#art-2019',draw2019],['#art-2021',draw2021]];
function build(svg,fn){
  const root=el('g',{filter:'url(#pen)'},svg);fn(root);
  svg.querySelectorAll('.dbl').forEach(p=>{const k=p.cloneNode();k.setAttribute('class','w0 ghost');k.setAttribute('transform',`translate(${F(.6+rnd()*.6)} ${F(.5+rnd()*.5)})`);p.after(k)});
  const items=[...root.querySelectorAll('path,ellipse,text')],lay={1:[],2:[],3:[]},solids=[],sched=[];
  items.forEach(e=>{if(e.classList.contains('solid')){solids.push(e);return}const g=e.closest('[data-l]');lay[g?g.dataset.l:1].push(e)});
  let t0=0;
  [1,2,3].forEach(l=>{const list=lay[l],step=Math.min(l===3?.012:.03,(l===1?1.1:.9)/Math.max(1,list.length));
    list.forEach((e,i)=>{const d=t0+i*step;e.style.setProperty('--d',d.toFixed(3)+'s');
      if(e.tagName==='text'){e.classList.add('fi');return}
      let len=100;try{len=Math.ceil(e.getTotalLength())+2}catch(_){}
      const t=Math.min(1.1,.22+len/320);
      e.style.setProperty('--len',len);e.style.setProperty('--t',t.toFixed(2)+'s');e.classList.add('ln');
      if(l<3&&len>14)sched.push({e,d,t,len})});
    t0+=l===1?1.0:.85});
  // 먹칠(마킹 점·잉크 고임)은 윤곽과 빗금이 시작된 뒤에 마지막으로 찍혀요
  const s0=t0-.55;solids.forEach((e,i)=>{e.style.setProperty('--d',(s0+i*Math.min(.006,.5/solids.length)).toFixed(3)+'s');e.classList.add('fi')});
  svg._sched=sched;
}
// 움직이는 사인펜 촉: 지금 그려지는 선의 끝을 따라가요(움직임을 줄이는 설정에서는 만들지 않아요)
function nib(svg){
  const sc=svg._sched;if(!sc||!sc.length||!svg.getScreenCTM)return;
  svg.querySelectorAll('.nib').forEach(n=>n.remove());
  const vb=svg.viewBox.baseVal,z=vb.width/420;
  const g=el('g',{class:'nib','aria-hidden':'true'},svg),h=el('g',{transform:`scale(${F(z*10)/10}) rotate(-38)`},g);
  P(h,'M0 0 L7 -2.6 L7 2.6 Z','solid w0');P(h,'M7 -3.6 L12 -4.4 L12 4.4 L7 3.6 Z','w1 pf');
  P(h,'M12 -5 L58 -5 L60 -3 L60 3 L58 5 L12 5 Z','w2 pf');S(h,18,-5,18,5,'w1');S(h,50,-5,50,5,'w1');S(h,22,-1.5,46,-1.5,'w0');
  const inv=svg.getScreenCTM().inverse(),mats=sc.map(o=>{try{return inv.multiply(o.e.getScreenCTM())}catch(_){return null}});
  const end=sc.reduce((m,o)=>Math.max(m,o.d+o.t),0);let i=0,px=null,py=null;const st=performance.now();
  const ease=p=>p<.5?2*p*p:1-2*(1-p)*(1-p);
  (function tick(now){const tau=(now-st)/1000;
    while(i+1<sc.length&&sc[i+1].d<=tau)i++;
    const o=sc[i],m=mats[i];
    if(m&&tau>=o.d){const p=ease(Math.min(1,(tau-o.d)/o.t));let pt;try{pt=o.e.getPointAtLength(p*(o.len-2))}catch(_){pt=null}
      if(pt){const x=m.a*pt.x+m.c*pt.y+m.e,y=m.b*pt.x+m.d*pt.y+m.f;px=px==null?x:px+(x-px)*.45;py=py==null?y:py+(y-py)*.45;
        g.setAttribute('transform',`translate(${F(px)} ${F(py)})`)}}
    if(tau<end)requestAnimationFrame(tick);else g.remove()
  })(st);
}
function play(svg){svg.classList.remove('ink-play');void svg.getBoundingClientRect();svg.classList.add('ink-play');nib(svg)}
const svgs=ARTS.map(([sel,fn])=>{const s=document.querySelector(sel);if(s)build(s,fn);return s}).filter(Boolean);
if(!reduced&&'IntersectionObserver' in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){io.unobserve(e.target);play(e.target)}}),{rootMargin:'0px 0px 10% 0px'});
  svgs.forEach(s=>{const r=s.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)play(s);else io.observe(s)});
}
})();
