const lineLength = 24;
const lineCount = 8;

var cellSize;
var cells;
var selectedColour = "#029386";

class Cell {
    constructor() {
        this.colour = "#FFFFFF";
        this.selected = false;
    }
}

function init() {
    canvas = document.getElementById("canvas");
    canvas.addEventListener('click', function(event) {
      onCanvasClick(canvas, event);
    });
    cells = generateCells(lineLength, lineCount);
    resizeCanvas()
  }

//Resizes canvas to fit window
function resizeCanvas(canvas) {
    canvas = document.getElementById("canvas");
    const canvasSize = Math.min(window.innerWidth, window.innerHeight);
    canvas.height = canvasSize*0.76;
    canvas.width = canvasSize*0.95;
    cellWidth = (canvas.width) / lineLength;
    cellHeight = (canvas.height) / lineCount;
    draw(canvas.getContext("2d"));
}

function draw(ctx) {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0,0,750,600);
    for (i = 0; i < lineLength; i++) {
        for (j = 0; j < lineCount; j++) {
            drawCell(ctx, i, j, cells[i][j]);
        }
    }
}

//Generates writeable cells
function generateCells(xSize, ySize) {
    cells = [];
    for (i = 0; i < xSize; i++) {
        cells.push([]);
        for (j = 0; j < ySize; j++) {
            cells[i].push(new Cell());
        }
    }
    return cells;
}

//Updates clicked cell colour
function onCanvasClick(canvas, event) {
    const canvasRect = canvas.getBoundingClientRect();
    const x = event.clientX - canvasRect.left;
    const y = event.clientY - canvasRect.top;
    canvasX = Math.floor(x/canvas.offsetWidth*lineLength);
    canvasY = Math.floor(y/canvas.offsetHeight*lineCount);
    cells[canvasX][canvasY].colour = selectedColour;
    draw(canvas.getContext("2d"));
}

function drawCell(ctx, row, column, contents) {
    ctx.fillStyle = contents.colour;
    ctx.fillRect(row*cellWidth, column*cellHeight, cellWidth, cellHeight);
    ctx.fillStyle = "#000000";
    ctx.strokeRect(row*cellWidth, column*cellHeight, cellWidth, cellHeight);
}