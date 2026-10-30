const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/user/:id', (req, res) => {
    res.send('User ID: ' + req.params.id);
});

app.get('/search', (req, res) => {
    res.send('Search: ' + req.query.name);
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
