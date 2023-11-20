function setup() {
  //create a canvas for the robot
  createCanvas(500, 500);
}

function draw() {
  strokeWeight(6);

  //robots head
  fill(200);
  rect(100, 110, 250, 300, 20);

  //robots antenna
  fill(120, 220, 50);
  ellipse(200, 70, 60, 60);

  fill(10, 5, 250);
  rect(210, 90, 80, 30);

  //robots eyes
  fill(255);
  ellipse(175, 200, 80, 80);
  point(175, 220);
  ellipse(325, 210, 80, 80);
  point(325, 190);

  //robots nose
  fill(260, 50, 0);
  rect(220, 260, 50, 30);

  //robots ears
  fill(250, 170, 0);
  rect(80, 180, 30, 100);
  rect(380, 150, 50, 100);

  //robots mouth
  noFill();
  beginShape();
  vertex(155, 320);
  vertex(200, 370);
  vertex(225, 320);
  vertex(250, 370);
  vertex(275, 340);
  vertex(280, 390);
  vertex(325, 340);
  endShape();
}
