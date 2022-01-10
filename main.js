noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(600, 600);
    canvas.position(600,85);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('poseNet is initialized');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log('nose x = '+ noseX+"nose y =" + noseY);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftwristx= "+ leftwristX+"rightwristx= "+rightwristX+"difference ="+difference);
    }
}

function draw()
{
    background('#000000');
    document.getElementById("font-size").innerHTML="font size of the text will be = "+difference+"px";
    textSize(difference);
    fill('#e6edeb');
    text('LEO',50,200);
}