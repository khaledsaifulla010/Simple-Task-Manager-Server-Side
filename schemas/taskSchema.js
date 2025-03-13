const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  taskStatus: {
    type: String,
    enum: ["Pending", "Done"],
    default: "Pending",
  },
  taskCreatedTime: {
    type: Date,
    default: Date.now,
  },
  taskFinishedTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = taskSchema;
