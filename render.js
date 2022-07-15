async function getWeatherData(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a158065199118bd588aed3a9d406f38f&units=metric`
  );
  const weatherData = await response.json();

  render(weatherData);
}

getWeatherData(55.7512, 37.6184);

function render(weatherData) {
  let DOMContent = {
    tempText: document.querySelector("#temp-text"),
    tempIcon: document.querySelector("#temp-icon"),
    windText: document.querySelector("#wind-text"),
    windIcon: document.querySelector("#wind-icon"),
    cloudText: document.querySelector("#cloud-text"),
    cloudIcon: document.querySelector("#cloud-icon"),
  };

  let currentWeather = {
    temp: parseInt(weatherData.main.temp),
    wind: parseInt(weatherData.wind.speed),
    precipitation: weatherData.weather[0].main,
    tempIcon: "",
    windIcon: "",
    cloudsIcon: "",
  };

  if (currentWeather.temp > 20) {
    currentWeather.tempIcon = "img/icons/temp-hot.png";
  } else if (currentWeather.temp < 0) {
    currentWeather.tempIcon = "img/icons/temp-cold.png";
  } else {
    currentWeather.tempIcon = "img/icons/temp-warm.png";
  }

  if (currentWeather.wind <= 3) {
    currentWeather.windIcon = "img/icons/wind-low.png";
  } else if (currentWeather.wind > 3 && currentWeather.wind < 10) {
    currentWeather.windIcon = "img/icons/wind-mid.png";
  } else {
    currentWeather.windIcon = "img/icons/wind-heavy.png";
  }

  switch (currentWeather.precipitation) {
    case "Clear":
      currentWeather.precipitation = "Sunny";
      currentWeather.cloudsIcon = "img/icons/cloud-sunny.png";
      break;
    case "Clouds":
      currentWeather.precipitation = "Clouds";
      currentWeather.cloudsIcon = "img/icons/cloud-part.png";
      break;
    case "Scattered clouds":
      currentWeather.precipitation = "Dull";
      currentWeather.cloudsIcon = "img/icons/cloud-very.png";
      break;
    case "Rain":
      currentWeather.precipitation = "Rain";
      currentWeather.cloudsIcon = "img/icons/cloud-rain.png";
      break;
    case "Thunderstorm":
      currentWeather.precipitation = "thunderstorm";
      currentWeather.cloudsIcon = "img/icons/cloud-thunderstorm.png";
      break;
    case "Snow":
      currentWeather.precipitation = "Snow";
      currentWeather.cloudsIcon = "img/icons/cloud-snow.png";
      break;
    default:
      currentWeather.cloudsIcon = "img/icons/cloud-part.png";
  }

  DOMContent.tempText.innerText = currentWeather.temp;
  DOMContent.windText.innerText = currentWeather.wind;
  DOMContent.cloudText.innerText = currentWeather.precipitation;
  DOMContent.tempIcon.setAttribute("src", currentWeather.tempIcon);
  DOMContent.windIcon.setAttribute("src", currentWeather.windIcon);
  DOMContent.cloudIcon.setAttribute("src", currentWeather.cloudsIcon);
}
