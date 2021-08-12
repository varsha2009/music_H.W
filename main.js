music1 = "";
music2 = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
function setup(){
    canvas = createCanvas(365,365);
    canvas.position(505,225)
    video = createCapture(VIDEO);
    video.size(350,350);
    video.hide();
    poseNet = ml5.poseNet(video,modalLoaded);
    poseNet.on('pose',getPoses);
}
function draw(){
    image(video,6.5,6.5,350,350);
}
function preload(){
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}
function modalLoaded(){
    console.log("model is loaded"); 
}

function getPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("leftwristX = "+leftwristX)
        console.log("leftwristY = "+leftwristY)
        console.log("rightwristX = "+rightwristX);
        console.log("rightwristY = "+rightwristY)
    }
}
