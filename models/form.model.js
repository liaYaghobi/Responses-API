const mongoose = require('mongoose')

const QuestionnaireSchema = new mongoose.Schema({
  name: { type: String, required: true },
  questions: [{
      number: {type: Number, required: true},//auto-increment?
      prompt: { type: String, required: true },
      type: { type: String, enum: ["Radio Button", "Checkbox", "Number Wheel"], default: "Radio Button", required: true },
      answers: [String]
  }]
});

//NOTE mongoDB nameing convention of "_id" can be processed and changed to "id" if needed

const Questionnaire = mongoose.model("Questionnaire", QuestionnaireSchema)

module.exports = Questionnaire