const express = require("express")
const router = express.Router()
const formController = require("../controllers/formController")

// Register Questionnaire Endpoint 
router.post("/register", async (req, res) => {
    const response = await formController.register(req, res)
    res.status(200).send(response)
})

//Read Questionnaire Endpoint
router.get("/detail/:name", formController.detail);

module.exports = router