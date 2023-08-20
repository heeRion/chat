const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname + '/public'));

// Serve index.html for the root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Set up WebSocket connections
io.on('connection', (socket) => {
    socket.on('chat message', (message) => {
        io.emit('chat message', message);
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

