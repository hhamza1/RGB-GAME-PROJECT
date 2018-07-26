var squares = document.querySelectorAll(".square");
var selectedColor =  document.querySelector("#selectedColor");
var resetGame = document.querySelector("#new-game");
var colors = new Array();
var pickedColor;

function setColors() {
  for(var i= 0; i < 6; i++) {
    colors [i] = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
  }

  for (var i = 0; i < squares.length; i++ ) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
      console.log("clicked!!")
    })
  }

  pickedColor = colors[Math.floor(Math.random() * 6)]
  selectedColor.textContent = pickedColor;
}


document.addEventListener("DOMContentLoaded", function(event){
  setColors();
})


resetGame.addEventListener("click", function(){
  setColors();
});
