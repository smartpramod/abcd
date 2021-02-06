var hr, mn, sc;
var hrAngle, mnAngle, scAngel;

function setup() {
  createCanvas(400,400);

  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  
  translate(200,200)
  rotate(-90)

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0, 60, 0, 360);
  mnAngle = map(mn,0, 60, 0, 360);
  hrAngle = map(hr %12 ,0, 12, 0, 360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  Line(0, 0, 100, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,225,0);
  strokeWeight(7);
  Line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,225);
  strokeWeight(7);
  Line(0,0,50,0);
  pop();

  drawSprites();
}