# Full Stack Development Lab – Programs & Run Guide

A GitHub-ready collection of simplified programs for all 13 experiments in the Full Stack Development Lab manual.

## Contents

| Experiment | Topic | Folder |
|---|---|---|
| 1 | Node.js HTTP routing and command-line input | `01-nodejs/` |
| 2 | Express routing, HTTP methods and middleware | `02-express-routing/` |
| 3 | Express templating and form data | `03-express-templates-forms/` |
| 4 | Express sessions and authentication | `04-express-sessions-auth/` |
| 5 | Mongoose CRUD and React REST API | `05-database-rest-api/` |
| 6 | React HTML, JSX and components | `06-react-basics/` |
| 7 | React props, state, styling and events | `07-react-state-styles-events/` |
| 8 | React conditional rendering, lists and forms | `08-react-rendering-forms/` |
| 9 | React Router and screen updates | `09-react-router-updating/` |
| 10 | React hooks and component data sharing | `10-react-hooks-sharing/` |
| 11 | MongoDB installation/configuration and CRUD | `11-mongodb-crud/` |
| 12 | MongoDB databases, collections and queries | `12-mongodb-collections-queries/` |
| 13 | To-do app and quiz app | `13-augmented-programs/` |

Each experiment folder contains:
- Source code
- `README.md` with setup, run commands, test steps and expected output

## Requirements

Install these before the lab:
1. Node.js LTS (includes npm)
2. Visual Studio Code
3. MongoDB Community Server and `mongosh` for Experiments 11–12 (or a MongoDB Atlas connection)
4. A modern browser
5. Postman (recommended for testing HTTP POST/PUT/DELETE APIs)

Check Node.js and npm:

```bash
node -v
npm -v
```

## How to run

Open this repository folder in VS Code. Open a terminal in the relevant experiment folder and follow that folder's README.

Most Node.js and Express programs use:

```bash
npm install
node filename.js
```

React programs use Vite:

```bash
npm install
npm run dev
```

MongoDB programs are `.js` command files intended to be pasted into `mongosh`, not run with `node`.

## Important notes

- Run only one server on port `3000` at a time. Stop a running server with `Ctrl + C`.
- For Express examples, install the dependencies listed in that experiment's README.
- React exercises share one Vite project in `06-react-basics/`. To practise another React experiment, copy that experiment's `App.jsx` into `06-react-basics/src/App.jsx`, replacing the existing file. For Experiment 7(b), copy its `App.css` too.
- Experiment 5(b) calls the public JSONPlaceholder API and needs an internet connection.
- Experiment 5(a) and Experiments 11–12 need MongoDB. For Atlas, replace the local connection string with your own URI. Never commit database passwords or secret keys.
- The authentication and session examples are teaching demonstrations, not production-ready security implementations.
- Experiment 13(a) stores tasks in memory; tasks disappear when the server restarts.
- MongoDB shell commands use modern methods (`insertOne`, `updateOne`, `deleteOne`) instead of legacy methods (`insert`, `update`, `remove`).

## Quick GitHub upload

From the repository root:

```bash
git init
git add .
git commit -m "Add Full Stack Development Lab programs"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your own GitHub repository URL.

## Exam tip

Before the exam, clone or download this repository and test the programs once. Memorise the basic structures:
- Node: `http.createServer()` and `process.argv`
- Express: `app.get()`, `app.post()`, `req`, `res`, `app.listen()`
- React: components, JSX, props, `useState()`, `useEffect()`
- MongoDB: `insertOne()`, `find()`, `updateOne()`, `deleteOne()`
