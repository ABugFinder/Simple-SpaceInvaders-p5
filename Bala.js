
function Bala(x, y) {
    this.x = x;
    this.y = y;

    this.show = function() {
        noStroke();
        fill(70, 15, 0);
        rect(this.x, this.y, 4, 27);
    }

    this.move = function() {
        this.y = this.y -7;
    }

}