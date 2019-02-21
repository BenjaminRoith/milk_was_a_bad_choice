var x = 100.0; 
var y = 0; 
var speed = 1; 

function preload(){
    img = loadImage('Images/RedLizard.png');
}

function setup(){
    createCanvas(600,400);
    background(255,255,255);
    cursor(img);
}

function draw(){
    cursor(img);
}


function draw(){
    fill(random(0,255), random(0,255), random(0,255));
    ellipse(mouseX,mouseY,100,100);
  }

function draw(){
    fill('white');
    triangle(mouseX, mouseY, 20, 20);
    if(mouseIsPressed){
        image(img, mouseX, mouseY, 100, 100);
    }
    y += speed; 
  
    if(y > height){
      y = 10; 
    }
    if(y < 10){
        y = height;
    }
    fill('white');
    ellipse(x,y,50,50);
    ellipse(200, y,50,50);
    ellipse(300,y,50,50);
    ellipse(400,y,50,50);
    ellipse(500,y,50,50);
    ellipse(600,y,0,0);
}

function keyPressed(){
    if (keyCode === RIGHT_ARROW) {
        speed += 1;
      } else if (keyCode === LEFT_ARROW) {
        speed -= 1;
      }
}
