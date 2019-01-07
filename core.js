var canvas = document.getElementById("canvas");
canvas.addEventListener("pointerdown", pointerDown);
canvas.addEventListener("pointerup", pointerUp);
window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);
window.addEventListener("resize", resizeCanvasToInner);
var graphicsContext = canvas.getContext("2d");
graphicsContext.imageSmoothingEnabled = false;
graphicsContext.font = "16px Tahoma";

var audioContext = new AudioContext();

var newGameButton = document.getElementById("newGame");
newGameButton.addEventListener("click", newGame);

resizeCanvasToInner();

var state = "game";
var entities = new Array();
entities.push(new Entity(10, 10, 10, 10));
entities[0].xVel = 5;
var world = new Entity(0, 0, 1000, 1000);
setEntitySectors(world);

function pointerDown(event) {

}

function pointerUp(event) {

}

function keyDown(event) {

}

function keyUp(event) {

}

function draw() {
  graphicsContext.fillStyle = "#000000";
  graphicsContext.fillRect(0, 0, canvas.width, canvas.height);
}

function update() {
  if(state == "game") {
    processEntityMotion(entities);
  }
}

function resizeCanvasToInner() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function newGame() {
  newGameButton.style.display = "none";

}

var mainLoop = window.setInterval(function(){update(); draw();}, 50);
