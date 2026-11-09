#!/usr/bin/env python3
"""data/rankings.json -> README.md 의 RANKINGS 구간을 다시 만든다 (표준 라이브러리만 사용)."""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
START, END = "<!-- RANKINGS:START -->", "<!-- RANKINGS:END -->"


def render(data):
    lines = ["### Education", ""]
    for s in data["schools"]:
        lines.append(f"- **{s['name']}** — {s['degree']}")
        lines.append(f"  - U.S. News 미국 내 {s['rank_label']} **#{s['rank']}** · [{s['edition']}]({s['url']})")
    lines += ["", f"<sub>AI 중심으로 공부해서 AI 분야 순위를 참고용으로 남깁니다. 학과 전체 순위가 아니며 매년 바뀝니다. [전체 순위 보기]({data['ranking_url']})</sub>"]
    return "\n".join(lines)


def main():
    data = json.loads((ROOT / "data/rankings.json").read_text(encoding="utf-8"))
    readme_path = ROOT / "README.md"
    text = readme_path.read_text(encoding="utf-8")
    block = f"{START}\n{render(data)}\n{END}"
    if START in text and END in text:
        new = re.sub(re.escape(START) + r".*?" + re.escape(END), lambda m: block, text, flags=re.S)
    else:
        new = text.rstrip() + "\n\n" + block + "\n"
    if new != text:
        readme_path.write_text(new, encoding="utf-8")
        print("README updated")
    else:
        print("no change")


if __name__ == "__main__":
    sys.exit(main())
