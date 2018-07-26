var squares = document.querySelectorAll(".square");
var selectedColor =  document.querySelector("#selectedColor");
var colors = new Array();


for(var i= 0; i < 6; i++) {
  colors [i] = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
  console.log(colors[i]);
}

var pickedColor = colors[Math.floor(Math.random() * 6)];
selectedColor.textContent = pickedColor;



for (var i = 0; i < squares.length; i++ ) {
  squares[i].style.background = colors[i];
}
