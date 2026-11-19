export const meta = {
  name: 'suneung-encyclopedia',
  description: '수능 연대별 데이터를 3명의 연구 에이전트가 나눠 수집하고 검수 에이전트가 교차 확인',
  phases: [{ title: 'Research' }, { title: 'Check' }],
}
const SCHEMA = {
  type: 'object',
  properties: {
    years: { type: 'array', items: { type: 'object', properties: {
      year: { type: 'string', description: '학년도 예: 1994(1차)' },
      perfect: { type: 'string', description: '전 과목 만점자 수(대략이면 약/추정 표기, 모르면 "자료 없음")' },
      difficulty: { type: 'integer', description: '1(물수능)~5(불수능)' },
      keyword: { type: 'string', description: '그해 별명 2~6자' },
      story: { type: 'string', description: '고1에게 말하듯 쉬운 존댓말 1~2문장' },
    }, required: ['year','perfect','difficulty','keyword','story'] } },
  },
  required: ['years'],
}
const ERAS = [
  '1994학년도(1차·2차 2회 시행)부터 2004학년도까지',
  '2005학년도(7차 교육과정, 표준점수 도입)부터 2016학년도까지',
  '2017학년도(한국사 필수)부터 2026학년도까지',
]
const results = await pipeline(ERAS,
  era => agent(`대한민국 대학수학능력시험(수능)의 ${era} 각 학년도 정보를 정리해. 웹 검색 없이 알고 있는 지식으로 빠르게. 학년도마다 한 항목: 전 과목 만점자 수(만점 기준이 400점/표준점수 시기 등 다르면 짧게 표기), 체감 난이도 1~5, 별명 키워드, 고1 학생에게 설명하듯 쉬운 이야기. 불확실한 수치는 '약' 또는 '추정'을 붙여. 90초 안에 끝내.`, { phase: 'Research', label: `research:${era.slice(0,9)}`, schema: SCHEMA, effort: 'low' }),
  (r, era) => agent(`다음은 수능 ${era} 데이터야. 명백히 틀린 만점자 수나 난이도만 고쳐서 같은 형식으로 돌려줘. 고칠 게 없으면 그대로. 웹 검색 없이 60초 안에.\n${JSON.stringify(r)}`, { phase: 'Check', label: `check:${era.slice(0,9)}`, schema: SCHEMA, effort: 'low' }).then(v => v || r),
)
return results.filter(Boolean).flatMap(r => r.years)