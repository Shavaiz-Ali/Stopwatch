
let hour = 0;
let min = 0;
let sec = 0;
let mili = 0;

let timer = false;


function start(){
    timer = true;
    stopwatch();
}
function stop(){
    timer = false;
    stopwatch();
}
function reset(){
    timer = false;
    stopwatch();

    hour = 0;
    min = 0;
    sec = 0;
    mili = 0;
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("milisec").innerHTML = "00";
}
function stopwatch(){

    if(timer == true){

        mili = mili + 1;

        if(mili == 100){
            sec = sec + 1;
            mili = 0;
        }
        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        if(min == 60){
            hour = hour + 1;
            min = 0;
            sec = 0;
        }

        let hourstring = hour;
        let minstring = min;
        let secstring = sec;
        let milistring = mili;

        if(hour < 10){
            hourstring = "0" + hourstring;
        }
        if(min < 10){
            minstring = "0" + minstring;
        }
        if(sec < 10){
            secstring = "0" + secstring;
        }
        if(mili < 10){
            milistring = "0" + milistring;
        }

        document.getElementById("hour").innerHTML = hourstring;
        document.getElementById("min").innerHTML = minstring;
        document.getElementById("sec").innerHTML = secstring;
        document.getElementById("milisec").innerHTML = milistring;
        setTimeout("stopwatch()", 10)
    }
}