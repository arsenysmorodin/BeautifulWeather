const DOM = {
  burgerMenu: document.querySelector("#burger-menu"),
  closeButton: document.querySelector("#close-button"),
  chooseCityBlock: document.querySelector("#choose-city"),
};

DOM.burgerMenu.addEventListener("click", function () {
  DOM.chooseCityBlock.classList.toggle("choose-city_hidden");
});

DOM.closeButton.addEventListener("click", function () {
  DOM.chooseCityBlock.classList.toggle("choose-city_hidden");
});
