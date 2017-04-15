const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const PORT = require('../config').port

app.get('/', function (req, res) {
  res.send('Hello World!')
})

http.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
