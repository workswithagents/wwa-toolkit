import type { Command } from 'commander';

export function register(program: Command) {
  program
    .command('confhist')
    .description('Track JSON/YAML/TOML config files in SQLite, surface key-level diffs')
    .action(() => import('./index.js').then((m) => m.run()));
}
