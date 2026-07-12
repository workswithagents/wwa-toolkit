import { Command } from 'commander';

export function register(program: Command) {
  program
    .command('catchhook')
    .description('Local HTTP server that captures webhook requests in real-time terminal view')
    .action(() => import('./index.js').then((m) => m.run()));
}
