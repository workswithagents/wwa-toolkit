import type { Command } from 'commander';

export function register(program: Command) {
  program
    .command('watchalert')
    .description('Watch files/dirs for pattern changes, fire desktop notifications')
    .action(() => import('./index.js').then((m) => m.run()));
}
