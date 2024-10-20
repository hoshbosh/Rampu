const express = require('express')
const bodyparser=require('body-parser')
const mongoose=require("mongoose")
require('dotenv').config()
const app = express()
const port = 3000
const mongoString=process.env.DATABASE_URL
mongoose.connect(mongoString)
const database=mongoose.conenction

const dataSchema=new mongoose.Schema({
    pressure: {required: true, type: Number},
    date: {required: true, type: Date}
})
const model=mongoose.model("data", dataSchema)
app.use(bodyparser.json({extended: true}))
app.post('/', (req, res) => {
    console.log(req.body)
    const data=new model({
        date: new Date(),
        pressure: req.body.pressure
    })
    try {
        const dataToSave = data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})