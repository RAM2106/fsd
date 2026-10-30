# Experiment 13 – Augmented Programs

## 13(a) To-Do List using Node.js and Express

Install dependencies:

```bash
cd 13-augmented-programs
npm install
```

Run:

```bash
node 13a-todo-express/server.js
```

Open `http://localhost:3000/`. Enter a task and click Add. The task appears in the list.

**Key points:** GET displays the form and tasks; POST adds a task; Express handles requests; the array stores tasks temporarily. Tasks are lost when the server restarts.

## 13(b) Quiz app using React

File: `13b-quiz-react/App.jsx`.

Run the shared Vite project in `06-react-basics/`. Copy this file to `06-react-basics/src/App.jsx`, then run `npm run dev`.

Click React, then Submit. Expected: `Correct Answer`. Selecting Angular displays `Wrong Answer`.

**Key points:** `useState()` stores the selected answer and result; `onClick` handles selection and submission.
