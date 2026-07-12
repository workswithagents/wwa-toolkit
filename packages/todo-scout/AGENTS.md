# @wwa/todo-scout — Agent Instructions

Scan a codebase for TODO, FIXME, HACK, XXX, and similar marker comments, annotating each with git blame context.

## Implementation Plan

- Walk the repo tree, respecting `.gitignore`.
- Search file contents for common marker patterns: `TODO`, `FIXME`, `HACK`, `XXX`, `OPTIMIZE`, `BUG`.
- For each match, run `git blame -L <line>,<line> <file>` to get author and date.
- Output a structured report (JSON or table) with file, line, marker type, message, author, and date.
- Support `--since <date>` to only show markers newer than a given date.
- Support `--format json|table` output flag.
