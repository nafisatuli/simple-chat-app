const express = require('express');

//app instance
const app = express();

const http = require('http');
const server = http.createServer(app);


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

server.listen(3000, function () {
    console.log("server running at 3000")
})