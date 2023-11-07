
function updateTime() {
//New York
let newyorkElement = document.querySelector("#newyork");
if (newyorkElement) {
let newyorkDateElement = newyorkElement.querySelector(".date");
let newyorkTimeElement = newyorkElement.querySelector(".time");


newyorkDateElement.innerHTML = moment().tz("America/New_York").format("dddd, D MMMM YYYY");
newyorkTimeElement.innerHTML = moment().tz("America/New_York").format("HH:mm:ss");
}

//Spain
let spainElement = document.querySelector("#madrid");
if (spainElement) {
let spainDateElement = spainElement.querySelector(".date");
let spainTimeElement = spainElement.querySelector(".time");


spainDateElement.innerHTML = moment().tz("Europe/Madrid").format("dddd, D MMMM YYYY");
spainTimeElement.innerHTML = moment().tz("Europe/Madrid").format("HH:mm:ss");
}

//Curaçao
let curacaoElement = document.querySelector("#curacao");
if (curacaoElement) {
let curacaoDateElement = curacaoElement.querySelector(".date");
let curacaoTimeElement = curacaoElement.querySelector(".time");


curacaoDateElement.innerHTML = moment().tz("America/Curacao").format("dddd, D MMMM YYYY");
curacaoTimeElement.innerHTML = moment().tz("America/Curacao").format("HH:mm:ss");
}

//Japan
let japanElement = document.querySelector("#japan");
if (japanElement) {
let japanDateElement = japanElement.querySelector(".date");
let japanTimeElement = japanElement.querySelector(".time");


japanDateElement.innerHTML = moment().tz("Japan").format("dddd, D MMMM YYYY");
japanTimeElement.innerHTML = moment().tz("Japan").format("HH:mm:ss");
}
}

function updateCity(event) {
   let cityTimzone = event.target.value;
   if (cityTimzone === "current") {
       cityTimzone = moment.tz.guess();
   }

   let cityName = cityTimzone.replace("_", " ").split("/")[1];
   let cityTime = moment().tz(cityTimzone);
   let citiesElement = document.querySelector ("#cities");
   citiesElement.innerHTML = `
   <div class="city">
   <div>
   <h2>${cityName}</h2>
   <div class="date">${cityTime.format("dddd, D MMMM YYYY")}</div>
   </div>  
   <div class="time">${cityTime.format("HH:mm:ss")}</div>
</div>
`;
}

updateTime();
setInterval(updateTime, 1000)

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);