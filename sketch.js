
const boardHeight = 600;
const boardWidth = 800;

var playerPoints = 0;

var player;
var balas = [];
var aliens = [];
var alienHelperX = 80;
var alienHelperY = 60;

function setup(){
    let myCanvas = createCanvas(boardWidth, boardHeight);
    myCanvas.parent('myCanvas');
    player = new Player();
    //bala = new Bala(50,80);
    
    for(var i = 0; i < 36; i++){
        if(i%9==0){
            alienHelperX = 80;
            alienHelperY += 60;
        }
        aliens[i] = new Alien(alienHelperX,alienHelperY);
        alienHelperX+=80;
        
    }
}

function draw() {
    background(255);
    background(220,15,40,100);

    player.show();
    movePlayer();

    for(var i = 0; i < balas.length; i++){
        balas[i].show();
        balas[i].move();

        for(var j = 0; j < aliens.length; j++){
            if(balas[i].hits(aliens[j])) {
                console.log("Colisión bala-alien");
                balas[i].killBullet();
                aliens[j].killAlien();
            }
            if(!aliens[j].isAlive){
                aliens.splice(j, 1);
            }
        }

        if(balas[i].isToDelete){
            balas.splice(i, 1);
            for(var i = 0; i < aliens.length; i++){
                aliens[i].speedUp();
            }
        }

    }

    var edge = false;
    for(var i = 0; i < aliens.length; i++){
        aliens[i].show();
        aliens[i].move();

        if(aliens[i].x > width || aliens[i].x < 0) {
            edge = true;
        }
    }

    if(edge){
        for(var i = 0; i < aliens.length; i++){
            aliens[i].moveAlienDown();
        }
    }
}



function addPointsToP1(){
    player1Points++;
}

function actualizarPuntos(){
    if(xBallPos <= 0){
        player2Points++;
    }
    if(xBallPos >= boardWidth){
        player1Points++;
    }
    //text(`${this.p1} - ${this.p2}`, this.x, this.y);
    document.getElementById("puntos").innerHTML = `Player1: ${player1Points} - ${player2Points} Player2 `;
}

function keyPressed() {
    if(keyCode === RIGHT_ARROW) {
        player.move(25);
    } else if(keyCode === LEFT_ARROW) {
        player.move(-25);
    }
}

function movePlayer(){
    //d->68
    //a->65
    //spacebar->32
    if(player.x + 28 <= boardWidth){
        if(keyIsDown(68)){
            player.move(5);
        }
    }
    
    if(player.x - 8 > 0){
        if(keyIsDown(65)){
            player.move(-5);
        }
    }

}

function keyPressed(){
    if(key === ' '){
        var bala = new Bala(player.x+8, height-72);
        balas.push(bala);
    }
}
