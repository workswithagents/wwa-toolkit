import type { Command } from 'commander';

export function register(program: Command) {
  program
    .command('todo-scout')
    .description('Scan codebases for TODO/FIXME/HACK comments with git blame context')
    .action(() => import('./index.js').then((m) => m.run()));
}
