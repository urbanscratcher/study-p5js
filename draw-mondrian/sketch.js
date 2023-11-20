function setup() {
  //create a large square canvas
  createCanvas(800, 800);
}

function draw() {
  //set the fill colour to red
  fill(221, 1, 0);

  //set a thick stroke weight for the black lines
  strokeWeight(12);

  //draw the red rectangle
  rect(100, 50, 600, 600);

  fill(250, 201, 1);
  rect(150, 400, 400, 160);

  fill(34, 80, 149);
  rect(250, 560, 450, 90);

  fill(0, 0, 0);
  rect(100, 400, 50, 250);

  fill(255, 255, 255);
  rect(100, 50, 50, 350);

  fill(255, 255, 255);
  rect(550, 50, 150, 510);
}
