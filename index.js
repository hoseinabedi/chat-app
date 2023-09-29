const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
require('dotenv').config();
const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`Server running on  http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (msg) => {
        console.log(`message: ${msg}`);
        io.emit('message', msg);
    });
});