const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors')
const server = http.createServer(app);

app.use(cors())

const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });


const PORT = 3001;

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});


server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
