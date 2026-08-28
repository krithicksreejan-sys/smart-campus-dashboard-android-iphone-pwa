// ===============================
// Smart Campus Dashboard JS
// ===============================

// Live Sensor Update

function updateSensors() {

document.getElementById("temp").innerHTML =
Math.floor(Math.random()*6+27)+"°C";

document.getElementById("hum").innerHTML =
Math.floor(Math.random()*15+60)+"%";

document.getElementById("energy").innerHTML =
Math.floor(Math.random()*120+350)+" W";

const air=["Good","Moderate","Excellent"];

document.getElementById("air").innerHTML =
air[Math.floor(Math.random()*air.length)];

}

setInterval(updateSensors,3000);


// ===============================
// Temperature Chart
// ===============================

const tempChart = new Chart(

document.getElementById("tempChart"),

{

type:"line",

data:{

labels:["9AM","10AM","11AM","12PM","1PM","2PM"],

datasets:[{

label:"Temperature",

data:[28,29,30,29,31,30],

borderColor:"#00d4ff",

backgroundColor:"rgba(0,212,255,.2)",

fill:true,

tension:.4

}]

},

options:{

responsive:true

}

}

);


// ===============================
// Energy Chart
// ===============================

const energyChart = new Chart(

document.getElementById("energyChart"),

{

type:"bar",

data:{

labels:["Mon","Tue","Wed","Thu","Fri"],

datasets:[{

label:"Energy",

data:[420,390,450,410,430],

backgroundColor:"#00d4ff"

}]

},

options:{

responsive:true

}

}

);


// ===============================
// Notification Auto Update
// ===============================

const notifications=[

"Temperature Stable",

"ESP32 Connected",

"Energy Consumption Normal",

"Water Tank Full",

"All Sensors Online",

"CCTV Working Properly"

];

setInterval(()=>{

const list=document.querySelector(".notification-card ul");

if(list){

list.innerHTML=

"<li>"+notifications[Math.floor(Math.random()*notifications.length)]+"</li>";

}

},5000);


// ===============================
// Device Toggle
// ===============================

document.querySelectorAll(".switch input")

.forEach(toggle=>{

toggle.addEventListener("change",()=>{

console.log("Device State Changed");

});

});