function setup(){
canvas=createCanvas(640,400);
canvas.position(650,300);
video=createCapture(VIDEO)
video.hide();
color=""
}
function draw(){
image(video,0,0,640,400);
tint(color);
}
function take_snapshot(){
save ('sample.png')
}
function filter_effect(){
color=document.getElementById("color_name").value
}