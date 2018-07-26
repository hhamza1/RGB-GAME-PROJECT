var squares = document.querySelectorAll(".square");
var selectedColor =  document.querySelector("#selectedColor");
var resetGame = document.querySelector("#new-game");
var colors = new Array();
var pickedColor;

setColors();


function setColors() {
  for(var i= 0; i < 6; i++) {
    colors [i] = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
  }
  pickedColor = colors[Math.floor(Math.random() * 6)]
  selectedColor.textContent = pickedColor;
}

for (var i = 0; i < squares.length; i++ ) {
  squares[i].style.background = colors[i];
}


resetGame.addEventListener("click", function(){
  setColors;
});
