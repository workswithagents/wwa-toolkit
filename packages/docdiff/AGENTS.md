# @wwa/docdiff — Agent Instructions

Flag stale documentation by comparing documented public API symbols against what actually exists in the code.

## Implementation Plan

- Parse documentation (markdown, JSDoc, typedoc output) to extract documented symbols: functions, classes, methods, interfaces, types.
- Parse source code to extract actual exported symbols.
- Diff the two sets and report:
  - Symbols documented but missing from code (removed but not updated in docs).
  - Symbols in code but missing from docs (new API surface not yet documented).
  - Symbols where the signature/params differ.
- Support TypeScript and JavaScript codebases.
- Output a clear report with actionable items.
- Support `--docs <path>` and `--src <path>` flags.
