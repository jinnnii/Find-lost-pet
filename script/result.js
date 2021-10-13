import { init } from './init.js';
import { timer } from './timer.js';

const result = document.querySelector('.play-result')
const text = document.querySelector('.play-result p');
const btn = document.querySelector('.play-result button');

export function lose() {
    result.style.display = 'flex';
    text.innerHTML = `I lost my pet Forever`;
    timer.timerInit();
    document.querySelector('.play-btn').disabled = true;
    document.querySelector('.target').disabled = true;
}

export function win() {
    result.style.display = 'flex';
    text.innerHTML = `Finally, I found my pet!🖤`
    timer.timerInit();
    document.querySelector('.play-btn').disabled = true;
    document.querySelector('.target').disabled = true;
}

function restart() {
    result.style.display = 'none';
    timer.forceStart();
    init();
    document.querySelector('.play-btn').disabled = false;
    document.querySelector('.target').disabled = false;
}
btn.addEventListener('click', () => {
    restart();
})