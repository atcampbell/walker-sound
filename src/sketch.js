import p5 from 'p5';
import * as Tone from 'tone';
import Walker from './walker';

const sketch = p => {
    window.p5 = p;

    let walker;
    let x, y;
    let tx, ty;

    var freeverb = new Tone.Freeverb(0.8, 5000).toMaster();

    const synth = new Tone.FMSynth({
        modulationIndex: 12.22,
        envelope: {
            attack: 0.01,
            decay: 0.2
        },
        modulation: {
            type: 'sine'
        },
        modulationEnvelope: {
            attack: 0.2,
            decay: 0.01
        },
        harmonicity: 0.6,
        volume: -4
    }).connect(freeverb);

    p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        p.background(255, 100, 100);
        p.stroke(220);

        x = p.width / 2;
        y = p.height / 2;

        tx = 0.0;
        ty = 10000.0;

        walker = new Walker();

        synth.triggerAttack('C5');

        synth.oscillator.volume.value = -6;
    };

    p.draw = () => {
        x = p.noise(tx);
        y = p.noise(ty);

        walker.step(x, y);
        walker.render();

        tx += 0.01;
        ty += 0.01;

        const f = p.map(y, 0, 1, 400, 1000);
        const modIndex = p.map(x, 0, 1, 0, 10);
        const modFrequency = p.map(y, 0, 1, 50, 5);

        synth.frequency.value = f;
        synth.modulationIndex.value = modIndex;
        synth.modulation.frequency.value = modFrequency;
    };
};

const myp5 = new p5(sketch);
