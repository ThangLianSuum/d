
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.hide();

    canvas =  createCanvas(480, 380);
    canvas.center();
}

function start() {
    loading = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting DOGS"; 
}

function modelLoaded()
{
    console.log("MOAJU LOADESED")
    status = true;
}

function draw() {
    image(video, 0, 0, 480, 380);
}