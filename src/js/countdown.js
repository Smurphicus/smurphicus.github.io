const arrivalTimes = {
    "smurphCountdown" : new Date('2024-08-25T04:00:00').getTime(),
    "rowanCountdown" : new Date('2024-08-25T04:00:00').getTime(),
    "joshCountdown" : new Date('2024-08-22T01:05:00').getTime(),
    "dayMattCountdown" : new Date('2024-08-22T01:05:00').getTime(),
    "chezCountdown" : new Date('2024-08-26T11:05:00').getTime(),
    "craftCountdown" : new Date('2024-08-25T11:05:00').getTime()
}

function getCountdownString(targetDate) {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        return "Arrived!"
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return days + ' Days ' + hours + ' Hours ' + minutes + ' Minutes ' + seconds + ' Seconds.';
}

const interval = setInterval(() => {
    for (const [key, value] of Object.entries(arrivalTimes))  {
        document.getElementById(key).innerHTML = key.substring(0, key.length-9) + ": " +getCountdownString(value);
        if (document.getElementById(key).innerHTML < 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerHTML =  key + ' complete.';
        }
    }
}, 1000);
