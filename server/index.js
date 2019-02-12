import express from 'express';
import serverRenderer from './rendererMiddleware';
import { initializeSocketIo } from './SocketHandler';

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3001;
const path = require('path');

const router = express.Router();

// root (/) should always serve our server rendered page
router.use('^/$', serverRenderer);

// other static resources should just be served as they are
router.use(express.static(
  path.resolve(__dirname, '..', 'build'),
  { maxAge: '30d' },
));

// tell the app to use the above rules
app.use(router);

initializeSocketIo(io);

// start the app
server.listen(PORT, (error) => {
  if (error) {
    return console.log('something bad happened', error);
  }
  console.log("listening on " + PORT + "...");
});
