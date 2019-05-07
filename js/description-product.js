const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", handleclick);

function handleclick() {
  /* if ($heart.classList.contains("-active")) {
    $heart.classList.remove("-active");
  } else {
    $heart.classList.add("-active");
  }*/

  $heart.classList.toggle("-active");
}
