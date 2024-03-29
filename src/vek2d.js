// egen class for å holde styr på 2 dimnesjonal posisjom av ulike objecter.
class Vek2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(x, y) {
        this.x += x;
        this.y += y;
    }

    length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }

} export default Vek2D
