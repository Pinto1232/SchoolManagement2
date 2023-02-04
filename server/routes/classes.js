const express = require('express');
const router = express.Router();

// Import the controller for classes
const classesController = require('../controllers/classes');

// Define routes for classes

// Get all classes
router.get('/', classesController.getAllClasses);

// Get a specific class by ID
router.get('/:id', classesController.getClassById);

// Create a new class
router.post('/', classesController.createClass);

// Update an existing class by ID
router.put('/:id', classesController.updateClass);

// Delete an existing class by ID
router.delete('/:id', classesController.deleteClass);

// Export the router
module.exports = router;
