function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(0);

  stroke(225);

  for (var a = 20; a <= 380; a += 10) {
    line(a, 20, 20, a);
  }
  for (var b = 30; b < 385; b += 10) {
    line(380, b, b, 380);
  }
}
