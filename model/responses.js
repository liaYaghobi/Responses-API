const mongoose = require('mongoose')

const responseSchema = require('../model/response')

const QuestionnaireResponseSchema = new mongoose.Schema({
  questionnaireID: {type: Number, required: true},
  responses: {type: [responseSchema.schema], required: true}
})

const Responses = mongoose.model('QuestionnaireResponse', QuestionnaireResponseSchema)

module.exports = Responses