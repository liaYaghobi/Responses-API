const express = require('express')
const router = express.Router()

const Responses = require('../model/responses')
const Response = require('../model/response')

// Posting a Questionnair
router.post('/', async (req, res) => {
  const response = new Responses({
    questionnaireID: req.body.questionnaireID,
    responses: req.body.responses
  })
  try {
    const newResponse = await response.save()
    res.status(201).json(newResponse)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})


router.post('/test', async (req, res)=>{
  const answer = new Response({
    questionnaireID: req.body.questionnaireID,
    userID: req.body.userID,
    response: req.body.response
  })
    Responses.findOneAndUpdate(
      {questionnaireID: req.body.questionnaireID}, 
      { $push: { responses: answer  } },
     function (error, success) {
           if (error) {
            res.status(400).json(error);
           } else {
            res.status(201).json(success);
           }
       })
 
})


module.exports = router
