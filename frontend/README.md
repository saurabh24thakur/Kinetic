# Kinetic Frontend

This is the React client for Kinetic. It contains the landing experience, workspace UI, routing, and the visual layer of the product.

## Stack

- React 19
- Vite 7
- React Router 7
- Tailwind CSS 4

## Local Development

```bash
npm install
npm run dev
```

Default dev URL:

```text
http://localhost:5173
```

## Available Scripts

- `npm run dev` starts the Vite dev server
- `npm run build` builds the app for production
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint

## Current Routes

- `/` landing page
- `/workspace` workspace page

## Notes

- This app lives inside a multi-folder repository, so run commands from `frontend/`.
- If the app fails on Linux, check component import casing first because file paths are case-sensitive.
