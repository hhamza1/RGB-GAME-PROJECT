var squares = document.querySelectorAll(".square");
var topHeader = document.getElementById("top-header");
var selectedColor =  document.querySelector("#selectedColor");
var resetGame = document.querySelector("#new-game");
var messageDisplay = document.querySelector("#try-again");
var colors = setColors(6);
var pickedColor;

function setColors(num) {
  var colorArray = [];
  for(var i= 0; i < num; i++) {
    colorArray.push(randomColors());
  }
  return colorArray;
}

function randomColors() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb("+ red +", "+ green +", "+ blue +")";
}


  function winningColor(clickedColor) {
    for(var i= 0; i < 6; i++) {
      squares[i].style.backgroundColor = clickedColor;
    }
  }

  for (var i = 0; i < squares.length; i++ ) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if( clickedColor === pickedColor){
          messageDisplay.textContent = "Correct";
          topHeader.style.backgroundColor = pickedColor;
          resetGame.textContent = "Play Again?";
          winningColor(clickedColor);

      }
      else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    })
  }

function pickColor() {
  pickedColor = colors[Math.floor(Math.random() * colors.length)]
  return pickedColor
}

selectedColor.textContent = pickColor();


resetGame.addEventListener("click", function(){
    resetGame.textContent = "New Colors?";
   colors = setColors(6);
   pickColor();
   for(var i=0; i< squares.length; i++){
     squares[i].style.background = colors[i];
   }
});
