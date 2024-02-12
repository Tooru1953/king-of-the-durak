const cardEl = document.querySelectorAll(".card");

cardEl.forEach(function (element) {
  element.addEventListener("click", addClass);
});

function addClass() {
  this.classList.toggle("active");
}
