# Contributing

## Branching

- Use short, clear branch names
- Prefer prefixes like `feat/`, `fix/`, `docs/`, or `refactor/`

## Before Opening a Pull Request

- make sure the frontend runs locally
- make sure the backend starts with a valid `.env`
- keep changes scoped to one concern
- update docs when setup or behavior changes

## Commit Style

Use direct commit messages, for example:

```text
feat: add workspace prompt input
fix: correct footer import casing
docs: rewrite root project README
```

## Pull Request Notes

Every PR should answer:

- What changed
- Why it changed
- How it was tested
- Any known gaps or follow-up work

## Ground Rules

- Do not commit `.env` files or secrets
- Do not mix unrelated frontend and backend rewrites in one PR
- Prefer small, reviewable changes over large dumps of generated code
