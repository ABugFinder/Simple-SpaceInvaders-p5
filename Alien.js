
function Alien(x, y) {
    this.x = x;
    this.y = y;

    this.show = function() {
        fill(102, 15, 0);
        ellipse(this.x, this.y, 50);
    }

}