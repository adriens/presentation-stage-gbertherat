let yoffset = 0;
let step = 60;

let xconstraint = 40;
let yconstraint = 40;

function setup(){
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.parent("canvas");
    canvas.id("sketch");

    background(30);
    setInterval(clearScreen, 300000);
}

function draw(){
    if(frameRate() < 10){
        blendMode(BLEND);
        background(30);
    }

    if(yoffset*50 > 255){
        yoffset = 0;
    }

    blendMode(BLEND);
    colorMode(RGB);
    fill(30);
    noStroke();
    rect(width-xconstraint, 0, width, height);

    blendMode(ADD);
    colorMode(HSB, 255); 
    noFill();
    stroke(yoffset*50, 255, 20, 100);
    strokeWeight(1);
    let xoffset = 0;
    beginShape();
    for(let x = xconstraint; x < width-xconstraint/2+step/2; x = x + step){
        let rng = random(0,0.01);
        let y = map(noise(xoffset, yoffset)+rng, 0.3, 0.6, yconstraint, height - yconstraint, true);
        vertex(x, y);
        xoffset += 0.01;
    }
    endShape();

    yoffset += 0.003;
    stroke(0, 0, 255);
    strokeWeight(10);
    rect(xconstraint, yconstraint, width-xconstraint*2, height - yconstraint*2);
}

function windowResized(){
    blendMode(BLEND);
    resizeCanvas(windowWidth, windowHeight);
    background(30);
}
function clearScreen(){
    blendMode(BLEND);
    background(30);
}