# @wwa/curlto — Agent Instructions

Convert curl commands (typically copied from browser DevTools "Copy as cURL") into idiomatic code in various languages.

## Implementation Plan

- Parse the curl command: extract method, URL, headers, body, cookies, etc.
- Support `--lang python|javascript|go` to select the target language.
- Generate idiomatic code:
  - Python: `requests` library
  - JavaScript: `fetch` API
  - Go: `net/http`
- Handle common curl flags: `-X`, `-H`, `-d`, `--data-raw`, `--compressed`, `-b`, `-k`.
- Read curl command from stdin, a `--stdin` flag, or positional argument.
