require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const { mongoose, db } = require("./database")

const Questionnaire = require("./routes/form.route")
const Response = require("./routes/response.route")

app.use(cors())
app.use(express.json())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/questionnaire', Questionnaire)

app.use('/responses', Response)

// start the Express server
app.listen(3000, () => {
   console.log("Server started on port http://localhost:3000")
})
//test
app.get("/", (req, res) => {
    res.send("Hello World")
})
module.exports = app;