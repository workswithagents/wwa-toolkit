# Changesets

Auto-versioning for `@wwa/*` packages.

Every PR that changes packages needs a changeset:

```bash
npx changeset
```

Follow the prompts. Commit the generated `.md` file. On merge to main, CI publishes the bumped packages to npm.
