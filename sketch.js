var stars = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
	for (var i = 0; i < 50; i++) {
    stars.push(new Star());
  }
	frameRate(1);


}

function draw() {
  background(220);
  var color1 = color(0, 14, 60);
  var color2 = color(161, 217, 180);
  setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");``
  for (var i = 0; i < 50; i++) {
    stars[i].draw();
 }
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") {  // Top to bottom gradient
    for (let i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == "X") {  // Left to right gradient
    for (let j = x; j <= x+w; j++) {
      var inter2 = map(j, x, x+w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y+h);
    }
  }
}

function Star() {
   this.x = random(windowWidth);
   this.y = random(windowHeight-200);
	 this.w = 2;
   this.h = 2;
}

Star.prototype.draw = function() {
   noStroke();
   fill('white');
   ellipse(this.x, this.y, this.w, this.h);
	 this.x += (random(10) - 5);
   this.y += (random(10) - 5);
	 if (this.w == 2) {
    this.w = 3;
    this.h = 3;
   } else {
    this.w = 2;
    this.h = 2;
  }
}
