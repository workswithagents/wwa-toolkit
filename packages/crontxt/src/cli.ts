import type { Command } from 'commander';

export function register(program: Command) {
  program
    .command('crontxt')
    .description('Convert natural language time expressions to cron syntax and back')
    .action(() => import('./index.js').then((m) => m.run()));
}
