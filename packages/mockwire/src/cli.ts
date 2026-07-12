import { Command } from 'commander';

export function register(program: Command) {
  program
    .command('mockwire')
    .description('Single-file HTTP mock server from a YAML spec')
    .action(() => import('./index.js').then((m) => m.run()));
}
