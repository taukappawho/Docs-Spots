const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
app.use(cors());
//Below is where the server is created and listens to the port 4000
//io.emit is used to broadcast all of the messages to all users on the server
//The only data being sent is the user's name and the message they send
//Created the server using this resource https://socket.io/docs/v4/server-initialization/

io.on('connect', socket =>{
    socket.on('message', ({name, message})=> {
        io.emit('message', {name, message})
    });
});

http.listen(4000);
