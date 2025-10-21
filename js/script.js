// Scoring
var totalAka = 0;
var totalAo = 0;
document.getElementById("score_aka").innerHTML = totalAka;
document.getElementById("score_ao").innerHTML = totalAka;

function aka_juko() {
    totalAka = Number(totalAka) + 1;
    document.getElementById("score_aka").innerHTML = totalAka;
}
function aka_wazzari() {
    totalAka = Number(totalAka) + 2;
    document.getElementById("score_aka").innerHTML = totalAka;
}
function aka_ippon() {
    totalAka = Number(totalAka) + 3;
    document.getElementById("score_aka").innerHTML = totalAka;
}
function aka_minus() {
    totalAka = Number(totalAka) - 1;
    document.getElementById("score_aka").innerHTML = totalAka;
}

function ao_juko() {
    totalAo = Number(totalAo) + 1;
    document.getElementById("score_ao").innerHTML = totalAo;
}
function ao_wazzari() {
    totalAo = Number(totalAo) + 2;
    document.getElementById("score_ao").innerHTML = totalAo;
}
function ao_ippon() {
    totalAo = Number(totalAo) + 3;
    document.getElementById("score_ao").innerHTML = totalAo;
}
function ao_minus() {
    totalAo = Number(totalAo) - 1;
    document.getElementById("score_ao").innerHTML = totalAo;
}

// Round Set
function round_set() {
    var title = document.getElementById("title_input").value;
    var tatami = document.getElementById("tatami_input").value;
    var roundclass = document.getElementById("roundclass_input").value;
    var aka_name = document.getElementById("aka_name_input").value;
    var aka_team = document.getElementById("aka_team_input").value;
    var ao_name = document.getElementById("ao_name_input").value;
    var ao_team = document.getElementById("ao_team_input").value;
    document.getElementById("title_output").innerHTML = title;
    document.getElementById("tatami_output").innerHTML = "TATAMI "+tatami;
    document.getElementById("roundclass_output").innerHTML = roundclass;
    
    document.getElementById("aka_name_output").innerHTML = aka_name;
    document.getElementById("aka_team_output").innerHTML = aka_team;
    document.getElementById("ao_name_output").innerHTML = ao_name;
    document.getElementById("ao_team_output").innerHTML = ao_team;
    SetClock();
}

// Senshu
function aka_senshu_input() {
var x = document.getElementById("aka_senshu_output");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function ao_senshu_input() {
var x = document.getElementById("ao_senshu_output");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Penalty
function aka_pen1_input() {
var x = document.getElementById("aka_pen1_output");
    if (x.style.display === "none") {
        x.style.display = "inline-block";
    } else {
        x.style.display = "none";
    }
}
function aka_pen2_input() {
var x = document.getElementById("aka_pen2_output");
    if (x.style.display === "none") {
        x.style.display = "inline-block";
    } else {
        x.style.display = "none";
    }
}
function aka_pen3_input() {
var x = document.getElementById("aka_pen3_output");
    if (x.style.display === "none") {
        x.style.display = "inline-block";
    } else {
        x.style.display = "none";
    }
}
function aka_pen4_input() {
var x = document.getElementById("aka_pen4_output");
    if (x.style.display === "none") {
        x.style.display = "inline-block";
    } else {
        x.style.display = "none";
    }
}
function aka_pen5_input() {
var x = document.getElementById("aka_pen5_output");
var y = document.getElementById("ao_win_output");
    if (x.style.display === "none") {
        x.style.display = "inline-block";
        y.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "none";
    }
}
function ao_pen1_input() {
var x = document.getElementById("ao_pen1_output");
    if (x.style.display === "none") {
        x.style.display = "inline-block";
    } else {
        x.style.display = "none";
    }
}
function ao_pen2_input() {
var x = document.getElementById("ao_pen2_output");
    if (x.style.display === "none") {
        x.style.display = "inline-block";
    } else {
        x.style.display = "none";
    }
}
function ao_pen3_input() {
var x = document.getElementById("ao_pen3_output");
    if (x.style.display === "none") {
        x.style.display = "inline-block";
    } else {
        x.style.display = "none";
    }
}
function ao_pen4_input() {
var x = document.getElementById("ao_pen4_output");
    if (x.style.display === "none") {
        x.style.display = "inline-block";
    } else {
        x.style.display = "none";
    }
}
function ao_pen5_input() {
var x = document.getElementById("ao_pen5_output");
var y = document.getElementById("aka_win_output");
    if (x.style.display === "none") {
        x.style.display = "inline-block";
        y.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "none";
    }
}

// Winning
function aka_win_input() {
var x = document.getElementById("aka_win_output");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
let aka_blink = document.getElementById('aka_blink');
setInterval(function() {
    aka_blink.style.display = (aka_blink.style.display == 'none' ? '' : 'none');
}, 500);

function ao_win_input() {
var x = document.getElementById("ao_win_output");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
let ao_blink = document.getElementById('ao_blink');
setInterval(function() {
    ao_blink.style.display = (ao_blink.style.display == 'none' ? '' : 'none');
}, 500);

// Timer
var inputMinute;
var inputSecond;
var inputMilisecond = 0;
var outputMinute = document.getElementById("outputMinute");
var outputSecond = document.getElementById("outputSecond");
var outputMilisecond = document.getElementById("outputMilisecond");
var startTime = document.getElementById("startTime");
var pauseTime = document.getElementById("pauseTime");
var stopTime = document.getElementById("stopTime");
var timerApp;
var outputTimer = document.getElementById("outputTimer");

function StartClock()
{
    if((inputMinute > 0 && inputMinute < 60)|| (inputSecond > 0 && inputSecond < 60))
    {
        outputMinute.innerHTML = FormatTime(inputMinute);
        outputSecond.innerHTML = FormatTime(inputSecond);
        outputMilisecond.innerHTML = 0;
        startTime.style.display = "none";
        pauseTime.style.display = "inline-block";
        timerApp = setInterval(myClock, 100);
    }
    else
    {
        document.getElementById("inputMinute").value = "";
        document.getElementById("inputSecond").value = "";
        alert("Enter valid time.");
    }
}

function PauseClock() {
    clearInterval(timerApp);
    startTime.style.display = "inline-block";
    pauseTime.style.display = "none";
}

function StopClock()
{
    outputMinute.innerHTML = "00";
    outputSecond.innerHTML = "00";
    outputMilisecond.innerHTML = "0";
    clearInterval(timerApp);
    startTime.style.display = "inline-block";
    pauseTime.style.display = "none";
}

function SetClock()
{
    StopClock();
    inputMinute = Number(document.getElementById("inputMinute").value);
    inputSecond = Number(document.getElementById("inputSecond").value);
    outputMinute.innerHTML = FormatTime(inputMinute);
    outputSecond.innerHTML = FormatTime(inputSecond);
    outputMilisecond.innerHTML = 0;
    startTime.style.display = "inline-block";
    pauseTime.style.display = "none";
    outputTimer.style.color = "";
}

function myClock()
{  
    if(inputMilisecond > 0){
        inputMilisecond--;
        outputMilisecond.innerHTML = inputMilisecond;
    }else{
        if(inputSecond > 0){
            if (inputMinute === 0 && inputSecond === 15) {
                new Audio('./beep.mp3').play()
            }
            if (inputMinute === 0 && inputSecond <= 15) {
                outputTimer.style.color = "red";
            }
            inputSecond--;
            outputSecond.innerHTML = FormatTime(inputSecond);
            inputMilisecond = 9;
            outputMilisecond.innerHTML = inputMilisecond; 
        }else{
            if(inputMinute > 0){
                inputMinute--;
                outputMinute.innerHTML = FormatTime(inputMinute);
                inputSecond = 59;
                outputSecond.innerHTML = FormatTime(inputSecond);
            }else{
                    StopClock();
                    new Audio('./beep.mp3').play()
                    return;
            }
        }
    }
}

function FormatTime(time)
{
    var formatedTime
    if(time < 10)
    {
        formatedTime = "0" + time.toString();
    }
    else
    {
        formatedTime = time.toString();
    }
    return formatedTime
}