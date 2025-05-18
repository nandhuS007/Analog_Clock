let hour = document.querySelector('.hrs');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');

setInterval(runClock, 1000);

function runClock() {
    let time = new Date();
    let seconds = time.getSeconds() / 60;
    let minutes = (seconds + time.getMinutes()) / 60;
    let hours = (minutes + time.getHours()) / 12;

    hour.style.setProperty('--rotation', hours * 360);
    min.style.setProperty('--rotation', minutes * 360);
    sec.style.setProperty('--rotation', seconds * 360);
}

runClock();
