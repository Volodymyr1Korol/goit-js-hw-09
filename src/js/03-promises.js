import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
    form: document.querySelector('.form'),
};
refs.form.addEventListener('submit', createPromptSubmit);

function createPromptSubmit(e) {
    e.preventDefault();
    let delayValue = Number(e.currentTarget.delay.value);
    let amountValue = Number(e.currentTarget.amount.value);
    let stepValue = Number(e.currentTarget.step.value);

    for (let i = 1; i <= amountValue; i += 1) {
        createPromise(i, delayValue)
            .then(({ position, delay }) => {
                setTimeout(() => {
                    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
                }, delay);
            })
            .catch(({ position, delay }) => {
                setTimeout(() => {
                    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
                }, delay);
            });
        delayValue += stepValue;
        e.target.reset();
    }
}

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    const objectPromise = { position, delay };

    return new Promise(
        (resolve, reject) => {
            if (shouldResolve) {
                resolve(objectPromise);
            }
            reject(objectPromise);
        }
    );
}