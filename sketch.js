
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score, ground,edges;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500);
  

  edges = createEdgeSprites();
  
  ground = createSprite(300,400,1200,10);
  ground.velocityX = -4;
  
  monkey = createSprite(80,400,50,50);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.collide(ground);
  
  
  
  
  bananas();
  obstacles();
  
  drawSprites();
  stroke("black");
  fill("black")
  textSize(22);
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,200,50);
}

function obstacles(){
  if(frameCount%300===0){
    obstacle =  createSprite(600,370,20,20);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.lifetime = 110;
    
    obstacleGroup.add(obstacle);
  }
  
}

function bananas(){
  if(frameCount%80===0){
    banana = createSprite(600,200,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6;
    banana.lifetime = 110;
  }
  
}


