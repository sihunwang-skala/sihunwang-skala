const copy = {
  ko: {
    skip:"본문으로 이동", navExperience:"경력", navEducation:"학력", navProjects:"프로젝트", navSkills:"기술",
    summary:"Agentic RAG, Tool Routing, LLM Evaluation, HITL을 활용해 실제 업무에 적용할 수 있는 AI Agent와 데이터 파이프라인을 개발합니다.",
    viewExperience:"경력 보기", viewEducation:"학력 보기", viewProjects:"프로젝트 보기",
    locationLabel:"위치", educationLabel:"학력", focusLabel:"관심 직무",
    experienceTitle:"경력", experienceSubtitle:"최신순",
    flitto1:"LG전자와 Olive Young 다국어 AI 번역 프로젝트에서 Fluency Agent를 개발하고 언어와 도메인별 Workflow Prompt를 최적화했습니다.",
    flitto2:"LLM 품질 평가 체계와 Benchmark 기준을 수립하고, 도메인 전문가 기반 HITL 검증과 PoC를 운영해 외부 검수에서 97.5%의 무수정 통과율을 달성했습니다.",
    kdn1:"국세청 API 기반 납세 여부 확인과 국가 농업통계 조사에 필요한 외부 데이터 수집, 식별자 Mapping, 검증, Excel 처리를 Python으로 자동화했습니다.",
    kdn2:"API 조회 오류 보완, 예외 처리, 실행 로그를 구현해 약 3시간의 반복 업무를 최종 검증 10분 수준으로 단축했습니다.",
    iea1:"고령자 개인 맞춤형 건강정보 Agent를 위해 건강정보 조회와 논문 검색을 선택하는 Tool Routing과 Agent Workflow를 설계했습니다.",
    iea2:"Hybrid Search 기반 Agentic RAG Pipeline과 Benchmark 비교 실험을 구현해 답변 품질 점수를 75.3%에서 91.5%로 개선했습니다.",
    ta1:"대학원생 대상 Federated Learning 강좌의 실습 4회와 프로그래밍 과제 3개의 설계, 출제, 채점을 담당했습니다.",
    aibm1:"ML과 DL 모델의 구조와 Layer별 Parameter를 분석하고 최소 Parameter 구성으로 모델을 경량화해 성능을 비교했습니다. Federated Learning 기반 CNN 연합학습으로 정확도 98%를 달성했으며 결과를 관련 포럼에 소개했습니다.",
    officialSite:"공식 웹사이트", labPeople:"연구실 구성원", labSite:"연구실 웹사이트", khu:"경희대학교 빅데이터응용학과",
    educationTitle:"학력", rankingLabel:"U.S. News Graduate AI Ranking", rankingSummary:"미국 최상위 AI 대학: Georgia Tech와 UIUC", usNewsRanking:"U.S. News 순위", gtRank:"U.S. News Graduate AI #5", uiucRank:"U.S. News Graduate AI #6", gtDegree:"M.S. Computer Science, Artificial Intelligence", uiucDegree:"B.S. Statistics, Minor in Computer Science",
    projectsTitle:"대표 프로젝트", repository:"Repository",
    healthProject:"LangGraph Supervisor와 Diet, Exercise, Safety, Records Multi-Agent를 구현하고 Query Expansion, Hybrid Search, 근거 인용, Deterministic Safety Rules를 결합해 품질과 안전성을 검증했습니다.",
    translationProject:"MQM 오류 분류, 카테고리별 전문 수정, 결정적 검증과 Rollback, OpenAI Escalation, HITL 승인을 포함한 번역 품질 Agent를 구현했습니다.",
    pipelineProject:"API, Selenium, Beautiful Soup, OpenPyXL을 활용해 조사 데이터 수집과 검증, 문서 처리를 자동화했습니다.",
    usageBarProject:"Claude와 Codex의 5시간 및 주간 사용량을 표시하고 Threshold Alert와 Usage Coach를 제공하는 macOS Menu Bar App을 개발했습니다.",
    skillsTitle:"기술", recognitionTitle:"기여와 수상", openSource:"UIUC STAT 420 응용통계학 교과서 기여자", upstageAward:"아파트 실거래가 예측 Machine Learning 경진대회 Team 2위, 2026년 1월", dataDiveAward:"주가 데이터를 활용한 Machine Learning 분석 경진대회 Team 4위, 2023년 12월", mathAward:"미국 조지아주 동남부 지역 대표 2회, 개인 2위, 단체 1위, 2017년과 2018년", tournamentSite:"대회 공식 페이지", gctmResult:"2017 GCTM 수상 기록"
  },
  en: {
    skip:"Skip to content", navExperience:"Experience", navEducation:"Education", navProjects:"Projects", navSkills:"Skills",
    summary:"I build AI agents and data pipelines for real workflows using Agentic RAG, Tool Routing, LLM Evaluation, and human-in-the-loop validation.",
    viewExperience:"View experience", viewEducation:"View education", viewProjects:"View projects",
    locationLabel:"Location", educationLabel:"Education", focusLabel:"Target roles",
    experienceTitle:"Experience", experienceSubtitle:"Reverse chronological",
    flitto1:"Developed a Fluency Agent and optimized language-specific and domain-specific workflow prompts for LG Electronics and Olive Young multilingual AI translation projects.",
    flitto2:"Established LLM quality evaluation and benchmark criteria and ran expert HITL validation and PoC experiments, achieving a 97.5% no-edit pass rate in external review.",
    kdn1:"Automated external data collection, identifier mapping, validation, and Excel processing in Python for tax-payment verification and a national agricultural statistics survey.",
    kdn2:"Added API fallback logic, exception handling, and execution logs, reducing a recurring three-hour workflow to approximately ten minutes of final verification.",
    iea1:"Designed Tool Routing and an Agent workflow that selects between personal health-data retrieval and research search for a senior health-information assistant.",
    iea2:"Built a Hybrid Search Agentic RAG pipeline and benchmark experiments, improving the answer-quality score from 75.3% to 91.5%.",
    ta1:"Led four graduate-level Federated Learning labs and designed, assigned, and graded three programming assignments.",
    aibm1:"Analyzed ML and DL architectures and layer-level parameters, reduced models to minimal-parameter configurations, and compared performance. Achieved 98% CNN accuracy with Federated Learning and presented the results in a relevant forum.",
    officialSite:"Official website", labPeople:"Lab people", labSite:"Lab website", khu:"Kyung Hee University, Applied Big Data",
    educationTitle:"Education", rankingLabel:"U.S. News Graduate AI Ranking", rankingSummary:"Top AI universities in the U.S.: Georgia Tech and UIUC", usNewsRanking:"U.S. News ranking", gtRank:"U.S. News Graduate AI #5", uiucRank:"U.S. News Graduate AI #6", gtDegree:"M.S. Computer Science, Artificial Intelligence", uiucDegree:"B.S. Statistics, Minor in Computer Science",
    projectsTitle:"Selected Projects", repository:"Repository",
    healthProject:"Built a LangGraph Supervisor with Diet, Exercise, Safety, and Records Multi-Agent subgraphs, combining Query Expansion, Hybrid Search, evidence citations, and deterministic safety rules.",
    translationProject:"Built a translation-quality agent with MQM error classification, category-specific repair, deterministic validation and rollback, OpenAI escalation, and HITL approval.",
    pipelineProject:"Automated research-data collection, validation, and document processing with APIs, Selenium, Beautiful Soup, and OpenPyXL.",
    usageBarProject:"Built a macOS menu bar app that tracks Claude and Codex five-hour and weekly usage, with threshold alerts and a usage coach.",
    skillsTitle:"Skills", recognitionTitle:"Contributions and Awards", openSource:"Credited contributor to the UIUC STAT 420 textbook", upstageAward:"Team 2nd place in an apartment transaction price prediction ML competition, January 2026", dataDiveAward:"Team 4th place in a stock-data Machine Learning analysis competition, December 2023", mathAward:"Two-time Southeast Georgia representative, Individual 2nd place and Team 1st place, 2017 and 2018", tournamentSite:"Official tournament page", gctmResult:"2017 GCTM result"
  }
};

const buttons = document.querySelectorAll("[data-lang]");
const elements = document.querySelectorAll("[data-i18n]");

function setLanguage(language) {
  const selected = copy[language] ? language : "ko";
  document.documentElement.lang = selected;
  elements.forEach((element) => {
    const value = copy[selected][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  buttons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === selected)));
  localStorage.setItem("portfolio-language", selected);
}

buttons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
setLanguage(localStorage.getItem("portfolio-language") || (navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en"));
document.getElementById("year").textContent = new Date().getFullYear();
