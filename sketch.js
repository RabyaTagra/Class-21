var fixedRect, movingRect, Rect1, Rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
Rect1 = createSprite (200,200,50,50);
Rect2 = createSprite (600,200,70,50);
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
Rect1.velocityX = 4;
Rect2.velocityX = -4;

}

function draw() {
  background(0,0,0);  
bounce(movingRect, fixedRect);
bounce(Rect1, Rect2);
  drawSprites();
}

//creating function
function bounce (object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}

}