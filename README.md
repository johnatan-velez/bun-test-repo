# Bun Test Repository

Test repository for **GUIDE-1949**: Add Bun package manager support to Agent P.

## Purpose

This repository is used to verify that `agentic-patches-ts` correctly:

1. **Detects Bun** as the package manager (via `bun.lock` presence)
2. **Uses `bun` commands** for install, update, and validation
3. **Parses `bun.lock`** to extract resolved dependency versions
4. **Handles dependency updates** with `bun add package@version`

## Setup

```bash
# Install dependencies
bun install

# Run the CLI
bun start greet World

# Build
bun run build

# Test
bun test
```

## Dependencies

| Package | Current Version | Type |
|---------|-----------------|------|
| chalk | ^5.3.0 | production |
| commander | ^12.0.0 | production |
| typescript | ^5.0.0 | dev |

## Testing GUIDE-1949

To test that AGP correctly handles this Bun-managed repository:

1. Push this repo to GitHub
2. Trigger AGP (via Sonatype Guide or manually)
3. Verify AGP:
   - Uses `bun add` for updates (not `npm install`)
   - Runs `bun run build` and `bun test` for validation
   - Correctly identifies the ecosystem as `npm` with package manager `bun`
