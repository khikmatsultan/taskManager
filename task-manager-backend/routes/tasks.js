const express = require('express');
const jwt = require('jsonwebtoken');
const Task = require('../models/Task');
const router = express.Router();

// Middleware to verify JWT
const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).send({ error: 'Access denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
    res.status(400).send({ error: 'Invalid token' });
    }
};

// Get all tasks for user
router.get('/', authenticate, async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.userId });
        res.send(tasks);
    } catch (error) {
    res.status(500).send({ error: error.message });
    }
});

// Add more task routes (POST, PUT, DELETE) following the same pattern

module.exports = router;