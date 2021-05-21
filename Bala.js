
function Bala(x, y) {
    this.x = x;
    this.y = y;
    this.r = 8;
    this.isToDelete = false;

    this.show = function() {
        noStroke();
        fill(70, 15, 0);
        ellipse(this.x, this.y, this.r*2);
    }

    this.move = function() {
        this.y = this.y -7;
    }

    this.hits = function(alien) {
        var distance = dist(this.x, this.y, alien.x, alien.y);
        if(distance < this.r + alien.r) {
            return true;
        } else {
            return false;
        }
    }

    this.killBullet = function() {
        this.isToDelete = true;
    }

}