const express = require("express")
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://GuidingXpert:Xpert1234@cluster0.as5svvj.mongodb.net/?retryWrites=true&w=majority').then(() =>console.log('connected')).catch(() => console.log('failed'))

app.get('/',(req, res)=> res.send("Hello"))

app.listen(port, () => console.log(`ddddd${port}!`))