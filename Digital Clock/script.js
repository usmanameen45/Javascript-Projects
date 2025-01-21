const clock = document.getElementById('clock');

function dateAndTime(){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}

dateAndTime()

setInterval(() => {
    dateAndTime()
}, 1000);