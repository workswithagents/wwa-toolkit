import { Command } from 'commander';

export function register(program: Command) {
  program
    .command('envlock')
    .description('Detect, validate, and sync .env drift — catch missing vars before production')
    .action(() => import('./index.js').then((m) => m.run()));
}
