import type { Command } from 'commander';

export function register(program: Command) {
  program
    .command('md2slides')
    .description('Convert markdown files to self-contained HTML slide decks — zero JS framework, zero npm')
    .action(() => import('./index.js').then((m) => m.run()));
}
