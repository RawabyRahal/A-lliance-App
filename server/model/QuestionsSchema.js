const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  correct_answer: {
    type: String,
    required: true,
  },
  incorrect_answers: {
    type: [String],
    required: true,
  },
});

const Questions = mongoose.model("question", questionSchema);
module.exports = Questions;
