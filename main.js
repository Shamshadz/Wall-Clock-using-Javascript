console.log('This is Wall Clock..');

function updateclock() {

    let currentTime = new Date();

    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();

    if (currentHour < 10) {
        currentHour = "0" + currentHour;
    }

    if (currentMinute < 10) {
        currentHour = "0" + currentMinute;
    }

    if (currentSecond < 10) {
        currentHour = "0" + currentSecond;
    }

    let dayTime = (currentHour > 12) ? "PM" : "AM";


    if(currentHour > 12){
        currentHour = currentHour - 12;
    }
    currentHour = (currentHour == 0)? 12 : currentHour;

    let currentString = `${currentHour} : ${currentMinute} : ${currentSecond} - ${dayTime}`;

    let clock = document.getElementById('clock');
    clock.innerHTML = currentString;


}

setInterval(() => {
    updateclock();
}, 1000);