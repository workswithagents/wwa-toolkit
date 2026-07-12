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

// Phase 2 will populate this with all tools
// import { register as registerGitCtx } from '../../git-ctx/src/cli.js';
// toolRegistry.push({ name: 'git-ctx', description: 'Export repo structure into AI-friendly context', register: registerGitCtx });

for (const tool of toolRegistry) {
  tool.register(program);
}

program.parse(process.argv);
