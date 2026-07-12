# @wwa/jsonmask

CLI to mask sensitive JSON fields (API keys, secrets) by dot-notation path. Redact values while preserving document structure.

## Usage

```bash
cat config.json | npx wwa jsonmask --fields apiKey,db.password > sanitized.json
```
