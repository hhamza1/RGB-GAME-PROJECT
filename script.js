var colors = [];
var pickedColor;
var squaresNum = 6;
var easyMod = document.getElementById("easyMod");
var hardMod = document.getElementById("hardMod");
var messageDisplay = document.querySelector("#try-again");
var mods = document.querySelectorAll(".mod");
var resetGame = document.querySelector("#new-game");
var selectedColor =  document.querySelector("#selectedColor");
var squares = document.querySelectorAll(".square");
var topHeader = document.querySelector("h1");

gameInit();

function gameInit() {
  setUpMod();
  displaySquares();
  reset();
}

function displaySquares() {
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
}

function setUpMod(){
  for(var i=0; i< mods.length; i++){
      mods[i].addEventListener("click", function(){
          mods[0].classList.remove("selected");
          mods[1].classList.remove("selected");
          this.classList.add("selected");
          this.textContent === "Easy" ? squaresNum = 3 : squaresNum = 6;
          reset();
        });
    }
}


resetGame.addEventListener("click", function(){
   reset();
});


function reset() {

  colors = setColors(squaresNum);
  selectedColor.textContent = pickColor();
  topHeader.style.backgroundColor = "#9898FF";
  messageDisplay.textContent = "";
  resetGame.textContent = "New Colors?";

  for (var i=0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }

  }

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
