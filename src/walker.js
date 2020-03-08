export default class Walker {
    constructor() {
        this.x = p5.width / 2;
        this.y = p5.height / 2;
        this.tx = 0.0;
        this.ty = 10000.0;
    }

    display() {
        p5.ellipse(100, 100, 100, 100);
    }

    render() {
        p5.stroke(255);
        p5.point(this.x, this.y);
    }

    step() {
        this.x = p5.map(p5.noise(this.tx), 0, 1, 0, p5.width);
        this.y = p5.map(p5.noise(this.ty), 0, 1, 0, p5.height);

        this.tx += 0.01;
        this.ty += 0.01;
    }
}
