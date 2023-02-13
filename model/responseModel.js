const mongoose = require('mongoose')

const ResponseSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    questionnaireID: {type: Number, required: true},
    userID: {type: Number, required: true},
    responses: {type: [String], required: true}
})

const Response = mongoose.model("Response", ResponseSchema)
module.exports = Response