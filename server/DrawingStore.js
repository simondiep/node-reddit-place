let drawing;

export function getDrawing() {
  if (!drawing) {
    drawing = createInitialDrawing();
  }
  return drawing;
}

export function updateDrawing(data) {
  drawing[data.rowIndex][data.columnIndex] = data.color;
}

function createInitialDrawing() {
  const WIDTH = 40;
  const HEIGHT = 25;

  const INITIAL_DATA = [];
  for (var row = 0; row < HEIGHT; row++) {
    INITIAL_DATA[row] = [];
    for (var column = 0; column < WIDTH; column++) {
      INITIAL_DATA[row].push("#ffffff");
    }
  }
  return INITIAL_DATA;
}