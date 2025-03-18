function showTime() {
  let johannesburgDateElement = document.querySelector("#johannesburg .date");
  let johannesburgTimeElement = document.querySelector("#johannesburg .time");
  let johannesburg = moment().tz("Africa/Johannesburg");
  johannesburgDateElement.innerHTML = johannesburg.format("MMMM Do YYYY");
  johannesburgTimeElement.innerHTML = johannesburg.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let sydneyDateElement = document.querySelector("#sydney .date");
  let sydneyTimeElement = document.querySelector("#sydney .time");
  let sydney = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydney.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydney.format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

showTime();
setInterval(showTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
