const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('Middleware Executed');
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome Home');
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
