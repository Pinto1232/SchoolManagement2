// File: controllers/exams.js

// Import necessary modules
const Exam = require("../models/exam");
const jwt = require("../utils/jwt");

// Export functions to be used in the routes
exports.createExam = async (req, res, next) => {
  // Get the exam details from the request body
  const { title, date, classId, teacherId } = req.body;

  // Create a new exam object
  const exam = new Exam({
    title,
    date,
    classId,
    teacherId
  });

  // Save the exam to the database
  await exam.save();

  // Return the success response
  return res.status(201).json({
    message: "Exam created successfully."
  });
};

exports.getExams = async (req, res, next) => {
  // Get the exams from the database
  const exams = await Exam.find();

  // Return the exams in the response
  return res.status(200).json({
    exams
  });
};

exports.getExam = async (req, res, next) => {
  // Get the exam id from the request params
  const { id } = req.params;

  // Get the exam from the database
  const exam = await Exam.findById(id);

  // Return the exam in the response
  return res.status(200).json({
    exam
  });
};

exports.updateExam = async (req, res, next) => {
  // Get the exam id from the request params
  const { id } = req.params;

  // Get the updated exam details from the request body
  const { title, date, classId, teacherId } = req.body;

  // Find the exam in the database and update it
  await Exam.findByIdAndUpdate(id, {
    title,
    date,
    classId,
    teacherId
  });

  // Return the success response
  return res.status(200).json({
    message: "Exam updated successfully."
  });
};

exports.deleteExam = async (req, res, next) => {
  // Get the exam id from the request params
  const { id } = req.params;

  // Delete the exam from the database
  await Exam.findByIdAndDelete(id);

  // Return the success response
  return res.status(200).json({
    message: "Exam deleted successfully."
  });
};
