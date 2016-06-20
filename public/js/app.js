// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 0;
    this.y = cellHeight + cellHeight * getRandom(0,numRows-4);
    this.speed = getRandom(minSpeed, maxSpeed);
    this.oob = false; // out of bounds
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x > canvasWidth){
        this.oob = true;
        //console.log(this.oob);
    }else{
        //this.x = this.x;
        this.x += this.speed * 100 * dt;
        //console.log(this.x);
    }
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, cellWidth, cellHeight);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.x = playerInitX;
    this.y = playerInitY;
    this.diffX = 0;
    this.diffY = 0;
    // render the image
    this.sprite = 'images/boy.png';
}
Player.prototype.update = function(){
    if(this.diffX != 0){
        this.x += this.diffX;
        this.diffX = 0;
    }
    if(this.diffY != 0){
        this.y += this.diffY;
        this.diffY = 0;
    }
}
Player.prototype.render = function(){ // draw the player
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, cellWidth, cellHeight);
}

Player.prototype.handleInput = function(key){
    //console.log(key);
    if(key == 'left'){
        if(this.x > 0){
            //this.x -= cellWidth;
            this.diffX = (-1)*cellWidth;
            //console.log(this.x);   
        }
    }else if(key == 'right'){
        if(this.x < canvasWidth - cellWidth){
            //this.x += cellWidth;
            this.diffX = cellWidth;
            //console.log(this.x);   
        }
    }else if(key == 'up'){
        if(this.y >= cellHeight){
            //this.y -= cellHeight;
            this.diffY = (-1) * cellHeight;
            //console.log(this.y);
        }
    }else if(key == 'down'){
        if(this.y < cellHeight + (numRows-2)*cellHeight){
            //this.y += cellHeight;
            this.diffY = cellHeight;
            //console.log(this.y);  
        }
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var count = 0;
var allEnemies = [];
createEnemy();
function createEnemy() {
    setInterval(function(){
        var e = new Enemy();    
        allEnemies.push(e);
        //console.log(allEnemies);
    }, 3000/numRows*5);
}

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
