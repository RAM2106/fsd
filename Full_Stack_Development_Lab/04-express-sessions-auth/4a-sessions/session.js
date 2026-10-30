const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'replace-this-demo-secret',
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    req.session.name = 'Ram';
    res.send('Session Created');
});

app.get('/profile', (req, res) => {
    res.send('Welcome ' + (req.session.name || 'Guest'));
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
