
const days1 = document.getElementById ('days');
const hours1 = document.getElementById ('hours');
const minutes1 = document.getElementById ('minutes');
const seconds1 = document.getElementById ('seconds');




const ShafsBday = '1 May 2021'

function countdown() {
    const ShafsBdate = new Date(ShafsBday);
    const currentDate = new Date();

    const totalseconds = (ShafsBdate - currentDate)/1000;
    
    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600) %24;
    const minutes = Math.floor(totalseconds/60) %60;
    const seconds = Math.floor(totalseconds) %60;

    days1.innerHTML = days;
    hours1.innerHTML = formatTime(hours) ;
    minutes1.innerHTML = formatTime(minutes);
    seconds1.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


//initial call
countdown();

setInterval(countdown, 1000)