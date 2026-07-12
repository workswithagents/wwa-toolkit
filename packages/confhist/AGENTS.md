# confhist

Track JSON/YAML/TOML configuration files in a local SQLite database (stored at `.confhist.db` or a configurable path). Each `track` command parses the config file into a flat key-value map (dot-notation keys) and stores it as a snapshot with a timestamp. The `diff` command compares two snapshots and outputs added, removed, and changed keys with before/after values. The `log` command lists all snapshots for a file with timestamps. Support JSON, YAML, and TOML formats auto-detected by file extension.
