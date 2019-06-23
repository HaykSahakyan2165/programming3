
function setup() {
  var socket = io();

  var side = 20;

  var matrix = [];


  
  let grassCountElement = document.getElementById("grassCount");
  let grassEaterCountElement = document.getElementById("grassEaterCount");
  let predatorCountElement = document.getElementById("predatorCount");
  let amuletCountElement = document.getElementById("amuletCount")
  let grassCreaterCountElement = document.getElementById("grassCreaterCount");
  let grassEaterCreaterCountElement = document.getElementById("grassEaterCreaterCount");
  let exanak = document.getElementById("exanak");
  

  

  socket.on("data", drawCreatures);

  socket.on("weather", function(data) {
    weather = data;
  });

  function drawCreatures(data) {
    
    matrix = data.matrix;
    grassCountElement.innerText = data.grassCounter;
    grassEaterCountElement.innerText = data.grassEatersCounter;
    predatorCountElement.innerText = data.predatorCounter;
    amuletCountElement.innerText = data.amuletsCounter;
    grassCreaterCountElement.innerText = data.grassCreatersCounter;
    grassEaterCreaterCountElement.innerText = data.grassEaterCreaterCounter;
    exanak.innerText = data.exanak;
    
    createCanvas(matrix[0].length * side, matrix.length * side);
   
    background("#acacac");
    

    
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] == 1 && data.exanak != "Dzmer") {
          fill("green");
          rect(j * side, i * side, side, side);
        } else if (matrix[i][j] == 1 && data.exanak == "Dzmer") {
          fill(" white");
          rect(j * side, i * side, side, side);
        }
        else if (matrix[i][j] == 2) {
          fill("orange");
          rect(j * side, i * side, side, side);
        } else if (matrix[i][j] == 0) {
          fill("#acacac");
          rect(j * side, i * side, side, side);
        } else if (matrix[i][j] == 3) {
          fill("red");
          rect(j * side, i * side, side, side);
        } else if (matrix[i][j] == 4) {
          fill("blue");
          rect(j * side, i * side, side, side);
        } else if (matrix[i][j] == 5) {
          fill("black");
          rect(j * side, i * side, side, side);
        } else if (matrix[i][j] == 6) {
          fill("pink");
          rect(j * side, i * side, side, side);
        }
      }
    }
  }
}
