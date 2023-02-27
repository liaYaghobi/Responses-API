const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Questionnaire = require("../model/questionnaireModel.js")


router.post('/', async(req,res)=>{
    const { id, responses } = req.body

    const questionnaire = new Questionnaire({
        id,
        responses
    })
    try{
        const newcompletedQuestionnaire = await questionnaire.save()
        res.status(201).json(newcompletedQuestionnaire)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

module.exports = router