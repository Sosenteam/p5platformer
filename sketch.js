//Variables
let x = 0;
let y = 0;
let speed = 0.1;
function setup(){
createCanvas(windowWidth, windowHeight);
}
function draw(){
    background("lightPink");
    ellipse(x, y, 10, 10);
    x += (mouseX-x)*speed;
    y += (mouseY-y)*speed;
}