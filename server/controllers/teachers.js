const Teacher = require("../models/teacher");

// Get all teachers
exports.getAllTeachers = async (req, res, next) => {
  try {
    const teachers = await Teacher.find();
    return res.status(200).json({
      success: true,
      count: teachers.length,
      data: teachers
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error"
    });
  }
};

// Add a new teacher
exports.addTeacher = async (req, res, next) => {
  try {
    const { name, subject } = req.body;

    const teacher = await Teacher.create(req.body);

    return res.status(201).json({
      success: true,
      data: teacher
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error"
      });
    }
  }
};

// Update a teacher
exports.updateTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!teacher) {
      return res.status(404).json({
        success: false,
        error: "No teacher found"
      });
    }

    return res.status(200).json({
      success: true,
      data: teacher
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error"
      });
    }
  }
};

// Delete a teacher
exports.deleteTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);

    if (!teacher) {
      return res.status(404).json({
        success: false,
        error: "No teacher found"
      });
    }

    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error"
    });
  }
};
