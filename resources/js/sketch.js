let yoffset = 0;
let step = 20;

let xconstraint = 40;
let yconstraint = 40;

function setup(){
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.parent("canvas");
    canvas.id("sketch");

    noFill();
    colorMode(HSB, 255); 
    blendMode(ADD);
    background(30);
}

function draw(){
    if(yoffset > 255){
        yoffset = 0;
    }
    stroke(yoffset*50, 255, 10, 100);
    strokeWeight(1);
    let xoffset = 0;
    beginShape();
    for(let x = xconstraint; x < width + step - xconstraint; x = x + step){
        let y = map(noise(xoffset, yoffset), 0.4, 0.6, yconstraint, height - yconstraint, true);
        vertex(x, y);
        xoffset += 0.01;
    }
    yoffset += 0.002;
    endShape();
    stroke(0, 0, 255);
    strokeWeight(10);
    rect(xconstraint, yconstraint, width-xconstraint*2, height - yconstraint*2);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}