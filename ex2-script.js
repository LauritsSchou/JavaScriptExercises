window.addEventListener("load", start);
function start() {
  console.log("start");
  document.querySelector("#blue_sprite").addEventListener("click", fallover);
}
function fallover() {
  console.log("fallover");
  document.querySelector("#blue_sprite").removeEventListener("click", fallover);
  document.querySelector("#blue_sprite").classList.add("fallover");
}
