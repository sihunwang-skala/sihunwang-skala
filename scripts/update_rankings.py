#!/usr/bin/env python3
"""data/rankings.json -> README.md 의 RANKINGS 구간을 다시 만든다 (표준 라이브러리만 사용)."""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
START, END = "<!-- RANKINGS:START -->", "<!-- RANKINGS:END -->"


def render(data):
    lines = ["### 🎓 Education", ""]
    lines.append("| 학교 | 분야 | 순위 | 출처 |")
    lines.append("|---|---|---|---|")
    for s in data["schools"]:
        for r in s["rows"]:
            lines.append(
                f"| {s['name_ko']} | {r['label_ko']} | **#{r['rank']}** (미국 내) "
                f"| [{r['source']} {r['edition']}]({r['url']}) |"
            )
    lines += ["", "<sub>한국에서 잘 알려지지 않은 학교라 참고용으로 남깁니다. "
              "순위는 매년 바뀌며 공개된 자료 기준입니다.</sub>"]
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
