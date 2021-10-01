haloX= 0;
haloY= 0;
function preload() {
    halo= loadImage("halo.png")
}
function setup() {
    canvas= createCanvas(600, 450);
    canvas.position(430, 220);

    camera= createCapture(VIDEO);
    camera.hide();
    poseNet = ml5.poseNet(camera, modelLoaded)
    poseNet.on('pose', getPoses)

}

function modelLoaded() {
    console.log("Model is loaded");
}

function draw() {
    image(camera, 0, 0, 600, 450);
    image(halo, haloX, haloY, 450, 130)
}

function getPoses(results) {
    if (results.length > 0) {
        console.log(results);
        haloX= results[0].pose.nose.x-237;
        haloY= results[0].pose.nose.y-237;
    }
}
function saveImg() {
    save("ImAnAngel.png")
}

