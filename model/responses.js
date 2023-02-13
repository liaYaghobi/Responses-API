const mongoose = require('mongoose')

const questionairSchema = new Schema({
    questionaireID : String,
    responses : [{ response: String }]
})

const responsesSchema = new Schema({
    userId : String,
    questionairResponses : [{questionairSchema}]
})