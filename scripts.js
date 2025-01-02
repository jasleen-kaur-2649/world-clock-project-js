function updateData() {
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

setInterval(updateData,1000);
