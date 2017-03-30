function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);
  ellipseMode(CENTER);
  colorMode(HSB);
  noStroke();

  for (var a = 20; a <= 380; a += 22) {
    for (var b = 30; b <= 500; b += 22) {
      fill(random(360),70,135);
      ellipse(a, b, 20, 20);
    }
  }
}
