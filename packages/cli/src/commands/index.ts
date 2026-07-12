// Tool command registrations — imported by each @wwa/* package
// See packages/cli/src/index.ts for the registry pattern

export interface ToolCommand {
  name: string;
  description: string;
  register(program: Command): void;
}
