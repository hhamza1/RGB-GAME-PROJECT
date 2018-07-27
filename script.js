var squares = document.querySelectorAll(".square");
var squaresNum = 6;
var topHeader = document.querySelector("h1");
var selectedColor =  document.querySelector("#selectedColor");
var resetGame = document.querySelector("#new-game");
var messageDisplay = document.querySelector("#try-again");
var easyMod = document.getElementById("easyMod");
var hardMod = document.getElementById("hardMod");
var colors = setColors(squaresNum);
var pickedColor;

for (var i = 0; i < squares.length; i++ ) {
    squares[i].style.backgroundColor = colors[i];
    selectedColor.textContent = pickColor();
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

function pickColor() {
  pickedColor = colors[Math.floor(Math.random() * colors.length)]
  return pickedColor
}




resetGame.addEventListener("click", function(){
   resetGame.textContent = "New Colors?";
   topHeader.style.backgroundColor = "#9898FF";
   messageDisplay.textContent = "";
   colors = setColors(squaresNum);
   pickColor();
   for(var i=0; i< squares.length; i++){
     squares[i].style.background = colors[i];
   }
});

easyMod.addEventListener("click",function() {
  easyMod.classList.add("selected");
  hardMod.classList.remove("selected");
  squaresNum = 3;
  colors = setColors(squaresNum);
  selectedColor.textContent = pickColor();
  topHeader.style.backgroundColor = "#9898FF";
  messageDisplay.textContent = "";
  resetGame.textContent = "New Colors?";

  for (var i=0; i<squares.length; i++){
      if(colors[i]) {
        squares[i].style.backgroundColor = colors[i]
      }
      else {
        squares[i].style.display = "none";
      }
  }
});

hardMod.addEventListener("click",function() {
  hardMod.classList.add("selected");
  easyMod.classList.remove("selected");
  squaresNum = 6;
  colors = setColors(squaresNum);
  selectedColor.textContent = pickColor();
  topHeader.style.backgroundColor = "#9898FF";
  messageDisplay.textContent = "";
  resetGame.textContent = "New Colors?";


  for (var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";

  }
});
