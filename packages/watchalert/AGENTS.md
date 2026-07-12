# watchalert

Watch specified files or directories (recursively) for content matching a regex pattern. When a match is found, fire a desktop notification using the system's native notification API (osascript on macOS, notify-send on Linux). Accept `--path` (file or directory to watch), `--pattern` (regex to match), `--title` (notification title, default: "WatchAlert"), and `--cooldown` (seconds between notifications, default: 5). Use `chokidar` or `fs.watch` for file watching. Deduplicate — don't fire multiple notifications for the same change batch.
