const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname,'../public/');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
    console.log('New user connected')

        var welcomeMsg = "Welcome to our chat"
        var joinedMsg = "New user joined the chat"
        socket.emit('newMessage', generateMessage('Admin', welcomeMsg));
        socket.broadcast.emit('newMessage',generateMessage('Admin',joinedMsg));

    socket.on('createMessage', (message, callback) => {
        console.log('createMessage:', message);
        io.emit('newMessage',generateMessage(message.from, message.text));
        //callback('This is from the server.');
    });

    socket.on('disconnect', ()=>{
        console.log('Disconnected from server');
    });
});

server.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
});
