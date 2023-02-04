// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const env = require('./config/env');

// Create an express app instance
const app = express();

// Configure middleware to parse incoming requests as JSON
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect(env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Import routes
const studentsRouter = require('./routes/students');
const teachersRouter = require('./routes/teachers');
const classesRouter = require('./routes/classes');
const examsRouter = require('./routes/exams');

// Use the imported routes for specific paths
app.use('/api/students', studentsRouter);
app.use('/api/teachers', teachersRouter);
app.use('/api/classes', classesRouter);
app.use('/api/exams', examsRouter);

// Handle error if route not found
app.use((req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});

// Handle errors thrown in the application
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

// Start the express app and listen on specified port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
