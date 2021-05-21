
const boardHeight = 600;
const boardWidth = 800;

var playerPoints = 0;

var player;
var balas = [];
var aliens = [];
var alienHelperX = 80;
var alienHelperY = 10;

function setup(){
    let myCanvas = createCanvas(boardWidth, boardHeight);
    myCanvas.parent('myCanvas');
    player = new Player();
    //bala = new Bala(50,80);
    
    for(var i = 0; i < 45; i++){
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
                updateKillCounter();
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

function updateKillCounter(){
    //text(`${this.p1} - ${this.p2}`, this.x, this.y);
    document.getElementById("puntos").innerHTML = `Enemigos restantes: ${aliens.length}`;
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
