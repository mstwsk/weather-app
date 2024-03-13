function updateWeather(response) {
  let temperatureElement = document.querySelector("#today-temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#current-city");
  let humidityElement = document.querySelector(
    "#description-current-weather #humidity"
  );
  let windElement = document.querySelector(
    "#description-current-weather #wind"
  );

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature) + "°";
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
}
function searchCity(city) {
  let apiKey = "46df0bc13abce7403ee4b936f24tbeoa";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("London");
