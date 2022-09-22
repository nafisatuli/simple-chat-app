const express = require('express');

//app instance
const app = express();

const http = require('http');
const expressServer = http.createServer(app);

// configure socket
const { Server } = require('socket.io')

let io = new Server(expressServer);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', function (socket) {
    //console.log("new user connected")

    socket.on('chat', function (msg) {
        // console.log(msg)

        //send data to client
        io.emit('chat_transfer',msg)
    })
})

expressServer.listen(3000, function () {
    console.log("server running at 3000")
})