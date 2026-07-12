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

import { register as registerMd2slides } from '../../md2slides/src/cli.js';
import { register as registerJsonmask } from '../../jsonmask/src/cli.js';
import { register as registerConfhist } from '../../confhist/src/cli.js';
import { register as registerWatchalert } from '../../watchalert/src/cli.js';

toolRegistry.push(
  { name: 'md2slides', description: 'Convert markdown files to self-contained HTML slide decks', register: registerMd2slides },
  { name: 'jsonmask', description: 'Mask sensitive JSON fields (API keys, secrets) by dot-notation path', register: registerJsonmask },
  { name: 'confhist', description: 'Track JSON/YAML/TOML config files in SQLite, surface key-level diffs', register: registerConfhist },
  { name: 'watchalert', description: 'Watch files/dirs for pattern changes, fire desktop notifications', register: registerWatchalert },
);

for (const tool of toolRegistry) {
  tool.register(program);
}

program.parse(process.argv);
