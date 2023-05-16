const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const server = http.createServer(app);

app.use(cors());

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const PORT = 3001;

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('send-changes', (delta) => {
    console.log(delta);
    socket.broadcast.emit('receive-changes', delta);
  });
});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
