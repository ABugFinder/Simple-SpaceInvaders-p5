
function Alien(x, y) {
    this.x = x;
    this.y = y;
    this.r = 25;
    this.isAlive = true;
    this.xdir = 0.4;
    this.speeder = 0.1;

    this.show = function() {
        fill(102, 15, 0);
        ellipse(this.x, this.y, this.r*2);
    }

    this.killAlien = function() {
        this.isAlive = false;
    }

    this.move = function() {
        this.x = this.x + this.xdir;
    }

    this.moveAlienDown = function() {
        this.xdir *= -1;
        this.y += this.r;
    }
    
    this.speedUp = function() {
        if(this.xdir > 0) {
            this.xdir += this.speeder;
        } else if(this.xdir < 0) {
            this.xdir -= this.speeder;
        }
    }

    this.resetSpeed = function() {
        this.xdir = 0.8;
    }

}