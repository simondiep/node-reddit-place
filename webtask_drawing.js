module.exports = async function(context, cb) {
  try {
    const drawingObject = await getDrawing(context.storage);
    // if GET, return object
    if (!context.body) {
      cb(null, drawingObject);
      return;
    }

    // POST to update object
    const color = context.body.color;
    const columnIndex = context.body.columnIndex;
    const rowIndex = context.body.rowIndex;
    if (typeof color !== 'undefined') {
      drawingObject.drawing[rowIndex][columnIndex] = color;
      await setDrawing(context.storage, drawingObject);
    }

    cb(null, drawingObject);
  } catch (e) {
    cb(e);
  }
};

async function getDrawing(storage) {
  return new Promise(resolve => {
    storage.get(function(error, data) {
      if (data && data.drawing) {
        resolve(data);
      } else {
        const emptyDrawing = { drawing: createInitialDrawing() };
        resolve(emptyDrawing);
      }
    });
  });
}

async function setDrawing(storage, drawing) {
  return new Promise((resolve, reject) => {
    storage.set(drawing, { force: 1 }, function(error) {
      if (error) reject();
      resolve();
    });
  });
}

function createInitialDrawing() {
  const WIDTH = 60;
  const HEIGHT = 30;

  const INITIAL_DATA = [];
  for (var row = 0; row < HEIGHT; row++) {
    INITIAL_DATA[row] = [];
    for (var column = 0; column < WIDTH; column++) {
      INITIAL_DATA[row].push('#fff');
    }
  }
  return INITIAL_DATA;
}
