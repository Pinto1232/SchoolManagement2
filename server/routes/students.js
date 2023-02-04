const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/students');

// Route for creating a new student
router.post('/', studentsController.createStudent);

// Route for retrieving information about a student by ID
router.get('/:id', studentsController.getStudentById);

// Route for updating information about a student by ID
router.put('/:id', studentsController.updateStudent);

// Route for deleting a student by ID
router.delete('/:id', studentsController.deleteStudent);

module.exports = router;
