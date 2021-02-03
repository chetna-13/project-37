var  gameState , database ;
var contestantCount,contestant;
var quiz,question;



function setup() {
  createCanvas(800,400);
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();

  object = new Quiz();
  getState()
  start();

  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}