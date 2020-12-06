var dogImg, happyDogImg, dog;
var database, foodS, foodStock;
var canvas, lastFed, fedTime;
var foodObj, feed, addFood;
var food1, foodCount, input;
var milk, milkImg;
var board1,board2,board3,board4,board5;

function preload() {
  dogImg = loadImage('images/dogImg.png');
  happyDogImg = loadImage('images/happydog.png');
  milkImg = loadImage('Milk.png');
}

function setup() {
  database = firebase.database();
  
  
  board1 = createSprite(100,170,1100,20)
  board1.scale=0.5;

  board2 = createSprite(100,220,1100,20)
  board2.scale=0.5;

  board3 = createSprite(100,270,1100,20)
  board3.scale=0.5; 

  board4 = createSprite(100,320,1100,20)
  board4.scale=0.5;

  board4 = createSprite(100,370,1100,20)
  board4.scale=0.5;

  dog = createSprite(650, 250);
  dog.scale = 0.3;
  dog.addImage(dogImg);

  milk = createSprite(565, 300);
  milk.addImage(milkImg);
  milk.scale = 0.1;
  milk.visible = false;
  milk.rotation = 55;
  
  food1 = new Food();
  
  food1.start();

  addFood = createButton("Add food");
  addFood.position(1000, 100);
  addFood.mousePressed(addFoods);

  input = createInput("Your Dog's Name");
  input.position(940, 420);

  feed = createButton("Feed your Dog");
  feed.position(800, 100);
  feed.mousePressed(feedDog);

  canvas = createCanvas(800, 400);
}

function draw() {  
  background(46, 139, 87);

  food1.display();

  drawSprites();
}

function feedDog() {
  food1.getFoodStock();
  food1.updateFedTime();

  if(foodCount === 0) {
    foodCount = 0;
    milk.visible = false;
    dog.addImage(dogImg);
  } else {
    food1.updateFoodStock(foodCount - 1);
    milk.visible = true;
    dog.addImage(happyDogImg);
  }
}

function addFoods() {
 food1.getFoodStock();

 food1.updateFoodStock(foodCount + 1); 
}