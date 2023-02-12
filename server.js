const express = require('express')
const app = express();

app.get('/', (req,res) => {
//    res.sendStatus(200)
    res.status(200).send({message : "Hello world!"})
})

module.exports = app

