function setup() {
  createCanvas (400,400);
}
    var x = 200
    var y = 200
    var x1 = 10
    var y1 = 5
    
    function draw () {
      background (0)
      fill (210,140,200)
      ellipse (x,y,40,40)
      fill (9,200,173)
      ellipse (y,x,60,60)
      
      x=x+x1
      y=y+y1
      
      if (x>400 || x < 0) {
        x1=-x1
      }
      
      if (y>400 || y<0) {
        y1=-y1
      }
    }
