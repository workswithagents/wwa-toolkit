# @wwa/envlock — Agent Instructions

## Goal

Build a tool that detects drift between `.env.example` and the actual `.env` file (or other env files like `.env.local`, `.env.production`).

## Core Features

- Parse `.env.example` as the canonical source of required vars
- Compare against one or more target `.env*` files
- Report: missing vars, extra vars, type/value mismatches
- Optionally auto-fix: generate missing keys with placeholder values

## Implementation Notes

- Use plain Node.js `fs` and `path` — no heavy dependencies
- Support `--fix` flag to auto-populate missing vars
- Support `--target` flag to specify which .env file to check
- Output a clear, colorized diff-like report

## CLI Registration

Registered in `packages/cli/src/index.ts` via `register(program)` from `cli.ts`.
