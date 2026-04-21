# AGENT.md — ui-kit

`@listo/ui-kit` — Shadcn UI primitives and design tokens for the Listo platform. The shared design system consumed by `ui-core`, `block-ui-sdk`, `studio`, and block micro-frontends.

---

## Skills

See [SKILLS/ts.md](../SKILLS/ts.md) for the full skill map.

Quick reference for this repo:

| Task | Skill path |
|------|------------|
| Building / modifying UI components | `~/.agents/skills/frontend-ui-engineering/SKILL.md` |
| API / interface design | `~/.agents/skills/api-and-interface-design/SKILL.md` |
| Simplification / refactoring | `~/.agents/skills/code-simplification/SKILL.md` |
| Code review | `~/.agents/skills/code-review-and-quality/SKILL.md` |

---

## Tech Stack

- **Language**: TypeScript (strict mode)
- **Package manager**: `pnpm` (workspace root)
- **Registry**: npm (`@listo/ui-kit`)
- **Runtime**: Browser (ESM, React)
- **Build**: `tsc` + `tsc-alias`
- **Styling**: Tailwind CSS + CSS variables for design tokens

## Key dependencies

| Package | Role |
|---------|------|
| `radix-ui` | Headless accessible primitives |
| `@radix-ui/react-popover` | Popover primitive |
| `class-variance-authority` | Variant-based component styling (CVA) |
| `clsx` + `tailwind-merge` | Conditional class merging |
| `lucide-react` | Icon set |
| `recharts` | Chart primitives |

## Source layout

```
src/
  components/   # all UI components (Button, Input, Dialog, etc.)
  hooks/        # shared UI hooks (useMediaQuery, useToast, etc.)
  lib/          # cn() utility and token helpers
  main.css      # Tailwind base + design token CSS variables
  index.ts      # public API surface — re-exports everything
```

## Workspace commands

```bash
pnpm install          # fetch dependencies (run from workspace root)
pnpm build            # compile with tsc + resolve path aliases
pnpm typecheck        # type-check without emit
pnpm dev              # watch mode
```

## Conventions

- All components follow the Shadcn pattern: Radix primitive + CVA variants + `cn()` for class merging.
- No business logic — this is a pure presentation library. Zero imports from `@listo/agent-client` or `@listo/ui-core`.
- Design tokens live in `main.css` as CSS custom properties (`--color-*`, `--radius-*`, etc.) — never hard-code colors or spacing values.
- Every component exports its props type with a name matching the component (`ButtonProps`, `DialogProps`, etc.).
- Strict TypeScript — no `any`. Use `ComponentPropsWithoutRef<typeof Primitive>` for forwarded prop types.
- `src/index.ts` is the only export entry point — no deep path imports from consumers.
