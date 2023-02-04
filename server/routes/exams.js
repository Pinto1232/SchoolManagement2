// File: routes/exams.js
const express = require("express");
const router = express.Router();

// Import the exams controller
const examsController = require("../controllers/exams");

// Add a new exam
router.post("/", examsController.addExam);

// Get all exams
router.get("/", examsController.getAllExams);

// Get a single exam by ID
router.get("/:examId", examsController.getExamById);

// Update an exam by ID
router.patch("/:examId", examsController.updateExam);

// Delete an exam by ID
router.delete("/:examId", examsController.deleteExam);

module.exports = router;
