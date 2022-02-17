noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function preload(){
}

function setup(){
canvas = createCanvas(500, 500);
canvas.position(700, 200);
video=createCapture(VIDEO);
video.size(550, 500);
posenet=ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}
    
function modelLoaded(){
console.log('Model Loaded');
}
    
function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX = " + noseX+ " noseY = " + noseY);

leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);

console.log("leftWrist = " + leftWristX + "rightWristX = "+ rightWristX + "difference = " + difference);
}
}
    
function draw(){
background('#fae8ff');

document.getElementById("text_side").innerHTML = "Width and Height of the text will be = " + difference + "px";

textSize(difference)
fill('#568c82');
text('Dream', 50, 400);
}