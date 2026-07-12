import type { Command } from 'commander';

export function register(program: Command) {
  program
    .command('git-ctx')
    .description('Export repo structure + key files into an AI-friendly context document')
    .action(() => import('./index.js').then((m) => m.run()));
}
