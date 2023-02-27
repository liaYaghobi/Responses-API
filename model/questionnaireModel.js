const mongoose = require('mongoose')
const ResponseSchema = require('../model/responseModel')

const QuestionnaireSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    responses: [{type: [ResponseSchema.Schema], required: true}]
})

const Questionnaire = mongoose.model('Questionnaire', QuestionnaireSchema)
module.exports = Questionnaire