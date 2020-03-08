export default class Walker {
    constructor() {
        this.x = p5.width / 2;
        this.y = p5.height / 2;
    }

    render() {
        p5.stroke(255);
        p5.point(this.x, this.y);
    }

    step(x, y) {
        this.x = p5.map(x, 0, 1, 0, p5.width);
        this.y = p5.map(y, 0, 1, 0, p5.height);
    }
}
