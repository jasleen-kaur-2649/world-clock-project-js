function updateData() {
  let cityElement = document.querySelector(".cities");
  if (cityElement.length>0) {
    let delhiCityElement = document.querySelector("#delhi");
    let delhiCityDate = delhiCityElement.querySelector(".city-date");
    delhiCityDate.innerHTML = `${moment()
      .tz("Asia/Kolkata")
      .format("MMMM do, YYYY")}`;
    let delhiCityTime = delhiCityElement.querySelector(".city-time");
    delhiCityTime.innerHTML = `${moment()
      .tz("Asia/Kolkata")
      .format("h:mm:ss [<span>]A[</span>]")}`;

    let lisbonCityElement = document.querySelector("#lisbon");
    let lisbonCityDate = lisbonCityElement.querySelector(".city-date");
    lisbonCityDate.innerHTML = `${moment()
      .tz("Europe/Lisbon")
      .format("MMMM do, YYYY")}`;
    let lisbonCityTime = lisbonCityElement.querySelector(".city-time");
    lisbonCityTime.innerHTML = `${moment()
      .tz("Europe/Lisbon")
      .format("h:mm:ss [<span>]A[</span>]")}`;

    let canadaCityElement = document.querySelector("#canada");
    let canadaCityDate = canadaCityElement.querySelector(".city-date");
    canadaCityDate.innerHTML = `${moment()
      .tz("America/Edmonton")
      .format("MMMM do, YYYY")}`;
    let canadaCityTime = canadaCityElement.querySelector(".city-time");
    canadaCityTime.innerHTML = `${moment()
      .tz("America/Edmonton")
      .format("h:mm:ss [<span>]A[</span>]")}`;

    let spainCityElement = document.querySelector("#spain");
    let spainCityDate = spainCityElement.querySelector(".city-date");
    spainCityDate.innerHTML = `${moment()
      .tz("America/Puerto_Rico")
      .format("MMMM do, YYYY")}`;
    let spainCityTime = spainCityElement.querySelector(".city-time");
    spainCityTime.innerHTML = `${moment()
      .tz("America/Puerto_Rico")
      .format("h:mm:ss [<span>]A[</span>]")}`;
  }
}

setInterval(updateData, 1000);

function showCity(event) {
  let cityElement = document.querySelector(".cities");
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.split("/");

  // cityElement.innerHTML=cityName

  if (cityTimeZone === "empty") {
    alert("Please, Select a city..");
  } else {
    let cityDate = moment().tz(cityTimeZone).format("MMMM do, YYYY");
    let cityTime = moment()
      .tz(cityTimeZone)
      .format("h:mm:ss [<span>]A[</span>]");

    //   to update the html...
    cityElement.innerHTML = `
            <div class="city-clock-card">
                <div class="city-name-date">
                    <div class="city-name">${cityName[1]}</div>
                    <div class="city-date">${cityDate}</div>
                </div>
                <div class="city-time">${cityTime}</div>
            </div>
            <hr class="border-line">
`;
  }
}

let selectCityElement = document.querySelector("#select-city");
selectCityElement.addEventListener("change", showCity);
