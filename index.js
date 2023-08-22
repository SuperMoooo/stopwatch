document.addEventListener('DOMContentLoaded', () => {
    // Time elements
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');
    const miliseconds = document.querySelector('#miliseconds');

    // Button elements
    const btnStart = document.querySelector('#btn-start');
    const btnStop = document.querySelector('#btn-stop');
    const btnReset = document.querySelector('#btn-reset');

    // Time variables
    let hoursTime = 0;
    let minutesTime = 0;
    let secondsTime = 0;
    let milisecondsTime = 0;

    // Interval variables
    let interval = 17.1;
    let intervalID;

    // Boolean values
    let started = 0;
    let clickable = false;

    // Event listeners
    btnStop.classList.toggle('disabled');
    btnReset.classList.toggle('disabled');

    btnStart.addEventListener('click', () => {
        if (started === 0) {
            started = 1;
            clickable = true;
            intervalID = setInterval(updateTime, interval);

            btnStop.classList.remove('disabled');
            btnReset.classList.remove('disabled');
        }
    });

    btnStop.addEventListener('click', () => {
        if (clickable === true) {
            if (intervalID) {
                clearInterval(intervalID);
                intervalID = null;
                btnStop.innerHTML = 'Continue';
            } else {
                intervalID = setInterval(updateTime, interval);
                btnStop.innerHTML = 'Stop';
            }
        }
    });

    btnReset.addEventListener('click', () => {
        if (clickable === true) {
            clearInterval(intervalID);
            intervalID = null;
            btnStop.classList.add('disabled');
            btnReset.classList.add('disabled');
            clickable = false;
            btnStop.innerHTML = 'Stop';
            started = 0;

            // Reset time variables and HTML
            milisecondsTime = 0;
            secondsTime = 0;
            minutesTime = 0;
            hoursTime = 0;

            hours.innerHTML = '00';
            minutes.innerHTML = '00';
            seconds.innerHTML = '00';
            miliseconds.innerHTML = '00';
        }
    });

    function updateTime() {
        //visibility
        if (milisecondsTime > 9) {
            miliseconds.innerHTML = milisecondsTime;
            milisecondsTime++;
        } else {
            miliseconds.innerHTML = '0' + milisecondsTime;
            milisecondsTime++;
        }

        if (secondsTime > 9) {
            seconds.innerHTML = secondsTime;
        } else {
            seconds.innerHTML = '0' + secondsTime;
        }

        if (minutesTime > 9) {
            minutes.innerHTML = minutesTime;
        } else {
            minutes.innerHTML = '0' + minutesTime;
        }

        if (hoursTime > 9) {
            hours.innerHTML = hoursTime;
        } else {
            hours.innerHTML = '0' + hoursTime;
        }

        //check 60
        if (milisecondsTime === 60) {
            milisecondsTime = 0;
            secondsTime++;
        }

        if (secondsTime === 60) {
            secondsTime = 0;
            minutesTime++;
        }

        if (minutesTime === 60) {
            minutesTime = 0;
            hoursTime++;
        }

        if (hoursTime === 60) {
            hoursTime = 0;
            minutesTime = 0;
            secondsTime = 0;
            milisecondsTime = 0;
        }
    }
});
