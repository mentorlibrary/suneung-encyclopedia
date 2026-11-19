export const meta = {
  name: 'suneung-color-debate',
  description: '블랙(저자)이 쓰고 레드·블루·옐로우·퍼플이 토론·채점, 평균 9.5점이 될 때까지 반복',
  phases: [{ title: 'Author' }, { title: 'Debate' }],
}
const FILE = '/tmp/claude-0/-home-user/15874408-5af3-5bb7-95f2-a9c4f9309bb6/scratchpad/suneung.html'
const TARGET = 9.5, MAX_ROUNDS = 5
const RULES = `페이지 규칙(꼭 지켜): <!doctype>/<html>/<head>/<body> 태그 없이 <title>과 <style>로 시작. 외부 스크립트는 cdnjs.cloudflare.com 등 허용 CDN의 정확한 버전만, 폰트는 Google Fonts만. 색은 :root 토큰으로. 폰 너비(400px)에서 가로 스크롤 없음, 좌우 여백 max(16px, env(safe-area-inset-*)). 내용은 처음 로드 때 다 보여야 함(opacity:0으로 숨긴 채 대기 금지). alert/confirm/print 금지. prefers-reduced-motion 존중. 검은 펜 라인아트 애니메이션, 고1에게 설명하는 쉬운 존댓말 톤은 유지.`
const PERSONAS = [
  {c:'RED', role:'반대 의견을 내는 사람', p:'일부러 반대편에 서서 약점, 틀린 사실, 과장, 고1에게 안 통하는 부분을 집요하게 짚어. 칭찬은 하지 마. 점수는 엄격하게.'},
  {c:'BLUE', role:'좋은 점을 보는 사람', p:'잘된 점과 꼭 지켜야 할 강점을 찾아 말해. 저자가 고치다가 망가뜨리면 안 되는 것도 짚어. 그래도 점수는 정직하게.'},
  {c:'YELLOW', role:'아이디어를 내는 사람', p:'페이지를 더 좋게 만들 실용적인 아이디어를 내. 구현 가능한 수준으로 구체적으로.'},
  {c:'PURPLE', role:'색다른 아이디어를 적용하는 사람', p:'아무도 생각 못 한 색다른 아이디어를 내되, 저자가 이번 라운드에 실제로 적용할 수 있게 구체적인 구현 방법까지 적어.'},
]
const REVIEW = { type:'object', properties:{
  score:{type:'number', description:'10점 만점, 소수 첫째 자리. 9.5는 고1용 백과사전으로 거의 흠잡을 데 없을 때만'},
  verdict:{type:'string', description:'페르소나 말투로 2~3문장'},
  points:{type:'array', items:{type:'string'}, description:'구체적인 지적/칭찬/아이디어 3~6개'},
  reply:{type:'string', description:'지난 라운드 다른 색 의견에 대한 반박이나 동의 한두 문장(첫 라운드는 빈 문자열)'},
}, required:['score','verdict','points','reply'] }
const AUTHOR = { type:'object', properties:{ changes:{type:'array', items:{type:'string'}}, rejected:{type:'array', items:{type:'string'}, description:'받아들이지 않은 의견과 이유'} }, required:['changes','rejected'] }

const history = []
let last = null, round = 0, avg = 0
while (round < MAX_ROUNDS) {
  round++
  phase('Author')
  const authorPrompt = round === 1
    ? `너는 수능 백과 제작팀의 BLACK, 저자야. ${FILE} 을 읽고 직접 고쳐서 더 좋은 고1용 수능 역사 백과사전으로 만들어. 이번 라운드 할 일: (1) WebSearch로 만점자 수가 '자료 없음'·'추정'인 학년도와 2026학년도를 확인해 DATA를 고치고, 확인된 값에는 출처(언론사명)를 짧게 붙여. (2) 페이지 맨 끝에 '만든 팀' 섹션을 추가해 BLACK(저자)·RED(반대 의견)·BLUE(좋은 점 보기)·YELLOW(아이디어)·PURPLE(색다른 아이디어)를 각 색 칩으로 표시해. 이 다섯 색은 팀 표시에만 쓰고 본문은 검은 펜 톤 유지. 칩 색도 :root 토큰으로. ${RULES} 파일을 Edit/Write로 직접 수정하고, 바꾼 내용을 보고해.`
    : `너는 BLACK, 저자야. 라운드 ${round-1} 토론 결과(평균 ${avg.toFixed(2)}점):\n${JSON.stringify(last)}\n${FILE} 을 읽고, 타당한 지적과 아이디어를 반영해 직접 고쳐. RED의 반대 의견 중 맞는 것은 반드시 고치고, BLUE가 지키라고 한 강점은 망가뜨리지 마. PURPLE의 색다른 아이디어는 최소 하나 실제 적용해. 받아들이지 않는 의견은 이유를 남겨. 사실 수정이 필요하면 WebSearch로 확인. ${RULES}`
  const authored = await agent(authorPrompt, { label:`BLACK:저자 R${round}`, phase:'Author', schema: AUTHOR })
  phase('Debate')
  const reviews = (await parallel(PERSONAS.map(t => () =>
    agent(`너는 수능 백과 제작팀의 ${t.c}, ${t.role}이야. ${t.p}\n라운드 ${round}. 저자(BLACK)가 방금 ${FILE} 을 고쳤어(파일은 읽기만, 수정 금지). 저자 보고: ${JSON.stringify(authored)}\n${last ? '지난 라운드 다른 색 의견: '+JSON.stringify(last.reviews) : ''}\n고1에게 설명하는 수능 역사 백과사전(연도별 만점자 수·난이도, 검은 펜 라인아트 애니메이션)으로서 10점 만점 채점.`,
      { label:`${t.c} R${round}`, phase:'Debate', schema: REVIEW }).then(r => r && ({color:t.c, ...r}))))).filter(Boolean)
  avg = reviews.reduce((s,r)=>s+r.score,0) / Math.max(1,reviews.length)
  last = { round, author: authored, reviews, avg }
  history.push(last)
  log(`라운드 ${round}: 평균 ${avg.toFixed(2)}점 (${reviews.map(r=>r.color+' '+r.score).join(', ')})`)
  if (avg >= TARGET) break
}
if (avg < TARGET) log(`최대 ${MAX_ROUNDS}라운드까지 진행했지만 ${avg.toFixed(2)}점에서 멈췄어요.`)
return { rounds: history.length, finalAvg: avg, history }