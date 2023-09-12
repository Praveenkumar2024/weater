const a = 'YOUR_API_KEY';
function fetchWeatherData() {
  const Url = `https://api.openweathermap.org/data/2.5/weather?q=CityName&appid=${aKey}`;

  fetch(Url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const weatherContainer = document.querySelector('.weather-data');
      weatherContainer.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    })
    .catch((error) => {
      console.error('There was a problem fetching the weather data:', error);
    });
}
fetchWeatherData();