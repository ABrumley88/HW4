function setup () {
  createCanvas (400,400);
}

function draw () {
  background (255)
  var y=400
  var x=10
  var y1=mouseX
  for (x=10; x<390; x=x+10) {
    	line (x,y,x, y1+random (255))
  }
}
