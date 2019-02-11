import { getDrawing, updateDrawing } from './DrawingStore';

export function initializeSocketIo(io) {
  io.on('connection', (socket) => {
    socket.on('user changed color', (data) => {
      updateDrawing(data);
      socket.broadcast.emit('new color', {
        rowIndex: data.rowIndex,
        columnIndex: data.columnIndex,
        color: data.color,
      });
    });
    socket.emit('initialize', getDrawing());
  });
}