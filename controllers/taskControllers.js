const taskModel = require("../models/taskModel");

// Get All Tasks //
const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Error Fetching Tasks!" });
  }
};

// Create New Task //
const createTask = async (req, res) => {
  try {
    const { title, taskStatus, taskCreatedTime, taskFinishedTime } = req.body;
    const newTask = new taskModel({
      title,
      taskStatus,
      taskCreatedTime,
      taskFinishedTime,
    });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: "Error Creating Task!" });
  }
};

// Update a Task //
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const newUpdatedTask = await taskModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(newUpdatedTask);
  } catch (err) {
    res.status(500).json({ message: "Error updating task", error });
  }
};

// Delete a Task //
const deleteATask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await taskModel.findByIdAndDelete(id);
    res.json(result, { message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting task", err });
  }
};

module.exports = { getAllTasks, createTask, updateTask, deleteATask };
