import type { Command } from 'commander';

export function register(program: Command) {
  program
    .command('docdiff')
    .description('Flag stale docs by comparing public API symbols against actual code')
    .action(() => import('./index.js').then((m) => m.run()));
}
