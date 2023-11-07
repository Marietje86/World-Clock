
function updateTime() {
//New York
let newyorkElement = document.querySelector("#newyork");
let newyorkDateElement = newyorkElement.querySelector(".date");
let newyorkTimeElement = newyorkElement.querySelector(".time");


newyorkDateElement.innerHTML = moment().tz("America/New_York").format("dddd, D MMMM YYYY");
newyorkTimeElement.innerHTML = moment().tz("America/New_York").format("HH:mm:ss");

//Spain
let spainElement = document.querySelector("#madrid");
let spainDateElement = spainElement.querySelector(".date");
let spainTimeElement = spainElement.querySelector(".time");


spainDateElement.innerHTML = moment().tz("Europe/Madrid").format("dddd, D MMMM YYYY");
spainTimeElement.innerHTML = moment().tz("Europe/Madrid").format("HH:mm:ss");

//Curaçao
let curacaoElement = document.querySelector("#curacao");
let curacaoDateElement = curacaoElement.querySelector(".date");
let curacaoTimeElement = curacaoElement.querySelector(".time");


curacaoDateElement.innerHTML = moment().tz("America/Curacao").format("dddd, D MMMM YYYY");
curacaoTimeElement.innerHTML = moment().tz("America/Curacao").format("HH:mm:ss");

//Japan
let japanElement = document.querySelector("#japan");
let japanDateElement = japanElement.querySelector(".date");
let japanTimeElement = japanElement.querySelector(".time");


japanDateElement.innerHTML = moment().tz("Japan").format("dddd, D MMMM YYYY");
japanTimeElement.innerHTML = moment().tz("Japan").format("HH:mm:ss");
}

updateTime();
setInterval(updateTime, 1000)