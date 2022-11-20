const refs = {
    bcgColor: document.querySelector('body'),
    startButton: document.querySelector('[data-start'),
    stopButton: document.querySelector('[data-stop]'),
};

refs.startButton.addEventListener('click', onClickChangeBcgColor);
refs.stopButton.addEventListener('click', onClickStopBcgColor);

let timerId = null;

function onClickChangeBcgColor() {
    onClickStopBcgColor();
}

function onClickChangeBcgColor() {
    refs.startButton.disabled = true;
    refs.stopButton.disabled = false;

    timerId = setInterval(() => {
        refs.bcgColor.style.background = getRandomHexColor();
    }, 1000);
}

function onClickStopBcgColor() {
    refs.startButton.disabled = false;
    refs.stopButton.disabled = true;
    clearInterval(timerId);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}