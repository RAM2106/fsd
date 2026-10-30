const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/login">
            <input name="username" placeholder="Username" required>
            <input name="password" type="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
    `);
});

app.post('/login', (req, res) => {
    if (req.body.username === 'admin' && req.body.password === '123') {
        res.send('Login Successful');
    } else {
        res.send('Invalid Login');
    }
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
