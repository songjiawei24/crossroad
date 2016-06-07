// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 0;
    //this.y = 65;
    this.y = cellInitY + cellHeight * getRandom(0,2);
    this.speed = getRandom(minSpeed, maxSpeed);
    this.oob = false; // out of bounds
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    var px = player.x;
    var py = player.y;
    //console.log("Player location: " + px + ", " + py);
    if(this.y == py){
        console.log("same row");
        if((this.x+cellWidth) > px && this.x < (px+cellWidth)){
            console.log("bug location: " + this.x + ", " + this.y);
            console.log("player location: " + px + ", " + py);
            alert("Game over");
            gameover = true;
        }
    }
    
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
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.x = playerInitX;
    this.y = playerInitY;
    // render the image
    this.sprite = 'images/char-boy.png';
}
Player.prototype.update = function(){
    
}
Player.prototype.render = function(){ // draw the player
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
Player.prototype.checkOob = function(){
    
}
Player.prototype.handleInput = function(key){
    console.log(key);
    if(key == 'left'){
        if(this.x > 0){
            this.x -= cellWidth;
            //console.log(this.x);   
        }
    }else if(key == 'right'){
        if(this.x < canvasWidth - cellWidth){
            this.x += cellWidth;
            //console.log(this.x);   
        }
    }else if(key == 'up'){
        if(this.y > cellHeight - cellInitY){
            this.y -= cellHeight;
            //console.log(this.y);  
        }
    }else if(key == 'down'){
        if(this.y < cellInitY + (numRows-2)*cellHeight){
            this.y += cellHeight;
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
    }, 1000);
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
