var underwater,gameState="play",seaObject
var seaAnimal1,seaAnimal2,seaAnimal3,seaAnimal4,coral,coralImage
var player,playerImage
var invisibleGround
var score=0,animalGroup
var gameOver,gameOverImage
function preload(){
  underwaterImage=loadImage("images/save water4.jpg");
  seaAnimal1=loadImage("images/JellyFish1.png");
   seaAnimal2=loadImage("images/Octopus1.png");
   seaAnimal3=loadImage("images/shark1.png");
   seaAnimal4=loadImage("images/turtle1.png");
   coralImage=loadImage("images/sea coral 1.png");
   playerImage=loadImage("images/swimmer(1).png");
   gameOverImage=loadImage("images/game over (1).png")
}
function setup() {  
  createCanvas(1400,700);

  underwater = createSprite(displayWidth/2, displayHeight/2);
  underwater.addImage("underwater4",underwaterImage);
  underwater.x=underwater.width/2;
  underwater.velocityX=-6;

  player=createSprite(100,displayHeight/2,50,50);
  player.scale=0.5;
  player.addImage("player",playerImage);
 

  invisibleGround = createSprite(displayWidth/2,680,displayWidth,30)
  invisibleGround.visible=false

  console.log(underwater.width)
  animalGroup=new Group()

}


  function draw() {
  background("blue");

  if(gameState==="play"){

    //reseting the background
    if(underwater.x<400){
      underwater.x=underwater.width/2;

    }

  score=score+1


    //spawning the sea objects
    spawning()

    //spawning the corals
    spawnCorals()

    //moving the swimmer up and down with the space key
    if(keyDown("up")){
      player.velocityY=-12;
    }
    player.velocityY=player.velocityY+0.4
    if(keyDown("down")){
      player.velocityY=12;
    }

    if(animalGroup.isTouching(player)){
      gameState="end"

    }

  }
  else if(gameState==="end"){
    underwater.velocityX=0;
    player.velocityY=0;
    animalGroup.setVelocityXEach(0)
    gameOver=createSprite(500,200);
    gameOver.addImage("gameOver",gameOverImage);



  }
  
  player.collide(invisibleGround)
  
  drawSprites();
  textSize(18)
  fill("black")
  text("Score "+score,900,50)
} 

function spawning(){
  if(frameCount%60===0){
   seaObject=createSprite(1400,200,40,10);
   seaObject.velocityX=-6;
  

   seaObject.scale=0.3

   seaObject.y=Math.round(random(200,600))

   var rand=Math.round(random(1,4))
   switch (rand) {
        case 1: seaObject.addImage(seaAnimal1)
        break;
        case 2: seaObject.addImage(seaAnimal2)
        break;
        case 3: seaObject.addImage(seaAnimal3)
        break;
        case 4: seaObject.addImage(seaAnimal4)
        break;
   
      default:
       break;
   }

  animalGroup.add(seaObject)

  }


}

function spawnCorals(){
  if(frameCount%60===0){
   coral=createSprite(1400,600,40,10);
   coral.velocityX=-6;

   coral.scale=0.3

   coral.y=Math.round(random(580,680))
   coral.addImage("coral",coralImage)
  
  
   }


}
