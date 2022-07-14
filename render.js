getWeatherData();

async function getWeatherData() {
  // Получаем данные из products.json
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a158065199118bd588aed3a9d406f38f`
  );
  // Парсим данные из JSON формата в JS
  const weatherData = await response.json();
  // Запускаем ф-ю рендера (отображения товаров)
  //   render(weatherData);
  console.log(weatherData);
}
