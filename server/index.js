import express from 'express';
import serverRenderer from './rendererMiddleware';
import { initializeSocketIo } from './SocketHandler';

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3001;
const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

initializeSocketIo(io);

// start the app
server.listen(PORT, (error) => {
  if (error) {
    return console.log('something bad happened', error);
  }
  console.log("listening on " + PORT + "...");
});
