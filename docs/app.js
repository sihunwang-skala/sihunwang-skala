const copy = {
  ko: {
    skip:"본문으로 이동", navExperience:"경력", navEducation:"학력", navProjects:"프로젝트", navSkills:"기술",
    summary:"Agentic RAG, Tool Routing, LLM Evaluation, HITL을 활용해 실제 업무에 적용할 수 있는 AI Agent와 데이터 파이프라인을 개발합니다.",
    viewExperience:"경력 보기", viewEducation:"학력 보기", viewProjects:"프로젝트 보기",
    locationLabel:"위치", educationLabel:"학력", focusLabel:"관심 직무",
    experienceTitle:"경력", experienceSubtitle:"최신순",
    flitto1:"LG전자와 Olive Young 다국어 AI 번역 프로젝트에서 Fluency Agent를 개발하고 언어와 도메인별 Workflow Prompt를 최적화했습니다.",
    flitto2:"LLM 품질 평가 체계와 Benchmark 기준을 수립하고, 도메인 전문가 기반 HITL 검증과 PoC를 운영해 외부 검수 200건 중 195건의 무수정 통과를 달성했습니다.",
    kdn1:"국세청 API 기반 납세 여부 확인과 국가 농업통계 조사에 필요한 외부 데이터 수집, 식별자 Mapping, 검증, Excel 처리를 Python으로 자동화했습니다.",
    kdn2:"API 조회 오류 보완, 예외 처리, 실행 로그를 구현해 약 3시간의 반복 업무를 최종 검증 10분 수준으로 단축했습니다.",
    iea1:"고령자 개인 맞춤형 건강정보 Agent를 위해 건강정보 조회와 논문 검색을 선택하는 Tool Routing과 Agent Workflow를 설계했습니다.",
    iea2:"Hybrid Search 기반 Agentic RAG Pipeline과 Benchmark 비교 실험을 구현해 답변 품질 점수를 75.3%에서 91.5%로 개선했습니다.",
    ta1:"대학원생 대상 Federated Learning 강좌의 실습 4회와 프로그래밍 과제 3개의 설계, 출제, 채점을 담당했습니다.",
    aibm1:"ML과 DL 모델의 구조와 Parameter를 비교하고 Federated Learning을 검증해 CNN 정확도 98%를 달성했습니다.",
    officialSite:"공식 웹사이트", labPeople:"연구실 구성원", labSite:"연구실 웹사이트", khu:"경희대학교 빅데이터응용학과",
    educationTitle:"학력", gtDegree:"M.S. Computer Science, Artificial Intelligence, 현재 휴학", uiucDegree:"B.S. Statistics, Minor in Computer Science",
    projectsTitle:"대표 프로젝트",
    healthProject:"LangGraph 기반 Research Agent와 Reviewer Agent, Tool Routing, Hybrid Search RAG를 구현하고 600문항 Benchmark에서 98.67% 정확도와 API 오류 0건을 확인했습니다.",
    translationProject:"다국어 번역 Workflow를 위한 Fluency Agent, 언어별 Prompt, LLM 평가 기준, 전문가 HITL 검증 절차를 설계했습니다.",
    pipelineProject:"API, Selenium, Beautiful Soup, OpenPyXL을 활용해 조사 데이터 수집과 검증, 문서 처리를 자동화했습니다.",
    skillsTitle:"기술", recognitionTitle:"기여와 수상", openSource:"UIUC STAT 420 응용통계학 교과서 기여자", mathAward:"개인 2위, 단체 1위, 2017년과 2018년"
  },
  en: {
    skip:"Skip to content", navExperience:"Experience", navEducation:"Education", navProjects:"Projects", navSkills:"Skills",
    summary:"I build AI agents and data pipelines for real workflows using Agentic RAG, Tool Routing, LLM Evaluation, and human-in-the-loop validation.",
    viewExperience:"View experience", viewEducation:"View education", viewProjects:"View projects",
    locationLabel:"Location", educationLabel:"Education", focusLabel:"Target roles",
    experienceTitle:"Experience", experienceSubtitle:"Reverse chronological",
    flitto1:"Developed a Fluency Agent and optimized language-specific and domain-specific workflow prompts for LG Electronics and Olive Young multilingual AI translation projects.",
    flitto2:"Established LLM quality evaluation and benchmark criteria and ran expert HITL validation and PoC experiments, achieving 195 no-edit passes across 200 externally reviewed outputs.",
    kdn1:"Automated external data collection, identifier mapping, validation, and Excel processing in Python for tax-payment verification and a national agricultural statistics survey.",
    kdn2:"Added API fallback logic, exception handling, and execution logs, reducing a recurring three-hour workflow to approximately ten minutes of final verification.",
    iea1:"Designed Tool Routing and an Agent workflow that selects between personal health-data retrieval and research search for a senior health-information assistant.",
    iea2:"Built a Hybrid Search Agentic RAG pipeline and benchmark experiments, improving the answer-quality score from 75.3% to 91.5%.",
    ta1:"Led four graduate-level Federated Learning labs and designed, assigned, and graded three programming assignments.",
    aibm1:"Compared ML and DL architectures and validated Federated Learning, achieving 98% CNN accuracy.",
    officialSite:"Official website", labPeople:"Lab people", labSite:"Lab website", khu:"Kyung Hee University, Applied Big Data",
    educationTitle:"Education", gtDegree:"M.S. Computer Science, Artificial Intelligence, currently on leave", uiucDegree:"B.S. Statistics, Minor in Computer Science",
    projectsTitle:"Selected Projects",
    healthProject:"Built LangGraph-based Research and Reviewer agents, Tool Routing, and Hybrid Search RAG, reaching 98.67% accuracy on a 600-question benchmark with zero API errors.",
    translationProject:"Designed a Fluency Agent, language-specific prompts, LLM evaluation criteria, and expert HITL validation for a multilingual translation workflow.",
    pipelineProject:"Automated research-data collection, validation, and document processing with APIs, Selenium, Beautiful Soup, and OpenPyXL.",
    skillsTitle:"Skills", recognitionTitle:"Contributions and Awards", openSource:"Credited contributor to the UIUC STAT 420 textbook", mathAward:"Individual 2nd place and Team 1st place, 2017 and 2018"
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
