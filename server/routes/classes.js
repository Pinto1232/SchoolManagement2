const express = require('express');
const router = express.Router();

// Import the controller for classes
const classesController = require('../controllers/classes');

// Define routes for classes

router.get('/', (req, res) => {
    // Get all classes
    classesController.getAllClasses
});


router.get('/:id', () => {
    // Get a specific class by ID
    classesController.getClassById
});

// Create a new class
router.post('/', classesController.createClass);

// Update an existing class by ID
router.put('/:id', classesController.updateClass);

// Delete an existing class by ID
router.delete('/:id', classesController.deleteClass);

// Export the router
module.exports = router;
