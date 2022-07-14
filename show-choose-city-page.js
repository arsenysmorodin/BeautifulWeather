const DOMControlers = {
  burgerMenu: document.querySelector("#burger-menu"),
  closeButton: document.querySelector("#close-button"),
  chooseCityBlock: document.querySelector("#choose-city"),
};

DOMControlers.burgerMenu.addEventListener("click", function () {
  DOMControlers.chooseCityBlock.classList.toggle("choose-city_hidden");
});

DOMControlers.closeButton.addEventListener("click", function () {
  DOMControlers.chooseCityBlock.classList.toggle("choose-city_hidden");
});
