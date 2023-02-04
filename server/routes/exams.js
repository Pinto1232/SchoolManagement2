// File: routes/exams.js
const express = require("express");
const router = express.Router();

// Import the exams controller
const examsController = require("../controllers/exams");


router.get('/', (req, res) => {
    // Code to retrieve all exams from database
    examsController.getAllExams
});

router.get('/:examId"', (req, res) => {
    // Get a single exams by ID
    examsController.getExamById
});


router.post("/", (req, res)  => {
    // Add a new exam
    examsController.addExam
});

// Update an exam by ID
router.patch("/:examId", examsController.updateExam);

// Delete an exam by ID
router.delete("/:examId", examsController.deleteExam);

module.exports = router;
