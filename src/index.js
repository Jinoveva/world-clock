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

setInterval(showTime, 1000);
