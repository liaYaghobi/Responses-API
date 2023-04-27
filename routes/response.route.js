const express = require("express")
const router = express.Router()
const responseController = require("../controllers/responseController")

// Register Endpoint 
router.post("/register", async (req, res) => {
    const response = await responseController.register(req, res)
    res.status(200).send(response)
})

module.exports = router