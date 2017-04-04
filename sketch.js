var newWidth = 47;
var newHeight = 47;
var kiaraRed = 50;
var kiaraGreen = 255;
var kiaraBlue = 100;


//set up function executes once
function setup(){
    createCanvas(700,500);
    background(255);
    kiaraBlue = random(0,255);
    kiaraGreen = random(0,255);
    kiaraRed = random(0,255);
}


//draw function loops forever
function draw(){
   // background(255);
   if(mouseIsPressed){
     kiaraBlue = random(0,255);
    kiaraGreen = random(0,255);
    kiaraRed = random(0,255);
   stroke(0,50);
    fill(kiaraBlue,kiaraGreen,kiaraRed,100);
   rect(mouseX,mouseY,newWidth,newHeight);   
   }
    
}