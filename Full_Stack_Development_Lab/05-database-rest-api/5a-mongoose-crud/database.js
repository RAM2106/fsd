const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/college')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('MongoDB Error:', err.message));

const Student = mongoose.model('Student', {
    name: String,
    age: Number
});

app.post('/students', async (req, res) => {
    try {
        await Student.create(req.body);
        res.send('Student Added');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

app.get('/students', async (req, res) => {
    try {
        res.json(await Student.find());
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.put('/students/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id, req.body, { new: true }
        );
        if (!student) return res.status(404).send('Student Not Found');
        res.json(student);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

app.delete('/students/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) return res.status(404).send('Student Not Found');
        res.send('Student Deleted');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
