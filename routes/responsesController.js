const express = require('express')
const router = express.Router()


//to add a users response  NOT DONE
router.post('/', async(req,res)=>{
    const completedQuestionair = new completedQuestionair({
        userId: req.body.userId,
        questionairResponses: req.body.questionairResponses
    })
    try{
        const newCompleteQuestionair = await completedQuestionair.save()
        res.status(201).json(newCompleteQuestionair)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})


module.exports = router