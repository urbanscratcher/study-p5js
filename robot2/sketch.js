const colors = [];

function randomColor() {
  for (let i = 0; i < 256; i++) {
    return round(random(255));
  }
}

function setup() {
  //create a canvas for the robot
  createCanvas(1000, 700);

  for (let i = 0; i < 60; i++) {
    colors.push(randomColor());
  }
}

function draw() {
  strokeWeight(2);

  //robot body 1 - delete this code and make your own robot body
  fill(colors[0], colors[1], colors[2]);
  rect(90, 200, 120, 130);

  fill(colors[3], colors[4], colors[5]);
  rect(80, 200, 100, 30);

  fill(colors[6], colors[7], colors[8]);
  rect(200, 200, 100, 30);

  fill(colors[9], colors[10], colors[11]);
  triangle(100, 330, 130, 330, 100, 450);

  fill(colors[12], colors[13], colors[14]);
  triangle(170, 330, 200, 330, 260, 450);

  //robot body 2 - delete this code and make your own robot body
  fill(colors[15], colors[16], colors[17]);
  ellipse(450, 265, 160, 150);

  fill(colors[18], colors[19], colors[20]);
  rect(370, 80, 30, 150);

  fill(colors[21], colors[22], colors[23]);
  rect(500, 80, 30, 150);

  fill(colors[27], colors[28], colors[29]);
  rect(490, 320, 30, 150);

  fill(colors[24], colors[25], colors[26]);
  rect(390, 320, 150, 30);

  //robot body 3 - delete this code and make your own robot body
  fill(colors[30], colors[31], colors[32]);
  triangle(690, 200, 810, 200, 750, 330);

  fill(colors[33], colors[34], colors[35]);
  triangle(670, 200, 700, 200, 800, 335);

  fill(colors[36], colors[37], colors[38]);
  triangle(800, 200, 830, 200, 700, 333);

  fill(colors[39], colors[40], colors[41]);
  rect(730, 330, 20, 110);

  fill(colors[42], colors[43], colors[44]);
  rect(750, 330, 20, 110);

  fill(colors[45], colors[46], colors[47]);
  ellipse(720, 450, 70, 40);

  fill(colors[48], colors[49], colors[50]);
  ellipse(780, 450, 70, 40);

  // !!! Draw the robot heads - You shouldn't need to change this code !!!

  //robot head 1
  fill(200);
  rect(100, 100, 100, 100, 10);
  //robot head 2
  rect(400, 100, 100, 100, 10);
  //robot head 3
  rect(700, 100, 100, 100, 10);

  //ears
  fill(255, 0, 0);

  //robot ears 1
  rect(93, 130, 10, 33);
  rect(197, 130, 10, 33);

  //robot ears 2
  rect(393, 130, 10, 33);
  rect(497, 130, 10, 33);

  //robot ears 3
  rect(693, 130, 10, 33);
  rect(797, 130, 10, 33);

  //robots' antennas
  fill(250, 250, 0);
  // robot antenna 1
  ellipse(150, 93, 10, 10);
  // robot antenna 1
  ellipse(450, 93, 10, 10);
  // robot antenna 1
  ellipse(750, 93, 10, 10);

  //robots' antennas
  fill(200, 0, 200);
  // robot antenna 1
  rect(140, 97, 20, 10);
  // robot antenna 2
  rect(440, 97, 20, 10);
  // robot antenna 3
  rect(740, 97, 20, 10);

  //robot 1's eyes
  fill(255);
  ellipse(125, 130, 26, 26);
  point(125, 130);
  ellipse(175, 130, 26, 26);
  point(175, 130);

  //robot 2's eyes
  ellipse(425, 130, 26, 26);
  point(425, 130);
  ellipse(475, 130, 26, 26);
  point(475, 130);

  //robot 3's eyes
  ellipse(725, 130, 26, 26);
  point(725, 130);
  ellipse(775, 130, 26, 26);
  point(775, 130);

  //robots' noses
  fill(255, 0, 0);
  //robot 1 nose
  triangle(150, 135, 135, 160, 165, 160);
  //robot 2 nose
  triangle(450, 135, 435, 160, 465, 160);
  //robot 3 nose
  triangle(750, 135, 735, 160, 765, 160);

  //robot 1 mouth
  noFill();
  beginShape();
  vertex(128, 175);
  vertex(136, 185);
  vertex(142, 175);
  vertex(150, 185);
  vertex(158, 175);
  vertex(166, 185);
  vertex(174, 175);
  endShape();

  //robot 2 mouth
  beginShape();
  vertex(428, 175);
  vertex(436, 185);
  vertex(442, 175);
  vertex(450, 185);
  vertex(458, 175);
  vertex(466, 185);
  vertex(474, 175);
  endShape();

  //robot 3 mouth
  beginShape();
  vertex(728, 175);
  vertex(736, 185);
  vertex(742, 175);
  vertex(750, 185);
  vertex(758, 175);
  vertex(766, 185);
  vertex(774, 175);
  endShape();
}
