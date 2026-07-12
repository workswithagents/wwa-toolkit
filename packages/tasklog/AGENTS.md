# @wwa/tasklog — Agent Instructions

## Goal

Build a minimal CLI time tracker that stores everything in a single JSON file.

## Core Features

- `tasklog start "description"` — start a new task (auto-stops any running task)
- `tasklog stop` — stop the current running task
- `tasklog list` — show recent tasks with duration
- `tasklog report --today` — summary of today's tracked time
- All data stored in `~/.tasklog.json` (single file, no DB)

## Data Format

```json
{
  "entries": [
    {
      "id": "uuid",
      "description": "my task",
      "startedAt": "2024-01-01T00:00:00Z",
      "stoppedAt": null,
      "duration": null
    }
  ]
}
```

## Implementation Notes

- Use Node.js built-in `fs` and `crypto` (for UUIDs)
- JSON file read/write with atomic writes (write to temp, then rename)
- Pretty-print durations: "1h 23m"
- Support `--file` flag to use a custom JSON file location

## CLI Registration

Registered in `packages/cli/src/index.ts` via `register(program)` from `cli.ts`.
