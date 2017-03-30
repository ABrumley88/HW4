function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {

  for (var a = 25; a <= 375; a += 25) {
    for (var b = 25; b <= 375; b += 25) {

      ellipse(a, b, 20, 20);


      fill(255);

    }
  }

}
