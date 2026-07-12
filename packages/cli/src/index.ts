#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .name('wwa')
  .description('Works With Agents toolkit — CLI tools for agent infrastructure')
  .version('0.1.0');

const toolRegistry: Array<() => Promise<void>> = [];

// ── Tool registrations (dynamic imports via workspace deps) ──

toolRegistry.push(async () => { const { registerTool } = await import('@wwa/git-ctx'); registerTool(program); });
toolRegistry.push(async () => { const { registerTool } = await import('@wwa/todo-scout'); registerTool(program); });
toolRegistry.push(async () => { const { registerTool } = await import('@wwa/curlto'); registerTool(program); });
toolRegistry.push(async () => { const { registerTool } = await import('@wwa/crontxt'); registerTool(program); });
toolRegistry.push(async () => { const { registerTool } = await import('@wwa/docdiff'); registerTool(program); });
toolRegistry.push(async () => { const { registerTool } = await import('@wwa/envlock'); registerTool(program); });
toolRegistry.push(async () => { const { registerTool } = await import('@wwa/catchhook'); registerTool(program); });
toolRegistry.push(async () => { const { registerTool } = await import('@wwa/mockwire'); registerTool(program); });
toolRegistry.push(async () => { const { registerTool } = await import('@wwa/tasklog'); registerTool(program); });
toolRegistry.push(async () => { const { registerTool } = await import('@wwa/pr-summarizer-action'); registerTool(program); });
toolRegistry.push(async () => { const { registerTool } = await import('@wwa/md2slides'); registerTool(program); });
toolRegistry.push(async () => { const { registerTool } = await import('@wwa/jsonmask'); registerTool(program); });
toolRegistry.push(async () => { const { registerTool } = await import('@wwa/confhist'); registerTool(program); });
toolRegistry.push(async () => { const { registerTool } = await import('@wwa/watchalert'); registerTool(program); });

void (async () => {
  await Promise.all(toolRegistry.map(fn => fn()));
  program.parse(process.argv);
})();
