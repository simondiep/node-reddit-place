const fetch = require('node-fetch');
const WEBTASK_STORAGE_URL = "https://wt-82e23ef79ade2a8d8cfed3117b878cdb-0.sandbox.auth0-extend.com/node-reddit-place";

let drawing;

export async function getDrawing() {
  if (!drawing) {
    // Get drawing from persistent storage
    drawing = await fetch(WEBTASK_STORAGE_URL)
      .then(response => response.json())
      .then(jsonResponse => jsonResponse.drawing);
  }
  return drawing;
}

export function updateDrawing(data) {
  drawing[data.rowIndex][data.columnIndex] = data.color;

  // Update persistent storage
  fetch(WEBTASK_STORAGE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      rowIndex: data.rowIndex,
      columnIndex: data.columnIndex,
      color: data.color,
    }),
  });
}

function createInitialDrawing() {
  const WIDTH = 60;
  const HEIGHT = 30;

  const INITIAL_DATA = [];
  for (var row = 0; row < HEIGHT; row++) {
    INITIAL_DATA[row] = [];
    for (var column = 0; column < WIDTH; column++) {
      INITIAL_DATA[row].push("#ffffff");
    }
  }
  return INITIAL_DATA;
}