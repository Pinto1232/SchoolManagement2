// Import the required libraries
const mongoose = require("mongoose");

// Define the teacher schema
const teacherSchema = new mongoose.Schema({
  // The name of the teacher
  name: {
    type: String,
    required: true
  },
  // The email of the teacher
  email: {
    type: String,
    required: true,
    unique: true
  },
  // The password of the teacher (hashed for security)
  password: {
    type: String,
    required: true
  }
});

// Create the teacher model
const Teacher = mongoose.model("Teacher", teacherSchema);

// Export the teacher model
module.exports = Teacher;
