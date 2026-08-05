---
name: bake-claude-md-files
description: >
  Converts CLAUDE.md rules into automated checks (eslint, phpstan, pint, CI, etc.), removes the automated rules from CLAUDE.md, and verifies everything passes. Frees up agent context by replacing prose with tooling.
user-invocable: true
disable-model-invocation: true
---

Read all CLAUDE.md files in the project, along with the existing tool configurations (eslint, phpstan, pint, package.json scripts, lefthook, git hooks, GitLab CI or GitHub Actions and everything else relevant).

Identify rules in the CLAUDE.md files that can be turned into automated checks. Every rule we can remove is context freed up for the agent.

Before modifying any CLAUDE.md file, present a summary of:

- Which rules will be automated (and by which tool)
- Which rules will be kept (and why - e.g. requires human judgment, context-dependent)

Only proceed after the user approves. Then implement the automated checks, verify everything passes, and only remove a rule from CLAUDE.md after its corresponding check passes. Passing on the current tree is not enough: confirm the check's file globs cover the affected paths and that it runs before code lands (hook or CI).

## Implementation priority

1. **Discover existing tooling first** - inventory linters, test frameworks, static analyzers, CI pipelines, and git hooks before implementing anything
2. **Use native capabilities** - express checks through tools already in the project:
   - Linter/formatter rules (ESLint, Biome, Prettier, Pint, Ruff, gofmt)
   - Static analysis (TypeScript strict, PHPStan, mypy, Rector)
   - Architecture tests (Pest arch, ArchUnit, dependency-cruiser)
   - Git hooks (Lefthook, Husky, pre-commit)
   - CI pipeline steps
3. **Custom scripts only as last resort** - only when no existing tool can express the check
4. **Wire into existing runners** - new checks must run via existing test/lint commands, not new entrypoints

## Keep prose when the feedback loop is late

A format-time auto-fix corrects violations silently, so its prose can always go. A check that fails only at suite time (architecture test, CI step) corrects the agent after the code is written. When the surrounding code mostly violates the rule, neighbors teach the wrong pattern and the agent writes the violation first, every time. Keep a one-line prose rule next to that check, noting what enforces it.

## The trio

- `feed-claude-md-files` adds rules from observed patterns
- `bake-claude-md-files` converts crystallized rules into tooling and removes the prose
- `audit-claude-md-files` prunes and verifies what remains

Run `feed` after a working session, `bake` once enough rules have accumulated to be worth automating, and `audit` when CLAUDE.md files have grown without review.
