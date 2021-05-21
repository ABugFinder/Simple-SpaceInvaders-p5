function Player() {
    this.x = width/2;
    this.lives = 2;

    this.show = function() {
        fill(152, 15, 0);
        rect(this.x, height-40, 20, 20);
    }

    this.move = function(dir) {
        this.x += dir;
    }

    this.substractLive = function() {
        this.lives--;
    }
}