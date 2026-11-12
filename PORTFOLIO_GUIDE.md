# Portfolio Website Guide

포트폴리오 소스는 `docs/`에 있습니다.

## 파일 구조

- `docs/index.html`: 내용과 링크
- `docs/styles.css`: 디자인과 반응형 Layout
- `docs/app.js`: 한국어와 영어 전환
- `docs/.nojekyll`: GitHub Pages의 Jekyll 처리를 비활성화

## VS Code에서 수정하는 방법

1. 저장소를 Clone합니다.

   ```bash
   git clone https://github.com/sihunwang-skala/sihunwang-skala.git
   cd sihunwang-skala
   code .
   ```

2. VS Code에서 `docs/index.html`, `docs/styles.css`, `docs/app.js`를 수정합니다.
3. 브라우저에서 바로 확인하려면 VS Code의 Live Server 확장을 사용하거나 `docs/index.html`을 엽니다.
4. 수정 내용을 GitHub에 반영합니다.

   ```bash
   git add docs
   git commit -m "Update portfolio"
   git push origin main
   ```

## GitHub Pages 최초 설정

GitHub 저장소에서 한 번만 설정하면 이후에는 `main`에 Push할 때 자동으로 반영됩니다.

1. `Settings`
2. `Pages`
3. `Build and deployment`
4. Source: `Deploy from a branch`
5. Branch: `main`
6. Folder: `/docs`
7. `Save`

예상 주소:

`https://sihunwang-skala.github.io/sihunwang-skala/`

## GitHub Pages와 Vercel의 차이

현재 사이트처럼 HTML, CSS, JavaScript만 사용하는 정적 포트폴리오는 GitHub Pages가 가장 단순합니다. React, Next.js, Serverless Function, Preview Deployment가 필요해질 때 Vercel로 옮기면 됩니다. VS Code는 Hosting 서비스가 아니라 소스 편집 도구입니다.
