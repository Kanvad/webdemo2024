function clock(){
                
    var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ]; 
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    var today = new Date();

    document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + " " + 
    today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' +today.getFullYear());

    
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = h<11 ? 'AM': 'PM';

    h = h<10? '0'+h: h;
    m = m<10? '0'+m: m;
    s = s<10? '0'+s: s;               

    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;

}
var inter = setInterval(clock,400);

const secHand = document.getElementById('sec-hand');
const minHand = document.getElementById('min-hand');
const hourHand = document.getElementById('hour-hand');

function clockTick() {
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    rotateClockHand(hourHand, hours);
    rotateClockHand(minHand, minutes);
    rotateClockHand(secHand, seconds);
}

function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360);
}

setInterval(clockTick, 1000)