//global vars
var lines;
//vertical lines
var nVL;
var vArr;
//horizontal lines
var nHL;
var hArr;
//# of time color can be drawn
var numRec
//points for rectangles
var stX;
var stY;
var enX;
var enY;
var tempstX;
var tempstY;

//resizes for any window change
function windowResized () {
  resizeCanvas (windowWidth, windowHeight);
}

//makes canvas not repeat and sets the sketch as backgoround
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  canvas.style('opacity', '.4 ' );
  resetVars();
  resetConnections();
  noLoop();
  frameRate(1);
}

//draws the mondrian
function draw() {
  background('white');
  drawBaseLines();
  fillMondrian();
}

// draw the lines for mondrian canvas
function drawBaseLines() {
  strokeWeight(5);
  drawVertical();
  drawHorizontal();
}

// fills the color randomly
function fillColor() {
  var color = ['#ffcb21', '#537bbe', '#e44240']; //yellow, blue, red
	fill(color[floor(random(color.length))]); //randomly choose color
}

// reset the canvas if mouse is pressed
function mousePressed() {
  clear();
  resetVars();
  resetConnections();
  redraw();
}

//reset lines and thus other variables
function resetVars(){
  // reset the other numbers
  nVL = Math.floor(Math.random(5)) + 8; // min: 8, max: 12
  vArr = new Array(nVL  + 1);
  nHL = Math.floor(Math.random(5)) + 6; // min: 6, max: 10
  hArr = new Array(nHL + 1);
}

//reset the "connecetions" as in the ones that are being
function resetConnections(){

  indexFilled = new Array(nVL);
  for (var i = 0; i < nVL; i++) {
    indexFilled[i] = new Array(nHL);
  }
  // reset it to always be true
  var i;
  var j;
  while (i < nVL) {
    while (j < nHL) {
      indexFilled[i][j] = true;
    }
  }
}

//draws vertical lines
function drawVertical(){
  for (var i = 0; i < nVL; i++) {
    if (i == 0) lines = random(windowWidth / 3);
    else lines = random(windowWidth / 3) + vArr[i - 1] + 15;
    vArr[i] = lines;
    stroke('black');
    //(x coord of first point, y coord of first point, x coord of second point, y coord of second point)
    line(lines, 0, lines, height);
  }
}

//draws horizontal lines
function drawHorizontal(){
  for (var i = 0; i < nHL; i++) {
    if (i == 0) lines = random(windowHeight / 3);
    else lines = random(windowHeight / 3) + hArr[i - 1] + 15;
    hArr[i] = lines;
    stroke('black');
    //(x coord of first point, y coord of first point, x coord of second point, y coord of second point)
    line(0, lines, width, lines);
  }
}

//gets random postion to draw rectangles
function randomPos(){
  // rect syntax: start point (x, y) (length x, length y). calculate indexes
  stX = Math.floor(random(nVL - 2));
  stY = Math.floor(random(nHL - 2));
  enX = Math.floor(random(nVL - stX - 2)) + stX + 1;
  enY = Math.floor(random(nHL - stY - 2)) + stY + 1;
  tempstX = stX;
  tempstY = stY;
}

//fills the rectange with color
function fillRectangle(){
  var filled;
  // check if these indices are valid to make sure n
  while (stY < enY) {
    stX = tempstX;
    while (stX < enX) {
      if(indexFilled[stX][stY]) {
        filled = true;
      } // end if statement
      stX++;
    } // end while start Y < end Y loop
    stY++;
  } // end while start X < end X loop

  stX = tempstX;
  stY = tempstY;

  // if they haven't been filled, fill them and increase the count
  if(!filled) {
    //(x-coord of rec, y-coord of rec, width of rec, height of rec)
    rect(vArr[stX], hArr[stY], vArr[enX] - vArr[stX], hArr[enY] - hArr[stY]);
    /*
    console.log(vArr[stX]);
    console.log(hArr[stY]);
    console.log(vArr[enX] - vArr[stX]);
    console.log(hArr[enY] - hArr[stY]);*/

    //makes sure coordinates that have been used to fill rectangle is used so no repeats
    while (stY < enY) {
      stX = tempstX;
      while (stX < enX) {
        indexFilled[stX][stY] = true;
        stX = stX + 1;
      }
      stY = stY + 1;
    }
  }
}

function fillMondrian(){
  //#of attemps that a rectangle can be drawn, minimum 10
  numRec = 0;
  while (numRec < random(100) + 10) {
    numRec++;
    fillColor();
    randomPos();
    fillRectangle();
  }
}
