function refreshWeather(response) {
  let currentTemperature = document.querySelector("#today-temperature");
  currentTemperature.innerHTML =
    Math.round(response.data.temperature.current) + "°";
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
}
function searchCity(city) {
  let apiKey = "46df0bc13abce7403ee4b936f24tbeoa";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayintroData);
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#enter-city");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-city");
searchFormElement.addEventListener("Submit", searchSubmit);

searchCity("London");
