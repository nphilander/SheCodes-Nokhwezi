function updateCurrentDate() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayName = days[now.getDay()];
  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");

  return `${dayName} ${hours}:${minutes}`;
}

let currentWeatherInfo = document.querySelector(".current-weather p");
let cityDisplay = document.querySelector(".current-weather h1");
let searchInput = document.querySelector(".search-input");
let searchButton = document.querySelector(".search-button");

currentWeatherInfo.innerHTML = `
  ${updateCurrentDate()}, slightly cloudy <br />
  Humidity: <strong>67%</strong> Wind: <strong>6.1km/h</strong>
`;

function handleSearch(event) {
  event.preventDefault();
  let cityName = searchInput.value.trim();

  if (cityName) {
    cityDisplay.textContent = cityName;
    searchInput.value = "";
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    handleSearch(event);
  }
}

searchButton.addEventListener("click", handleSearch);
searchInput.addEventListener("keypress", handleKeyPress);
