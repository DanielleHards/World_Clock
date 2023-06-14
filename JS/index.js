setInterval(function () {
  //Washington DC
  let washingtonDcElement = document.querySelector("#washington-dc");
  //another way to get this is...let washingtonDcDateElement=document.querySelector("#washington-dc .date");
  let washingtonDcTime = moment();
  let washingtonDcDateElement = washingtonDcElement.querySelector(".date");
  let washingtonDcTimeElement = washingtonDcElement.querySelector(".time");
  washingtonDcDateElement.innerHTML = washingtonDcTime.format("MMMM Do YYYY");
  washingtonDcTimeElement.innerHTML = `${washingtonDcTime.format(
    "h:mm:ss"
  )}<small>${washingtonDcTime.format("A")}</small>`;
}, 1000);

setInterval(function () {
  //zurich
  let zurichElement = document.querySelector("#zurich");
  //another way to get this is...let washingtonDcDateElement=document.querySelector("#washington-dc .date");
  let zurichTime = moment().tz("Europe/Zurich");
  let zurichDateElement = zurichElement.querySelector(".date");
  let zurichTimeElement = zurichElement.querySelector(".time");
  zurichDateElement.innerHTML = zurichTime.format("MMMM Do YYYY");
  zurichTimeElement.innerHTML = `${zurichTime.format(
    "h:mm:ss"
  )}<small>${zurichTime.format("A")}</small>`;
}, 1000);

setInterval(function () {
  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  //another way to get this is...let washingtonDcDateElement=document.querySelector("#washington-dc .date");
  let tokyoTime = moment().tz("Asia/Tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = `${tokyoTime.format(
    "h:mm:ss"
  )}<small>${tokyoTime.format("A")}</small>`;
}, 1000);

setInterval(function () {
  //sydney
  let sydneyElement = document.querySelector("#sydney");
  //another way to get this is...let washingtonDcDateElement=document.querySelector("#washington-dc .date");
  let sydneyTime = moment().tz("Australia/Sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = `${sydneyTime.format(
    "h:mm:ss"
  )}<small>${sydneyTime.format("A")}</small>`;
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment.tz(cityTimeZone);
  let cityElement = document.querySelector("#cities");
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  cityElement.innerHTML = `
<div class="cities">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
      </div>
      <a href="index.html" class="back">Home</a>
      `;
}

let pickCityElement = document.querySelector("#pickCity");
pickCityElement.addEventListener("change", updateCity);
