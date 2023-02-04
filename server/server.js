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


// Connect to MongoDB using Mongoose
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/SchoolDB';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));


// Import routes
const teachers = require('./routes/teachers');
const students = require('./routes/students');
const classes = require('./routes/classes');
const exams = require('./routes/exams');

// Mount the teacher route handlers at the /teachers endpoint
app.use('/teachers', teachers);
app.use('/students', students);
app.use('/classes', classes);
app.use('/exams', exams);



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
// Export the Mongoose connection
module.exports = mongoose.connection;