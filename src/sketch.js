import p5 from 'p5';
import Walker from './walker';

const sketch = p => {
    let walker;

    window.p5 = p;

    p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        p.background(255, 100, 100);
        p.stroke(220);

        walker = new Walker();
    };

    p.draw = () => {
        walker.step();
        walker.render();
    };
};

const myp5 = new p5(sketch);
