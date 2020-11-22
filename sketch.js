
var rect1,rect2

//preload section

//setup section - create sprites add propertes
function setup() {
  createCanvas(600,600);
  rect1 = createSprite(400, 400, 50, 50);
  rect1.shapeColor= "red"
  rect1.debug = true
  rect2 = createSprite(200,200,50,70)
  rect2.shapeColor = "red"
  rect2.debug = true
}

//controll the sprites
function draw() {
  background("white");  

  rect2.x = mouseX
  rect2.y = mouseY

/*
  if(rect1.isTouching(rect2)){
    rect1.shapeColor= "green"
    rect2.shapeColor = "green"
  }
  else{
    rect1.shapeColor= "red"
    rect2.shapeColor = "red"
  }
  */
//distance b/w the two sprites 
console.log(rect1.x - rect2.x)
console.log(rect1.width/2 + rect2.width/2)

if(rect1.x - rect2.x <rect1.width/2 + rect2.width/2
  && rect2.x - rect1.x <rect1.width/2 + rect2.width/2 
  &&rect1.y - rect2.y <rect1.height/2 + rect2.height/2
  && rect2.y - rect1.y <rect1.height/2 + rect2.height/2  ){
  rect1.shapeColor= "green"
  rect2.shapeColor = "green"
}
else{
  rect1.shapeColor= "red"
  rect2.shapeColor = "red"
}


  drawSprites();
}