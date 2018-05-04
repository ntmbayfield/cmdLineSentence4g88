var colorsArray = ["red", "orange", "yellow", "green", "blue","purple", "brown", "grey", "white", "black"];
var brushColor = colorsArray[0];

function makeGrid(number) {
    for (let i=0; i<number; i++) {
      for (let j=0; j<number; j++) {
        let tile = document.createElement('div');
        tile.className = "gridSquares";
        tile.style.backgroundColor = "white";
        tile.style.border = "dotted black 1px";
        tile.style.height = "200px";
        tile.style.width = "200px";
        tile.style.paddingBottom = "20px";
        let myCanvas = document.getElementById("canvas");
        myCanvas.appendChild(tile);
          .addEventListener('click', function() {
            tile.style.backgroundColor = brushColor;
          });
        }
    }
}

makeGrid(2);
