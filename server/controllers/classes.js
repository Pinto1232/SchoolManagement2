// File: controllers/classes.js

// Import required models and utils
const Class = require("../models/class");

// Get all classes
exports.getAllClasses = async (req, res, next) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (error) {
    next(error);
  }
};

// Get a class by id
exports.getClassById = async (req, res, next) => {
  try {
    const classData = await Class.findById(req.params.id);
    if (!classData) return res.status(404).send("Class not found");
    res.json(classData);
  } catch (error) {
    next(error);
  }
};

// Create a new class
exports.createClass = async (req, res, next) => {
  try {
    const newClass = new Class(req.body);
    await newClass.save();
    res.status(201).json(newClass);
  } catch (error) {
    next(error);
  }
};

// Update a class
exports.updateClass = async (req, res, next) => {
  try {
    const updatedClass = await Class.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedClass) return res.status(404).send("Class not found");
    res.json(updatedClass);
  } catch (error) {
    next(error);
  }
};

// Delete a class
exports.deleteClass = async (req, res, next) => {
  try {
    const deletedClass = await Class.findByIdAndDelete(req.params.id);
    if (!deletedClass) return res.status(404).send("Class not found");
    res.json(deletedClass);
  } catch (error) {
    next(error);
  }
};
