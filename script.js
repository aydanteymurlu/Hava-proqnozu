
function getWeather() {
    var cityInput = document.getElementById("city").value;
    var weatherInfo = document.getElementById("weatherInfo");

    var weatherData = {
      "New York": { temperature: 20, condition: "Sunny" },
      "London": { temperature: 15, condition: "Cloudy" },
      "Paris": { temperature: 18, condition: "Rainy" },
      "Tokyo": { temperature: 25, condition: "Partly Cloudy" },
      "Sydney": { temperature: 22, condition: "Windy" }
    };

    if (weatherData[cityInput]) {
      weatherInfo.innerHTML = `
        <p>Temperature: ${weatherData[cityInput].temperature}°C</p>
        <p>Condition: ${weatherData[cityInput].condition}</p>
      `;
    } else {
      weatherInfo.innerHTML = "<p>Bu seher ucun melumat tapilmadi</p>";
    }
  }