# @wwa/catchhook — Agent Instructions

## Goal

Build a local HTTP server that captures webhook requests and displays them in real-time in the terminal.

## Core Features

- Start an HTTP server (default port 3000, configurable via `--port`)
- Accept POST, GET, PUT, DELETE requests on any path
- Pretty-print request method, path, headers, and body to terminal
- Timestamp each request
- Support `--format json` for structured output

## Implementation Notes

- Use Node.js built-in `http` module — no external server dependency
- Buffer request body, parse JSON if Content-Type is application/json
- Colorize output by HTTP method (green GET, yellow POST, red error)

## CLI Registration

Registered in `packages/cli/src/index.ts` via `register(program)` from `cli.ts`.
