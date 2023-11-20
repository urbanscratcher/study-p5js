/*

- Copy your game project code into this file
- for the p5.Sound library look here https://p5js.org/reference/#/libraries/p5.sound
- for finding cool sounds perhaps look here
https://freesound.org/


*/

var jumpSound;
var isInitialized;
var isLoaded;

// asynchronous loading of external files in a blocking way
// loading.. will be displayed
function preload() {
  soundFormats("mp3", "wav");
  isLoaded = false;

  //load your sounds here
  jumpSound = loadSound("assets/segway_loop.mp3", () => {
    console.log("sound is loaded");
    isLoaded = true;
  });
}

function setup() {
  createCanvas(1024, 576);
  isInitialized = false;
}

function draw() {
  background(0);
  fill(255);

  if (!isInitialized) {
    text("press any key to begin", width / 2, height / 2);
  }
}

function keyPressed() {
  if (!isInitialized) {
    isInitialized = true;
    jumpSound.setVolume(0.2);

    var r = map(mouseX, 0, width, 0.5, 4.0);

    if (isLoaded) {
      jumpSound.loop(0, r, 0.2, 0.1);
    }
  } else {
    if (key === " ") {
      if (jumpSound.isPaused()) {
        jumpSound.play();
      } else {
        jumpSound.pause();
      }
    }
  }
}
