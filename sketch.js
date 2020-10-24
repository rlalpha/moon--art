var col={
  r:0,
  g:0,
  b:0
};

let Moon = 120;
let spot={
  x:0,
  y:0
};


function setup() { 
  createCanvas(1920, 1080);
  frameRate(10);
} 

  
function draw() { 
  
  //backgroundSky
  r=map(mouseX,0,500,300,50);
  g=map(mouseX,0,500,255,80);
  b=map(mouseX,0,500,300,200);
  background(r,g,b);
  
  
  
  //stars
  spot.x=random(0,width);
  spot.y=random(0,height);
  comets=random(10,30);
  speed=3
  fill(255,255,255,100);
  noStroke();
  star(spot.x, spot.y, 20, 50, 5); 
  star(spot.x+150, spot.y-200, 20, 50, 5);
  star(spot.x-300, spot.y-150, 20, 50, 5); 
  star(spot.x+400, spot.y-300, 20, 50, 5);
   if (spot.y>height-100){
    speed=5;
  }
  spot.y= spot.y+speed
  
  
  //Moon
  ellipseMode(CENTER);
  noStroke();
  fill(255);
	ellipse(mouseX,mouseY,255);
  fill(200);
  ellipse(mouseX+60,mouseY-5,Moon);
   fill(200);
  ellipse(mouseX-10,mouseY+50,30,20);
  
  //click
  if(mouseIsPressed){
   noStroke();
  fill("#ffdb00");
	ellipse(mouseX,mouseY,255);
  }  
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);

}
