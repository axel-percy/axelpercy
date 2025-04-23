const express = require('express');
const connectDB = require('./config/db');
const app = express();
require('dotenv').config();

connectDB();

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/blogs', require('./routes/blogs'));

module.exports = app;
