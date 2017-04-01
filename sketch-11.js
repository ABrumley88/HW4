function setup () {
  createCanvas (400,400);
  
}

function draw () {
  	background (255)
  	var y= 400
    for (x=10; x < 390; x=x+10){
      line (x,y,x,random (255))
    }
}
