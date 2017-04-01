function setup() { 
  createCanvas(400, 400);
	  background(0);
} 
function draw() { 
	
	for(x=10;x<395;x=x+10){
		for(y=10;y<395;y=y+10){
			  stroke(255)
			  line(x,y,y,x)
	}
	}
	    textSize(200)
	    noStroke()
	    text("ATB",9,250)
}
