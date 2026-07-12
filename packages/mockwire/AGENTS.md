# @wwa/mockwire — Agent Instructions

## Goal

Build a single-file HTTP mock server that reads routes and responses from a YAML specification.

## Core Features

- Parse a YAML spec file that defines routes, methods, status codes, and response bodies
- Start an HTTP server serving those mocks
- Support dynamic responses with placeholder substitution
- Watch mode: reload spec on file changes

## YAML Spec Format (example)

```yaml
routes:
  - method: GET
    path: /api/users
    status: 200
    body:
      users: []
  - method: POST
    path: /api/users
    status: 201
    body:
      id: "{{uuid}}"
```

## Implementation Notes

- Use Node.js built-in `http` module
- Parse YAML with a library like `yaml` or `js-yaml` (add as dependency when implementing)
- Support `--port` and `--spec` CLI flags
- Pretty-print mock hits to terminal

## CLI Registration

Registered in `packages/cli/src/index.ts` via `register(program)` from `cli.ts`.
