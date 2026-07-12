import type { Command } from 'commander';

export function register(program: Command) {
  program
    .command('jsonmask')
    .description('Mask sensitive JSON fields (API keys, secrets) by dot-notation path')
    .action(() => import('./index.js').then((m) => m.run()));
}
