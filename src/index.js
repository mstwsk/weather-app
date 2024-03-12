function displayintroData(response) {
  let cityName = response.data.city;
  let cityHeading = document.querySelector("#current-city");
  cityHeading.innerHTML = cityName;

  let currentTemperature = document.querySelector("#today-temperature");
  currentTemperature.innerHTML =
    Math.round(response.data.temperature.current) + "°";
}
function searchCity(city) {
  let apiKey = "46df0bc13abce7403ee4b936f24tbeoa";
  let weatherUnit = "metric";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=${weatherUnit}`;
  axios.get(apiURL).then(displayintroData);
}
