const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ToDo = new Schema({
  ToDoList: {
        type: String,
        required: [true, "fill task"]
  },
  Date: {
    type: Date,
    required: [true, "fill date"]
},
});

const ToDoList = mongoose.model("ToDoList", ToDo );

module.exports = ToDoList;