# 대표 프로젝트

<p align="right"><a href="README.md">English</a> | <strong>한국어</strong></p>

[포트폴리오](https://sihunwang-skala.github.io/sihunwang-portfolio/)

### [개인화 건강 코칭 Multi-Agent](https://sihunwang-skala.github.io/sihunwang-portfolio/health-agent/)

- **핵심 역량:** LangGraph, Multi-Agent Orchestration, Agentic RAG, Hybrid Retrieval, LLM Evaluation, HITL
- **담당 역할:** 건강 코칭 챗봇의 Supervisor Routing, 전문 Agent Workflow, 개인화 근거 검색, 안전 처리 및 시스템 평가 설계
- **수행 결과:** 200문항 Benchmark에서 **181/200문항(90.5%)** 통과, Single-Agent 시스템 **165/200문항(82.5%)** 대비 향상. 별도 100문항 평가에서 **건강 코칭 외 요청 39/40건(97.5%)** 처리

[Case Study](https://sihunwang-skala.github.io/sihunwang-portfolio/health-agent/) | [Technical Report (PDF)](https://sihunwang-skala.github.io/sihunwang-portfolio/health-agent/report.pdf)

*Benchmark 결과는 개별 구성 요소의 독립적 효과가 아닌 전체 시스템 구조 간 비교입니다.*

### [L10n Quality Agent](https://github.com/sihunwang-skala/l10n-quality-agent)

- **핵심 역량:** LangChain LCEL, Agent Workflow, MQM-Based Evaluation, Tool Routing, Deterministic Validation, HITL
- **담당 역할:** 번역 오류 유형에 따른 수정 전략 선택, 재평가, 수정 실패 시 Rollback을 수행하는 번역 품질 검토 Agent 독립 개발
- **수행 결과:** 숫자, 단위, 보호 용어에 대한 검증 로직과 JSON 실행 기록, 수정 전후 비교, 미해결 사례의 Human Approval Workflow 구현

[Project README](https://github.com/sihunwang-skala/l10n-quality-agent)

### [납세 검증 및 농업통계 Data Pipeline](https://sihunwang-skala.github.io/sihunwang-portfolio/#proj-pipeline)

- **핵심 역량:** Python, REST API Integration, Selenium, BeautifulSoup, OpenPyXL, Data Validation, Error Handling
- **담당 역할:** 국세청 API 연동, 식별자 매핑, 오류 복구 및 Excel 갱신 자동화 Pipeline 구축. **Excel 30개 시트, 총 11,205행 및 3,550열**에서 **고유 식별번호 645건** 처리 및 **2,346셀** 자동 기입
- **수행 결과:** 주간 갱신 시간 **60분에서 10분**으로 단축, **API 실패 45건** 재처리 성공
