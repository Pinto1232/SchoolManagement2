const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  // Define the structure of a student document
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  classes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'
  }]
});

// Compile the schema into a model
const Student = mongoose.model("Student", studentSchema);

// Export the model
module.exports = Student;
