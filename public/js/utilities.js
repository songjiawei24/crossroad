// common parameters
var minSpeed = 1,
    maxSpeed = 3;
/* common numbers */
var canvasWidth = 505,
    canvasHeight = 606,
    numRows = 6,
    numCols = 5;

var cellWidth = 101,
    cellHeight = 83,
    cellInitY = 70;
var gameover = false;

var playerInitX = Math.floor(numCols/2) * cellWidth,
    playerInitY = cellInitY + cellHeight * (numRows - 3);


function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
