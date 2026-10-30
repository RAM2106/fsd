# Experiment 4 – Sessions and Authentication

Install:

```bash
cd 04-express-sessions-auth
npm install
```

## 4(a) Session management

Run `node 4a-sessions/session.js`.

1. Open `http://localhost:3000/` → Session Created.
2. Open `http://localhost:3000/profile` → Welcome Ram.

**Key points:** `express-session` manages sessions; `req.session` stores and reads session data; the browser receives a session cookie.

## 4(b) Basic authentication

Run `node 4b-authentication/auth.js`.

Open `http://localhost:3000/` and enter:
- Username: `admin`
- Password: `123`

Expected: `Login Successful`. Other credentials show `Invalid Login`.

**Key points:** The form sends a POST request; `req.body` contains credentials; the `if` statement checks them.

**Security note:** This is only a lab demonstration. Real applications must hash passwords, use secure session settings and store credentials safely.
