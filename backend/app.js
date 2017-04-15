const express = require('express')
const app = express()

const PORT = require('../config').port

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
