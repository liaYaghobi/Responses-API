require("dotenv").config()
const responseRoute = require('./routes/responseController')
const express = require("express")
const app = express()
const cors = require("cors")
const port = 3000
const { mongoose, db } = require("./database")

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/", responseRoute)


// start the Express server
app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`)
})