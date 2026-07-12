# wwa-toolkit

**Works With Agents toolkit** — CLI tools for agent infrastructure.

## Structure

```
wwa-toolkit/
├── packages/
│   ├── cli/            ← entry point: `npx wwa <tool>`
│   ├── git-ctx/        ← @wwa/git-ctx
│   ├── todo-scout/     ← @wwa/todo-scout
│   └── ...             ← 14+ tools
├── turbo.json          ← pipeline config
└── package.json        ← workspaces
```

## Conventions

- Each package is publishable as `@wwa/<name>`
- Commits: Conventional Commits
- PRs: lazy consensus (merge after 72h if no objections)
- New tools: add package in `packages/`, register in CLI

## Adding a new tool

1. Create `packages/<slug>/` from template
2. Export `register(program: Command)` from `src/cli.ts`
3. Wire into `packages/cli/src/index.ts`
4. Run `turbo run build` to verify
