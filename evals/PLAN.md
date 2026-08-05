# Eval plan (not built)

Fixture (scaffold_script): tiny repo with a lint config, a CLAUDE.md rule the linter can express (bakeable), and one that needs human judgment.

Prompt: "Bake this repo's CLAUDE.md rules." Grader: LLM judge checks that the bakeable rule becomes a wired-in check and leaves CLAUDE.md, the judgment rule stays with a note of what would enforce it, and the new check's wiring is verified. Run: `claude plugin eval bake-claude-md-files --ablation with-without --runs 1`
