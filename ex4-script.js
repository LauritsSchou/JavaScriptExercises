window.addEventListener("load", start);
function start() {
  console.log("start");
  document.querySelector("#orange_container").addEventListener("click", jump);
}
function jump() {
  console.log("jump-once");
  document
    .querySelector("#orange_container")
    .removeEventListener("click", jump);
  document.querySelector("#orange_sprite").classList.add("jump-once");
  document
    .querySelector("#orange_container")
    .addEventListener("animationend", jumpDone);
}
function jumpDone() {
  console.log("jumpDone");
  document.querySelector("#orange_sprite").classList.remove("jump-once");
  document.querySelector("#orange_container").addEventListener("click", jump);
}
