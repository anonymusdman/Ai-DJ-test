leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
    image(video, 0, 0, 600, 500);
}
music = "";
function preload(){
    music = loadSound("Running in the 90's.mp3");
}
function play_music(){
    music.play();
    music.setVolume(1);
    music.rate(1);
    music.stop(10);
}
function modelLoaded(){
    console.log("PoseNet initialized");
}
function gotPoses(results){
    if(results.length > 0){
        //console.log(results);
        /*leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        console.log(leftwristx + ", " + leftwristy + ", " + rightwristx + ", " + rightwristy);*/
    }
}
