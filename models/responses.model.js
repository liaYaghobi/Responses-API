
const mongoose = require('mongoose');
const Questionnaire = require('./form.model');

//NOTE: dummy data can be used for user_id as long as its right format
const ResponseSchema = new mongoose.Schema({

  user_id: { type: mongoose.Schema.Types.ObjectId,  ref: 'User', required: true },
  questionnaire_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Questionnaire', required: true },
  timestamp: { type: Date, default: Date.now },
  
  responses: [{
    number: {type: Number, required: true},
    response: { type: String, required: true },
  }]
});

const Response = mongoose.model('Response', ResponseSchema);

module.exports = Response;
