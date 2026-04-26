const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const Todo = require('./models/Todo');
const app = express();
app.use(express.json()); // To parse JSON bodies

// MongoDB Connection (For local or pre-Docker testing for now)
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/tododb';

mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// --- ENDPOINTS ---

// 1. GET /todos - Get all todos
app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// 2. POST /todos - Create a new todo
app.post('/todos', async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 3. GET /todos/:id - Get by ID
app.get('/todos/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).send('Not found');
    res.json(todo);
});

// 4. PUT /todos/:id - Update
app.put('/todos/:id', async (req, res) => {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTodo);
});

// 5. DELETE /todos/:id - Delete
app.delete('/todos/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.send('Todo deleted');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));