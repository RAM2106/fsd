# Experiment 3 – Express Templating and Form Data

Install:

```bash
cd 03-express-templates-forms
npm install
```

## 3(a) EJS templating

Run:

```bash
node 3a-ejs/app.js
```

Open `http://localhost:3000/`.

Expected: `Welcome Ram`.

**Key points:** EJS is a template engine; `res.render()` renders a view; `<%= name %>` prints an escaped variable. The template is in `3a-ejs/views/home.ejs`.

## 3(b) Form data

Run:

```bash
node 3b-form-data/form.js
```

Open `http://localhost:3000/`, enter `Ram`, and submit.

Expected: `Hello Ram`.

**Key points:** `express.urlencoded()` parses HTML form submissions; `req.body.name` reads the submitted name.
