async function getCitiesData() {
  const response = await fetch(`dataCities.json`);
  const citiesData = await response.json();
  citiesDataArr = citiesData;
}

getCitiesData();

let citiesDataArr;

const citiesEl = document.querySelector(".choose-city__content");

let currentCity;

function changeBg(city) {
  let bgEl = document.querySelector("#body");
  bgEl.style.background = `url(${city.imgSrc})`;
}

function changeCityName(city) {
  let nameEl = document.querySelector(".current-city");
  nameEl.innerText = city.name;
}

citiesEl.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-city")) {
    citiesDataArr.forEach((element) => {
      if (event.target.dataset.city === element.id) {
        getWeatherData(element.lat, element.lon);
        changeBg(element);
        changeCityName(element);
        closeMenu();
      }
    });
  }
});
