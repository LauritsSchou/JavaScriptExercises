window.addEventListener("load", start);
function start() {
  console.log("start");
  document.querySelector("#orange_container").addEventListener("click", move);
}
function move() {
  console.log("move");
  document
    .querySelector("#orange_container")
    .removeEventListener("click", move);
  document.querySelector("#orange_container").classList.add("move");
  document.querySelector("#orange_container").addEventListener("click", jump);
}
function jump() {
  console.log("jump");
  document
    .querySelector("#orange_container")
    .removeEventListener("click", jump);
  document.querySelector("#orange_sprite").classList.add("jump");
  document.querySelector("#orange_container").classList.add("paused");
}
