export const meta = {
  name: 'suneung-lineart-debate',
  description: '그림 중심 2라운드: 블랙이 라인아트를 그리고 레드·블루·옐로우·퍼플이 스크린샷을 보고 채점 (에이전트 10개)',
  phases: [{ title: 'Author' }, { title: 'Debate' }],
}
const DIR = '/tmp/claude-0/-home-user/15874408-5af3-5bb7-95f2-a9c4f9309bb6/scratchpad'
const FILE = DIR + '/suneung.html'
const SHOT = (tag) => `cd ${DIR} && node shot.js suneung.html shots/${tag}`
const IMGS = (tag) => `${DIR}/shots/${tag}-anim.png(그려지는 중간), ${tag}-desktop-top.png, ${tag}-desktop-full.png, ${tag}-phone-top.png`
const RULES = `페이지 규칙: <!doctype>/<html>/<head>/<body> 태그 없이 <title>과 <style>로 시작. 외부 스크립트는 허용 CDN의 정확한 버전만(가급적 쓰지 말 것), 폰트는 Google Fonts만. 색은 :root 토큰. 폰 너비 390px에서 가로 스크롤 없음. 처음 로드 때 내용이 다 보여야 함(opacity:0 대기 금지). prefers-reduced-motion 존중. 고1에게 설명하는 쉬운 존댓말. 이미 확인한 만점자 수·출처·DATA·퀴즈·가족 찾기 등 기능은 건드리지 말 것(망가뜨리면 실패).`
const FOCUS = `이번 토론의 주제는 오직 그림: "검은 펜으로 섬세하게 그린 라인아트 애니메이션"의 수준. 지금 페이지는 SVG 3개·path 10개로 그림이 너무 빈약해.`
const PERSONAS = [
  {c:'RED', role:'반대 의견을 내는 사람', p:'그림이 엉성하거나, 펜 느낌이 안 나거나, 겹치고 잘리거나, 애니메이션이 어색한 곳을 칭찬 없이 짚어. 엄격하게 채점.'},
  {c:'BLUE', role:'좋은 점을 보는 사람', p:'그림에서 잘된 점과 꼭 지켜야 할 것을 짚어. 저자가 다음 라운드에 망가뜨리면 안 되는 것도. 점수는 정직하게.'},
  {c:'YELLOW', role:'아이디어를 내는 사람', p:'그림을 더 섬세하고 보기 좋게 만들 실용적 아이디어(구도, 디테일, 획 순서, 굵기 변화)를 구체적으로.'},
  {c:'PURPLE', role:'색다른 아이디어를 적용하는 사람', p:'아무도 생각 못 한 펜 그림 연출 아이디어를 내되, 저자가 다음 라운드에 실제로 구현할 방법까지 적어.'},
]
const REVIEW = { type:'object', properties:{
  score:{type:'number', description:'10점 만점(소수 첫째). 기준: 그림의 섬세함·펜 질감·애니메이션 완성도·고1 백과와의 어울림. 9.5는 전문 일러스트레이터 수준일 때만'},
  verdict:{type:'string'}, points:{type:'array', items:{type:'string'}}, reply:{type:'string'} }, required:['score','verdict','points','reply'] }
const AUTHOR = { type:'object', properties:{ changes:{type:'array', items:{type:'string'}}, rejected:{type:'array', items:{type:'string'}} }, required:['changes','rejected'] }

const history = []
let last = null
for (let round = 1; round <= 2; round++) {
  phase('Author')
  const task = round === 1
    ? `너는 수능 백과 제작팀의 BLACK, 저자야. ${FOCUS}
${FILE} 을 읽고 라인아트를 크게 끌어올려. 먼저 \`${SHOT('r0')}\` 를 실행하고 ${IMGS('r0')} 를 Read로 봐서 현재 화면을 확인해.
해야 할 것:
1) 표지 그림을 훨씬 섬세하게 다시 그려: 시험장 책상, OMR 답안지, 컴퓨터용 사인펜, 수험표, 시계 등. 겹선·해칭(빗금 음영)·작은 디테일로.
2) 시대 장면 4개를 새로 그려 각 시대 위치(필터/카드 구간 근처)나 별도 '장면으로 보는 수능' 섹션에 배치: 1994 첫 수능 시험장, 2001 물수능(물방울 넘치는 답안지 등), 2019 국어 31번 만유인력(사과·지구·궤도), 2021 코로나 칸막이 교실(마스크·투명 칸막이).
3) 펜 질감: 획 굵기 변화(stroke-width 다양화, 혹은 겹친 두 획), feTurbulence+feDisplacementMap 아주 약한 떨림 필터, 끝이 둥근 선. 반복되는 패턴은 JS로 생성해도 됨.
4) 그려지는 순서 연출: 윤곽→디테일→해칭 순, 장면은 화면에 들어올 때 그려지되 처음부터 최종 모습이 보이는 상태에서 시작하지 말고... 단, IntersectionObserver가 없거나 reduced-motion이면 완성된 그림이 바로 보이게. 스크롤 없이도 내용은 보여야 하므로 '선이 다 그려진 상태'가 기본값이고 애니메이션은 덧입히는 방식으로.
5) 색은 검정 잉크 한 가지(+종이색). 팀 칩 색은 그대로.
다 고친 뒤 \`${SHOT('r1')}\` 로 다시 찍고 이미지를 Read로 확인해서 겹침·잘림·가로스크롤이 없게 한 번 고쳐. node로 <script> 문법 검사도 해. ${RULES}`
    : `너는 BLACK, 저자야. ${FOCUS} 라운드 1 토론 결과(평균 ${last.avg.toFixed(2)}점):\n${JSON.stringify(last)}\n${FILE} 을 읽고 \`${SHOT('r1')}\` 이미지를 Read로 확인한 뒤, RED의 맞는 지적은 반드시 고치고, BLUE가 지키라고 한 것은 지키고, PURPLE의 색다른 아이디어를 최소 하나 실제로 적용해. 다 고친 뒤 \`${SHOT('r2')}\` 로 찍어서 확인하고 문제 있으면 한 번 고쳐. node 문법 검사. 받아들이지 않은 의견은 이유를 남겨. ${RULES}`
  const authored = await agent(task, { label:`BLACK:그림 R${round}`, phase:'Author', schema: AUTHOR })
  phase('Debate')
  const tag = `r${round}`
  const reviews = (await parallel(PERSONAS.map(t => () =>
    agent(`너는 수능 백과 제작팀의 ${t.c}, ${t.role}이야. ${t.p}\n${FOCUS}\n라운드 ${round}. 저자(BLACK)가 ${FILE} 의 그림을 고쳤어. 파일은 절대 수정하지 마. 먼저 \`${SHOT(tag+'-'+t.c.toLowerCase())}\` 를 실행해 직접 스크린샷을 찍고, ${IMGS(tag+'-'+t.c.toLowerCase())} 네 장을 Read로 꼭 봐. 필요하면 파일 코드도 읽어. 저자 보고: ${JSON.stringify(authored)}\n${last ? '지난 라운드 다른 색 의견: '+JSON.stringify(last.reviews) : ''}\n화면에서 본 것을 근거로 10점 만점 채점.`,
      { label:`${t.c} R${round}`, phase:'Debate', schema: REVIEW }).then(r => r && ({color:t.c, ...r}))))).filter(Boolean)
  const avg = reviews.reduce((s,r)=>s+r.score,0) / Math.max(1,reviews.length)
  last = { round, author: authored, reviews, avg }
  history.push(last)
  log(`라운드 ${round}: 평균 ${avg.toFixed(2)}점 (${reviews.map(r=>r.color+' '+r.score).join(', ')})`)
  if (avg >= 9.5) break
}
return { rounds: history.length, finalAvg: last.avg, history }