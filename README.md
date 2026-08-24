# bake-claude-md-files

> [!IMPORTANT] **This repo has moved.** The skill now lives as `/bonsai:bake` in the [bonsai plugin](https://github.com/publicala/claude-plugins/tree/main/plugins/bonsai) inside [publicala/claude-plugins](https://github.com/publicala/claude-plugins). Install with `/plugin marketplace add publicala/claude-plugins` then `/plugin install bonsai@publicala`. This repo is archived and kept for history.

![bake-claude-md-files banner](banner.png)

Claude Code skill - converts CLAUDE.md rules into automated checks (eslint, phpstan, pint, CI, etc.), freeing up agent context.

The CLAUDE.md quartet: [feed-claude-md-files](https://github.com/publicala/feed-claude-md-files-skill) adds rules from observed patterns, [bake-claude-md-files](https://github.com/publicala/bake-claude-md-files-skill) converts crystallized rules into tooling, [audit-claude-md-files](https://github.com/publicala/audit-claude-md-files-skill) prunes and verifies what remains, and [split-claude-md-files](https://github.com/publicala/split-claude-md-files-skill) moves what remains to the scope that reads it. Install all four from [publicala/claude-plugins](https://github.com/publicala/claude-plugins).

Inspired by [Matthieu Napoli's tweet](https://x.com/matthieunapoli/status/2024507469394039057). We extended the original prompt into a proper Claude Code skill with tooling-first priorities.

## How it works

1. Reads all CLAUDE.md files and inventories existing tooling (linters, CI, git hooks, etc.)
2. Identifies rules that can be expressed as automated checks
3. Presents proposed changes for your approval
4. Implements the checks using your project's existing tools
5. Removes the automated rules from CLAUDE.md after checks pass

Rules that require human judgment are kept as-is.

## Install

### Via Plugin Marketplace

```
/plugin marketplace add publicala/claude-plugins
/plugin install bake-claude-md-files@publicala
```

### Via skills.sh

```bash
npx skills add publicala/bake-claude-md-files-skill
```

### Manual

Copy `skills/bake-claude-md-files/SKILL.md` into your skills directory:

```bash
# Global (all projects)
mkdir -p ~/.claude/skills/bake-claude-md-files
cp skills/bake-claude-md-files/SKILL.md ~/.claude/skills/bake-claude-md-files/

# Project-level
mkdir -p .claude/skills/bake-claude-md-files
cp skills/bake-claude-md-files/SKILL.md .claude/skills/bake-claude-md-files/
```

## Usage

- **skills.sh / manual**: `/bake-claude-md-files`
- **Plugin marketplace**: `/bake-claude-md-files:bake-claude-md-files` (plugin skills are namespaced as `/<plugin>:<skill>`)

## Resources

- [feed-claude-md-files](https://github.com/publicala/feed-claude-md-files-skill) — surfaces patterns into new CLAUDE.md rules
- [audit-claude-md-files](https://github.com/publicala/audit-claude-md-files-skill) — prunes CLAUDE.md files with evidence-backed cuts
- [split-claude-md-files](https://github.com/publicala/split-claude-md-files-skill) — moves CLAUDE.md rules to the load scope that reads them
- [CLAUDE.md Guide](https://github.com/publicala/claude-md-guide) — Presentation slides about CLAUDE.md files
- [CLAUDE.md docs](https://docs.anthropic.com/en/docs/claude-code/memory) — Official documentation
- [Matthieu Napoli's tweet](https://x.com/matthieunapoli/status/2024507469394039057) — Original inspiration

## License

MIT
