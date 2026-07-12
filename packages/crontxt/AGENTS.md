# @wwa/crontxt — Agent Instructions

Convert between natural language time expressions and cron syntax.

## Implementation Plan

- Parse natural language inputs like "every 5 minutes", "daily at 3am", "every Monday at noon".
- Generate standard 5-field cron expressions (`minute hour day month weekday`).
- Reverse mode: given a cron expression, produce a human-readable description.
- Support common shorthand patterns: `@hourly`, `@daily`, `@weekly`, `@monthly`, `@yearly`.
- Handle edge cases: ranges (`1-5`), steps (`*/15`), lists (`1,15,30`).
- Validate inputs and report errors with helpful messages.
