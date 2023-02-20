const mongoose = require('mongoose')

const ResponseSchema = new mongoose.Schema({
    questionnaireID: {type: Number, required: true},
    userID: {type: Number, required: true},
    response: {type: [String], required: true}
  })

  const Response = mongoose.model('ResponseSchema', ResponseSchema)

  module.exports = Response