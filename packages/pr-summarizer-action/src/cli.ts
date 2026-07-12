import { Command } from 'commander';

export function register(program: Command) {
  program
    .command('pr-summarize')
    .description('GitHub Action that posts AI-generated PR summary (CLI tool)')
    .action(() => import('./index.js').then((m) => m.run()));
}
