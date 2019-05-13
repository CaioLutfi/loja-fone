const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");

$heart.addEventListener("click", handleclick);

$stars.forEach(function($star) {
  $star.addEventListener("click", handleclick);
});

function handleclick() {
  this.classList.toggle("-active");
}
