const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Mode Display
function list_input() {
    document.getElementById("list_output").style.display = "block";
    document.getElementById("scoreboard_output").style.display = "none";
    document.getElementById("final_output").style.display = "none";
}
function scoreboard_input() {
    document.getElementById("list_output").style.display = "none";
    document.getElementById("scoreboard_output").style.display = "block";
    document.getElementById("final_output").style.display = "none";
    
}
function final_input() {
    document.getElementById("list_output").style.display = "none";
    document.getElementById("scoreboard_output").style.display = "none";
    document.getElementById("final_output").style.display = "block";
}

// List Atlet
function athlete1_add() {
    document.getElementById("athlete1_output").style.display = "flex";
    document.getElementById("athlete1_add").style.display = "none";
    document.getElementById("athlete1_remove").style.display = "inline-block";
    document.getElementById("athlete1_belt_aka").style.display = "inline-block";
    document.getElementById("athlete1_belt_ao").style.display = "none";
    document.getElementById("athlete1_belt_output").classList = "col-md-1 me-1 hi-bgred";
    document.getElementById("athlete1_name_input").style.display = "inline-block";
    document.getElementById("athlete1_team_input").style.display = "inline-block";
    document.getElementById("athlete1_score_input").style.display = "inline-block";
}
function athlete1_remove() {
    document.getElementById("athlete1_output").style.display = "none";
    document.getElementById("athlete1_add").style.display = "inline-block";
    document.getElementById("athlete1_remove").style.display = "none";
    document.getElementById("athlete1_belt_aka").style.display = "none";
    document.getElementById("athlete1_belt_ao").style.display = "none";
    document.getElementById("athlete1_name_input").style.display = "none";
    document.getElementById("athlete1_team_input").style.display = "none";
    document.getElementById("athlete1_score_input").style.display = "none";
}
function athlete1_belt_aka() {
    document.getElementById("athlete1_belt_aka").style.display = "none";
    document.getElementById("athlete1_belt_ao").style.display = "inline-block";
    document.getElementById("athlete1_belt_output").classList = "col-md-1 me-1 hi-bgblue";
}
function athlete1_belt_ao() {
    document.getElementById("athlete1_belt_aka").style.display = "inline-block";
    document.getElementById("athlete1_belt_ao").style.display = "none";
    document.getElementById("athlete1_belt_output").classList = "col-md-1 me-1 hi-bgred";
}
function athlete2_add() {
    document.getElementById("athlete2_output").style.display = "flex";
    document.getElementById("athlete2_add").style.display = "none";
    document.getElementById("athlete2_remove").style.display = "inline-block";
    document.getElementById("athlete2_belt_aka").style.display = "inline-block";
    document.getElementById("athlete2_belt_ao").style.display = "none";
    document.getElementById("athlete2_belt_output").classList = "col-md-1 me-1 hi-bgred";
    document.getElementById("athlete2_name_input").style.display = "inline-block";
    document.getElementById("athlete2_team_input").style.display = "inline-block";
    document.getElementById("athlete2_score_input").style.display = "inline-block";
}
function athlete2_remove() {
    document.getElementById("athlete2_output").style.display = "none";
    document.getElementById("athlete2_add").style.display = "inline-block";
    document.getElementById("athlete2_remove").style.display = "none";
    document.getElementById("athlete2_belt_aka").style.display = "none";
    document.getElementById("athlete2_belt_ao").style.display = "none";
    document.getElementById("athlete2_name_input").style.display = "none";
    document.getElementById("athlete2_team_input").style.display = "none";
    document.getElementById("athlete2_score_input").style.display = "none";
}
function athlete2_belt_aka() {
    document.getElementById("athlete2_belt_aka").style.display = "none";
    document.getElementById("athlete2_belt_ao").style.display = "inline-block";
    document.getElementById("athlete2_belt_output").classList = "col-md-1 me-1 hi-bgblue";
}
function athlete2_belt_ao() {
    document.getElementById("athlete2_belt_aka").style.display = "inline-block";
    document.getElementById("athlete2_belt_ao").style.display = "none";
    document.getElementById("athlete2_belt_output").classList = "col-md-1 me-1 hi-bgred";
}
function athlete3_add() {
    document.getElementById("athlete3_output").style.display = "flex";
    document.getElementById("athlete3_add").style.display = "none";
    document.getElementById("athlete3_remove").style.display = "inline-block";
    document.getElementById("athlete3_belt_aka").style.display = "inline-block";
    document.getElementById("athlete3_belt_ao").style.display = "none";
    document.getElementById("athlete3_belt_output").classList = "col-md-1 me-1 hi-bgred";
    document.getElementById("athlete3_name_input").style.display = "inline-block";
    document.getElementById("athlete3_team_input").style.display = "inline-block";
    document.getElementById("athlete3_score_input").style.display = "inline-block";
}
function athlete3_remove() {
    document.getElementById("athlete3_output").style.display = "none";
    document.getElementById("athlete3_add").style.display = "inline-block";
    document.getElementById("athlete3_remove").style.display = "none";
    document.getElementById("athlete3_belt_aka").style.display = "none";
    document.getElementById("athlete3_belt_ao").style.display = "none";
    document.getElementById("athlete3_name_input").style.display = "none";
    document.getElementById("athlete3_team_input").style.display = "none";
    document.getElementById("athlete3_score_input").style.display = "none";
}
function athlete3_belt_aka() {
    document.getElementById("athlete3_belt_aka").style.display = "none";
    document.getElementById("athlete3_belt_ao").style.display = "inline-block";
    document.getElementById("athlete3_belt_output").classList = "col-md-1 me-1 hi-bgblue";
}
function athlete3_belt_ao() {
    document.getElementById("athlete3_belt_aka").style.display = "inline-block";
    document.getElementById("athlete3_belt_ao").style.display = "none";
    document.getElementById("athlete3_belt_output").classList = "col-md-1 me-1 hi-bgred";
}
function athlete4_add() {
    document.getElementById("athlete4_output").style.display = "flex";
    document.getElementById("athlete4_add").style.display = "none";
    document.getElementById("athlete4_remove").style.display = "inline-block";
    document.getElementById("athlete4_belt_aka").style.display = "inline-block";
    document.getElementById("athlete4_belt_ao").style.display = "none";
    document.getElementById("athlete4_belt_output").classList = "col-md-1 me-1 hi-bgred";
    document.getElementById("athlete4_name_input").style.display = "inline-block";
    document.getElementById("athlete4_team_input").style.display = "inline-block";
    document.getElementById("athlete4_score_input").style.display = "inline-block";
}
function athlete4_remove() {
    document.getElementById("athlete4_output").style.display = "none";
    document.getElementById("athlete4_add").style.display = "inline-block";
    document.getElementById("athlete4_remove").style.display = "none";
    document.getElementById("athlete4_belt_aka").style.display = "none";
    document.getElementById("athlete4_belt_ao").style.display = "none";
    document.getElementById("athlete4_name_input").style.display = "none";
    document.getElementById("athlete4_team_input").style.display = "none";
    document.getElementById("athlete4_score_input").style.display = "none";
}
function athlete4_belt_aka() {
    document.getElementById("athlete4_belt_aka").style.display = "none";
    document.getElementById("athlete4_belt_ao").style.display = "inline-block";
    document.getElementById("athlete4_belt_output").classList = "col-md-1 me-1 hi-bgblue";
}
function athlete4_belt_ao() {
    document.getElementById("athlete4_belt_aka").style.display = "inline-block";
    document.getElementById("athlete4_belt_ao").style.display = "none";
    document.getElementById("athlete4_belt_output").classList = "col-md-1 me-1 hi-bgred";
}
function athlete5_add() {
    document.getElementById("athlete5_output").style.display = "flex";
    document.getElementById("athlete5_add").style.display = "none";
    document.getElementById("athlete5_remove").style.display = "inline-block";
    document.getElementById("athlete5_belt_aka").style.display = "inline-block";
    document.getElementById("athlete5_belt_ao").style.display = "none";
    document.getElementById("athlete5_belt_output").classList = "col-md-1 me-1 hi-bgred";
    document.getElementById("athlete5_name_input").style.display = "inline-block";
    document.getElementById("athlete5_team_input").style.display = "inline-block";
    document.getElementById("athlete5_score_input").style.display = "inline-block";
}
function athlete5_remove() {
    document.getElementById("athlete5_output").style.display = "none";
    document.getElementById("athlete5_add").style.display = "inline-block";
    document.getElementById("athlete5_remove").style.display = "none";
    document.getElementById("athlete5_belt_aka").style.display = "none";
    document.getElementById("athlete5_belt_ao").style.display = "none";
    document.getElementById("athlete5_name_input").style.display = "none";
    document.getElementById("athlete5_team_input").style.display = "none";
    document.getElementById("athlete5_score_input").style.display = "none";
}
function athlete5_belt_aka() {
    document.getElementById("athlete5_belt_aka").style.display = "none";
    document.getElementById("athlete5_belt_ao").style.display = "inline-block";
    document.getElementById("athlete5_belt_output").classList = "col-md-1 me-1 hi-bgblue";
}
function athlete5_belt_ao() {
    document.getElementById("athlete5_belt_aka").style.display = "inline-block";
    document.getElementById("athlete5_belt_ao").style.display = "none";
    document.getElementById("athlete5_belt_output").classList = "col-md-1 me-1 hi-bgred";
}
function athlete6_add() {
    document.getElementById("athlete6_output").style.display = "flex";
    document.getElementById("athlete6_add").style.display = "none";
    document.getElementById("athlete6_remove").style.display = "inline-block";
    document.getElementById("athlete6_belt_aka").style.display = "inline-block";
    document.getElementById("athlete6_belt_ao").style.display = "none";
    document.getElementById("athlete6_belt_output").classList = "col-md-1 me-1 hi-bgred";
    document.getElementById("athlete6_name_input").style.display = "inline-block";
    document.getElementById("athlete6_team_input").style.display = "inline-block";
    document.getElementById("athlete6_score_input").style.display = "inline-block";
}
function athlete6_remove() {
    document.getElementById("athlete6_output").style.display = "none";
    document.getElementById("athlete6_add").style.display = "inline-block";
    document.getElementById("athlete6_remove").style.display = "none";
    document.getElementById("athlete6_belt_aka").style.display = "none";
    document.getElementById("athlete6_belt_ao").style.display = "none";
    document.getElementById("athlete6_name_input").style.display = "none";
    document.getElementById("athlete6_team_input").style.display = "none";
    document.getElementById("athlete6_score_input").style.display = "none";
}
function athlete6_belt_aka() {
    document.getElementById("athlete6_belt_aka").style.display = "none";
    document.getElementById("athlete6_belt_ao").style.display = "inline-block";
    document.getElementById("athlete6_belt_output").classList = "col-md-1 me-1 hi-bgblue";
}
function athlete6_belt_ao() {
    document.getElementById("athlete6_belt_aka").style.display = "inline-block";
    document.getElementById("athlete6_belt_ao").style.display = "none";
    document.getElementById("athlete6_belt_output").classList = "col-md-1 me-1 hi-bgred";
}
function athlete7_add() {
    document.getElementById("athlete7_output").style.display = "flex";
    document.getElementById("athlete7_add").style.display = "none";
    document.getElementById("athlete7_remove").style.display = "inline-block";
    document.getElementById("athlete7_belt_aka").style.display = "inline-block";
    document.getElementById("athlete7_belt_ao").style.display = "none";
    document.getElementById("athlete7_belt_output").classList = "col-md-1 me-1 hi-bgred";
    document.getElementById("athlete7_name_input").style.display = "inline-block";
    document.getElementById("athlete7_team_input").style.display = "inline-block";
    document.getElementById("athlete7_score_input").style.display = "inline-block";
}
function athlete7_remove() {
    document.getElementById("athlete7_output").style.display = "none";
    document.getElementById("athlete7_add").style.display = "inline-block";
    document.getElementById("athlete7_remove").style.display = "none";
    document.getElementById("athlete7_belt_aka").style.display = "none";
    document.getElementById("athlete7_belt_ao").style.display = "none";
    document.getElementById("athlete7_name_input").style.display = "none";
    document.getElementById("athlete7_team_input").style.display = "none";
    document.getElementById("athlete7_score_input").style.display = "none";
}
function athlete7_belt_aka() {
    document.getElementById("athlete7_belt_aka").style.display = "none";
    document.getElementById("athlete7_belt_ao").style.display = "inline-block";
    document.getElementById("athlete7_belt_output").classList = "col-md-1 me-1 hi-bgblue";
}
function athlete7_belt_ao() {
    document.getElementById("athlete7_belt_aka").style.display = "inline-block";
    document.getElementById("athlete7_belt_ao").style.display = "none";
    document.getElementById("athlete7_belt_output").classList = "col-md-1 me-1 hi-bgred";
}
function athlete8_add() {
    document.getElementById("athlete8_output").style.display = "flex";
    document.getElementById("athlete8_add").style.display = "none";
    document.getElementById("athlete8_remove").style.display = "inline-block";
    document.getElementById("athlete8_belt_aka").style.display = "inline-block";
    document.getElementById("athlete8_belt_ao").style.display = "none";
    document.getElementById("athlete8_belt_output").classList = "col-md-1 me-1 hi-bgred";
    document.getElementById("athlete8_name_input").style.display = "inline-block";
    document.getElementById("athlete8_team_input").style.display = "inline-block";
    document.getElementById("athlete8_score_input").style.display = "inline-block";
}
function athlete8_remove() {
    document.getElementById("athlete8_output").style.display = "none";
    document.getElementById("athlete8_add").style.display = "inline-block";
    document.getElementById("athlete8_remove").style.display = "none";
    document.getElementById("athlete8_belt_aka").style.display = "none";
    document.getElementById("athlete8_belt_ao").style.display = "none";
    document.getElementById("athlete8_name_input").style.display = "none";
    document.getElementById("athlete8_team_input").style.display = "none";
    document.getElementById("athlete8_score_input").style.display = "none";
}
function athlete8_belt_aka() {
    document.getElementById("athlete8_belt_aka").style.display = "none";
    document.getElementById("athlete8_belt_ao").style.display = "inline-block";
    document.getElementById("athlete8_belt_output").classList = "col-md-1 me-1 hi-bgblue";
}
function athlete8_belt_ao() {
    document.getElementById("athlete8_belt_aka").style.display = "inline-block";
    document.getElementById("athlete8_belt_ao").style.display = "none";
    document.getElementById("athlete8_belt_output").classList = "col-md-1 me-1 hi-bgred";
}

function set_list() {
    var athlete1_name = document.getElementById("athlete1_name_input").value;
    var athlete1_team = document.getElementById("athlete1_team_input").value;
    var athlete1_score = document.getElementById("athlete1_score_input").value;
    var athlete2_name = document.getElementById("athlete2_name_input").value;
    var athlete2_team = document.getElementById("athlete2_team_input").value;
    var athlete2_score = document.getElementById("athlete2_score_input").value;
    var athlete3_name = document.getElementById("athlete3_name_input").value;
    var athlete3_team = document.getElementById("athlete3_team_input").value;
    var athlete3_score = document.getElementById("athlete3_score_input").value;
    var athlete4_name = document.getElementById("athlete4_name_input").value;
    var athlete4_team = document.getElementById("athlete4_team_input").value;
    var athlete4_score = document.getElementById("athlete4_score_input").value;
    var athlete5_name = document.getElementById("athlete5_name_input").value;
    var athlete5_team = document.getElementById("athlete5_team_input").value;
    var athlete5_score = document.getElementById("athlete5_score_input").value;
    var athlete6_name = document.getElementById("athlete6_name_input").value;
    var athlete6_team = document.getElementById("athlete6_team_input").value;
    var athlete6_score = document.getElementById("athlete6_score_input").value;
    var athlete7_name = document.getElementById("athlete7_name_input").value;
    var athlete7_team = document.getElementById("athlete7_team_input").value;
    var athlete7_score = document.getElementById("athlete7_score_input").value;
    var athlete8_name = document.getElementById("athlete8_name_input").value;
    var athlete8_team = document.getElementById("athlete8_team_input").value;
    var athlete8_score = document.getElementById("athlete8_score_input").value;
    document.getElementById("athlete1_name_output").innerHTML = athlete1_name;
    document.getElementById("athlete1_team_output").innerHTML = athlete1_team;
    document.getElementById("athlete1_score_output").innerHTML = (Math.round(athlete1_score * 10) / 100).toFixed(2);
    document.getElementById("athlete2_name_output").innerHTML = athlete2_name;
    document.getElementById("athlete2_team_output").innerHTML = athlete2_team;
    document.getElementById("athlete2_score_output").innerHTML = (Math.round(athlete2_score * 10) / 100).toFixed(2);
    document.getElementById("athlete3_name_output").innerHTML = athlete3_name;
    document.getElementById("athlete3_team_output").innerHTML = athlete3_team;
    document.getElementById("athlete3_score_output").innerHTML = (Math.round(athlete3_score * 10) / 100).toFixed(2);
    document.getElementById("athlete4_name_output").innerHTML = athlete4_name;
    document.getElementById("athlete4_team_output").innerHTML = athlete4_team;
    document.getElementById("athlete4_score_output").innerHTML = (Math.round(athlete4_score * 10) / 100).toFixed(2);
    document.getElementById("athlete5_name_output").innerHTML = athlete5_name;
    document.getElementById("athlete5_team_output").innerHTML = athlete5_team;
    document.getElementById("athlete5_score_output").innerHTML = (Math.round(athlete5_score * 10) / 100).toFixed(2);
    document.getElementById("athlete6_name_output").innerHTML = athlete6_name;
    document.getElementById("athlete6_team_output").innerHTML = athlete6_team;
    document.getElementById("athlete6_score_output").innerHTML = (Math.round(athlete6_score * 10) / 100).toFixed(2);
    document.getElementById("athlete7_name_output").innerHTML = athlete7_name;
    document.getElementById("athlete7_team_output").innerHTML = athlete7_team;
    document.getElementById("athlete7_score_output").innerHTML = (Math.round(athlete7_score * 10) / 100).toFixed(2);
    document.getElementById("athlete8_name_output").innerHTML = athlete8_name;
    document.getElementById("athlete8_team_output").innerHTML = athlete8_team;
    document.getElementById("athlete8_score_output").innerHTML = (Math.round(athlete8_score * 10) / 100).toFixed(2);
}

function round_set() {
    var kelas = document.getElementById("kelas_input").value;
    var tatami = document.getElementById("tatami_input").value;
    document.getElementById("kelas_list_output").innerHTML = kelas;
    document.getElementById("tatami_list_output").innerHTML = "TATAMI " + tatami;
    document.getElementById("kelas_scoreboard_output").innerHTML = kelas;
    document.getElementById("tatami_scoreboard_output").innerHTML = "TATAMI " + tatami;
    document.getElementById("kelas_final_output").innerHTML = kelas;
    set_list();
}

function clear_list() {
    athlete1_remove();
    athlete2_remove();
    athlete3_remove();
    athlete4_remove();
    athlete5_remove();
    athlete6_remove();
    athlete7_remove();
    athlete8_remove();
    document.getElementById("athlete1_name_input").value = "";
    document.getElementById("athlete2_name_input").value = "";
    document.getElementById("athlete3_name_input").value = "";
    document.getElementById("athlete4_name_input").value = "";
    document.getElementById("athlete5_name_input").value = "";
    document.getElementById("athlete6_name_input").value = "";
    document.getElementById("athlete7_name_input").value = "";
    document.getElementById("athlete8_name_input").value = "";
    document.getElementById("athlete1_team_input").value = "";
    document.getElementById("athlete2_team_input").value = "";
    document.getElementById("athlete3_team_input").value = "";
    document.getElementById("athlete4_team_input").value = "";
    document.getElementById("athlete5_team_input").value = "";
    document.getElementById("athlete6_team_input").value = "";
    document.getElementById("athlete7_team_input").value = "";
    document.getElementById("athlete8_team_input").value = "";
    document.getElementById("athlete1_score_input").value = "";
    document.getElementById("athlete2_score_input").value = "";
    document.getElementById("athlete3_score_input").value = "";
    document.getElementById("athlete4_score_input").value = "";
    document.getElementById("athlete5_score_input").value = "";
    document.getElementById("athlete6_score_input").value = "";
    document.getElementById("athlete7_score_input").value = "";
    document.getElementById("athlete8_score_input").value = "";
    document.getElementById("athlete1_name_output").innerHTML = "";
    document.getElementById("athlete2_name_output").innerHTML = "";
    document.getElementById("athlete3_name_output").innerHTML = "";
    document.getElementById("athlete4_name_output").innerHTML = "";
    document.getElementById("athlete5_name_output").innerHTML = "";
    document.getElementById("athlete6_name_output").innerHTML = "";
    document.getElementById("athlete7_name_output").innerHTML = "";
    document.getElementById("athlete8_name_output").innerHTML = "";
    document.getElementById("athlete1_team_output").innerHTML = "";
    document.getElementById("athlete2_team_output").innerHTML = "";
    document.getElementById("athlete3_team_output").innerHTML = "";
    document.getElementById("athlete4_team_output").innerHTML = "";
    document.getElementById("athlete5_team_output").innerHTML = "";
    document.getElementById("athlete6_team_output").innerHTML = "";
    document.getElementById("athlete7_team_output").innerHTML = "";
    document.getElementById("athlete8_team_output").innerHTML = "";
    document.getElementById("athlete1_score_output").innerHTML = "";
    document.getElementById("athlete2_score_output").innerHTML = "";
    document.getElementById("athlete3_score_output").innerHTML = "";
    document.getElementById("athlete4_score_output").innerHTML = "";
    document.getElementById("athlete5_score_output").innerHTML = "";
    document.getElementById("athlete6_score_output").innerHTML = "";
    document.getElementById("athlete7_score_output").innerHTML = "";
    document.getElementById("athlete8_score_output").innerHTML = "";
}

// Scoreboard
function set_scoreboard() {
    var athlete1_scoreboard_name = document.getElementById("athlete1_scoreboard_name_input").value;
    var athlete1_scoreboard_team = document.getElementById("athlete1_scoreboard_team_input").value;
    var athlete1_scoreboard_kata = document.getElementById("athlete1_scoreboard_kata_input").value;
    document.getElementById("athlete1_scoreboard_name_output").innerHTML = athlete1_scoreboard_name;
    document.getElementById("athlete1_scoreboard_team_output").innerHTML = athlete1_scoreboard_team;
    document.getElementById("athlete1_scoreboard_kata_output").innerHTML = athlete1_scoreboard_kata;
    document.getElementById("athlete1_final_name_output").innerHTML = athlete1_scoreboard_name;
    document.getElementById("athlete1_final_team_output").innerHTML = athlete1_scoreboard_team;
    var athlete2_scoreboard_name = document.getElementById("athlete2_scoreboard_name_input").value;
    var athlete2_scoreboard_team = document.getElementById("athlete2_scoreboard_team_input").value;
    var athlete2_scoreboard_kata = document.getElementById("athlete2_scoreboard_kata_input").value;
    document.getElementById("athlete2_scoreboard_name_output").innerHTML = athlete2_scoreboard_name;
    document.getElementById("athlete2_scoreboard_team_output").innerHTML = athlete2_scoreboard_team;
    document.getElementById("athlete2_scoreboard_kata_output").innerHTML = athlete2_scoreboard_kata;
    document.getElementById("athlete2_final_name_output").innerHTML = athlete2_scoreboard_name;
    document.getElementById("athlete2_final_team_output").innerHTML = athlete2_scoreboard_team;
}

function clear_scoreboard() {
    document.getElementById("athlete1_scoreboard_name_input").value = "";
    document.getElementById("athlete1_scoreboard_team_input").value = "";
    document.getElementById("athlete1_scoreboard_kata_input").value = "";
    document.getElementById("athlete1_scoreboard_name_output").innerHTML = "";
    document.getElementById("athlete1_scoreboard_team_output").innerHTML = "";
    document.getElementById("athlete1_scoreboard_kata_output").innerHTML = "";
    document.getElementById("athlete1_final_name_output").innerHTML = "";
    document.getElementById("athlete1_final_team_output").innerHTML = "";
    document.getElementById("athlete2_scoreboard_name_input").value = "";
    document.getElementById("athlete2_scoreboard_team_input").value = "";
    document.getElementById("athlete2_scoreboard_kata_input").value = "";
    document.getElementById("athlete2_scoreboard_name_output").innerHTML = "";
    document.getElementById("athlete2_scoreboard_team_output").innerHTML = "";
    document.getElementById("athlete2_scoreboard_kata_output").innerHTML = "";
    document.getElementById("athlete2_final_name_output").innerHTML = "";
    document.getElementById("athlete2_final_team_output").innerHTML = "";
    athlete1_scoreboard_belt_ao();
    athlete2_scoreboard_belt_ao();
    clear_score();
    athlete1_win_off();
    athlete2_win_off();
}

function set_athlete1_scoreboard(){
    document.getElementById("set_athlete1_scoreboard").style.display = "none";
    document.getElementById("set_athlete2_scoreboard").style.display = "inline-block";
    document.getElementById("scoreboard_athlete1_output").style.display = "none";
    document.getElementById("scoreboard_athlete2_output").style.display = "block";
    document.getElementById("athlete1_scoretable").style.display = "none";
    document.getElementById("athlete2_scoretable").style.display = "table";
}
function set_athlete2_scoreboard(){
    document.getElementById("set_athlete1_scoreboard").style.display = "inline-block";
    document.getElementById("set_athlete2_scoreboard").style.display = "none";
    document.getElementById("scoreboard_athlete1_output").style.display = "block";
    document.getElementById("scoreboard_athlete2_output").style.display = "none";
    document.getElementById("athlete1_scoretable").style.display = "table";
    document.getElementById("athlete2_scoretable").style.display = "none";
}

function athlete1_scoreboard_belt_aka() {
    document.getElementById("athlete1_scoreboard_belt_aka").style.display = "none";
    document.getElementById("athlete1_scoreboard_belt_ao").style.display = "block";
    document.getElementById("athlete1_scoreboard_belt_output").classList = "col-md-4 me-2 hi-bgblue text-center";
    document.getElementById("athlete1_final_belt_output").classList = "col-md-1 me-1 hi-bgblue";
}
function athlete1_scoreboard_belt_ao() {
    document.getElementById("athlete1_scoreboard_belt_aka").style.display = "block";
    document.getElementById("athlete1_scoreboard_belt_ao").style.display = "none";
    document.getElementById("athlete1_scoreboard_belt_output").classList = "col-md-4 me-2 hi-bgred text-center";
    document.getElementById("athlete1_final_belt_output").classList = "col-md-1 me-1 hi-bgred";
}
function athlete2_scoreboard_belt_aka() {
    document.getElementById("athlete2_scoreboard_belt_aka").style.display = "none";
    document.getElementById("athlete2_scoreboard_belt_ao").style.display = "block";
    document.getElementById("athlete2_scoreboard_belt_output").classList = "col-md-4 me-2 hi-bgblue text-center";
    document.getElementById("athlete2_final_belt_output").classList = "col-md-1 me-1 hi-bgblue";
}
function athlete2_scoreboard_belt_ao() {
    document.getElementById("athlete2_scoreboard_belt_aka").style.display = "block";
    document.getElementById("athlete2_scoreboard_belt_ao").style.display = "none";
    document.getElementById("athlete2_scoreboard_belt_output").classList = "col-md-4 me-2 hi-bgred text-center";
    document.getElementById("athlete2_final_belt_output").classList = "col-md-1 me-1 hi-bgred";
}

let athlete1_score1 = 0;
let athlete1_score2 = 0;
let athlete1_score3 = 0;
let athlete1_score4 = 0;
let athlete1_score5 = 0;
let athlete1_total = 0;
let score1 = 0;
function athlete1_score1_input(){
    athlete1_score1 = document.getElementById("athlete1_score1_input").value;
    document.getElementById("athlete1_score1_output").innerHTML = (Math.round(athlete1_score1 * 10) / 100).toFixed(1);
    document.getElementById("athlete1_finalscore1_output").innerHTML = (Math.round(athlete1_score1 * 10) / 100).toFixed(1);
}
function athlete1_score2_input(){
    athlete1_score2 = document.getElementById("athlete1_score2_input").value;
    document.getElementById("athlete1_score2_output").innerHTML = (Math.round(athlete1_score2 * 10) / 100).toFixed(1);
    document.getElementById("athlete1_finalscore2_output").innerHTML = (Math.round(athlete1_score2 * 10) / 100).toFixed(1);
}
function athlete1_score3_input(){
    athlete1_score3 = document.getElementById("athlete1_score3_input").value;
    document.getElementById("athlete1_score3_output").innerHTML = (Math.round(athlete1_score3 * 10) / 100).toFixed(1);
    document.getElementById("athlete1_finalscore3_output").innerHTML = (Math.round(athlete1_score3 * 10) / 100).toFixed(1);
}
function athlete1_score4_input(){
    athlete1_score4 = document.getElementById("athlete1_score4_input").value;
    document.getElementById("athlete1_score4_output").innerHTML = (Math.round(athlete1_score4 * 10) / 100).toFixed(1);
    document.getElementById("athlete1_finalscore4_output").innerHTML = (Math.round(athlete1_score4 * 10) / 100).toFixed(1);
}
function athlete1_score5_input(){
    athlete1_score5 = document.getElementById("athlete1_score5_input").value;
    document.getElementById("athlete1_score5_output").innerHTML = (Math.round(athlete1_score5 * 10) / 100).toFixed(1);
    document.getElementById("athlete1_finalscore5_output").innerHTML = (Math.round(athlete1_score5 * 10) / 100).toFixed(1);
    athlete1_scoring();
}
function athlete1_scoring(){
    athlete1_total = parseFloat(athlete1_score1)+parseFloat(athlete1_score2)+parseFloat(athlete1_score3)+parseFloat(athlete1_score4)+parseFloat(athlete1_score5);
    const min = Math.min(parseFloat(athlete1_score1), parseFloat(athlete1_score2), parseFloat(athlete1_score3), parseFloat(athlete1_score4), parseFloat(athlete1_score5));
    const max = Math.max(parseFloat(athlete1_score1), parseFloat(athlete1_score2), parseFloat(athlete1_score3), parseFloat(athlete1_score4), parseFloat(athlete1_score5));
    score1 = (athlete1_total - min - max);
    document.getElementById("athlete1_scoreboard_total").value = score1;
    document.getElementById("athlete1_scoreboard_total_output").innerHTML = (Math.round(score1 * 10) / 100).toFixed(2);
    document.getElementById("athlete1_final_total_output").innerHTML = (Math.round(score1 * 10) / 100).toFixed(2);
}

let athlete2_score1 = 0;
let athlete2_score2 = 0;
let athlete2_score3 = 0;
let athlete2_score4 = 0;
let athlete2_score5 = 0;
let athlete2_total = 0;
let score2 = 0;
function athlete2_score1_input(){
    athlete2_score1 = document.getElementById("athlete2_score1_input").value;
    document.getElementById("athlete2_score1_output").innerHTML = (Math.round(athlete2_score1 * 10) / 100).toFixed(1);
    document.getElementById("athlete2_finalscore1_output").innerHTML = (Math.round(athlete2_score1 * 10) / 100).toFixed(1);
}
function athlete2_score2_input(){
    athlete2_score2 = document.getElementById("athlete2_score2_input").value;
    document.getElementById("athlete2_score2_output").innerHTML = (Math.round(athlete2_score2 * 10) / 100).toFixed(1);
    document.getElementById("athlete2_finalscore2_output").innerHTML = (Math.round(athlete2_score2 * 10) / 100).toFixed(1);
}
function athlete2_score3_input(){
    athlete2_score3 = document.getElementById("athlete2_score3_input").value;
    document.getElementById("athlete2_score3_output").innerHTML = (Math.round(athlete2_score3 * 10) / 100).toFixed(1);
    document.getElementById("athlete2_finalscore3_output").innerHTML = (Math.round(athlete2_score3 * 10) / 100).toFixed(1);
}
function athlete2_score4_input(){
    athlete2_score4 = document.getElementById("athlete2_score4_input").value;
    document.getElementById("athlete2_score4_output").innerHTML = (Math.round(athlete2_score4 * 10) / 100).toFixed(1);
    document.getElementById("athlete2_finalscore4_output").innerHTML = (Math.round(athlete2_score4 * 10) / 100).toFixed(1);
}
function athlete2_score5_input(){
    athlete2_score5 = document.getElementById("athlete2_score5_input").value;
    document.getElementById("athlete2_score5_output").innerHTML = (Math.round(athlete2_score5 * 10) / 100).toFixed(1);
    document.getElementById("athlete2_finalscore5_output").innerHTML = (Math.round(athlete2_score5 * 10) / 100).toFixed(1);
    athlete2_scoring();
}
function athlete2_scoring(){
    athlete2_total = parseFloat(athlete2_score1)+parseFloat(athlete2_score2)+parseFloat(athlete2_score3)+parseFloat(athlete2_score4)+parseFloat(athlete2_score5);
    const min = Math.min(parseFloat(athlete2_score1), parseFloat(athlete2_score2), parseFloat(athlete2_score3), parseFloat(athlete2_score4), parseFloat(athlete2_score5));
    const max = Math.max(parseFloat(athlete2_score1), parseFloat(athlete2_score2), parseFloat(athlete2_score3), parseFloat(athlete2_score4), parseFloat(athlete2_score5));
    score2 = (athlete2_total - min - max);
    document.getElementById("athlete2_scoreboard_total").value = score2;
    document.getElementById("athlete2_scoreboard_total_output").innerHTML = (Math.round(score2 * 10) / 100).toFixed(2);
    document.getElementById("athlete2_final_total_output").innerHTML = (Math.round(score2 * 10) / 100).toFixed(2);
    athlete_win();
}

function clear_score() {
    athlete1_score1 = 0;
    athlete1_score2 = 0;
    athlete1_score3 = 0;
    athlete1_score4 = 0;
    athlete1_score5 = 0;
    athlete1_total = 0;
    score1 = 0;
    athlete2_score1 = 0;
    athlete2_score2 = 0;
    athlete2_score3 = 0;
    athlete2_score4 = 0;
    athlete2_score5 = 0;
    athlete2_total = 0;
    score2 = 0;
    document.getElementById("athlete1_score1_input").value = "";
    document.getElementById("athlete1_score2_input").value = "";
    document.getElementById("athlete1_score3_input").value = "";
    document.getElementById("athlete1_score4_input").value = "";
    document.getElementById("athlete1_score5_input").value = "";
    document.getElementById("athlete1_score1_output").innerHTML = "";
    document.getElementById("athlete1_score2_output").innerHTML = "";
    document.getElementById("athlete1_score3_output").innerHTML = "";
    document.getElementById("athlete1_score4_output").innerHTML = "";
    document.getElementById("athlete1_score5_output").innerHTML = "";
    document.getElementById("athlete1_finalscore1_output").innerHTML = "";
    document.getElementById("athlete1_finalscore2_output").innerHTML = "";
    document.getElementById("athlete1_finalscore3_output").innerHTML = "";
    document.getElementById("athlete1_finalscore4_output").innerHTML = "";
    document.getElementById("athlete1_finalscore5_output").innerHTML = "";
    document.getElementById("athlete1_scoreboard_total").value = "";
    document.getElementById("athlete1_scoreboard_total_output").innerHTML = "";
    document.getElementById("athlete1_final_total_output").innerHTML = "";
    document.getElementById("athlete2_score1_input").value = "";
    document.getElementById("athlete2_score2_input").value = "";
    document.getElementById("athlete2_score3_input").value = "";
    document.getElementById("athlete2_score4_input").value = "";
    document.getElementById("athlete2_score5_input").value = "";
    document.getElementById("athlete2_score1_output").innerHTML = "";
    document.getElementById("athlete2_score2_output").innerHTML = "";
    document.getElementById("athlete2_score3_output").innerHTML = "";
    document.getElementById("athlete2_score4_output").innerHTML = "";
    document.getElementById("athlete2_score5_output").innerHTML = "";
    document.getElementById("athlete2_finalscore1_output").innerHTML = "";
    document.getElementById("athlete2_finalscore2_output").innerHTML = "";
    document.getElementById("athlete2_finalscore3_output").innerHTML = "";
    document.getElementById("athlete2_finalscore4_output").innerHTML = "";
    document.getElementById("athlete2_finalscore5_output").innerHTML = "";
    document.getElementById("athlete2_scoreboard_total").value = "";
    document.getElementById("athlete2_scoreboard_total_output").innerHTML = "";
    document.getElementById("athlete2_final_total_output").innerHTML = "";
}

// blink
function athlete1_win_on() {
    document.getElementById("athlete1_win_output").style.display = "block";
}
function athlete1_win_off() {
    document.getElementById("athlete1_win_output").style.display = "none";
}
let athlete1_blink = document.getElementById('athlete1_blink');
setInterval(function() {
    athlete1_blink.style.display = (athlete1_blink.style.display == 'none' ? '' : 'none');
}, 500);
function athlete2_win_on() {
    document.getElementById("athlete2_win_output").style.display = "block";
}
function athlete2_win_off() {
    document.getElementById("athlete2_win_output").style.display = "none";
}
let athlete2_blink = document.getElementById('athlete2_blink');
setInterval(function() {
    athlete2_blink.style.display = (athlete2_blink.style.display == 'none' ? '' : 'none');
}, 500);

// Winning Athlete
function athlete_win() {
    athlete1_win_off();
    athlete2_win_off();
    if(score1 > score2) {
        athlete1_win_on();
    } else if (score1 < score2) {
        athlete2_win_on();
    }
}