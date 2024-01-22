import confetti from "canvas-confetti";

const myCanvas = document.createElement('canvas')
myCanvas.style.width = '100vw';
myCanvas.style.height = '100vh';
myCanvas.style.position = 'fixed';
myCanvas.style.inset = 0;
myCanvas.style.zIndex = -5;
document.body.appendChild(myCanvas);

const confettiBtn = document.getElementById('confettiBtn');

confettiBtn.addEventListener('click', () => {
    console.log('Confetti');
    const myConfetti = confetti.create(myCanvas, {
        resize: true,
        useWorker: true
    });
    myConfetti({
        particleCount: 100,
        spread: 160
    });
})

import Typed from "typed.js";

const typed = new Typed('#brandIcon', {
    strings: ['Aerith.'],
    typeSpeed: 100,
    loop:true,
    smartBackspace: true,
    showCursor: false,
});