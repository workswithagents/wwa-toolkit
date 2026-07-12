# @wwa/git-ctx — Agent Instructions

Export the current git repository structure and key files into a single AI-friendly context document.

## Implementation Plan

- Walk the repo tree, respecting `.gitignore`.
- Collect file paths, sizes, and language detection.
- Include the contents of key files (README, package.json, tsconfig, etc.).
- Output a structured markdown or JSON document suitable for pasting into an LLM context window.
- Support `--max-size` flag to skip files larger than N bytes.
- Support `--format json|markdown` output flag.
