# @wwa/confhist

Track JSON/YAML/TOML config files in SQLite, surface key-level diffs across versions.

## Usage

```bash
npx wwa confhist track config.yaml          # snapshot current state
npx wwa confhist diff config.yaml HEAD~2    # compare to 2 snapshots ago
npx wwa confhist log config.yaml            # show full change history
```
