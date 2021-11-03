//Datum und Uhrzeit

let now = new Date();

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
h2.innerHTML = `${day}, ${date} ${month} ${year}`;
h3.innerHTML = `${hours}:${minutes}`;
//Datum und Uhrzeit ende

//search engine

//Stadt eingabe
function search(city) {
  let apiKey = "197ef3a642b76eef90e131866f74a0a0";
  let units = "metric";

  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showCurrentTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  search(city);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

//funktion der Temperatur, Antwort

function showCurrentTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let wind = Math.round(response.data.wind.speed);
  let humidity = Math.round(response.data.main.humidity);
  let feel = Math.round(response.data.main.feels_like);

  let feelElement = document.querySelector("#feel-like");
  feelElement.innerHTML = `Feels Like: ${feel}°C`;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `Wind: ${wind}km/h`;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `Humidity :${humidity}%`;

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}`;

  let h1 = document.querySelector("#city");
  h1.innerHTML = response.data.name;
}

search("Vienna");

//°C und °F link erstellen und switchenfunction celsius(event) { event.preventDefault(); temperature.innerHTML = "15";let celsiusLink = document.querySelector("#celsius-link");celsiusLink.addEventListener("click", celsius);

//°Ffunction fahrenheitDegree(event) { event.preventDefault(); let temperatureElement = document.querySelector("#temperature"); let temperature = temperatureElement.innerHTML; temperature = Number(temperature); temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);let fahrenheitLink = document.querySelector("#fahrenheit-link");fahrenheitLink.addEventListener("click", fahrenheitDegree);
