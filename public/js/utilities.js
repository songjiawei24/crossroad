// common parameters
var minSpeed = 1,
    maxSpeed = 3;
/* common numbers */
var canvasWidth = 500,
    canvasHeight = 700,
    numRows = 7,
    numCols = 5;

var cellWidth = canvasWidth/numCols,
    cellHeight = cellWidth;
    
var gameover = false;

var playerInitX = Math.floor(numCols/2) * cellWidth,
    playerInitY = cellHeight + cellHeight * (numRows - 3);


function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
