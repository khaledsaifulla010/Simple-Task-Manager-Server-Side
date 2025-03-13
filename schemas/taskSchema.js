const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  titie: {
    type: String,
    required: true,
  },
  completed: {
    type: String,
    default: false,
  },
  taskStatus: {
    type: String,
    enum: {
      values: ["Pending", "Done"],
    },
  },
  taskCreatedTime: {
    type: Date,
    default: Date.now(),
  },
  taskFinishedTime: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = taskSchema;
