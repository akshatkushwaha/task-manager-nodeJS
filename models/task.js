const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide name"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 character"],
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model("Task", taskSchema);
