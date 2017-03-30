function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  
  ellipseMode(CENTER)
  
  fill(255,255,255);
  

  for (var A = 20; A <= 380; A += 20) {
    ellipse(A, A, 20, 20);
  }
}
