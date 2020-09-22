var bullet,wall;
var speed,weight;
var damage ,thickness;


function setup() {
  createCanvas(1400,400);
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor="white"
  wall = createSprite(width - 100,200,60,height/2);
 
  speed = random(223,321);
  bullet.velocityX = map(speed,223,321,7,20);
  weight = random(30,52);
  thickness = random(23,83);
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
 
}

function draw() {
  background("black");  
  textAlign(CENTER);
  textSize(24);
  text("Speed : "+ speed,width/2,30);
  text("Weight : "+ weight,width/2,50);
  text("Wall thickness : "+thickness,width/2,70)
  text("damage : "+ damage,width/2,90);
  rectMode(CENTER);
  fill("green");
  rect(width-200,30,70,20);
  fill("red")
  rect(width-200,90,70,20);
  fill("black")
  textAlign(CENTER)
  textSize(10);
  text("EFFECTIVE",width-200,30)
  text("INEFFECTIVE",width-200,90)
  if(abs(bullet.x-wall.x)<=(bullet.width/2 + wall.width/2)){
        bullet.setVelocity(0,0);

      if(damage <=10){
          bullet.shapeColor = "green";
      }
      else {
          bullet.shapeColor = "red"
      }
  }
  drawSprites();
}