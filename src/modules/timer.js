'use strict';

const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
                let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, hours, minutes, seconds }
    }

    const updateClock = () => {
        let getTime = getTimeRemaining();

        if(getTime.timeRemaining <= 0) {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        } else {
            timerHours.textContent = addZerro(getTime.hours);
            timerMinutes.textContent = addZerro(getTime.minutes);
            timerSeconds.textContent = addZerro(getTime.seconds);
        }

        setInterval(function() {
            if(getTime.timeRemaining > 0) {
                updateClock();
            }
        }, 1000);

    }

    const addZerro = (num) => (num < 10) ? '0' + num : num;
    updateClock();
}

export default timer;