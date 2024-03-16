// Function to update weather data on the page
function updateWeather(response) {
  let temperatureElement = document.querySelector("#today-temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#current-city");
  let descriptionElement = document.querySelector("#current-description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#current-time");
  let time = new Date(response.data.time * 1000);
  let weekdayElement = document.querySelector("#current-day");

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let today = new Date();

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature) + "°";
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  timeElement.innerHTML = `${time.getHours()}:${time.getMinutes()}`;
  weekdayElement.innerHTML = days[today.getDay()]; // Update with current day
}

// Function to format date
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${weekday}, ${hours}:${minutes}`;
}

// Function to fetch weather data based on city
function searchCity(city) {
  let apiKey = "46df0bc13abce7403ee4b936f24tbeoa";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(updateWeather);
}

// Function to handle form submission
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

// Add event listener to search form
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

// Initial search for London
searchCity("London");
