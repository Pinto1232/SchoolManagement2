const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/students');

router.get('/', (req, res) => {
    // Code to retrieve all students from database
    studentsController.createStudent
});

router.get('/:id', (req, res) => {
    // Get a single student by ID
    studentsController.getStudentById
});

// Route for updating information about a student by ID
router.put('/:id', studentsController.updateStudent);

// Route for deleting a student by ID
router.delete('/:id', studentsController.deleteStudent);

module.exports = router;
