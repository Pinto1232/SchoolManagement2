const express = require("express");
const router = express.Router();

// Import the teacher controller
const teachersController = require("../controllers/teachers");

// Get all teachers route
router.get("/", teachersController.getAllTeachers);

// Get a single teacher by id route
router.get("/:id", teachersController.getTeacherById);

// Create a new teacher route
router.post("/", teachersController.createTeacher);

// Update an existing teacher route
router.put("/:id", teachersController.updateTeacher);

// Delete a teacher route
router.delete("/:id", teachersController.deleteTeacher);

module.exports = router;
