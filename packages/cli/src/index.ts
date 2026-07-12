#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .name('wwa')
  .description('Works With Agents toolkit — CLI tools for agent infrastructure')
  .version('0.1.0');

// Dynamic tool registration — auto-discovers @wwa/* packages
// Tools register themselves via their cli.ts module exports
const toolRegistry: Array<{ name: string; description: string; register: (program: Command) => void }> = [];

// @wwa/md2slides — Convert markdown files to self-contained HTML slide decks
import { register as registerMd2slides } from '../../md2slides/src/cli.js';
toolRegistry.push({ name: 'md2slides', description: 'Convert markdown files to self-contained HTML slide decks', register: registerMd2slides });

// @wwa/jsonmask — Mask sensitive JSON fields by dot-notation path
import { register as registerJsonmask } from '../../jsonmask/src/cli.js';
toolRegistry.push({ name: 'jsonmask', description: 'Mask sensitive JSON fields (API keys, secrets) by dot-notation path', register: registerJsonmask });

// @wwa/confhist — Track config files in SQLite, surface key-level diffs
import { register as registerConfhist } from '../../confhist/src/cli.js';
toolRegistry.push({ name: 'confhist', description: 'Track JSON/YAML/TOML config files in SQLite, surface key-level diffs', register: registerConfhist });

// @wwa/watchalert — Watch files/dirs for pattern changes, fire desktop notifications
import { register as registerWatchalert } from '../../watchalert/src/cli.js';
toolRegistry.push({ name: 'watchalert', description: 'Watch files/dirs for pattern changes, fire desktop notifications', register: registerWatchalert });

// @wwa/git-ctx — Export repo structure + key files into AI-friendly context
import { register as registerGitCtx } from '../../git-ctx/src/cli.js';
toolRegistry.push({ name: 'git-ctx', description: 'Export repo structure + key files into an AI-friendly context document', register: registerGitCtx });

// @wwa/todo-scout — Scan codebases for TODO/FIXME/HACK comments with git blame context
import { register as registerTodoScout } from '../../todo-scout/src/cli.js';
toolRegistry.push({ name: 'todo-scout', description: 'Scan codebases for TODO/FIXME/HACK comments with git blame context', register: registerTodoScout });

// @wwa/curlto — Convert browser-copied curl commands into idiomatic code
import { register as registerCurlto } from '../../curlto/src/cli.js';
toolRegistry.push({ name: 'curlto', description: 'Convert browser-copied curl commands into idiomatic code (Python, JS, Go)', register: registerCurlto });

// @wwa/crontxt — Convert natural language time expressions to cron syntax and back
import { register as registerCrontxt } from '../../crontxt/src/cli.js';
toolRegistry.push({ name: 'crontxt', description: 'Convert natural language time expressions to cron syntax and back', register: registerCrontxt });

// @wwa/docdiff — Flag stale docs by comparing public API symbols against actual code
import { register as registerDocdiff } from '../../docdiff/src/cli.js';
toolRegistry.push({ name: 'docdiff', description: 'Flag stale docs by comparing public API symbols against actual code', register: registerDocdiff });

for (const tool of toolRegistry) {
  tool.register(program);
}

program.parse(process.argv);
