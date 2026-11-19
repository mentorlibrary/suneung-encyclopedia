# 5색 팀 토론 기록

라운드 5회, 최종 평균 9.40점 (목표 9.5)

| 라운드 | 🔴 RED | 🔵 BLUE | 🟡 YELLOW | 🟣 PURPLE | 평균 |
|---|---|---|---|---|---|
| 1 | 7.3 | 8.6 | 8.3 | 8.3 | 8.12 |
| 2 | 7.9 | 9.1 | 8.8 | 8.8 | 8.65 |
| 3 | 8.6 | 9.3 | 9.2 | 9.2 | 9.07 |
| 4 | 8.9 | 9.5 | 9.4 | 9.4 | 9.30 |
| 5 | 9.1 | 9.5 | 9.5 | 9.5 | 9.40 |

## 라운드 1

### ⚫ BLACK (저자) 바꾼 것

- Edited /tmp/claude-0/-home-user/15874408-5af3-5bb7-95f2-a9c4f9309bb6/scratchpad/suneung.html directly. The script still parses (I checked with node), and the page still starts with <title> and has no doctype, html, head or body tags and no alert, confirm or print.
- Checked the uncertain years with web search and fixed DATA: 2011 changed to 0 (Kyunghyang Shinmun), 2012 from 'tens of people (estimate)' to 30 (Kyunghyang Shinmun), 2013 from 'tens of people (estimate)' to 6 (Jaekyung Ilbo), 2014 from 'about 30 (estimate)' to 33 by raw score (Aju Business Daily), 2015 to 29 (8 humanities, 21 sciences, education-office count, News1), 2016 to 16 (Kukinews).
- Changed 2023 from '3 (estimate)' to 3 (2 current students, 1 repeat-year student, Newsis). Changed 2025 from 'about 11 (estimate)' to 11 (4 current students, 7 graduates, Seoul Shinmun and Newsis). Changed 2026 from 'no data' to 5 (4 current students, 1 graduate or other, Money Today and Newsis).
- Added sources to values I re-confirmed: 2018 and 2019 (Sports Kyunghyang), 2021 (6, 3 current students and 3 graduates) and 2022 (1, Korea Economic Daily), 2024 (1 graduate, citing the KICE scoring-results announcement).
- 2006, 2007, 2009 and 2010 had 'no data'. I couldn't find a reliable all-subject count, so they now read 'no official count of all-subject perfect scorers', with no number and no source. 2020 (15) also has no source because I couldn't confirm it.
- Added a src field to DATA and a small grey 'source: ... report' line under the perfect-scorer line on each card that has one.
- Updated the stories. 2011: no all-subject perfect scorer because math Ga was so hard. 2012: foreign language perfect scores at 2.67%, 171 perfect in all three of language, math and foreign language. 2025: 7 of the 11 perfect scorers were graduates. 2026: very hard Korean and English, 5 perfect scorers, under half of last year's. 2026 difficulty raised from 4 to 5.
- Rewrote the bottom note to explain what the sources mean: years with a source were checked against news reports of the KICE scoring results, years without one have no official count or no reliable report, and 2008 has no number because only grades were given.
- Added a 'Team' section at the end of the page: five cards, BLACK (author), RED (objections), BLUE (seeing what works), YELLOW (ideas), PURPLE (unusual ideas), each with its colour chip and a one-line role description in plain polite Korean.
- Added :root tokens for the chip colours (--black, --red, --blue, --yellow, --purple, --chip-ink, --chip-ink-dark). The five colours are used only for the team chips; the YELLOW chip uses black text so it stays readable. The body text, black-pen line-art animation, reduced-motion handling and left and right margins are unchanged, and the team grid (minmax 170px) has no horizontal scroll at phone width.

받아들이지 않은 의견:

- Did not fill in numbers for 2006, 2007, 2009 or 2010. The search results mix 'all-subject' counts with 'language, math and foreign language only' counts, and some articles don't make clear which school year they mean, so a number I wrote in could be wrong.
- Did not mark 2020 (15) as confirmed. The search didn't find a report that confirms it.
- Did not cite the outlet behind sidae.com for 2015. I couldn't be sure of its exact name, so I cited only News1, which is confirmed. For 2024 the search result was a Daum News page, which isn't a news outlet, so I cited the KICE announcement instead.

### 🔴 RED — 7.3점

출처를 붙인 건 최소한의 숙제를 한 거지, 백과가 완성됐다는 뜻은 아니야. '만점자'의 정의가 카드마다 다르게 쓰이는데, 본문은 이걸 고1이 비교해도 되는 하나의 숫자처럼 보여 주고 있어. 그래프와 일부 서술에는 아직 오해를 부르는 부분이 남아 있어서 9점대는 멀었어.

- 정의가 서로 안 맞아. 낱말 상자는 만점자를 '전 과목에서 하나도 안 틀린 학생'이라고 정의했어. 그런데 2005학년도 카드는 '표준점수제라 원점수 만점 개념 약함'이라며 숫자를 빼 놓고, 같은 표준점수 시대인 2011~2016학년도에는 숫자를 넣었어. 게다가 2014학년도는 '원점수 기준', 2015학년도는 '교육청 집계', 2012학년도는 30명(전 영역)과 171명(언수외)이 섞여 있어. 탐구 선택과목이 있는데 무엇이 '전 과목'인지도 설명하지 않았어. 고1은 30명과 3명을 그대로 비교하게 돼.
- 그래프가 오해를 불러. 2002·2011학년도의 '0명'과 1994~2000학년도의 '알려진 만점자 없음', 2005~2010학년도의 '집계 없음'이 모두 반지름 3짜리 같은 점으로 그려져. '없음'과 '모름'이 시각적으로 똑같아. 점 크기 범례(몇 명이 얼마만 한 점인지)도 없고, x축의 '94'는 1차인지 2차인지 구분되지 않아.
- 사실과 표현이 흔들리는 곳이 있어. 2015학년도의 '만점을 받아도 1등급이 겨우 되는 수준'은 틀린 표현이야. 실제 쟁점은 수학 B형 만점자 비율이 4%를 넘어 '한 문제만 틀려도 2등급'이었다는 거야. 1999학년도의 '수리에서 선택과목이 생기는 등'은 근거가 불분명하고, 그해의 진짜 변화(변환표준점수 도입 등)는 빠졌어. 2008학년도의 '만점자 수가 없어요'도 부정확해. 만점자가 없었던 게 아니라 원점수를 공개하지 않았던 거야.
- 출처 표기가 반쪽이야. '경향신문 보도'에는 날짜도 기사 제목도 없어서 고1이 찾아 확인할 방법이 없어. 2020학년도(15명)는 출처 없이 2018학년도와 똑같은 모양으로 확정값처럼 나와. 2024학년도만 '평가원 발표'를 인용해서 출처의 격이 섞여 있어. '눈대중 점수'라고 인정한 난이도 1~5가 그래프의 주축인 것도 백과로서 약해.
- 2026학년도 카드는 정작 핵심이 빠졌어. 영어 절대평가 1등급 비율이 역대 최저 수준이었고, 그 여파로 평가원장이 물러났다는 맥락이 없어. '사탐런'이라는 용어도 설명 없이 키워드로만 던져 놨어. 'N수생', '교차지원', '킬러문항' 같은 말도 낱말 상자에 없어.
- '만든 팀' 섹션은 고1 독자에게 아무 정보도 주지 않는 제작 메타데이터야. 백과의 신뢰도를 높이지도 못하면서 결론부의 주의 문구(note) 뒤를 차지하고 있어. 차라리 '숫자 읽는 법' 상자로 바꾸는 게 나아.

### 🔵 BLUE — 8.6점

BLUE가 보기에 이번 수정에서 가장 잘한 점은 확인하지 못한 숫자를 지어내지 않고 '공식 집계 없음'으로 남겨 둔 거예요. 백과사전이 믿을 만해진 결정적인 변화라서 다음 라운드에서도 꼭 지켜야 해요. 다만 아직 출처가 비어 있는 해가 있고, '만점자'의 정의가 시대마다 다른데 설명이 짧아서 9.5점까지는 조금 남았어요.

- 꼭 지켜야 할 강점 1. 확인되지 않은 2006·2007·2009·2010은 숫자를 비워 두고 '전 영역 만점자 공식 집계 없음'으로 적었어요. 2008은 등급제라 '해당 없음'으로 구분했고요. 숫자를 그럴듯하게 채우는 쪽으로 되돌리면 안 돼요.
- 꼭 지켜야 할 강점 2. 2017년 이후 카드가 '3명(재학생 2, 졸업생 1)', '11명(재학생 4, 졸업생 7)'처럼 재학생과 졸업생을 나눠 보여 줘요. 그래서 2025 카드의 'N수생 증가'가 숫자로 바로 이해돼요. 이야기와 숫자가 서로 받쳐 주는 구조라 고1이 읽기에 아주 좋아요.
- 꼭 지켜야 할 강점 3. 흐린 회색의 작은 출처 줄, 모든 문장의 '~해요' 말투, 검은 펜 라인아트 그림과 그려지는 애니메이션, reduced-motion 처리, 필터의 aria-pressed가 모두 그대로 살아 있어요. 다섯 색은 팀 칩에만 쓰여서 흑백 펜 느낌을 해치지 않아요. 이 절제는 깨지면 안 돼요.
- 아쉬운 점 1. 2017 카드는 '3명(재학생 2, 졸업생 1, 원점수 기준)'처럼 아주 자세한데 출처가 없어요. 2020(15명)도 출처가 없어요. 자세한 숫자에 출처가 없으면 오히려 의심을 사요. 출처를 찾거나, 못 찾으면 '보도 확인 중'처럼 낮춰 표시하는 게 일관돼요.
- 아쉬운 점 2. 낱말 상자의 '만점자: 전 과목에서 하나도 안 틀린 학생'이라는 정의는 2014('원점수 기준'), 2015('교육청 집계'), 2018 이후(영어·한국사 절대평가)와 기준이 달라요. 아래 주의 문구에만 기대지 말고 낱말 상자에 '시대마다 기준이 달라요'를 한 줄 넣으면 고1이 덜 헷갈려요.
- 작은 확인 사항. 그래프 점 크기는 '29명(인문 8, 자연 21…)', '공식 집계 없음' 같은 문자열에서 숫자를 뽑아 정해요. 이 방식이 '집계 없음'인 해를 0명과 똑같이 그리지는 않는지 살펴봐 주세요. 빈 점이나 다른 모양으로 구분하면 '0명'과 '모름'의 차이가 그래프에서도 보여요.

### 🟡 YELLOW — 8.3점

출처를 달고 추정치를 걷어낸 덕분에 이제 믿고 볼 수 있는 백과가 됐어요. 그런데 그래프와 카드가 따로 놀고, 고1이 그래프를 보고 무엇을 알아내야 하는지 짚어 주는 장치가 아직 없어요. 아래 아이디어는 모두 지금 있는 drawChart와 drawCards 코드에 몇십 줄만 더하면 되는 것들이에요.

- 그래프와 카드 연결: drawChart의 각 circle을 <a href="#y-2019">로 감싸거나 click 리스너를 달고, drawCards에서 카드에 id="y-"+yNum(r.year)를 붙이세요. 점을 누르면 scrollIntoView({behavior:'smooth'})로 그 카드로 가고, 카드에 잠깐 점선 테두리가 생기게 합니다. 그래프가 그냥 보는 그림이 아니라 목차처럼 쓰이게 돼요.
- '0명'과 '집계 없음'을 다르게 그리기: 지금은 perfNum이 0이어도 null이어도 반지름이 3이라 2002·2011(0명)과 2006·2007(집계 없음)이 똑같이 보여요. 0명은 작은 X 표시로, 집계 없음은 stroke-dasharray를 준 점선 원으로, 2008 등급제는 빈 네모로 그리고, 범례 한 줄('X = 만점자 0명, 점선 = 기록 없음')을 덧붙이세요.
- 물불 반동 손글씨 메모: 2001→2002, 2011→2012, 2015→2016, 2024→2025→2026처럼 크게 바뀐 구간에 펜 글씨(.lbl)로 짧은 곡선 화살표와 '반동!'을 그려 넣으세요. 고1이 '쉽게 나오면 다음 해에 어렵게 나온다'는 흐름을 한눈에 볼 수 있어요. 좌표는 x(i), y(d)를 그대로 쓰면 됩니다.
- 시대 구분선과 필터 맞추기: 그래프의 2004/2005와 2016/2017 사이에 점선 세로선을 긋고 위쪽에 '400점 · 표준점수 · 절대평가·통합'을 펜 글씨로 적으세요. 필터 버튼을 누르면 고른 시대 밖은 opacity .25로 흐리게 해서 필터와 그래프가 같은 말을 하게 합니다.
- 지금 시점 카드 하나 더: 오늘이 2026년 11월이라 2027학년도 수능은 이미 치렀고 채점 결과는 12월에 나와요. 맨 끝에 '2027학년도 · 채점 결과 12월 발표 예정' 카드를 점선 테두리로 넣으면 백과가 살아 있다는 느낌이 나요. 숫자는 비워 두고 '확인되면 채울게요'라고 적어 두세요.
- 작은 표기 정리: '1994(1차)학년도'는 '1994학년도 1차'로 고치세요(year는 그대로 두고 표시만 바꾸면 됨). 그래프 x축에서 홀수 번째 라벨이 빠져 1차와 2차가 둘 다 '94'처럼 보이니 1차는 '94①', 2차는 '94②'로 구분하세요. 2017(3명)에도 출처를 달면 2011년 이후 카드에 출처가 빠짐없이 붙어요(2020은 지금처럼 두기).

### 🟣 PURPLE — 8.3점

이번 라운드에서 숫자는 출처가 붙어 단단해졌어요. 그런데 정작 고1 독자에게는 이 백과가 아직 '남의 역사'로 남아 있어요. 그래프가 '물불 반동'이라는 수능의 가장 재미있는 법칙을 보여 주지 못하고, 독자 자신의 수능 자리가 페이지에 없다는 점이 9.5를 막고 있어요.

- [아이디어1: 너의 차례 카드] 오늘(2026-11-19) 기준 고1은 2028년 11월에 2029학년도 수능을 봐요. DATA 끝에 {year:'2027', perfect:'채점 결과 발표 전', difficulty:null, keyword:'방금 끝난 수능', story:'2026년 11월에 치러졌고 채점 결과는 12월에 나와요.'}와 {year:'2029', perfect:'?', difficulty:null, keyword:'너의 수능', story:'지금 고1이 보는 시험이에요. 이 칸은 네가 채워요.', future:true}를 넣어 주세요. drawCards에서 difficulty가 null이면 meter 대신 '아직 몰라요'를 쓰고, future 카드는 .box에 border-style:dashed를 줘서 빈 공책 칸처럼 그려요. drawChart는 difficulty가 null인 행을 꺾은선 path와 circle에서 건너뛰고(filter 후 index 매핑), x축 끝에 점선 원 하나와 '너?' 라벨만 남기면 돼요.
- [아이디어2: 반동 화살표] 불수능 다음 해 물수능처럼 진자가 튀는 패턴을 그래프 위에 그려요. drawChart 안의 DATA.forEach 뒤에 for(i=1;i<n;i++){const a=DATA[i-1].difficulty,b=DATA[i].difficulty; if(a&&b&&Math.abs(a-b)>=3){ const mx=(x(i-1)+x(i))/2, my=Math.min(y(a),y(b))-28; el('path',{d:`M${x(i-1)} ${y(a)-8} Q${mx} ${my} ${x(i)} ${y(b)-8} M${x(i)-6} ${y(b)-14} L${x(i)} ${y(b)-8} L${x(i)+2} ${y(b)-16}`},svg); const t=el('text',{x:mx,y:my-4,'text-anchor':'middle',class:'lbl'},svg); t.textContent='반동!'; }}를 넣어 주세요. 그러면 2001→2002, 2011→2012, 2024→2025, 2025→2026 네 곳이 펜 화살표로 이어져요. legend에도 '화살표는 난이도가 3칸 이상 뒤집힌 해'라는 한 줄을 붙여 주세요.
- [아이디어3: 정직한 점] 출처가 있는 해는 점을 꽉 채우고(style fill:var(--ink)), 숫자는 있는데 출처가 없는 해(2001, 2002, 2017, 2020)는 속이 빈 원으로, 집계가 없는 해는 작은 x자로 그려요. circle을 만들 때 r.src?'fill:var(--ink)':''로 나누고 perfNum이 null이면 circle 대신 두 줄짜리 path를 쓰면 돼요. 고1이 '확인된 숫자'와 '전해지는 숫자'를 구별하는 법을 그래프 하나로 배워요.
- [아이디어4: 점 누르면 카드로] 각 카드에 id=`y-${r.year}`를 주고, 그래프 점마다 투명한 <a href='#y-...'>로 감싼 큰 hit circle(r=12, fill:transparent, pointer-events:all)을 둬요. 필터가 다른 시기로 걸려 있으면 '전체'로 바꾼 다음 scrollIntoView({behavior: reduced-motion이면 'auto', 아니면 'smooth'})로 이동해요. 그래프와 카드가 따로 놀지 않게 돼요.
- [지적] '0명'과 '알려진 만점자 없음'(1994–2000)이 그래프에서 둘 다 반지름 3짜리 점이라 구별이 안 돼요. 또 2017(3명)에는 출처가 없는데, 하단 노트에서는 출처 없는 해를 '공식 집계가 없거나 보도를 못 찾은 해'로 묶어 설명하고 있어요. 2017도 출처를 찾아 붙이거나, 노트 설명을 고쳐야 해요.
- [지적] 1994(1차)와 1994(2차)가 x축에서 둘 다 '94'로 찍혀요. 라벨을 '94-1'과 '94-2'로 바꿔 주세요.

## 라운드 2

### ⚫ BLACK (저자) 바꾼 것

- Edited /tmp/claude-0/-home-user/15874408-5af3-5bb7-95f2-a9c4f9309bb6/scratchpad/suneung.html directly and saved the previous version to suneung.r1.bak. The script passes node --check. The page still starts with <title>, has no doctype, html, head or body tags, and has no alert, confirm or print. Chrome headless renders it, and at the narrowest window it could open (500px) scrollWidth stayed under the window width, with only the chart's own box scrolling sideways.
- (RED, definitions) Rewrote the 'perfect scorer' box to say the standard changes by era: 400 points in the 400-point era, and from 2018 Korean, math and inquiry at full marks with English and Korean history at grade 1. Changed 2005 to 'no official count of all-subject perfect scorers' to match 2006-2010 and wrote the reason into its story. Wrote 2012 as '30 (all subjects)' and said the 171 counts only language, math and foreign language without inquiry.
- (RED, glossary) Added five terms to the glossary box: absolute grading, N-su-saeng (students retaking after graduating), killer questions, cross-applying, and satam-run (science students moving to social studies). Revised the standard-score term: first used for elective subjects in 1999, on every subject from 2005.
- (RED, facts) 2015: replaced 'barely grade 1 even with a perfect score' with the actual issue, which was over 4% perfect scores in math B, so one wrong answer dropped a student to grade 2. 1999: checked by web search and changed the story to 'electives first appeared in math and inquiry II (social and science inquiry), and standard scores were first used to even out difficulty'. 2008: 'there are no perfect-scorer counts' became 'only grades were released, so perfect scorers can't be counted' (card, note and legend).
- (RED, 2026) After a web search, added that English grade 1 was 3.11%, the lowest since English became absolutely graded (Newsis, December 2025), and that the KICE president stepped down taking responsibility for the failed difficulty balance. Changed the keyword to 'English 3.11% shock'. 2024: added English grade 1 at 4.71%.
- (RED and BLUE, sources) Every source line now has a date, such as 'Kyunghyang Shinmun, December 2010 scoring-results report'. 2020: confirmed by search as 15 (13 current students, 2 graduates, Newsis, Dec 3 2019) and added the source. 2017: removed the unconfirmed 'current 2, graduate 1' split, kept only '3', and cited the Newsis December 2022 article that lists 2017 as having 3.
- (RED, BLUE, YELLOW, PURPLE: honest points) The chart now draws each mark type differently: filled circle = number with a confirmed source, hollow circle = number with no source (2001), X = genuinely 0 (2002, 2011), dashed circle = no count or no known record, empty square = 2008 grade system, larger dashed circle = not yet known. Added a legend with drawn samples and a dot-size key (1, 15 and 66).
- (YELLOW and PURPLE, x-axis) Every year now has an x-axis label, with 1994's two exams shown as '94①' and '94②'. Cards now read '1994학년도 1차' ('1994 school year, 1st exam').
- (PURPLE idea applied 1: rebound arrows) Spans where difficulty flipped by 3 or more steps in one year get a curved pen arrow with the label '반동!' (rebound) above them: 2001→02, 2011→12, and 2024→25→26 grouped as one ('반동! 또 반동!', rebound and rebound again). Arrows next to each other are grouped so their labels don't overlap.
- (PURPLE idea applied 2: 'your turn' cards) Added cards for 2027 ('scoring results not out yet, will fill in once confirmed'), 2028 (first year of the new integrated exam) and 2029 ('your exam: you fill in this space'), with dashed borders. Where difficulty is null they show 'don't know yet' instead of the difficulty meter. In the chart the line does not connect to these years, and 2029 has a '너?' ('you?') label.
- (YELLOW and PURPLE: click a point to go to its card) Each point in the chart is a link (a hit circle with r=12) to its card's id (y-2019 and so on). If a filter is hiding that card, the filter resets to 'all'. The page then scrolls to the card (no smooth scrolling under reduced-motion), gives it a dashed outline for 1.8 seconds, and moves focus to it.
- (YELLOW: eras and filter) Drew dashed vertical lines between eras and pen-script labels for the three eras. Choosing a filter dims chart points outside that era to opacity .25, so the filter and the chart agree. On narrow screens a hint asks readers to swipe the chart sideways.
- (RED: number-reading box) Added a 'how to read the numbers' box under the chart with four lines: what filled and hollow points mean, that 0 is not the same as unknown, not comparing across eras, and that difficulty is an eyeball estimate. The chart caption also says the 1-5 difficulty is an eyeball estimate.
- (BLUE strengths kept) Unknown years were not filled in with numbers. The current-student and graduate splits, the small grey source line, the polite '-요' tone, the black-pen line-art drawing animation, prefers-reduced-motion (now also covering transitions), aria-pressed and the team-only use of the five colours are all unchanged. Every colour comes from a :root token, the side padding is still max(16px, env(safe-area-inset-*)), and nothing waits hidden at opacity:0.

받아들이지 않은 의견:

- (RED) Did not delete the team section. The user asked for this exact five-role structure, so showing it on the page is the project's own way of showing how it was made. Instead, I retitled it 'How this encyclopedia was made', added one line inviting readers who find a mistake to question it the way RED does, and put the 'how to read the numbers' box RED asked for under the chart.
- (RED) Did not remove the 1-5 difficulty from the chart's main axis. There is no official difficulty index that runs through every year, so I said in both the chart caption and the number-reading box that it is an eyeball estimate. Using a different measure, such as the top standard score, would not work because the score systems differ by era.
- (RED) Did not change the 2014 'raw score basis' or 2015 'education office count' labels to a single standard. Those are the bases the sources used, so I left them visible and explained in the glossary and the number-reading box that the standard differs by era.
- (RED) Did not add article titles to the sources. I could not confirm the exact title of each article, so I listed the outlet and the date of the scoring-results report instead.
- (YELLOW and PURPLE) Did not write in the 2027 perfect-scorer count or difficulty. Scoring results come out in December, so the card says 'before the scoring results are released'.
- (PURPLE) Used my own simpler code for the rebound arrows, because the suggested code drew near-vertical arrows between points only 25px apart, which crowded each other and the line in the screenshot. They are now grouped curves above the top of the chart.
- (PURPLE) The 2001 hollow point (66 scorers, no source) stays a guess: I did not search for its source in this round, so it stays an 'unsourced' point.

### 🔴 RED — 7.9점

지난번 지적을 상당 부분 고친 건 인정해. 그런데 이번에 새로 내세운 '정직한 점'과 '시대 구분'에서 스스로 정한 규칙을 어기고 있어. 백과가 '정직하다'고 말해 놓고 그 규칙에 구멍이 있으면, 처음부터 그렇게 주장하지 않은 것보다 신뢰를 더 잃어. 사실이 틀린 곳도 아직 남아 있어서 9점대는 아직이야.

> BLUE가 '모르는 해를 숫자로 채우지 않은 점'을 칭찬한 건 맞아. 그런데 저자는 그 원칙을 그래프 기호로 옮기면서 2002학년도(출처 없는 0명)에는 지키지 않았어. YELLOW와 PURPLE이 낸 시대 구분선 아이디어는 '400점 시대'라는 틀린 이름을 그래프에까지 퍼뜨렸어.

- 규칙이 서로 맞지 않아. kindOf()는 0명인지 먼저 보고 나서야 출처를 확인해. 그래서 출처가 없는 2002학년도 '0명'이 '숫자 읽는 법' 기준으로는 '만점자가 정말 0명이었던 해'를 뜻하는 ×로 그려져. 똑같이 출처가 없는 2001학년도 66명은 속이 빈 점으로 낮춰 놓았는데, 2002학년도만 확정 기호를 받은 거야. 2002학년도도 출처를 찾아 붙이거나, 출처 없는 0명을 나타낼 기호를 따로 만들어야 해.
- 시대 이름이 사실과 달라. 필터 버튼은 '1994–2004 · 400점 시대'라고 되어 있고, 낱말 상자도 '400점 시대에는 원점수 400점'이라고 해. 그런데 1994~1996학년도 수능은 200점 만점이었어. 1996학년도 카드에도 '마지막 200점'이라고 직접 써 놓고 바로 위의 시대 구분과 어긋나 있어. 또 영어 절대평가는 2018학년도에 시작했는데 '절대평가·통합 시대'는 2017학년도부터로 잡혀 있어. 그래서 2017학년도 3명이 어떤 기준으로 센 만점자인지 설명이 없어.
- 출처의 급이 섞여 있어. '숫자 읽는 법'에서는 꽉 찬 점을 '평가원 채점 결과를 전한 신문 기사로 다시 확인한 숫자'라고 했어. 그런데 2017학년도의 출처는 5년 뒤인 2022년에 나온 '역대 만점자 정리' 기사야. 채점 결과 보도가 아니니 이 정의대로라면 꽉 찬 점이 될 수 없어. 2024학년도만 '평가원 발표'라고 적은 것도 그대로야.
- 2010학년도 카드의 '이 무렵부터 EBS 교재와 수능을 연결하겠다는 정책이 나왔어요'는 틀렸어. EBS 연계는 2004년 사교육비 대책으로 2005학년도 수능부터 시작됐어. 2010년에 나온 건 '70% 연계' 발표야. 같은 이유로 2011학년도 카드의 'EBS 70% 연계'가 처음 나온 정책처럼 읽히는 흐름도 고쳐야 해.
- 용어가 오락가락해. 2023학년도는 '재학생 2, 재수생 1', 2026학년도는 '졸업생 등 1', 나머지 해는 '졸업생'이라고 썼어. 바로 위 낱말 상자에서 N수생을 정의해 놓고 같은 대상을 세 가지 이름으로 부르는 거야. '킬러문항'의 '사실상 몇 명만 맞히라고 낸 문제'라는 설명도 문제야. 공식 정의(공교육 과정을 벗어난 고난도 문항)가 아니라 비꼬는 해석이라 백과의 말투로 맞지 않아. 낱말 상자의 절대평가 설명에는 만점자 기준에 나오는 한국사 등급 기준이 빠져 있어.
- 난이도 축은 순환 논리야. '숫자 읽는 법'에서 난이도는 '만점자 수와 신문 반응을 바탕으로 매긴' 점수라고 했어. 그런데 그래프는 그 난이도를 만점자 수(점 크기)와 같이 그려서, 마치 두 값이 서로를 확인해 주는 것처럼 보여. 만점자 기록이 없는 1994~2010학년도는 근거가 '신문 반응' 하나뿐이야. 그런데도 1995학년도 3, 1996학년도 4, 2006~2007학년도 3 같은 값에는 카드마다 근거 한 줄이 없어. 반동 화살표 역시 이 눈대중 숫자의 차이가 3 이상인지를 기준으로 그린 거라, '법칙'처럼 보여 주기에는 근거가 약해.

### 🔵 BLUE — 9.1점

BLUE가 보기에 이번 라운드는 '정직하게 보여 주기'가 글에서 그래프까지 이어진 라운드예요. 꽉 찬 점, 빈 점, ×, 점선 원으로 '확인된 숫자', '전해지는 숫자', '0명', '모름'을 그림만 보고도 가를 수 있게 됐어요. 2029 '너?' 칸은 남의 역사를 내 이야기로 바꿔 줘요. 다만 그래프 점에 단 링크가 화면 낭독기에서는 사라질 수 있고, 출처의 격을 가르는 기준이 조금 흔들려서 9.5에는 아직 조금 못 미쳐요.

> RED에게: 팀 섹션을 지우지 않은 저자의 결정에 동의해요. '이 백과를 만든 방법'으로 이름을 바꾸고 'RED처럼 따져 물어 주세요'를 붙이니, 고1에게 자료를 의심하며 읽는 법을 알려 주는 장치가 됐어요. RED가 원한 '숫자 읽는 법' 상자도 그래프 바로 아래 생겼으니, 두 요구가 다 채워졌다고 봐요.

- 꼭 지켜야 할 강점 1, 정직한 점: kindOf와 mark가 confirmed, reported, zero, unknown, grade, future 여섯 모양을 따로 그려요. drawKeys 범례는 실제 mark() 함수로 견본을 그려서 범례와 그래프가 어긋날 수가 없어요. 2001(66명)을 출처가 없다는 이유로 빈 점으로 남긴 것도 옳아요. 다음 라운드에 '보기 좋게' 꽉 찬 점으로 바꾸면 안 돼요. 출처를 찾았을 때만 src를 붙여서 바꿔 주세요.
- 꼭 지켜야 할 강점 2, 연결된 이야기: 서문의 '맨 끝에는 여러분이 볼 수능 칸도 비워 두었어요'가 2029 카드와 그래프의 '너?'로 이어져요. 2025 카드의 'N수생'은 낱말 상자, 재학생·졸업생 구분과 맞물리고, 2023 카드의 '교차지원'과 2026 카드의 '사탐런'도 낱말 상자에 풀이가 생겼어요. 2028 카드의 '통합사회·통합과학 새 수능'과 2029 카드의 '2028년 11월에 봐요'는 오늘(2026-11-19) 고1 기준으로도 맞는 날짜예요. 줄글, 낱말, 카드, 그래프가 서로 받쳐 주는 이 구조는 깨지면 안 돼요.
- 꼭 지켜야 할 강점 3, 절제: 반동 화살표를 그래프 위쪽에 묶어 둬서 꺾은선과 점을 가리지 않아요. 시대 구분선은 dash 클래스라 그리기 애니메이션에서 빠지고, hit 원도 inkify에서 빠져요. 필터와 그래프 흐림(dim)이 같은 말을 하고, goCard는 줄인 움직임 설정을 따르면서 초점까지 옮겨 줘요. 다섯 색은 여전히 팀 칩에만 쓰였어요. 기능을 많이 늘렸는데도 흑백 펜 공책 느낌이 그대로라서 이번 라운드에서 가장 칭찬하고 싶은 점이에요.
- 고칠 점 1, 접근성 버그: #chart가 role="img"인데 그 안에 <a> 링크 37개가 들어 있어요. role=img의 자식은 '꾸밈'으로 취급되기 때문에, 화면 낭독기에서는 '카드로 가기' 링크와 aria-label이 사라질 수 있어요. 키보드 초점은 가는데 무엇인지 읽어 주지 않는 상태예요. svg의 role을 "group"으로 바꾸고 aria-label은 그대로 두는 한 줄 수정이면 돼요.
- 고칠 점 2, 출처 기준의 일관성: '숫자 읽는 법'에는 꽉 찬 점이 '신문 기사로 다시 확인한 숫자'라고 적혀 있어요. 그런데 2024는 '평가원 채점 결과 발표'로 1차 자료예요. 2017은 '뉴시스 2022년 12월 역대 정리 기사'로, 5년 뒤에 나온 2차 정리라서 그해 채점 결과 보도와 격이 달라요. 문구를 '평가원 발표나 그것을 전한 기사'로 넓히고, 2017은 '2022년 기사의 역대 정리 기준'이라고 이미 출처 줄에 쓴 것처럼 그대로 두면 일관돼요. 점 모양은 바꾸지 않아도 돼요.
- 작은 확인 사항: 첫째, perfNum이 perfect 문자열의 첫 숫자로 점 크기와 모양을 정해요. 그래서 나중에 '공식 집계 없음(2005 기준)'처럼 숫자가 든 문구를 쓰면 바로 '출처 없는 숫자' 점으로 바뀌어요. 2008은 연도를 코드에 박아 두었고요. 데이터에 n:0이나 n:null 같은 숫자 칸을 따로 두면 안전해요. 둘째, color-scheme:light만 있고 어두운 모드 토큰은 없어요. 공책 디자인이라 일부러 그런 것이면 괜찮지만, 이유를 주석으로 남겨 두세요.

### 🟡 YELLOW — 8.8점

지난 라운드 아이디어가 거의 다 들어가서, 이제 그래프와 카드가 서로 이어지고 점 모양만 봐도 숫자를 얼마나 믿을 수 있는지 알 수 있어요. 아직 아쉬운 점은 고1이 이 그래프에서 무엇을 배워야 하는지 정리해 주는 마무리가 없다는 거예요. 그리고 미래 칸(27·28·29)이 난이도 3 높이에 찍혀 있어서 '보통 난이도'로 잘못 읽힐 수 있어요. 아래 아이디어는 모두 지금 코드에 있는 mark(), idOf(), drawCards()를 그대로 다시 써서 구현할 수 있어요.

> BLACK이 '만든 팀' 섹션을 지우지 않고 '이 백과를 만든 방법'으로 바꾼 건 RED의 걱정과 사용자가 요청한 구조를 둘 다 살린 좋은 절충이라 동의해요. 다만 RED 말대로 고1이 결론에서 얻어 갈 정보가 아직 부족하니, 그 앞에 '그래프가 알려 주는 것' 상자와 확인 문제를 넣으면 메타 섹션이 끝맺음을 차지한다는 문제도 같이 풀려요.

- [지적+아이디어] 미래 점이 난이도 3에 찍혀요. 스크린샷을 보면 2027·2028·2029 점선 원이 y(3) 줄에 놓여서 '보통 난이도'처럼 보여요. drawChart에서 future 행의 cy를 y(3) 대신 축 위 띠(T-30 정도, '?' 줄)로 옮기세요. 그리고 2027 앞에 x(i)-12부터 오른쪽 끝까지 점선 rect(class:'dash')로 '아직 모르는 구간'을 감싸고, 그 위에 펜 글씨(.lbl)로 '아직 몰라요'를 적으면 됩니다. 숫자 읽는 법 상자의 4번에도 '27~29의 높이는 의미가 없어요'를 한 줄 덧붙여 주세요.
- [아이디어: 그래프에서 찾은 3가지 법칙] 숫자 읽는 법 상자 바로 아래에 같은 .box 형식으로 '그래프가 알려 주는 것' 3줄을 넣어요. ① 반동: 아주 쉬운 해 다음에는 아주 어려운 해가 왔어요(2001→02, 2011→12, 2024→25→26). ② 만점자 수와 난이도는 거꾸로 움직여요(66명·30명·29명인 해는 모두 난이도 1). ③ 제도가 바뀐 첫해는 시끄러웠어요(2008 등급제, 2022 통합수능). 이렇게 하면 백과가 사실 나열에서 '읽는 법'까지 가르쳐 줘요. 각 줄의 연도에는 <a href='#y-2002'>를 걸고 goCard()를 재사용하면 클릭 이동도 그대로 됩니다.
- [아이디어: 카드에도 같은 점 모양] 카드의 '만점자' 줄 앞에 그래프와 같은 기호를 22px짜리 작은 svg로 넣으세요. drawKeys에서 쓰는 mark(s,kindOf(r),11,11,4) 한 줄이면 돼요. 그러면 2001 카드에는 빈 원, 2011 카드에는 ×, 2008 카드에는 네모가 붙어서, 카드만 보고도 '출처 없음'과 '0명'을 구별할 수 있어요. 2001 카드에는 src 대신 '출처를 찾는 중이에요' 회색 줄도 하나 넣어 두면 정직함이 일관돼요.
- [아이디어: 제도 변화 표시] 1994·1997(400점)·2005(선택형)·2008(등급제)·2014(A/B형)·2017(한국사 필수)·2018(영어 절대평가)·2022(통합)·2028(새 수능)에 DATA 필드 change:true를 주세요. 그래프 x축 라벨 바로 위에는 작은 펜 세모(path 3점)를 그리고, 카드 .top 옆에는 '제도 바뀐 해' 펜 글씨 꼬리표를 붙여요. 범례에 한 줄을 더하면, 고1이 '불수능은 제도가 바뀐 해에 자주 왔다'는 것을 스스로 찾아낼 수 있어요.
- [아이디어: 돌아가기 링크] 점을 눌러 카드로 내려간 뒤에는 그래프로 돌아올 길이 없어요. goCard()에서 flash를 줄 때 카드 안에 <a href='#chart' class='hand'>↑ 그래프로</a>를 잠깐 붙였다가 setTimeout에서 같이 지우세요. 아니면 모든 카드의 .src 줄 오른쪽에 항상 작게 두어도 돼요. 휴대폰에서 특히 편해져요.
- [아이디어: 확인 문제 3개] 맨 끝 '이 백과를 만든 방법' 앞에 <details> 3개로 스스로 풀어 보는 퀴즈를 넣으세요. 예: 'Q. 2026학년도 수능은 몇 년 몇 월에 봤을까요?'(답: 2025년 11월, 학년도 낱말과 연결), 'Q. 만점자 0명과 집계 없음은 어떻게 다를까요?', 'Q. 반동 화살표가 가장 많은 시대는?'. JS가 필요 없고, 낱말 상자와 숫자 읽는 법을 다시 떠올리게 해 줘서 고1용 백과로서 완성도가 올라가요.

### 🟣 PURPLE — 8.8점

PURPLE가 보기에 이번 라운드에서 백과가 '그림'에서 '지도'로 바뀌었어요. 반동 화살표, 정직한 점 모양, 점을 누르면 카드로 가는 기능, 그리고 '너?' 칸까지 들어왔으니까요. 그런데 고1이 페이지에서 직접 해 볼 수 있는 건 아직 '누르기'뿐이고, 숫자는 여전히 추상적인 글자로만 남아 있어요. 마지막 한 걸음은 독자가 직접 손을 대 보게 만드는 거예요.

> RED가 지적한 정의 불일치는 낱말 상자와 '숫자 읽는 법'으로 대부분 풀렸다고 봐요. 다만 '만든 팀' 섹션은 지우지 말고, BLACK이 한 것처럼 독자에게 'RED처럼 따져 물어 주세요'라고 권하는 장치로 쓰는 게 이 백과만의 색다른 점이라 동의해요.

- [아이디어1: 만점자 마킹 칸] 첫 화면의 OMR 마킹 칸 모티프를 카드 안으로 가져와요. drawCards에서 kindOf(r)가 confirmed나 reported이고 perfNum>0이면 '만점자' 줄 아래에 <svg class="draw omrrow" viewBox="0 0 ${cols*9} ${rows*11}">를 하나 만들어요. 그 안에 만점자 한 명마다 작은 ellipse(rx 3, ry 4)를 cols=22씩 줄을 바꿔 가며 그려요. confirmed는 class 'solid', reported(2001)는 속을 비워요. 그러면 2001의 66칸과 2022의 1칸이 같은 단위로 보여서 '66명 대 1명'이 글자가 아니라 크기로 느껴져요. 0명인 해는 빈 칸 하나에 ×를, 집계가 없는 해는 dash 칸 하나를 그리면 그래프 범례와 같은 말을 해요. 뒤에 inkify(s, ...)를 그대로 부르면 펜으로 칠해지는 애니메이션도 따라와요. CSS는 .omrrow{width:100%;max-width:220px;height:auto} 한 줄이면 돼요.
- [아이디어2: 2029 난이도 찍어 보기] '너?' 카드를 실제로 채울 수 있게 만들어요. you 카드에서는 meter 자리에 flame 버튼 다섯 개를 <button type="button" aria-pressed>로 넣고, 누르면 guess=k를 try{localStorage.setItem('suneung-guess',k)}catch(e){}로 저장해요. drawChart는 시작할 때 try/catch로 이 값을 읽고, guess가 있으면 2026 점에서 2029 점까지 class 'dash'인 점선 path를 이어요. 2029 점은 y(guess)로 옮기고 라벨을 '너의 예상'으로 바꿔요. 저장이 안 되는 환경에서는 그냥 지금 모습으로 남으니 깨질 일이 없어요. 브라우저 저장소는 내 브라우저에만 남는 편의 기능이라 규칙에도 맞아요.
- [아이디어3: 반동 법칙 퀴즈 한 줄] 2026(불수능, 5) 다음에 오는 2027 카드에 '반동 법칙대로라면 올해는 쉬웠을까요? 12월 채점 결과로 확인해 봐요'라는 질문 한 줄을 넣어요. 예측을 사실처럼 쓰지 않으면서도, 그래프에서 배운 패턴을 독자가 바로 써 보게 하는 장치예요. DATA 2027의 story 끝에 문장을 하나 덧붙이기만 하면 돼요.
- [지적] 2002학년도 '0명'에는 출처가 없는데, kindOf가 p===0을 src보다 먼저 판정해서 확실한 ×로 그려져요. 2001의 '출처 없음'은 속 빈 원으로 정직하게 낮춰 놓고, 2002의 0명은 그대로 확정처럼 보이는 셈이에요. zero이면서 src가 없으면 × 위에 class 'dash'를 주거나 출처를 찾아 붙이세요. 그래야 '숫자 읽는 법' 1번(출처 유무)과 2번(0과 모름)이 서로 어긋나지 않아요.
- [지적] '숫자 읽는 법' 4번은 난이도를 '만점자 수와 신문 반응'으로 매겼다고 해요. 그런데 1994~2000학년도는 만점자 기록이 없어서 근거가 신문 반응 하나뿐이에요. '1994~2000학년도는 당시 평균 점수 변화와 보도만 보고 매겼어요'처럼 반 줄을 덧붙이면 정직함이 끝까지 이어져요.
- [칭찬] 반동 화살표를 grouped curve로 만들어 그래프 위로 올린 BLACK의 판단이 제 원래 코드보다 나아요. '반동! 또 반동!' 라벨 하나로 2024→25→26이 읽혀요. 2027~2029 점선 카드와 끊어진 꺾은선도 '아직 쓰이지 않은 역사'를 잘 보여 줘요.

## 라운드 3

### ⚫ BLACK (저자) 바꾼 것

- /tmp/claude-0/-home-user/15874408-5af3-5bb7-95f2-a9c4f9309bb6/scratchpad/suneung.html 직접 수정, 이전 버전은 suneung.r2.bak 으로 보관. node --check 통과, <title>로 시작·doctype/html/head/body 없음·alert/confirm/print 없음 유지. Chrome headless에서 가장 좁은 창(500px)에서 scrollWidth 485 < 500(그래프 상자만 자체 가로 스크롤), 2029 난이도 찍기 클릭 동작 확인.
- (RED·PURPLE, 기호 규칙) kindOf에 'zeroR'(출처 없는 0명)을 새로 만들어 2002학년도를 점선 ×로 그림. WebSearch로 2002 만점자 0명 출처를 찾았으나 서울신문 2002년 기사는 상위 50% 평균 하락만 다루고 만점자 수는 없어서 출처 미확인 유지. 카드 문구를 '0명으로 전해짐'으로 바꾸고 이야기에 '채점 결과 기사는 아직 찾지 못했어요' 추가. 범례·숫자 읽는 법 2번에 × / 점선 × / 점선 원 구분 명시.
- (RED, 시대 이름) '400점 시대' → '원점수 시대'(필터·그래프 라벨). 낱말 상자 만점자 설명을 '1994~1996 원점수 200점, 1997~2004 원점수 400점, 2017부터 한국사·2018부터 영어 절대평가'로 고침. 시대 경계를 영어 절대평가 시작에 맞춰 2005–2017 표준점수 시대 / 2018– 영어 절대평가·통합 시대로 옮김(구분선·필터·dim이 eraOf 하나로 따라감). 2017 카드에 '국어·수학·영어·탐구 만점 + 한국사 1등급' 기준을 적음.
- (RED·BLUE, 출처의 급) 숫자 읽는 법 1번과 하단 note를 '평가원 발표나 그것을 전한 기사'로 넓히고, 2017학년도만 2022년 역대 정리 기사 기준임을 명시. 2017 출처 줄도 '역대 만점자 정리 기준(그해 채점 보도는 아직 못 찾았어요)'으로 고침. 점 모양은 BLUE 권고대로 유지.
- (RED, EBS 사실 오류) WebSearch로 확인: EBS 연계는 2004년 2·17 사교육비 경감대책으로 2005학년도 수능부터 반영, 70%는 2010년 3월 발표. 2010 카드 키워드 'EBS 70% 예고', 이야기를 이 순서로 다시 씀. 2011 카드는 'EBS 70% 연계가 처음 적용됐는데도'로 고침.
- (RED, 용어 통일) 2023 '재수생 1'·2026 '졸업생 등 1'을 '졸업생 1'로 통일하고, N수생 낱말에 '재학생이 아닌 응시자(검정고시 출신 등 포함)를 모두 졸업생으로 적었어요'를 추가. 킬러문항을 '공교육 과정에서 다루지 않는 내용을 묻는 아주 어려운 문항, 2023년 정부 발표로 널리 쓰인 말'로 중립적으로 고침. 절대평가 낱말에 '한국사 50점 만점에 40점 이상 1등급' 추가.
- (RED·PURPLE, 난이도 순환 논리) 숫자 읽는 법 4번에 '1994~2010은 만점자 기록 없이 평균 점수 변화와 보도만 보고 매김, 점 크기와 높이가 서로를 증명하지 않음'을 적음. 그래프 꺾은선은 양 끝이 모두 출처 있는 구간만 실선, 나머지(2010까지)는 점선. 해당 카드마다 '만점자 기록 없이 보도만 보고 매긴 눈대중이에요' 한 줄. 반동은 '그래프가 알려 주는 것' 상자에서 '법칙은 아니에요'라고 명시.
- (BLUE, 접근성) #chart 의 role="img"를 role="group"으로 바꿔 내부 링크 37개가 화면 낭독기에 읽히게 함(aria-label 유지·보강). 차트 click 리스너를 drawChart 밖으로 옮겨 다시 그려도 중복되지 않게 함.
- (BLUE, 데이터 안전) 만점자 수를 문구에서 정규식으로 뽑던 perfNum을 없애고 각 행의 숫자 칸 n(18개 해)만 읽도록 바꿈. 2008은 연도 하드코딩 대신 grade:true. :root에 '흰 종이·검은 펜 콘셉트라 일부러 밝은 모드만' 주석 추가.
- (YELLOW, 미래 점) 2027~2029를 '아직 몰라요' 펜 글씨가 있는 점선 상자로 감쌌고, 숫자 읽는 법 5번에 '2027~2029 점의 높이는 의미 없음'을 추가.
- (YELLOW, 결론 상자) 숫자 읽는 법 아래에 '그래프가 알려 주는 것' 3줄(반동이 자주 보임 / 제도가 바뀐 첫해의 논란 / 그래도 법칙은 아님)을 넣음. 연도 링크(a.goto)는 goCard()를 그대로 써서 필터 초기화·스크롤·초점 이동을 함.
- (YELLOW, 카드 기호·돌아가기·퀴즈) 카드의 만점자 줄 앞에 그래프와 같은 mark() 기호를 22px로 붙이고, 2001·2002처럼 출처 없는 해에는 '출처를 찾는 중이에요' 회색 줄을 넣음. 모든 카드 끝에 '↑ 그래프로' 링크. '이 백과를 만든 방법' 앞에 JS 없는 <details> 확인 문제 3개(학년도, 0명과 집계 없음, 반동 라벨이 시대마다 하나씩) 추가.
- (PURPLE 아이디어 1 적용, 만점자 마킹 칸) 만점자 수가 있는 카드에 만점자 한 명당 OMR 타원 하나를 22칸마다 줄을 바꿔 그림. 출처 있는 해는 칠한 칸, 2001은 빈 칸. inkify로 펜 그리기 애니메이션이 적용됨.
- (PURPLE 아이디어 2 적용, 2029 난이도 찍기) 2029 카드의 불꽃 5개를 aria-pressed 버튼으로 바꿈. 누르면 try/catch로 localStorage에 저장하고, 그래프의 2029 점을 그 높이로 옮겨 2026에서 점선으로 잇고 라벨을 '너의 예상'으로 바꿈(aria-live 안내 포함). 저장소가 막힌 환경에서도 원래 모습으로 정상 표시됨.
- (PURPLE 아이디어 3 적용) 2027 카드에 '반동 화살표대로라면 올해는 쉬웠을까요? 12월 채점 결과로 직접 확인해 봐요' 질문 추가(예측을 사실처럼 쓰지 않음).
- (BLUE 강점 유지) 2001은 출처를 찾기 전까지 속 빈 점으로 유지. 줄글·낱말·카드·그래프가 서로 이어지는 구조, 반동 화살표 묶음, 팀 칩에만 쓰는 다섯 색, :root 토큰, max(16px, env(safe-area-inset-*)) 여백, 검은 펜 라인아트 애니메이션, prefers-reduced-motion, 쉬운 존댓말 톤은 그대로 둠. opacity:0으로 숨긴 채 기다리는 요소 없음.

받아들이지 않은 의견:

- (YELLOW) 제도 바뀐 해 세모 표시(change:true)는 넣지 않음. 시대 구분선, 반동 화살표, 미래 구간 상자, 점 모양 6가지가 이미 그래프에 겹쳐 있어서 더 넣으면 흑백 펜 공책의 절제(BLUE 강점 3)가 깨짐. 대신 '그래프가 알려 주는 것' 2번에 제도 변화 첫해를 링크로 정리함.
- (YELLOW) '만점자 수와 난이도는 거꾸로 움직여요' 법칙은 넣지 않음. 난이도를 만점자 수를 보고 매겼기 때문에 RED가 지적한 순환 논리를 결론처럼 보여 주게 됨.
- (YELLOW) 미래 점을 축 위 띠(T-30)로 올리지 않음. 그 높이는 '반동! 또 반동!' 라벨과 시대 라벨이 있어서 겹침. 대신 점선 상자, '아직 몰라요' 글씨, 숫자 읽는 법 5번으로 '높이에 의미 없음'을 알림.
- (PURPLE 아이디어 1 일부) 0명이나 집계 없음인 해에는 빈 칸·× 마킹 칸을 그리지 않음. 렌더링해 보니 바로 위 점 모양 아이콘과 같은 내용이 되풀이되어 시끄러웠음.
- (RED) 1995·1996·2006~2007 같은 해마다 난이도 근거 기사를 따로 달지는 않음. 해마다 확인할 수 있는 출처가 없어서 거짓 정밀함이 될 수 있음. 대신 해당 카드에 '보도만 보고 매긴 눈대중' 표시를 하고 그래프 선을 점선으로 그림.
- (RED) 2002 '0명'의 출처는 WebSearch로 찾지 못해 숫자를 지우지 않고 '전해짐 + 출처 없음(점선 ×)'으로 낮춤. 전해지는 숫자를 지우는 것보다 출처 상태를 정직하게 보여 주는 것이 이 백과의 원칙과 맞음.

### 🔴 RED — 8.6점

지난번에 지적한 2002 기호, 시대 이름, EBS 순서, 용어는 고쳐졌어. 그런데 이번에 새로 넣은 '눈대중' 문구가 같은 페이지의 다른 숫자와 부딪혀. 그리고 '0명과 모름은 다르다'고 가르쳐 놓고는 1990년대 카드 열한 장에 '0명'으로 읽히는 문구를 그대로 두었어. 정직함을 내세운 백과라면 자기 규칙에 생긴 구멍이 가장 아프니까, 아직 9점대는 줄 수 없어.

> BLUE가 '범례가 mark()로 그려져서 그래프와 어긋날 수 없다'고 칭찬했는데, 점 크기 견본만은 mark()를 쓰지 않고 class 'solid'를 직접 넣어서 66명을 꽉 찬 점으로 보여 줘. 그래서 바로 그 칭찬이 틀린 곳이 돼. PURPLE의 마킹 칸 아이디어는 2001 카드에 빈 타원 66개를 그리는데, 그 밑에 '만점자 기록 없이'라는 문구가 붙어서 모순이 오히려 눈에 더 띄어.

- 스스로 한 말과 어긋나. '숫자 읽는 법' 4번에는 '1994~2010학년도는 만점자 기록이 없어서'라고 썼는데, 바로 그 기간 안에 2001학년도 66명과 2002학년도 0명이 카드와 그래프에 숫자로 올라 있어. 게다가 basis 조건(difficulty!=null&&!r.src) 때문에 2001 카드에는 '만점자 66명' 바로 아래에 '만점자 기록 없이 보도만 보고 매긴 눈대중이에요'가 찍혀. 한 카드 안에서 '기록 있음'과 '기록 없음'을 같이 말하는 거야. 문구를 '출처가 확인된 만점자 기록 없이'로 바꾸거나 조건을 kindOf 기준으로 고쳐.
- '0명'과 '모름'을 가르는 규칙이 카드 글에서 무너져. 1994~2000학년도와 2003·2004학년도 카드는 perfect가 '알려진 만점자 없음'이라서 화면에 '만점자 알려진 만점자 없음'으로 나와. 고1은 이걸 '만점자가 없었다(0명)'로 읽어. 그래프에서는 점선 원(모름)으로 그려 놓고 글로는 0명처럼 보이게 쓴 셈이야. '만점자 기록 없음(모름)'처럼 고쳐야 퀴즈 Q2와도 맞아.
- 시대 이름이 아직 틀렸어. 필터와 그래프 라벨이 2018학년도부터를 '영어 절대평가·통합 시대'라고 부르는데, 통합수능은 2022학년도에 시작했어. 그래서 2018~2021학년도를 '통합 시대'로 묶을 근거가 없어. 또 '절대평가 시대'의 시작을 2018로 잡았는데, 낱말 상자에는 한국사 절대평가가 2017학년도부터라고 적혀 있어서 그 시작점도 설명이 필요해. 퀴즈 Q3의 '반동이 시대마다 하나씩, 제도가 바뀌어도 되풀이됐다'는 결론은 저자가 마음대로 정한 시대 경계 위에 세워진 주장이야.
- 출처의 급이 또 섞여 있어. 2015학년도는 '29명(인문 8, 자연 21, 교육청 집계)'인데, 아래 note와 '숫자 읽는 법' 1번은 꽉 찬 점을 '평가원 발표나 그것을 전한 기사'라고 정의해. 교육청 집계는 평가원 자료가 아니니 2017처럼 예외라고 밝혀야 해. 2014학년도 '33명(원점수 기준)'도 마찬가지야. 표준점수 시대에 왜 원점수로 셌는지 고1이 알 수 있는 설명이 한 줄도 없어.
- 사실과 다른 일반화와 접근성 문제가 남아 있어. 첫 화면에서 '해마다 11월에 열려요'라고 했는데 2021 카드는 12월 시험이야. 그리고 난이도 미터는 aria-label을 role 없는 span에 달아서 대부분의 화면 낭독기가 읽지 않아. 불꽃 svg는 aria-hidden이라 결국 난이도 숫자가 소리로 전달되지 않아. role="img"를 붙이거나 숨긴 글자로 넣어. 마지막으로 범례의 점 크기 견본은 66명을 꽉 찬 점으로 그렸는데, 실제 66명(2001)은 속 빈 점이라 범례와 그래프가 서로 다른 말을 해.

### 🔵 BLUE — 9.3점

BLUE가 보기에 이번 라운드에서 이 백과는 '정직하다고 말하는 백과'에서 '스스로 정한 규칙을 끝까지 지키는 백과'가 됐어요. 2002학년도 점선 ×, 원점수 시대라는 이름, EBS 연계가 시작된 순서처럼 RED가 짚은 구멍이 기호·글·그래프에서 똑같이 메워졌어요. 2029 난이도 찍기와 만점자 마킹 칸 덕분에 고1이 직접 손을 대 보는 페이지가 됐고요. 다만 출처의 급을 적은 예외 목록에 아직 한두 곳이 빠져 있고, 라벨 이름이 한 군데 어긋나 있어서 9.5에는 아주 조금 못 미쳐요.

> RED에게: 지난 라운드에 RED가 짚은 여섯 가지(2002 기호, 원점수 200/400, 영어 절대평가 경계, 출처의 급, EBS 연계 순서, 용어 통일)는 코드와 글 모두에서 고쳐진 것을 확인했어요. 이제 남은 건 2015학년도 교육청 집계처럼 예외를 적은 목록이 덜 찬 정도라고 봐요. YELLOW에게: 세모 표시를 거절한 결정에 동의해요. 대신 '그래프가 알려 주는 것' 2번 줄에 연도 링크를 단 방식이 같은 정보를 더 조용하게 전해요.

- 꼭 지켜야 할 강점 1, 규칙이 한곳에서 나와요: kindOf가 이제 출처를 먼저 보고 0명을 zero와 zeroR로 나눠요. 범례(drawKeys), 숫자 읽는 법 2번, 카드의 '출처를 찾는 중이에요' 줄, 확인 문제 Q2가 모두 같은 일곱 가지 기호로 말해요. 시대도 eraOf 한 줄이 필터·그래프 흐림·구분선을 함께 정해요. 2001(속 빈 점)과 2002(점선 ×)는 출처를 찾았을 때만 src를 붙여서 바꾸고, 기호를 손으로 따로 고치는 일은 하지 마세요.
- 꼭 지켜야 할 강점 2, 데이터 안전: perfNum 정규식을 없애고 n 칸만 읽게 바꾼 것은 눈에 띄지 않지만 이번 라운드에서 가장 튼튼한 수정이에요. node로 DATA를 뽑아 확인해 보니 n은 정확히 18개 해(2001, 2002, 2011~2026)에만 있고, 반동 계산(차이 3 이상)이 2001→02, 2011→12, 2024→25→26 세 묶음으로 나와서 확인 문제 Q3의 답 '3개'와 맞아요. 앞으로 데이터를 고치면 Q3 답도 함께 확인해 주세요.
- 꼭 지켜야 할 강점 3, 독자가 손대는 장치가 정직해요: 2029 불꽃 버튼은 aria-pressed와 aria-live 안내가 있고, localStorage는 읽기와 쓰기를 모두 try/catch로 감싸서 저장소가 막혀도 '너?' 모습으로 돌아가요. 2027 카드의 반동 질문과 '그래도 법칙은 아니에요' 줄이 예측을 사실처럼 쓰지 않게 붙잡아 줘요. YELLOW의 '거꾸로 움직인다는 법칙'과 세모 표시를 거절한 판단도 옳아요. 순환 논리를 결론처럼 보여 주지 않았고, 흑백 공책의 절제도 지켰어요.
- 꼭 지켜야 할 강점 4, 접근성과 이동: #chart가 role=group으로 바뀌어 점 링크가 화면 낭독기에 읽혀요. click 리스너는 drawChart 밖으로 나가 중복되지 않고, 모든 카드에 '↑ 그래프로'(#graph)가 생겼어요. '그래프가 알려 주는 것'의 연도 링크는 goCard를 다시 써서 필터 초기화와 초점 이동이 함께 따라와요. 확인 문제는 JS 없는 details라서 깨질 일이 없어요.
- 고칠 점 1, 출처 예외 목록이 아직 덜 찼어요: 숫자 읽는 법 1번과 하단 note는 예외로 2017학년도만 적어요. 그런데 2015학년도 출처는 '교육청 집계'라서 평가원 발표도 아니고 그것을 전한 기사도 아니에요. 2014학년도의 '원점수 기준'도 기준이 다른 숫자예요. 2017처럼 괄호 한 줄로 '2015는 교육청 집계, 2014는 원점수 기준'이라고 덧붙이면 '꽉 찬 점'의 정의가 빈틈없이 닫혀요. 점 모양은 바꾸지 않아도 돼요.
- 고칠 점 2, 작은 이름 불일치: 필터 버튼은 '2018– · 영어 절대평가·통합 시대', Q3 답은 '영어 절대평가·통합 시대'인데, 그래프 구분선 라벨은 '절대평가·통합 시대'예요. 2017학년도부터 한국사 절대평가가 이미 있었으니 '영어'를 빼면 경계가 2017로 오해될 수 있어요. 그래프 라벨에 '영어'를 붙이세요. 또 '반동' 1번 줄의 '아주 쉬운 해 다음에 아주 어려운 해'는 2025학년도(난이도 2)에 딱 맞지는 않아요. '쉬운 해와 어려운 해가 크게 뒤집혔어요' 정도로 다듬으면 정확해요.

### 🟡 YELLOW — 9.2점

YELLOW가 보기에 지난 라운드 아이디어가 거의 다 깔끔하게 들어갔어요. 미래 구간 상자, '그래프가 알려 주는 것', 카드 기호, 돌아가기 링크, 확인 문제까지 모두 있어요. 세모 표시를 넣지 않은 이유(흑백 공책의 절제)와 '거꾸로 움직인다' 법칙을 넣지 않은 이유(순환 논리)도 납득이 돼요. 이제 남은 건 큰 기능이 아니라 쓰다가 걸리는 작은 마찰이에요. 아래 다섯 가지를 다듬으면 9.5가 보여요.

> RED가 지적한 2002 기호, 시대 이름, EBS 순서, 출처 급은 이번 수정으로 모두 풀렸다고 봐요. 제가 냈던 세모 표시를 BLUE의 절제 원칙으로 막은 저자의 판단에도 동의해요. 다만 BLUE가 아낀 '연결된 구조'를 끝까지 지키려면, 카드에서 그래프로 돌아올 때 원래 보던 점으로 돌아가야 해요.

- [아이디어: 제자리로 돌아가기] 지금 '↑ 그래프로'(href="#graph")를 누르면 그래프 제목으로만 가요. 그래서 2019 점을 눌러 내려갔다가 돌아오면 휴대폰에서 다시 가로로 밀어 2019를 찾아야 해요. goCard()에서 lastFrom=id를 기억해 두세요. 그리고 .back 클릭 때 #chart 안의 a[href="#"+lastFrom]에 focus({preventScroll:true})를 주고, 그래프 상자의 scrollLeft를 그 점 x좌표 근처로 맞추면 돼요. 지금 있는 click 위임 리스너에 a.back 분기만 하나 더하면 됩니다.
- [아이디어: 가로 스크롤 안내] 500px 창에서는 그래프 상자만 가로로 스크롤돼요. 그런데 고1이 그 사실을 알아챌 단서가 없어요. 그래프 상자 위에 <p class="hand scroll-hint">← 옆으로 밀어 보세요 →</p>를 두고 @media(min-width:960px){.scroll-hint{display:none}}로 넓은 화면에서는 숨기세요. JS 없이 CSS 한 줄이면 돼요. 펜 글씨 톤이라 공책 느낌도 해치지 않아요.
- [아이디어: 2029 예상 지우기] 불꽃을 한 번 누르면 '너의 예상'을 되돌릴 방법이 없어요. 이미 누른 불꽃을 다시 누르면 guess=null로 바꾸고 localStorage.removeItem을 try/catch로 감싸 부르세요. 그다음 drawChart()를 다시 부르면 라벨이 '너?'로 돌아와요. aria-live 문구도 '예상을 지웠어요'로 바꿔 주면 접근성이 그대로 지켜져요. guess-note 옆에 작은 '지우기' 버튼을 두는 방법도 괜찮아요.
- [아이디어: 기준일 한 줄] 오늘(2026-11-19)이 2027학년도 수능 당일이라, 2027 카드의 '2026년 11월에 치러졌고, 채점 결과는 12월에 나와요'는 지금 딱 맞아요. 하지만 내년에 이 페이지를 연 사람은 어느 시점의 정보인지 알 수 없어요. 서문이나 하단 note에 '이 백과는 2026년 11월 19일(2027학년도 수능 날) 기준이에요'를 한 줄 넣어 주세요. 낱말 상자의 '학년도' 설명과도 이어져서 Q1 퀴즈를 풀 때 단서가 돼요.
- [아이디어: 퀴즈 답과 링크 연결] Q2 답의 '2011학년도', '2005~2010학년도'와 Q3 답의 세 반동 구간을 '그래프가 알려 주는 것'처럼 a.goto 링크로 바꾸세요. 그러면 답을 읽고 바로 그 카드나 점을 확인할 수 있어서, 퀴즈가 읽고 끝나는 것이 아니라 확인하는 활동이 돼요. 그리고 Q3의 '3개'는 지금 runs 계산 결과와 맞지만 손으로 적은 값이에요. 나중에 데이터를 고치면 어긋날 수 있으니, drawChart가 끝난 뒤 runs.length를 <span id="rebound-count">에 채우세요.
- [칭찬+작은 확인] 2002를 지우지 않고 점선 ×와 '0명으로 전해짐'으로 낮춘 것은 이 백과의 정직한 원칙을 끝까지 지킨 판단이에요. 다음에 출처를 찾을 때는 2001년 12월 평가원 채점 결과 발표를 전한 통신사 기사(만점자 수나 최고점이 나온 기사)를 찾아보세요. 찾으면 src만 붙여도 kindOf가 알아서 zero로 바꿔 줘요.

### 🟣 PURPLE — 9.2점

PURPLE가 보기에 이번 라운드에서 독자가 처음으로 백과에 손을 대 볼 수 있게 됐어요. 만점자 한 명당 칠한 마킹 칸 하나로 2001년 66칸과 2022년 1칸을 눈으로 견줄 수 있고, 2029 불꽃을 누르면 그래프 끝이 '너의 예상'으로 바뀌어요. 그래서 숫자가 크기와 행동으로 느껴져요. 남은 반 걸음은 고1이 집에 가서 부모님께 물어보게 만드는 장치, 그리고 이 백과가 스스로 고쳐진다는 것을 보여 주는 장치예요.

> RED가 지적한 2002 기호 문제와 시대 이름 문제는 zeroR와 '원점수 시대'로 깔끔하게 풀렸다고 봐요. YELLOW의 제도 세모를 넣지 않은 저자의 판단에도 동의해요. 기호를 하나 더 얹는 것보다 이미 있는 링크 상자로 제도 변화를 정리한 쪽이 BLUE가 말한 절제를 지켜요.

- [칭찬] 마킹 칸(omrRow)은 첫 화면의 OMR 답안지 모티프를 카드 안으로 그대로 가져와요. inkify의 step을 0.01로 낮춰서 66칸도 금방 칠해지게 한 판단이 좋아요. 2002·2011에 ×칸을 그리지 않은 이유(카드 아이콘과 같은 말이 되풀이됨)에도 동의해요. 2029 찍기는 aria-pressed, aria-live, try/catch를 다 갖춰서 '저장이 막혀도 원래 모습'이라는 원칙을 지켰어요.
- [아이디어1: 가족 수능 찾기] '그래프가 알려 주는 것' 상자 아래나 2029 카드 옆에 작은 상자를 하나 두어요. <label>태어난 해 <input type=number id=born min=1975 max=2012></label><button type=button id=findBtn>내 수능 찾기</button>를 넣고, 누르면 학년도 = 태어난 해 + 19로 계산해서(빠른년생은 +18이라고 한 줄 안내) idOf로 카드 id를 만든 뒤 goCard()로 이동해요. 범위(1994~2029) 밖이면 <p aria-live=polite>에 '그때는 학력고사였어요(1993학년도까지)'를 띄워요. 안내 문구는 '부모님·삼촌의 태어난 해를 넣어 보세요. 그해 수능이 물이었는지 불이었는지 직접 물어봐요'. 숫자 백과가 '가족 인터뷰' 숙제로 바뀌고, 학년도 낱말(+1 규칙)도 저절로 다시 익혀요. 1994(1차)·(2차)는 '1994-1'로 보내면 돼요.
- [아이디어2: 이 백과의 오답 노트] '이 백과를 만든 방법' 안에 <details class=box><summary>이 백과가 고친 것 (오답 노트)</summary><ol>를 넣고, 이번 토론에서 실제로 고친 것 4~5개를 펜 글씨 빨간 줄 없이 적어요. 예: '400점 시대 → 원점수 시대(1994~1996은 200점이었어요)', 'EBS 연계는 2010년이 아니라 2005학년도부터 시작했고, 2010년에는 70% 발표가 나왔어요', '2002 0명은 출처를 못 찾아 점선 ×로 낮췄어요'. 각 줄에 <s>틀린 말</s> → 고친 말 형식을 쓰면 됩니다(취소선은 CSS text-decoration-thickness:1.5px로 펜 느낌). 'RED처럼 따져 물어 주세요'라는 권유에 실제 예시가 생기고, 백과도 틀리고 고쳐진다는 것을 고1에게 보여 주는 가장 정직한 장치예요.
- [아이디어3: 12월이 되면 스스로 말하는 2027 칸] 오늘은 2026-11-19이고 채점 결과는 보통 12월 초에 나와요. drawCards에서 r.year==='2027'일 때 const now=new Date(); if(now>=new Date('2026-12-05'))이면 story 끝에 '이제 채점 결과가 나왔을 거예요. 만점자 수를 찾아 이 칸 옆에 연필로 적어 봐요'를 붙이고, 아니면 'D-'+Math.ceil((new Date('2026-12-05')-now)/864e5)+' 결과 발표 예정쯤'을 회색 .src 줄로 보여 줘요. 날짜는 '쯤'으로 흐리게 써서 예측을 사실처럼 쓰지 않는 원칙을 지켜요. 미래 칸이 시간에 따라 숨 쉬는 느낌이 생겨요.
- [지적] Q2 답이 '집계 없음 … (2005~2010학년도)'라고 적고 '그래프에서도 ×와 점선 원으로 다르게 그렸어요'라고 해요. 그런데 2008은 네모(등급제)이고, 1994~2004의 '알려진 만점자 없음'도 점선 원이에요. '(2005~2007·2009~2010학년도 등, 2008은 등급제라 네모)'처럼 고쳐야 범례와 한 글자도 어긋나지 않아요.
- [지적] 2015 카드는 '교육청 집계'라고 적혀 있는데 꽉 찬 점(confirmed)으로 그려져요. 숫자 읽는 법 1번은 꽉 찬 점을 '평가원 발표나 그것을 전한 기사'로 정의했어요. 그러니 2017처럼 '2015학년도는 시·도교육청 추정 집계를 전한 기사 기준이에요'를 괄호에 한 줄 추가해야 출처의 급 규칙이 끝까지 일관돼요.

## 라운드 4

### ⚫ BLACK (저자) 바꾼 것

- /tmp/claude-0/-home-user/15874408-5af3-5bb7-95f2-a9c4f9309bb6/scratchpad/suneung.html 직접 수정, 이전 버전은 suneung.r3.bak 으로 보관. node --check 통과, <title>로 시작하고 doctype/html/head/body·alert/confirm/print 없음. Chrome headless(가장 좁은 창 500px)에서 scrollWidth 485로 가로 스크롤 없음. 반동 개수 자동 계산 3, 찾기·돌아가기·찍기·지우기 동작 확인.
- (RED 1, 눈대중 문구 모순) basis 조건을 !r.src에서 kindOf 기준(confirmed·zero가 아닐 때)으로 바꿈. 문구는 '출처가 확인된 만점자 기록 없이 보도만 보고 매긴 눈대중이에요.'로 고침. 숫자 읽는 법 4번과 그래프 설명도 '출처가 확인된 만점자 기록이 없어서(2001·2002학년도 숫자도 아직 출처를 못 찾았어요)'로 맞춤. 2001 카드에 '66명'과 '기록 없음'이 함께 나오던 모순이 없어짐.
- (RED 2, 0명과 모름) 1994~2000·2003·2004학년도 10개 카드의 '알려진 만점자 없음'을 '기록 없음(모름)'으로, 2005~2007·2009·2010학년도는 '공식 집계 없음(모름)'으로 바꿈. 이제 카드에 '만점자 기록 없음(모름)'으로 나와서 점선 원·퀴즈 Q2와 같은 뜻이 됨.
- (RED 3·BLUE, 시대 이름) '영어 절대평가·통합 시대'를 필터·그래프 구분선 라벨·Q3 모두 '영어 절대평가 시대'로 통일함(첫 통합수능은 2022학년도). 숫자 읽는 법 6번을 새로 넣어, 시대 경계는 이 백과가 정한 것이고 2005와 2018을 경계로 삼은 이유, 2017(한국사만 절대평가)을 표준점수 시대에 넣은 이유를 설명함. Q3 결론은 '이 백과가 나눈 시대… 제도가 바뀐 뒤에도 반동이 또 나왔다 정도로만 읽어 주세요'로 낮춤.
- (RED 4·BLUE·PURPLE, 출처의 급) 숫자 읽는 법 1번에 예외 세 해를 적음. 2014는 '원점수 기준'인데 모든 문제를 맞혔다는 뜻이라 다른 해와 같은 기준이고, 2015는 시·도교육청 추정 집계를 전한 기사이고, 2017은 2022년 역대 정리 기사임. 하단 note에도 2015 예외를 추가함. 점 모양은 바꾸지 않음.
- (RED 5, 사실·접근성) 첫 화면 '해마다 11월'을 '보통 11월(2021학년도는 코로나19 때문에 12월)'로 고침. 난이도 미터 span에 role="img"와 aria-label '난이도 5칸 중 N칸'을 붙임. 범례의 점 크기 견본은 mark('confirmed')로 그리고, 실제 꽉 찬 점인 1명·15명·30명(2012)으로 바꿈. 이제 속 빈 점인 66명(2001)을 꽉 찬 점으로 보여 주지 않고, 범례가 mark()를 거치게 되어 BLUE 강점 1도 지켜짐.
- (BLUE, 반동 문구) '아주 쉬운 해 다음에 아주 어려운 해'를 '쉬운 해와 어려운 해가 한 해 만에 크게 뒤집혔어요'로 다듬음.
- (PURPLE 지적, Q2) 집계 없음의 범위를 '1994~2010학년도 가운데 2001·2002·2008학년도를 뺀 해'로 바로잡고, 2008은 등급제라 네모로 그렸다는 설명을 따로 넣음.
- (YELLOW, 퀴즈 링크·자동 개수) Q2·Q3 답의 연도를 a.goto 링크로 바꿈. Q3의 '3'은 <span id="rebound-count">에 담아 drawChart가 runs.length로 채우게 함.
- (YELLOW, 제자리로 돌아가기) '↑ 그래프로'를 누르면 #graph로 스크롤하고, 그 카드 해의 그래프 점이 보이도록 .chartbox scrollLeft를 맞춘 뒤 그 점에 focus({preventScroll:true})를 줌(테스트: 2019에서 누르면 scrollLeft 323, 초점 #y-2019). JS가 없으면 기존 href=#graph로 그대로 동작함.
- (YELLOW, 2029 예상 지우기) 이미 누른 불꽃을 다시 누르면 guess=null로 바뀌고 localStorage.removeItem(try/catch)이 실행되며, 그래프 라벨은 '너?'로 돌아감. aria-live 문구는 '예상을 지웠어요…'로 바뀌고, 찍었을 때는 '같은 불꽃을 다시 누르면 지워져요'라고 안내함.
- (YELLOW, 기준일) WebSearch로 2027학년도 수능 시행일이 2026년 11월 19일(목)인 것을 확인함(평가원 시행기본계획 보도). 하단 note에 '이 백과는 2026년 11월 19일(2027학년도 수능 날) 기준이에요.'를 굵게 넣음.
- (PURPLE 아이디어 1 적용, 우리 가족 수능 찾기) '그래프가 알려 주는 것' 아래에 태어난 해 입력 상자를 넣음(label·form submit·aria-live). 학년도는 태어난 해+19로 계산하고, 빠른년생이면 한 해 앞이라는 안내와 재수했다면 다음 해 카드도 보라는 안내를 함. goCard로 그해 카드에 이동하고, 1994는 1차·2차를 함께 보라고 알려 줌. 1994 전이면 '학력고사를 봤어요(1993학년도까지)', 2029 뒤면 '아직 칸이 없어요'를 띄움. 400px 폭에서는 flex-wrap으로 줄이 바뀜.
- (PURPLE 아이디어 2 적용, 오답 노트) '이 백과를 만든 방법'에 JS 없는 <details> '이 백과가 고친 것 (오답 노트)'를 추가함. 실제 토론에서 고친 6가지를 <s>틀린 말</s> → 고친 말 형식으로 적음(400점→원점수 시대, EBS 연계 순서, 2002 0명, 알려진 만점자 없음→모름, 통합 시대→영어 절대평가 시대, 해마다 11월→보통 11월). 취소선 두께는 1.5px.
- (BLUE 강점 유지) kindOf·eraOf 한곳 규칙, n 칸만 읽는 데이터, try/catch 저장소, role=group 차트, 리스너 중복 없음, 흑백 펜 라인아트와 inkify 애니메이션, prefers-reduced-motion, :root 토큰, max(16px, env(safe-area-inset-*)) 여백, 쉬운 존댓말 톤, 처음 로드 때 모든 내용이 보이는 구조를 그대로 유지함.

받아들이지 않은 의견:

- (YELLOW) 가로 스크롤 안내 문구는 새로 넣지 않음. 이미 .swipe 문구 '← 그래프를 옆으로 밀어 보세요 →'가 max-width:800px에서만 보이도록 들어가 있어서 중복됨.
- (YELLOW) goCard에 lastFrom 변수를 두는 방식은 쓰지 않음. 대신 '↑ 그래프로'가 자기 카드 id로 그 점을 찾게 함. 그래프에서 오지 않고 필터나 찾기 상자로 카드에 왔을 때도 돌아갈 점이 정확함.
- (PURPLE 아이디어 3) 날짜에 따라 2027 카드 문구가 바뀌는 D-카운트는 넣지 않음. 성적 통지일(12월 11일로 안내된 자료)이 일반 정보 사이트 기준이라 '쯤'을 붙여도 확인 안 된 날짜를 화면에 박는 셈이 되고, 열람 시각마다 내용이 달라져 백과의 '확인한 것만 적는다' 원칙과 부딪힘. 대신 하단에 확인된 기준일(2026-11-19)을 적음.
- (RED) 2014·2015의 점을 꽉 찬 점에서 다른 모양으로 바꾸지는 않음. 둘 다 그해 채점 결과를 전한 기사가 출처이고, 기준 차이는 숫자 읽는 법 1번에 예외로 밝히는 것으로 충분함. 기호를 늘리면 BLUE 강점 3(흑백 공책의 절제)이 깨짐.
- (YELLOW 이전 라운드 재확인) 제도가 바뀐 해의 세모 표시와 '거꾸로 움직인다' 법칙은 이번에도 넣지 않음. 지난 라운드 이유(절제, 순환 논리)가 그대로 유효함.

### 🔴 RED — 8.9점

지난번에 짚은 다섯 가지는 고쳐졌어. 그런데 이번에 새로 넣은 '가족 수능 찾기'가 틀린 사실을 화면에 띄울 수 있고, '숫자 읽는 법'은 같은 상자 안에서 '같은 기준'과 '시대마다 다른 기준'을 동시에 말해. 시대 이름도 1999 카드와 부딪혀. 정직함을 내세운 백과에서 자기 말끼리 어긋나는 곳이 아직 세 군데 넘게 있으니 9점은 못 줘.

> BLUE와 YELLOW는 '이제 작은 마찰만 남았다'고 봤는데 나는 동의 못 해. PURPLE의 가족 찾기를 저자가 넣으면서 1960년생에게 '학력고사'라는 틀린 답을 주는 새 구멍이 생겼어. 그리고 저자가 RED 4에 답한다며 쓴 '2014는 다른 해와 같은 기준'이라는 문장은 같은 상자 3번과 정면으로 부딪혀서 오히려 사실 오류를 하나 늘렸어.

- 새 기능이 틀린 말을 해. 입력 상자는 min="1960"이라 1960~1962년생을 넣을 수 있는데, 그러면 1979~1981학년도가 되고 '수능이 생기기 전이라 학력고사를 봤어요(1993학년도까지)'가 떠. 학력고사는 1982학년도부터라서 그 전 해는 예비고사·본고사 시절이야. 부모님께 물어보라는 '가족 인터뷰' 장치가 오히려 틀린 정보를 들고 가게 만들어. 그리고 1994학년도를 찾으면 '빠른년생이면 1993학년도'라고 학력고사 해를 수능 해처럼 안내해. 빠른년생 제도가 2009년 입학생부터 없어졌다는 설명도 없어서, 2002년 이후에 태어난 사람에게도 '한 해 앞'이라고 말해.
- '숫자 읽는 법' 1번과 3번이 서로 부딪혀. 1번은 2014학년도 '원점수 기준'을 두고 '모든 문제를 맞혔다는 뜻이라 다른 해와 같은 기준이에요'라고 하는데, 3번은 '만점자의 기준이 시대마다 달라서 그대로 비교하면 안 돼요'라고 해. 더구나 2014는 국어·수학·영어를 쉬운 A형으로 골라서 만점을 받을 수도 있는 해야. 2017(한국사는 1등급만 보면 됨)과도 기준이 달라. '같은 기준'은 근거 없는 단정이니 지우고, A/B형 때문에 다른 해와 바로 비교하기 어렵다고 써야 해.
- 시대 이름이 카드 내용과 맞지 않아. 필터와 그래프는 1994~2004를 '원점수 시대'라고 부르는데, 같은 시대 안의 1999 카드는 '표준점수도 이때 처음 쓰였어요'라고 해. 고1은 '원점수 시대'를 고른 뒤 표준점수가 나오는 카드를 보고 헷갈려. 6번에 2005 경계를 설명했지만 1999~2004년에도 표준점수가 함께 있었다는 말은 없어. 6번에 '1999학년도부터 표준점수도 함께 나왔지만 성적표의 중심은 원점수였어요'처럼 한 줄을 넣어야 해.
- '모름' 용어 통일이 반만 됐어. 카드는 '기록 없음(모름)'·'공식 집계 없음(모름)'으로 바꿨는데, 범례는 아직 '집계 없음 · 알려진 기록 없음'이고 숫자 읽는 법 2번도 '알려진 기록이 없는 해'야. 오답 노트에서 '알려진 만점자 없음'을 틀린 말로 그어 놓고 같은 페이지 범례에는 '알려진'을 그대로 남겨 둔 셈이야. 범례에도 '(모름)'을 붙여 Q2와 한 글자까지 맞춰.
- 고1에게 안 읽히는 표현이 남아 있어. 1999 카드의 '수리·탐구Ⅱ(사회탐구·과학탐구)'는 '수리와 탐구Ⅱ'처럼 읽혀. 당시 영역 이름이 '수리·탐구 영역Ⅱ'였고 그게 사회·과학 탐구를 뜻한다는 풀이가 필요해. 또 2027 카드의 '반동 화살표대로라면 올해는 쉬웠을까요?'는 바로 위 '그래도 법칙은 아니에요'와 반대로 예측을 부추겨. 질문 바로 뒤에 '화살표는 예언이 아니에요'를 붙여.
- 오답 노트의 정직성 문제야. '토론에서 고친 것'이라면서 이번 라운드에 고친 2014·2015 출처 예외와 '눈대중' 문구 모순은 목록에 없어. 보기 좋은 6개만 골라 적으면 '고쳐지는 백과'가 아니라 홍보 문구가 돼. 이번 라운드에 고친 것도 빠짐없이 적어.

### 🔵 BLUE — 9.5점

BLUE가 보기에 이번 라운드에서 백과의 말, 기호, 그래프가 처음으로 한 문장처럼 맞아떨어졌어요. '0명'과 '모름'을 가르는 규칙이 카드 글까지 내려갔고, 눈대중 문구도 kindOf를 따라서 2001 카드의 모순이 사라졌어요. 가족 수능 찾기와 오답 노트는 고1이 이 백과를 들고 집에 가게 만드는 장치예요. 실제로 고쳐 온 길을 보여 주니까 '정직한 백과'라는 말에 증거가 생겼어요. 아주 작은 가장자리 문구만 남아 있어서, 고1용 백과로는 9.5를 줄 만해요.

> RED에게: 지난번에 RED가 짚은 다섯 가지가 이번에 모두 고쳐진 것을 코드에서 확인했어요. 눈대중 조건은 kindOf 기준으로 바뀌었고, 열한 장의 카드는 '기록 없음(모름)'이 됐어요. 시대 이름에서 '통합'을 뺐고, 2014·2015 예외를 적었고, role="img"를 붙이고 범례도 mark()로 그려요. 범례에 대한 제 칭찬이 이제 정말 맞는 말이 됐어요. PURPLE에게: 가족 수능 찾기에 빠른년생과 1994 1차·2차 안내까지 들어간 것은 PURPLE 아이디어가 백과의 '학년도' 낱말과 잘 맞물린 결과예요.

- 꼭 지켜야 할 강점 1, 규칙이 끝까지 한곳에서 나와요. 이제 눈대중 안내 줄(basis)도 !r.src가 아니라 kindOf를 보고 정해져요. 그래서 범례, 카드 글, 점 모양, Q2가 같은 규칙에서 나와요. 확인해 보니 화면 글에 남은 '알려진 만점자 없음'은 오답 노트의 <s> 한 곳뿐이고, '통합 시대'도 오답 노트의 취소선 한 곳뿐이에요. 앞으로 문구를 고칠 때 카드에 직접 쓰지 말고 이 규칙을 거치게 해 주세요.
- 꼭 지켜야 할 강점 2, 숫자가 스스로 맞춰져요. Q3의 '3'이 <span id="rebound-count">에 들어가 drawChart의 runs.length로 채워지고, 답의 세 구간은 a.goto 링크가 됐어요. 그래서 퀴즈가 손으로 쓴 정답이 아니라 데이터와 이어진 확인 활동이 됐어요. 또 범례의 크기 견본이 mark('confirmed')를 거치게 되어서, 지난번에 RED가 짚은 '칭찬이 틀린 곳'이 사라졌어요. 이 두 가지는 데이터를 고쳐도 망가지지 않게 꼭 지켜 주세요.
- 꼭 지켜야 할 강점 3, 돌아가기와 지우기가 정직하게 움직여요. '↑ 그래프로'는 lastFrom 같은 기억 변수 대신 자기 카드 id로 점을 찾아요. scrollLeft를 맞춘 뒤 focus({preventScroll:true})를 주고, JS가 없으면 그냥 #graph로 가요. 이 판단이 YELLOW 안보다 튼튼해요. 2029 불꽃을 다시 누르면 지워지고, setItem과 removeItem을 하나의 try/catch로 감싼 것도 좋아요.
- 꼭 지켜야 할 강점 4, 오답 노트예요. <s>틀린 말</s> → 고친 말 여섯 줄은 이 토론에서 실제로 고친 것만 담았어요. 그래서 'RED처럼 따져 물어 주세요'라는 말에 실제 예시가 생겼어요. JS 없는 details라 깨질 일도 없어요. 나중에 출처를 찾아 2001·2002 기호를 바꾸면, 이 노트에 한 줄을 더하는 습관을 지켜 주세요.
- 꼭 지켜야 할 강점 5, 확인한 것만 적는 원칙을 지켰어요. D-카운트를 거절하고, 대신 확인된 기준일 '2026년 11월 19일(2027학년도 수능 날)'을 적었어요. 2014·2015·2017 세 해의 예외를 점 모양을 바꾸지 않고 글로 밝힌 것도 같은 원칙이에요. 그래서 흑백 공책의 절제와 출처의 급 규칙이 함께 지켜져요.
- 아주 작은 다듬을 점이 둘 있어요(점수를 깎을 정도는 아니에요). 첫째, 1975년생을 넣으면 '빠른년생이면 1993학년도'라고 나오는데, 1993학년도는 수능이 아니라 학력고사예요. yr-1<1994일 때는 괄호에 '(빠른년생이면 학력고사)'로 바꿔 주면 좋아요. 둘째, 보고에는 '재수했다면 다음 해 카드도 보라'는 안내가 있다고 했는데, 제출 결과 문구에는 그 말이 보이지 않아요. findOut 문구 끝에 한 줄 붙여 주세요.

### 🟡 YELLOW — 9.4점

YELLOW가 보기에 지난 라운드에 낸 아이디어 다섯 가지 가운데 네 가지가 그대로 들어갔어요. 제자리로 돌아가기, 예상 지우기, 기준일, 퀴즈 링크와 자동 개수예요. 스크롤 안내를 뺀 이유(.swipe와 겹침)도 맞아요. 새로 생긴 '우리 가족 수능 찾기'는 이 백과에서 가장 살아 있는 장치인데, 바로 그 상자에 작은 사실 오류 하나와 쓰다가 걸리는 마찰 하나가 있어요. 이 둘만 고치면 9.5예요.

> RED가 짚은 '눈대중' 문구와 '0명/모름' 모순은 kindOf 기준 조건과 '기록 없음(모름)'으로 풀려서 이제 카드와 그래프가 같은 말을 해요. PURPLE의 가족 찾기는 정말 좋은 아이디어예요. 다만 부모님 세대를 넣게 하는 장치인 만큼, 그 세대에서 실제로 걸리는 예비고사 범위와 1994 1차(8월)까지 맞아야 RED의 기준을 넘어요.

- [사실 오류: 가족 찾기의 학력고사 문구] input의 min이 1960이에요. 그래서 1960~1962년생을 넣으면 1979~1981학년도가 되는데, 화면에는 '학력고사를 봤어요(1993학년도까지)'가 떠요. 그런데 학력고사는 1982학년도부터 있었고, 그 앞(1969~1981학년도)은 예비고사였어요. 부모님 세대를 넣으라고 권하는 상자라서 실제로 걸릴 수 있는 범위예요. yr<1982이면 '대학입학 예비고사를 봤어요(1981학년도까지)', 1982≤yr<1994이면 지금 문구를 쓰도록 분기를 하나 더하세요. 아니면 min을 1963으로 올려도 돼요.
- [마찰: 안내 문구가 화면 밖으로 사라짐] submit하면 findOut에 '빠른년생이면 …, 재수했다면 …' 안내를 쓰고 바로 goCard로 카드까지 내려가요. 그래서 aria-live 문구는 읽히지만 눈으로 보는 학생은 그 안내를 못 봐요. 또 빠른년생(yr-1)이나 재수(yr+1) 카드로 갈 방법이 없어요. 자동으로 이동하지 말고 findOut 안에 a.goto 링크 세 개를 그리세요: '빠른년생 ${yr-1}' · '보통 ${yr}'(굵게) · '재수 ${yr+1}'. 지금 있는 click 위임이 goCard로 처리해 주니 코드가 오히려 줄어요. 1994면 '1차·2차' 링크 두 개를 주고, yr-1이 1993이면 그 자리에 '학력고사'라는 글만 쓰면 돼요.
- [사실 보강: 1994학년도 1차는 8월] 첫 화면에 '보통 11월에 열려요(2021학년도는 12월)'라고 고쳤는데, 1994학년도 1차 수능은 1993년 8월에 봤어요(2차가 11월). 괄호를 '(1994학년도 1차는 1993년 8월, 2021학년도는 코로나19 때문에 12월)'로 늘리고, 1994(1차) 카드 story 앞에도 '1993년 8월에 봤어요.'를 붙이세요. 그러면 가족 찾기로 1975년생 카드에 온 학생이 '한여름에 수능?'이라는 질문을 들고 집에 가요.
- [칭찬] '↑ 그래프로'가 lastFrom 변수 대신 자기 카드 id로 점을 찾게 한 판단은 제 원래 안보다 나아요. 필터나 찾기 상자로 카드에 왔을 때도 돌아갈 자리가 맞아요. rebound-count를 runs.length로 채운 것과 Q2·Q3 링크 덕분에 퀴즈가 '확인하는 활동'이 됐어요. 오답 노트에 실제로 고친 여섯 줄을 <s>로 적은 것도 정직한 원칙을 눈에 보이게 해요.
- [작은 확인] 오늘이 2027학년도 수능 날이라 2027 카드의 '2026년 11월에 치러졌고'는 지금 맞아요. 하단 기준일 한 줄이 생겨서 내년 독자에게도 시점이 분명해요. D-카운트를 거절한 이유(확인 안 된 날짜를 박지 않음)에도 동의해요. 12월에 평가원 채점 결과가 나오면 2027의 n과 src만 채우세요. 그러면 kindOf, 반동 계산, rebound-count가 저절로 따라와요. 그때 Q3 문구의 '하나씩'이 맞는지만 다시 보면 돼요.

### 🟣 PURPLE — 9.4점

PURPLE가 보기에 이번 라운드에서 이 백과는 '읽는 백과'에서 '집에 가져가는 백과'가 됐어요. 태어난 해 상자는 가족에게 물어볼 거리를 만들고, 오답 노트는 이 백과도 틀리고 고쳐진다는 것을 보여 줘요. 남은 반 걸음은 새 장치의 작은 시제 오류를 고치고, 아직 못 찾은 출처를 독자가 맡을 숙제로 바꾸는 일이에요.

> RED가 짚은 '눈대중 문구와 66명의 모순', 그리고 '0명과 모름'의 구멍은 kindOf 기준과 '기록 없음(모름)'으로 막힌 것을 확인했어요. 그래서 지난번 RED가 걱정한, 마킹 칸 66개 밑에 모순 문구가 붙던 문제도 이제 사라졌어요. BLUE의 절제 원칙에 맞춰, 제 이번 아이디어는 모두 새 기호 없이 글과 링크만으로 넣을 수 있게 짰어요.

- [칭찬] 가족 수능 찾기는 제가 낸 아이디어보다 더 잘 구현됐어요. form submit, label, aria-live를 갖췄고 1994는 1차·2차 안내, 1994 전은 학력고사 안내까지 해요. 재수했다면 다음 해 카드도 보라는 문장도 있어요. 오답 노트도 JS 없는 details에 <s>틀린 말</s> → 고친 말 형식으로 6줄을 적었어요. 그래서 'RED처럼 따져 물어 주세요'라는 권유에 실제 예시가 생겼어요. D-카운트를 거절한 이유('확인한 것만 적는다')도 옳아서 받아들여요.
- [지적, 바로 고칠 것] 찾기 결과 문구가 늘 과거형이에요(`보통 ${yr}학년도 수능을 봤어요`). 그래서 2009·2010년생(2028·2029학년도)을 넣으면 '2029학년도 수능을 봤어요'라고 아직 오지 않은 시험을 이미 본 것처럼 말해요. 고1 독자 본인과 동생이 가장 많이 넣을 숫자인데도 그래요. 구현 방법은 이래요. const verb = yr>2027?'보게 돼요':yr===2027?'오늘 봤어요':'봤어요'; 이렇게 정한 뒤 문장에 넣으세요. 2028·2029에는 '아직 정해지지 않은 해라 그래프에서 직접 찍어 봐요'를 덧붙이면 2029 불꽃 찍기로도 이어져요.
- [아이디어1: 결과를 링크 세 개로] 지금은 '빠른년생이면 yr-1, 재수했다면 다음 해'를 글로만 알려 주고 yr 카드로만 이동해요. findOut 안의 문장을 textContent 대신 innerHTML로 만드세요. 그리고 `<a class="goto" href="#${idOf(prev)}">빠른년생 ${yr-1}</a> · <a class="goto" href="#${idOf(r)}">${yr}</a> · <a class="goto" href="#${idOf(next)}">재수 ${yr+1}</a>`처럼 세 해를 링크로 보여 주세요. 이미 있는 a.goto 위임 리스너가 goCard를 불러 줘요. prev와 next는 DATA.find(d=>yNum(d.year)===yr±1)로 찾고, 없으면 그 링크를 빼면 돼요. 숫자는 코드가 만든 값만 넣으니 XSS 걱정도 없어요.
- [아이디어2: 출처 현상수배] 2001(속 빈 점)과 2002(점선 ×)는 출처만 찾으면 kindOf가 알아서 꽉 찬 점으로 바꿔 주는 구조예요. 그렇다면 그 빈칸을 독자의 숙제로 내놓아요. 데이터의 이 두 해에만 wanted:'2001년 12월 평가원 채점 결과를 전한 기사(만점자 수가 나온 것)'처럼 칸을 하나 더 두세요. drawCards에서는 r.wanted가 있으면 `<p class="src hand">현상수배: ${r.wanted}를 찾으면 이 점이 꽉 찬 점으로 바뀌어요.</p>`를 붙여요. 새 기호 없이 글 한 줄이라 흑백 공책의 절제(BLUE 강점 3)를 지키고, 모르는 것을 숨기지 않고 도와 달라고 하는 백과가 돼요.
- [아이디어3: 오답 노트를 그 자리로 잇기] 오답 노트의 각 줄을 고친 곳으로 가는 a.goto 링크로 만드세요. 2002→#y-2002, 2021학년도→#y-2021, 1994~1996학년도→#y-1995, 2005학년도→#y-2005, '기록 없음(모름)'→#y-1997, '영어 절대평가 시대'→#f-3 버튼처럼 이으면 돼요. 그러면 틀렸던 말을 읽고 바로 고쳐진 카드에서 확인할 수 있어서, 오답 노트가 '읽고 끝'이 아니라 고쳐진 곳을 직접 확인하는 활동이 돼요. 마크업만 바꾸면 되고 JS는 손댈 필요가 없어요.
- [작은 확인] 태어난 해 input의 min=1960은 학력고사 안내(yr<1994)로 이어지니 괜찮아요. 다만 max=2015인데 2011~2015년생은 '아직 칸이 없어요'가 나와요. 이 문구 끝에 '그래프 끝 2029 칸에 미리 찍어 볼 수 있어요'를 붙이면 막다른 길이 활동으로 바뀌어요.

## 라운드 5

### ⚫ BLACK (저자) 바꾼 것

- 파일을 직접 고쳤어요: /tmp/claude-0/-home-user/15874408-5af3-5bb7-95f2-a9c4f9309bb6/scratchpad/suneung.html. 고치기 전 버전은 /tmp/claude-0/-home-user/15874408-5af3-5bb7-95f2-a9c4f9309bb6/scratchpad/suneung.r4.bak 에 있어요. node --check를 통과했고, 파일은 <title>로 시작하며 doctype/html/body 태그와 alert/confirm/print가 없어요. Chrome headless를 400px로 띄웠더니 창이 500px로 잡혔고, 그 폭에서 scrollWidth가 485라 가로 스크롤은 없었어요. 400px 실폭은 따로 재지 못했어요. 찾기 결과의 링크를 누르면 그 카드로 가서 초점이 옮겨지는 것(#y-2001)도 확인했어요.
- (RED 1·YELLOW·BLUE: 가족 찾기 사실 오류) WebSearch로 예비고사가 1969~1981학년도, 학력고사가 1982~1993학년도라는 것을 확인했어요. 그래서 학년도가 1982보다 앞이면 '대학입학 예비고사를 봤어요(1969~1981학년도)', 1982~1993학년도이면 '대입 학력고사를 봤어요(1982~1993학년도)'가 나와요. 1993학년도이면 재수 1994 1차·2차 링크도 보여 줘요. 1994학년도를 넣었을 때 빠른년생 자리에는 '빠른년생이면 1993학년도 학력고사'라고 써요. 빠른년생은 2002년 1~2월생까지만 있었다는 것도 WebSearch로 확인했어요(2008년 입학이 마지막). 그래서 2003년생부터는 빠른년생 안내를 내지 않아요. 입력할 수 있는 해의 최소값은 1950으로 넓혔어요.
- (YELLOW·PURPLE 아이디어 1 적용: 결과를 링크로) 찾기 결과가 자동으로 카드로 넘어가지 않고 안내 문장을 먼저 보여 줘요. 그 아래에 '빠른년생 yr-1 · 보통 yr(굵게) · 재수 yr+1'를 a.goto 링크로 그려요. 1994학년도는 1차·2차 링크 두 개로 나와요. 기존 click 위임이 goCard로 처리하고, 링크에 들어가는 값은 코드가 만든 숫자와 id뿐이에요.
- (PURPLE: 시제) 학년도에 따라 동사가 바뀌어요. 2027학년도보다 뒤면 '보게 돼요', 2027학년도면 '오늘 봤어요'(하단 기준일 2026-11-19와 맞춤), 그 앞이면 '봤어요'예요. 2028학년도에는 '결과는 아무도 몰라요', 2029학년도에는 '2029학년도 칸에서 예상 난이도를 직접 찍어 봐요'를 덧붙여요. 2030학년도 뒤(2011~2015년생)는 '그래프 끝 2029학년도 칸에 예상 난이도를 미리 찍어 볼 수 있어요'로 바꿔서 막다른 길 대신 할 일을 알려 줘요.
- (RED 2: 2014 '같은 기준' 모순) 숫자 읽는 법 1번에서 '다른 해와 같은 기준이에요'를 지웠어요. 대신 'A형과 B형 가운데 골라 봤기 때문에 이 33명을 다른 해 만점자와 바로 견주기는 어려워요'라고 고쳤어요. 3번에는 '같은 시대 안에서도 2014학년도(A/B형)와 2017학년도(한국사는 1등급만 받으면 됨)처럼 기준이 조금 다른 해가 있어요'를 더했어요.
- (RED 3: 1999 표준점수와 원점수 시대) 숫자 읽는 법 6번에 '1999학년도부터 표준점수도 함께 나왔지만 성적표의 중심은 여전히 원점수였어요'를 넣었어요.
- (RED 4: 모름 용어 통일) 범례를 '집계 없음 · 기록 없음(모름)'으로, 숫자 읽는 법 2번을 '기록이 없는 해(모름)'로 바꿨어요. 이제 화면에서 '알려진'이라는 말은 오답 노트의 취소선에만 남아 있어요.
- (RED 5: 어려운 표현과 예측 부추김) 1999 카드를 '당시 수리·탐구 영역Ⅱ는 사회탐구와 과학탐구를 묶은 영역 이름이었어요'로 풀어 썼어요. 2027 카드의 질문 바로 뒤에는 '다만 화살표는 예언이 아니에요.'를 붙였어요.
- (YELLOW: 1994 1차는 8월) 1994(1차) 카드 이야기를 '1993년 8월, 한여름에 본 첫 수능이에요'로 시작하게 했어요. 1994(2차) 카드에는 '1차 석 달 뒤인 1993년 11월에 다시 봤어요'를 넣었어요. 첫 화면 문구는 이미 '1993년 8월에 처음 치러진 뒤'라고 되어 있어서 그대로 두었어요.
- (PURPLE 아이디어 2 적용: 출처 현상수배) 2001과 2002 데이터에만 wanted 칸을 넣었어요. 2001은 2000년 12월 채점 결과 기사, 2002는 2001년 12월 채점 결과 기사예요. drawCards는 src가 없고 wanted가 있으면 '현상수배: …를 찾으면 이 점이 확인된 기호(꽉 찬 점이나 ×)로 바뀌어요'를 손글씨체 한 줄로 보여 줘요. 새 기호는 만들지 않았어요.
- (PURPLE 아이디어 3과 RED 6 적용: 오답 노트) 오답 노트의 각 줄이 고친 카드로 가는 a.goto 링크가 됐어요(#y-1995, #y-2005, #y-2002, #y-1997, #y-2018·#y-2022, #y-1994-1·#y-2021). 지난 라운드와 이번 라운드에 고친 4줄도 더해서 모두 10줄이에요. 더한 것은 눈대중 문구 조건, 2014·2015·2017 출처 예외, 2014 '같은 기준' 철회, 예비고사·학력고사 범위예요. '보통 11월' 줄에는 1994학년도 1차 8월도 넣었어요.
- (BLUE 강점 유지) kindOf·eraOf로 규칙을 한곳에서 정하는 구조, 반동 개수를 데이터에서 자동으로 세는 rebound-count, 범례를 mark()로 그리는 방식, 자기 카드 id로 그래프 점을 찾는 '↑ 그래프로', try/catch로 감싼 저장소, 흑백 라인아트와 inkify, prefers-reduced-motion, :root 토큰, 안전 영역 여백, 쉬운 존댓말 톤은 건드리지 않았어요.

받아들이지 않은 의견:

- (YELLOW) 첫 화면 괄호를 '(1994학년도 1차는 1993년 8월, …)'로 늘리는 안은 받지 않았어요. 첫 문장이 이미 '1993년 8월에 처음 치러진 뒤 보통 11월'이라고 말하고 있어서 겹쳐요. 그 대신 1994 1차·2차 카드 이야기에 8월과 11월을 적었어요.
- (PURPLE) 오답 노트의 '영어 절대평가 시대'를 #f-3 필터 버튼으로 잇는 안은 쓰지 않았어요. 버튼 id로 가는 앵커는 화면만 옮기고 필터는 켜지 않아서 헷갈려요. 대신 같은 a.goto 방식으로 그 시대 첫 카드(#y-2018)로 잇게 했어요.
- (PURPLE 이전 제안) 빠른년생·재수 해를 모두 같은 크기로 두는 안은 받지 않았어요. '보통' 해만 굵게 해서 어느 해가 기본인지 보이게 했어요.
- (이전 라운드 재확인) D-카운트, 제도 변화 세모 표시, 2014·2015 점 모양 바꾸기는 이번에도 넣지 않았어요. 확인한 것만 적는다는 원칙과 흑백 기호를 아낀다는 원칙(BLUE 강점)을 지키기 위해서예요.

### 🔴 RED — 9.1점

지난번에 짚은 여섯 가지는 코드에서 고쳐진 걸 확인했어. 예비고사·학력고사 범위, 2014 '같은 기준' 철회, 1999 표준점수, '모름' 용어, 1999 풀이, 오답 노트 누락이야. 그런데 2014 문제를 고치면서 A/B형을 2014 한 해의 문제처럼 써 버렸고, 실제로 A/B형이 남아 있던 2015·2016은 빠졌어. 여기에 날이 지나면 틀려지는 '오늘', 읽기 힘든 현상수배 글씨까지 남아 있어서 9.5는 아직 못 줘.

> BLUE가 지난번에 '작은 가장자리만 남았다'며 9.5를 줬을 때, 바로 그 가족 찾기 상자에서 예비고사 사실 오류가 나왔어. 이번에도 2014를 고친 문장이 2015·2016 카드와 부딪혀. PURPLE의 시제 아이디어는 맞는 방향이지만, 저자가 '오늘'을 고정값으로 넣어서 내일이면 틀린 말이 되는 새 구멍을 만들었어.

- A/B형 설명이 반쪽이야. '숫자 읽는 법' 1번과 3번, 오답 노트 9번째 줄은 2014만 'A/B형을 골라 본 해라 견주기 어렵다'고 해. 그런데 같은 페이지의 2015 카드는 '수학 B형 만점자가 4%', 2016 카드는 '국어·수학 A/B형은 이 해까지 유지'라고 써. 그러니까 국어·수학을 A/B형 중 골라 볼 수 있던 2015(29명)와 2016(16명)도 2014와 같은 문제를 안고 있어. 고1은 '2014만 특별하고 2015·2016은 다른 해와 같은 기준'이라고 읽게 돼. 1번 문구를 '2014~2016학년도는 A/B형을 골라 봤기 때문에'로 넓히고 3번 예시도 함께 고쳐야 해.
- 시간이 지나면 틀려지는 말을 코드에 박아 넣었어. findOut의 verb가 yr===2027일 때 '오늘 봤어요'로 고정돼 있어. 날짜를 확인하는 코드가 없어서 내일부터, 그리고 내년 독자에게는 거짓말이 돼. 2027 카드의 '방금 치른 수능'도 마찬가지야. '확인한 것만 적는다'면서 D-카운트는 거절해 놓고, 상대 시점 낱말은 그대로 둔 셈이야. '2026년 11월 19일에 봤어요'처럼 절대 날짜로 쓰거나, new Date()로 기준일과 비교해서 분기해야 해.
- 현상수배 줄이 거의 안 읽혀. span에 class="src hand"를 붙였지만 .card .src(0,2,0)가 .hand(0,1,0)보다 우선해서 font-size는 .78rem으로 남아. 그런데 font-family는 Nanum Pen Script로 바뀌어. 손글씨 폰트를 12px대로 쓰면 고1 휴대폰 화면에서 글씨가 뭉개져. 독자에게 '숙제'를 내는 문장이 페이지에서 가장 읽기 어려운 글씨가 된 거야. .card .src.hand{font-size:1.1rem}처럼 따로 크기를 줘야 해.
- 가족 찾기 문구가 고1에게 맞지 않아. '1~2월에 태어나 한 해 일찍 학교에 간 빠른년생'이라고 썼지만, 당시 1~2월생은 그해 학년으로 들어가는 게 기준이었어. '일찍 간' 게 아니라 그게 보통이었어. 부모님께 물어보면 '난 일찍 간 게 아니라 원래 그랬다'는 말을 듣게 돼. 또 1993학년도(1974년생)에는 재수 링크만 있고 빠른년생 안내는 없는데, 1994학년도에서는 '빠른년생이면 1993 학력고사'를 보여 줘. 해마다 안내 규칙이 달라.
- 검증한 범위가 좁아. 저자가 직접 400px 실폭은 못 쟀다고 했어. 그런데 이번에 링크가 최대 5개(1994 1차·2차가 두 번씩)까지 한 줄로 이어지는 findOut이 새로 생겼어. 그 줄이 좁은 폭에서 줄바꿈되는지 확인하지 않고 '가로 스크롤 없음'이라고 할 수는 없어.

### 🔵 BLUE — 9.5점

BLUE가 보기에 이번 라운드는 새 기능이 만든 구멍을 막으면서 원래 구조는 하나도 다치지 않은 수정이에요. 가족 찾기가 예비고사, 학력고사, 수능, 빠른년생 폐지, 미래 시제까지 맞게 말해요. 오답 노트와 현상수배 덕분에 '확인한 것만 적는다'는 원칙이 독자가 눌러 보고 직접 확인할 수 있는 활동이 됐어요. 고1용 백과로 9.5를 정직하게 줄 수 있어요.

> RED에게: 지난번에 짚은 여섯 가지(예비고사 범위, 1994 빠른년생, 2014 '같은 기준', 1999 표준점수, '알려진' 용어, 1999·2027 문구, 오답 노트 누락)가 모두 diff로 확인돼요. 특히 저자가 자기 실수를 오답 노트 9번째 줄에 그어 놓은 것은 RED 기준의 정직성을 넘어섰다고 봐요. PURPLE에게: 세 아이디어(링크 결과, 현상수배, 오답 노트 링크)가 모두 새 기호 없이 글과 링크만으로 들어가서 흑백 공책의 절제가 지켜졌어요.

- 꼭 지켜야 할 강점 1, 가족 찾기가 정직하게 나뉘어요. 학년도가 1982 앞이면 예비고사(1969~1981), 1982~1993이면 학력고사, 1993이면 재수 1994 1차·2차 링크가 나와요. 빠른년생 안내는 b<=2002일 때만 나와요(2008년 입학이 마지막인 것과 맞아요). verb 하나로 '보게 돼요/오늘 봤어요/봤어요'를 고르고, 2030 뒤는 막다른 길 대신 2029 칸 찍기로 이어져요. 사실 오류 두 가지(1960년대생 학력고사, 1994의 빠른년생)가 모두 분기 한 줄씩으로 풀렸어요. 앞으로 문구를 더할 때도 이 if 순서(1982 → 1994 → 2029 → 일반)를 지켜 주세요.
- 꼭 지켜야 할 강점 2, 자동 이동을 빼고 링크로 바꾼 판단이 좋아요. yearLink가 cardOf와 idOf로 코드가 만든 숫자와 id만 innerHTML에 넣어서 XSS 걱정이 없어요. 링크는 기존 a.goto 위임과 goCard를 그대로 써요. '보통' 해만 <b>로 굵게 한 것도 맞아요. 안내 글이 화면 밖으로 사라지던 YELLOW의 마찰도 함께 풀렸어요.
- 꼭 지켜야 할 강점 3, 오답 노트가 자기 고백에서 '확인 활동'이 됐어요. 10줄 모두 고친 카드로 가는 a.goto 링크이고, 이번 라운드에 저자 자신이 만든 실수('2014는 같은 기준')까지 <s>로 그었어요. RED가 걱정한 '보기 좋은 것만 고른 홍보 문구'와 반대되는 증거예요. #f-3 대신 #y-2018로 이은 거절 이유(앵커는 필터를 켜지 않음)도 옳아요.
- 꼭 지켜야 할 강점 4, 현상수배가 새 기호 없이 들어갔어요. wanted는 2001과 2002 두 해에만 있고, drawCards의 src 줄에서 우선순위가 src → wanted → 일반 안내로 정해져 있어요. 그래서 출처를 찾아 src를 넣으면 kindOf가 점을 바꾸고 현상수배 줄은 저절로 사라져요. 데이터 한 칸만 고치면 되는 이 구조를 지켜 주세요. 범례 '기록 없음(모름)'과 숫자 읽는 법 2번이 Q2와 같은 말이 됐고, 화면에서 '알려진'은 오답 노트 <s> 한 곳에만 남아 있는 것도 확인했어요.
- 꼭 지켜야 할 강점 5, 사실을 보강하는 문장이 짧고 쉬워요. 1999 카드는 영역 이름을 먼저 풀고, 6번은 '표준점수도 함께 나왔지만 중심은 원점수'라고 시대 이름과 카드를 이어요. 1994 1차는 '한여름에 본 첫 수능', 2027은 '다만 화살표는 예언이 아니에요'예요. 모두 한 문장씩 더한 것이라 존댓말 톤과 길이를 해치지 않았어요.
- 아주 작은 다듬을 점이에요(감점 없음). 첫째, .hand가 font-size:1.5rem이라 class="src hand"인 현상수배 한 줄이 휴대폰에서 두세 줄짜리 큰 손글씨가 돼요. .src.hand{font-size:1.15rem}처럼 조금 줄이면 카드 본문보다 튀지 않아요. 둘째, 2027 '오늘 봤어요'는 기준일 2026-11-19에만 딱 맞는 말이에요. 내일 독자를 생각하면 '2026년 11월 19일에 봤어요'가 더 오래 맞아요.

### 🟡 YELLOW — 9.5점

YELLOW가 보기에 지난 라운드에 낸 세 가지가 모두 들어갔어요. 예비고사와 학력고사 분기, 자동 이동 대신 빠른년생·보통·재수 링크, 1994 1차가 8월이었다는 이야기예요. 첫 화면 괄호를 늘리는 안을 거절한 이유(첫 문장과 겹침)도 맞아요. 이제 가족 찾기가 1950년생부터 2015년생까지 어느 해를 넣어도 틀린 말이나 막다른 길 없이 할 일을 알려 줘요. 남은 것은 다듬기 수준이라 고1용 백과로 9.5를 줄게요.

> RED가 지적한 가족 찾기의 사실 오류(1960년대 초 출생에게 '학력고사'가 나오던 것, 1994에 '빠른년생이면 1993학년도'가 수능처럼 나오던 것)와 2014 '같은 기준' 모순은 이번에 코드와 문구에서 모두 고쳐진 것을 확인했어요. PURPLE의 시제 지적도 verb 분기로 해결됐어요. 그래서 BLUE의 9.5에 이번에는 저도 동의해요.

- [확인, 사실 오류 해결] 코드를 직접 따라가 봤어요. yr<1982이면 예비고사(1969~1981학년도), 1982~1993이면 학력고사, 1993이면 재수 1994 1차·2차 링크가 나와요. b>2002이면 빠른년생 안내를 내지 않고, 2009년생은 '2028학년도 수능을 보게 돼요', 2008년생은 '오늘 봤어요'가 나와요. DATA에 2028·2029 칸이 있어서 링크가 빈칸으로 빠지지도 않아요. min=1950 + 19 = 1969로 예비고사 첫해와 딱 맞는 것도 좋아요.
- [칭찬] 결과를 a.goto 링크로 바꾼 것은 제 안 그대로예요. yearLink가 1994만 1차·2차로 나누고 '보통'만 <b>로 감싸서, 기본 해가 한눈에 보여요. 링크에 들어가는 값이 코드가 만든 숫자와 idOf뿐이라 innerHTML도 안전해요. 오답 노트 10줄이 모두 고친 카드로 이어지는 것도 '확인하는 백과'라는 성격을 끝까지 지켜요.
- [아이디어 1, 데이터 재사용] 결과 문장의 '보통' 링크 뒤에 그해 카드의 keyword를 괄호로 붙이세요. 예를 들면 `보통 2001(역대급 물수능)`, `보통 2028(바뀌는 수능 첫해)`처럼요. const k=cardOf(yr)[0]?.keyword; 한 줄이면 되고, 새 사실을 쓰지 않고 이미 있는 데이터만 써요. 그러면 '물이었는지 불이었는지 물어봐요'라는 안내에 바로 꺼낼 질문 거리가 생겨요.
- [아이디어 2, 현상수배 마무리] 2001·2002 현상수배 줄 끝에 '찾으면 RED처럼 알려 주세요'를 붙이고, 그 말을 오답 노트(details)로 가는 링크로 만드세요. 그러면 찾는 활동에서 고치는 기록까지 하나로 이어져요. details에 id='fixnote'를 주고 a href='#fixnote'로 걸면 JS는 필요 없어요.
- [작은 정합성] submit 핸들러의 범위 검사는 b<1900인데 input은 min=1950이에요. 브라우저의 기본 검사가 보통 막아 주지만, 그 검사가 꺼진 환경에서 1940을 넣으면 1959학년도를 '예비고사를 봤어요(1969~1981학년도)'라고 말하게 돼요. 조건을 b<1950으로 맞추고 '1950년생부터 찾을 수 있어요'라고 안내하세요.
- [선택, 편의] 마지막에 넣은 태어난 해를 localStorage에 try/catch로 감싸 기억해 두세요. 그러면 카드를 보고 돌아왔을 때 다시 입력할 필요가 없어요. 기존 저장소 패턴을 그대로 쓰면 되고, 저장되지 않아도 화면은 똑같이 움직여요.

### 🟣 PURPLE — 9.5점

PURPLE가 보기에 이번 라운드에서 제가 낸 아이디어 세 가지(결과를 링크로, 출처 현상수배, 오답 노트 링크)가 모두 새 기호 없이 들어갔어요. 시제도 해마다 맞게 바뀌어요. 그래서 이 백과는 이제 '읽는 백과'를 넘어 '가족과 함께 쓰고 고치는 백과'가 됐어요. 남은 것은 점수를 깎을 정도가 아닌 작은 다듬기와 덤으로 넣을 아이디어뿐이라, 고1용 백과로 9.5를 줘요.

> RED가 지난번에 짚은 1960년생 학력고사 오류, '2014는 같은 기준'이라는 모순, 범례의 '알려진'은 모두 코드와 화면에서 고쳐진 것을 확인했어요. 오답 노트도 RED 요구대로 이번 라운드에 고친 것까지 10줄을 빠짐없이 적었어요. 다만 RED의 날짜 기준으로 보면 '오늘 봤어요'는 하루 뒤에 틀려지는 문장이라, 기준일에 묶는 한 줄만 더 고치면 돼요.

- [칭찬] 가족 찾기가 이제 끝까지 정직해요. yr<1982는 예비고사, 1982~1993은 학력고사, 1993은 '재수 1994 1차·2차' 링크로 나뉘어요. 빠른년생 안내는 b<=2002일 때만 나오고, 2028·2029·2030년 뒤로는 시제와 할 일이 바뀌어요. 링크 값은 cardOf/idOf로 코드가 만든 것뿐이라 innerHTML도 안전해요. input의 min=1950이 폼 검증으로 1949 이하 제출을 막아 주니까, 예비고사 문구(1969~1981)가 1969년 전 해로 잘못 나가지도 않아요.
- [바로 고칠 것: '오늘'은 하루 뒤에 틀려요] 2008년생을 넣으면 '2027학년도 수능을 오늘 봤어요'가 떠요. 이 페이지는 날짜를 계산하지 않는 고정된 글(D-카운트 거절)이라서, 내일 읽는 학생에게는 틀린 말이 돼요. verb를 yr===2027?'봤어요(2026년 11월 19일, 이 백과의 기준일)':…처럼 기준일에 묶으면, 하단 기준일 문장과 같은 원칙(확인된 날짜만 적기)이 돼요.
- [아이디어1: 가족에게 물어볼 한 문장 만들기] 지금 결과는 링크만 주고, 무엇을 물어볼지는 학생에게 맡겨요. 이렇게 구현해 보세요. 보통 해 카드 r=cardOf(yr)[0]을 찾고, r.future가 아니면 msg 끝에 `<p class="hand">물어볼 말: "그해 수능을 사람들이 '${r.keyword}'이라고 불렀다는데, 정말 그렇게 느꼈어요?"</p>`를 붙여요. keyword는 저자가 쓴 DATA 값이라 안전하고, 1994는 1차 카드 keyword를 쓰면 돼요. 이 한 줄이 '물이었는지 불이었는지 물어봐요'라는 안내를 실제 대화 첫마디로 바꿔 줘요. 새 기호는 필요 없어요.
- [아이디어2: 카드 주소를 가족에게 보내기] 카드는 JS가 나중에 그려서, #y-1995 같은 주소로 페이지를 열면 브라우저가 그 카드로 가지 못해요. drawCards 뒤에 `if(/^#y-[\w-]+$/.test(location.hash))goCard(location.hash.slice(1));` 한 줄을 넣으세요. 그리고 goto 클릭 때 history.replaceState(null,'',href)로 주소를 바꾸면, 학생이 '엄마 수능 카드' 주소를 메신저로 바로 보낼 수 있어요. 정규식으로 id 모양만 받으니 주입 걱정도 없어요.
- [아이디어3: 오답 노트도 스스로 세기] rebound-count처럼 summary를 '이 백과가 고친 것 (오답 노트 <span id="fix-count">10</span>줄)'로 바꾸고, JS에서 `$('#fix-count').textContent=document.querySelectorAll('.fix li').length`로 채우세요. 다음에 2001·2002 현상수배가 풀려서 한 줄을 더하면 숫자가 저절로 맞아요. 그러면 '고쳐지는 백과'라는 말이 데이터와 이어져요.
- [작은 확인] 1962년생(1981학년도 예비고사)은 재수하면 1982학년도 첫 학력고사를 봤을 텐데, 1993→1994와 달리 이 경계에는 안내가 없어요. yr===1981일 때 '재수를 했다면 1982학년도 첫 학력고사를 봤을 수 있어요(이 백과에는 칸이 없어요)'를 한 줄 붙이면, 제도가 바뀐 경계를 다루는 방식이 두 곳에서 같아져요.
