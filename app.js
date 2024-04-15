const audioEl = document.getElementById('audio').getElementsByTagName("audio")
const btnEl = document.getElementById('btns')
const catEl = document.getElementById('maind-img')
const catHandEl = document.getElementById('cat-hand')

const keyCodeFromBoard = [49, 50, 51, 52, 53, 54, 55, 56, 57]

window.addEventListener('keydown', (event) => playSound(event))
btnEl.addEventListener('click', (event) => playSound(event))
let catHand = true

function playSound(event) {
    let index
    catEl.classList.add('hide-cat')
    catHand = !catHand

    catHand ? catHandEl.classList.add('hide-cat') : catHandEl.classList.remove('hide-cat')

    if (event.target.dataset.key) {
        index = keyCodeFromBoard.indexOf(Number(event.target.dataset.key))
    } else if (event.keyCode) {
        index = keyCodeFromBoard.indexOf(event.keyCode)
    }
    soudPlay(index)
}

function soudPlay(index) {
    audioEl[index].currentTime = 0;
    audioEl[index].play()
}


let Timer;
const resetIdleTimer = () => {
    clearTimeout(Timer); // отменяем предыдущий таймер
    Timer = setTimeout(() => catEl.classList.remove('hide-cat'), 5000); // запускаем отсчёт на 5 секунд
};
['mousemove', 'keypress'].forEach(event => document.addEventListener(event, resetIdleTimer)); // регистрируем события движения мыши и нажатия клавиш
resetIdleTimer(); // запускаем процесс обновления таймера