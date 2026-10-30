const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

let tasks = [];

app.get('/', (req, res) => {
    const items = tasks.map(task => `<li>${escapeHtml(task)}</li>`).join('');
    res.send(`
        <h2>To Do List</h2>
        <form method="POST" action="/">
            <input name="task" placeholder="Enter Task" required>
            <button type="submit">Add</button>
        </form>
        <ul>${items}</ul>
    `);
});

app.post('/', (req, res) => {
    tasks.push(req.body.task);
    res.redirect('/');
});

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;',
        '"': '&quot;', "'": '&#39;'
    }[char]));
}

app.listen(3000, () => console.log('To-Do app at http://localhost:3000'));
