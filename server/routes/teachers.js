const express = require("express");
const router = express.Router();

// Import the teacher controller
const teacherController = require("../controllers/teachers");

// Get all teachers
/* router.get("/", teacherController.getAllTeachers); */

router.get('/', (req, res) => {
    // Code to retrieve all teachers from database
    res.send("Hello world")
    teacherController.getAllTeachers
});


router.get('/:id', (req, res) => {
    // Get a single teacher by ID
    teacherController.getTeacherById
});

// Add a new teacher
router.post("/", teacherController.addTeacher);

// Update a teacher
router.put("/:id", teacherController.updateTeacher);

// Delete a teacher
router.delete("/:id", teacherController.deleteTeacher);

module.exports = router;
