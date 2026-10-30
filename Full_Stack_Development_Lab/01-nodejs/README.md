# Experiment 1 – Node.js

## 1(a) HTTP routing

**File:** `1a-http-routing/server.js`

Run:

```bash
cd 01-nodejs/1a-http-routing
node server.js
```

Open:
- `http://localhost:3000/` → Welcome to Home Page
- `http://localhost:3000/about` → This is About Page
- `http://localhost:3000/test` → Page Not Found

Stop with `Ctrl + C`.

**Key points:** `http.createServer()` creates the server; `req.url` checks the path; `res.end()` sends the response; `listen(3000)` starts the server.

## 1(b) Command-line input

**File:** `1b-command-line-input/input.js`

Run:

```bash
cd 01-nodejs/1b-command-line-input
node input.js Ram 20
```

Expected output:

```text
Hello Ram
Your age is 20
```

**Key points:** `process.argv[2]` and `[3]` read the name and age supplied after the filename.
