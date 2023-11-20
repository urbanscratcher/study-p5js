//This is a simple template for you to experiment with

//This is a comment  ... the two slashes at the start mean that the computer ignores it

//You can look up more commands here ... https://p5js.org/reference/
function setup() {
  createCanvas(600, 600);
}

function draw() {
  fill(255, 0, 0);

  rect(100, 100, 100, 100);
  ellipse(150, 400, 100, 100);
  ellipse(400, 150, 150, 50);
  line(100, 80, 320, 250);
  triangle(400, 350, 300, 450, 500, 450);
  point(300, 300);
  strokeWeight(1);
}
