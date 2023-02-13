
const express = require("express");
const mongoose = require("mongoose");
const app = express()

require('dotenv').config()
app.use(express.json())


mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URI,
{
    useNewUrlParser:true,
    useUnifiedTopology:true

},(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Sucess!!!!")
    }
})

const responseRoute = require ('./routes/responsesController')
app.use('/responses', responseRoute)

app.listen(3000,()=> {console.log("Listening on port 3000")})

