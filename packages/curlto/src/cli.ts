import type { Command } from 'commander';

export function register(program: Command) {
  program
    .command('curlto')
    .description('Convert browser-copied curl commands into idiomatic code (Python, JS, Go)')
    .action(() => import('./index.js').then((m) => m.run()));
}
