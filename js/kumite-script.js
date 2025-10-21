const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Scoring
var totalAka = 0;
var totalAo = 0;
var senshuAka = 0;
var senshuAo = 0;
document.getElementById("score_aka").innerHTML = totalAka;
document.getElementById("score_ao").innerHTML = totalAka;

function aka_juko() {
    totalAka = Number(totalAka) + 1;
    document.getElementById("score_aka").innerHTML = totalAka;
    aka_dev_point();
}
function aka_wazzari() {
    totalAka = Number(totalAka) + 2;
    document.getElementById("score_aka").innerHTML = totalAka;
    aka_dev_point();
}
function aka_ippon() {
    totalAka = Number(totalAka) + 3;
    document.getElementById("score_aka").innerHTML = totalAka;
    aka_dev_point();
}
function aka_minus() {
    totalAka = Number(totalAka) - 1;
    document.getElementById("score_aka").innerHTML = totalAka;
    aka_dev_point();
    ao_dev_point();
}

function ao_juko() {
    totalAo = Number(totalAo) + 1;
    document.getElementById("score_ao").innerHTML = totalAo;
    ao_dev_point();
}
function ao_wazzari() {
    totalAo = Number(totalAo) + 2;
    document.getElementById("score_ao").innerHTML = totalAo;
    ao_dev_point();
}
function ao_ippon() {
    totalAo = Number(totalAo) + 3;
    document.getElementById("score_ao").innerHTML = totalAo;
    ao_dev_point();
}
function ao_minus() {
    totalAo = Number(totalAo) - 1;
    document.getElementById("score_ao").innerHTML = totalAo;
    ao_dev_point();
    aka_dev_point();
}

// Round Set
function round_set() {
    // var title = document.getElementById("title_input").value;
    var tatami = document.getElementById("tatami_input").value;
    var roundclass = document.getElementById("roundclass_input").value;
    var aka_name = document.getElementById("aka_name_input").value;
    var aka_team = document.getElementById("aka_team_input").value;
    var ao_name = document.getElementById("ao_name_input").value;
    var ao_team = document.getElementById("ao_team_input").value;
    // document.getElementById("title_output").innerHTML = title;
    document.getElementById("tatami_output").innerHTML = "TATAMI "+tatami;
    document.getElementById("roundclass_output").innerHTML = roundclass;
    
    document.getElementById("aka_name_output").innerHTML = aka_name;
    document.getElementById("aka_team_output").innerHTML = aka_team;
    document.getElementById("ao_name_output").innerHTML = ao_name;
    document.getElementById("ao_team_output").innerHTML = ao_team;
    SetClock();
}

// Clear Set
function clear_set() {
    document.getElementById("aka_name_input").value = "";
    document.getElementById("ao_name_input").value = "";
    document.getElementById("aka_team_input").value = "";
    document.getElementById("ao_team_input").value = "";
    document.getElementById("aka_name_output").innerHTML = "";
    document.getElementById("ao_name_output").innerHTML = "";
    document.getElementById("aka_team_output").innerHTML = "";
    document.getElementById("ao_team_output").innerHTML = "";

    totalAka = 0;
    totalAo = 0;
    document.getElementById("score_aka").innerHTML = totalAka;
    document.getElementById("score_ao").innerHTML = totalAo;
    aka_senshu_off();
    ao_senshu_off();
    aka_pen1_off();
    aka_pen2_off();
    aka_pen3_off();
    aka_pen4_off();
    aka_pen5_off();
    ao_pen1_off();
    ao_pen2_off();
    ao_pen3_off();
    ao_pen4_off();
    ao_pen5_off();
    aka_win_off();
    ao_win_off();
    StopClock();
}

// Senshu
function aka_senshu_on() {
    document.getElementById("aka_senshu_output").style.display = "block";
    document.getElementById("aka_senshu_on").style.display = "none";
    document.getElementById("aka_senshu_off").style.display = "inline-block";
    senshuAka = 1;
}
function aka_senshu_off() {
    document.getElementById("aka_senshu_output").style.display = "none";
    document.getElementById("aka_senshu_off").style.display = "none";
    document.getElementById("aka_senshu_on").style.display = "inline-block";
    senshuAka = 0;
}
function ao_senshu_on() {
    document.getElementById("ao_senshu_output").style.display = "block";
    document.getElementById("ao_senshu_on").style.display = "none";
    document.getElementById("ao_senshu_off").style.display = "inline-block";
    senshuAo = 1;
}
function ao_senshu_off() {
    document.getElementById("ao_senshu_output").style.display = "none";
    document.getElementById("ao_senshu_off").style.display = "none";
    document.getElementById("ao_senshu_on").style.display = "inline-block";
    senshuAo = 0;
}

// Penalty
function aka_pen1_on() {
    document.getElementById("aka_pen1_output").style.display = "inline-block";
    document.getElementById("aka_pen1_on").style.display = "none";
    document.getElementById("aka_pen1_off").style.display = "inline-block";
}
function aka_pen1_off() {
    document.getElementById("aka_pen1_output").style.display = "none";
    document.getElementById("aka_pen1_off").style.display = "none";
    document.getElementById("aka_pen1_on").style.display = "inline-block";
}
function aka_pen2_on() {
    document.getElementById("aka_pen2_output").style.display = "inline-block";
    document.getElementById("aka_pen2_on").style.display = "none";
    document.getElementById("aka_pen2_off").style.display = "inline-block";
}
function aka_pen2_off() {
    document.getElementById("aka_pen2_output").style.display = "none";
    document.getElementById("aka_pen2_off").style.display = "none";
    document.getElementById("aka_pen2_on").style.display = "inline-block";
}
function aka_pen3_on() {
    document.getElementById("aka_pen3_output").style.display = "inline-block";
    document.getElementById("aka_pen3_on").style.display = "none";
    document.getElementById("aka_pen3_off").style.display = "inline-block";
}
function aka_pen3_off() {
    document.getElementById("aka_pen3_output").style.display = "none";
    document.getElementById("aka_pen3_off").style.display = "none";
    document.getElementById("aka_pen3_on").style.display = "inline-block";
}
function aka_pen4_on() {
    document.getElementById("aka_pen4_output").style.display = "inline-block";
    document.getElementById("aka_pen4_on").style.display = "none";
    document.getElementById("aka_pen4_off").style.display = "inline-block";
}
function aka_pen4_off() {
    document.getElementById("aka_pen4_output").style.display = "none";
    document.getElementById("aka_pen4_off").style.display = "none";
    document.getElementById("aka_pen4_on").style.display = "inline-block";
}
function aka_pen5_on() {
    document.getElementById("aka_pen5_output").style.display = "inline-block";
    document.getElementById("aka_pen5_on").style.display = "none";
    document.getElementById("aka_pen5_off").style.display = "inline-block";
    ao_win_on();
}
function aka_pen5_off() {
    document.getElementById("aka_pen5_output").style.display = "none";
    document.getElementById("aka_pen5_off").style.display = "none";
    document.getElementById("aka_pen5_on").style.display = "inline-block";
    ao_win_off();
}
function ao_pen1_on() {
    document.getElementById("ao_pen1_output").style.display = "inline-block";
    document.getElementById("ao_pen1_on").style.display = "none";
    document.getElementById("ao_pen1_off").style.display = "inline-block";
}
function ao_pen1_off() {
    document.getElementById("ao_pen1_output").style.display = "none";
    document.getElementById("ao_pen1_off").style.display = "none";
    document.getElementById("ao_pen1_on").style.display = "inline-block";
}
function ao_pen2_on() {
    document.getElementById("ao_pen2_output").style.display = "inline-block";
    document.getElementById("ao_pen2_on").style.display = "none";
    document.getElementById("ao_pen2_off").style.display = "inline-block";
}
function ao_pen2_off() {
    document.getElementById("ao_pen2_output").style.display = "none";
    document.getElementById("ao_pen2_off").style.display = "none";
    document.getElementById("ao_pen2_on").style.display = "inline-block";
}
function ao_pen3_on() {
    document.getElementById("ao_pen3_output").style.display = "inline-block";
    document.getElementById("ao_pen3_on").style.display = "none";
    document.getElementById("ao_pen3_off").style.display = "inline-block";
}
function ao_pen3_off() {
    document.getElementById("ao_pen3_output").style.display = "none";
    document.getElementById("ao_pen3_off").style.display = "none";
    document.getElementById("ao_pen3_on").style.display = "inline-block";
}
function ao_pen4_on() {
    document.getElementById("ao_pen4_output").style.display = "inline-block";
    document.getElementById("ao_pen4_on").style.display = "none";
    document.getElementById("ao_pen4_off").style.display = "inline-block";
}
function ao_pen4_off() {
    document.getElementById("ao_pen4_output").style.display = "none";
    document.getElementById("ao_pen4_off").style.display = "none";
    document.getElementById("ao_pen4_on").style.display = "inline-block";
}
function ao_pen5_on() {
    document.getElementById("ao_pen5_output").style.display = "inline-block";
    document.getElementById("ao_pen5_on").style.display = "none";
    document.getElementById("ao_pen5_off").style.display = "inline-block";
    aka_win_on();
}
function ao_pen5_off() {
    document.getElementById("ao_pen5_output").style.display = "none";
    document.getElementById("ao_pen5_off").style.display = "none";
    document.getElementById("ao_pen5_on").style.display = "inline-block";
    aka_win_off();
}

// Winning
function aka_win_on() {
    document.getElementById("aka_win_output").style.display = "block";
    document.getElementById("aka_win_on").style.display = "none";
    document.getElementById("aka_win_off").style.display = "inline-block";
}
function aka_win_off() {
    document.getElementById("aka_win_output").style.display = "none";
    document.getElementById("aka_win_off").style.display = "none";
    document.getElementById("aka_win_on").style.display = "inline-block";
}
let aka_blink = document.getElementById('aka_blink');
setInterval(function() {
    aka_blink.style.display = (aka_blink.style.display == 'none' ? '' : 'none');
}, 500);

function ao_win_on() {
    document.getElementById("ao_win_output").style.display = "block";
    document.getElementById("ao_win_on").style.display = "none";
    document.getElementById("ao_win_off").style.display = "inline-block";
}
function ao_win_off() {
    document.getElementById("ao_win_output").style.display = "none";
    document.getElementById("ao_win_off").style.display = "none";
    document.getElementById("ao_win_on").style.display = "inline-block";
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
        document.getElementById("inputMinute").value = "3";
        document.getElementById("inputSecond").value = "00";
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
    timeout_win();
}

function SetClock()
{
    StopClock();
    inputMinute = Number(document.getElementById("inputMinute").value);
    inputSecond = Number(document.getElementById("inputSecond").value);
    inputMilisecond = 0;
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
                new Audio('./assets/beep.mp3').play()
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
                inputMilisecond = 9;
                outputMilisecond.innerHTML = inputMilisecond;
            }else{
                    StopClock();
                    new Audio('./assets/beep.mp3').play()
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

// Automated Win //
// Timeout
function timeout_win() {
    if (totalAka > totalAo) {
        aka_win_on();
    } else {
        if (totalAo > totalAka) {
            ao_win_on();
        } else {
            senshu_win();
        }
    }
}
// Senshu
function senshu_win() {
    if (totalAka === totalAo) {
        if (senshuAka > senshuAo) {
            aka_win_on();
        }
        if (senshuAo > senshuAka) {
            ao_win_on();
        }
    }
}
// Deviated Point
function aka_dev_point() {
    var dev_point = document.getElementById("dev_point").value;
    if (totalAka-totalAo >= dev_point) {
        aka_win_on();
    } else {
        aka_win_off();
    }
}
function ao_dev_point() {
    var dev_point = document.getElementById("dev_point").value;
    if (totalAo-totalAka >= dev_point) {
        ao_win_on();
    } else {
        ao_win_off();
    }
}
