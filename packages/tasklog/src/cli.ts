import { Command } from 'commander';

export function register(program: Command) {
  program
    .command('tasklog')
    .description('Minimal CLI time tracker in one JSON file — no SaaS, no DB')
    .action(() => import('./index.js').then((m) => m.run()));
}
