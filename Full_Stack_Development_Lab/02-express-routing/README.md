# Experiment 2 – Express Routing, HTTP Methods and Middleware

Install once in this folder:

```bash
cd 02-express-routing
npm install
```

## 2(a) Routes, route parameters and query parameters

```bash
node 2a-routing/routing.js
```

Try:
- `http://localhost:3000/` → Home Page
- `http://localhost:3000/user/10` → User ID: 10
- `http://localhost:3000/search?name=Ram` → Search: Ram

**Key points:** `app.get()` defines a GET route; `req.params` reads route parameters; `req.query` reads query-string values.

## 2(b) POST, GET and DELETE

```bash
node 2b-http-methods/methods.js
```

Test with Postman:
- GET `http://localhost:3000/users`
- POST `http://localhost:3000/users`, Body → raw → JSON: `{"id":2,"name":"Ravi"}`
- DELETE `http://localhost:3000/users/1`

**Key points:** `express.json()` parses JSON; `req.body` contains submitted data; POST adds, GET reads and DELETE removes a user. Data is stored in memory and resets when the server restarts.

## 2(c) Middleware

```bash
node 2c-middleware/middleware.js
```

Open `http://localhost:3000/`. Browser displays `Welcome Home`; terminal displays `Middleware Executed`.

**Key points:** `app.use()` registers middleware; `next()` passes control to the next handler.
