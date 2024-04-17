const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const NewYear = `27 May ${new Date().getFullYear()}`;

if (new Date().getDay() >= 27  && new Date().getMonth() === 5 && new Date().getDate() >= 24){
    NewYear = `27 May ${new Date().getFullYear() + 1}`;
}

function countdown(){
    const NewYearsDate = new Date(NewYear);
    const currentDate = new Date();

    const totalSeconds = (NewYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

}

countdown();

setInterval(countdown, 1000);
