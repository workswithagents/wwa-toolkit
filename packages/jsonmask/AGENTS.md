# jsonmask

Read JSON from stdin (or file argument), mask values at specified dot-notation paths, output cleaned JSON to stdout. Paths like `api.key` or `credentials.secret` are matched against nested object keys. Masked values are replaced with `"***"`. Support an `--fields` option (comma-separated paths) and a `--mask` option to customize the replacement string (default: `"***"`). Handle arrays at any path level. Gracefully handle missing paths — skip silently, don't error.
