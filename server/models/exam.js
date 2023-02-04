// File: models/exam.js
const mongoose = require("mongoose");

// Define the exam schema
const examSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
});

// Create a model from the schema
const Exam = mongoose.model("Exam", examSchema);

// Export the exam model
module.exports = Exam;
