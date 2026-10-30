const express = require('express');
const app = express();

app.use(express.json());

let users = [{ id: 1, name: 'Ram' }];

app.post('/users', (req, res) => {
    users.push(req.body);
    res.send('User Added');
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.delete('/users/:id', (req, res) => {
    users = users.filter(user => user.id !== Number(req.params.id));
    res.send('User Deleted');
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
