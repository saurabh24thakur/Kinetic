# Kinetic

Turn ideas into interactive prototypes faster.

Kinetic is a full-stack prototype builder with a React frontend and an Express + MongoDB backend. The current codebase is structured as a two-app repository: one client application for the product experience and one API service for backend logic and data.

## Why This Repo Exists

Kinetic is meant to move from raw idea to clickable product direction with less friction. The project is still early, but the repo is now organized to be easier to run, maintain, and extend.

## Repository Structure

```text
Kinetic/
├── frontend/   # React + Vite application
└── Backend/    # Express API and MongoDB integration
```

## Stack

- Frontend: React 19, Vite, React Router, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Mongoose

## Quick Start

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Vite runs locally at:

```text
http://localhost:5173
```

### Backend

```bash
cd Backend
npm install
cp .env.example .env
npm run dev
```

## Environment Variables

The backend requires these values in `Backend/.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## Available Scripts

### `frontend/`

- `npm run dev` starts the Vite development server
- `npm run build` creates a production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint

### `Backend/`

- `npm run dev` starts the API with nodemon
- `npm start` starts the API with Node.js

## Current Status

This repository is an active work in progress. Some frontend screens and integration paths still need cleanup before the product experience is stable.

## Recommended Next Improvements

- fix current frontend runtime issues
- connect the workspace UI to backend flows
- improve responsive design and component structure
- add tests once the main flows stabilize

## Contribution

If more than one person is touching this repository, read [CONTRIBUTING.md](/home/goyaljiiiiii/Downloads/kinetic/Kinetic/CONTRIBUTING.md) before opening a pull request.

## License

No root license file has been added yet. That should be chosen intentionally, not guessed.
