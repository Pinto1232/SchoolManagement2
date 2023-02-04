const Student = require("../models/student");

// get all students
exports.getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
    res.json({ students });
  } catch (error) {
    next(error);
  }
};

// get a single student by id
exports.getStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    res.json({ student });
  } catch (error) {
    next(error);
  }
};

// create a new student
exports.createStudent = async (req, res, next) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ student });
  } catch (error) {
    next(error);
  }
};

// update a student
exports.updateStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const student = await Student.findByIdAndUpdate(id, updates, { new: true });
    res.json({ student });
  } catch (error) {
    next(error);
  }
};

// delete a student
exports.deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};
