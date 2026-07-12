# @wwa/pr-summarizer-action — Agent Instructions

## Goal

Build a CLI tool (and GitHub Action) that generates AI-powered PR summaries and posts them as comments.

## Core Features

- Fetch PR diff from GitHub API
- Generate a concise summary using an AI provider
- Post the summary as a PR comment via GitHub API
- Usable as both a CLI tool and a GitHub Action

## CLI Usage

```bash
wwa pr-summarize --repo owner/repo --pr 42 --token $GITHUB_TOKEN
wwa pr-summarize --repo owner/repo --pr 42 --token $GH_TOKEN --provider openai
```

## GitHub Action Usage

```yaml
- uses: workswithagents/pr-summarizer-action@v1
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
    openai-key: ${{ secrets.OPENAI_API_KEY }}
```

## Implementation Notes

- Use `@octokit/rest` for GitHub API (add as dependency when implementing)
- Support multiple AI providers (OpenAI, Anthropic) via configurable `--provider` flag
- Generate deterministic, structured summaries (what changed, why, impact)
- Handle large diffs with truncation/summarization

## CLI Registration

Registered in `packages/cli/src/index.ts` via `register(program)` from `cli.ts`.
