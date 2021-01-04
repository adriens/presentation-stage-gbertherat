let yoffset = 0;
let step = 20;

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
    if(frameRate() < 5){
        blendMode(BLEND);
        background(30);
    }

    drawLine()
    drawBorders();
}

function drawLine(){
    push();
    colorMode(HSB, 255); 
   
    var color = yoffset * 100;

    noFill();
    stroke(color, 255, 255, 50);
    strokeWeight(1);

    let xoffset = 0;
    beginShape();
    for(let x = xconstraint; x < width-xconstraint + step; x = x + step){
        let y = map(noise(xoffset, yoffset), 0.3, 0.6, yconstraint, height - yconstraint, true);
        vertex(x, y);
        xoffset += 0.001;
    }
    endShape();
    yoffset += 0.001;
    pop();
}

function drawBorders(){
    push();
    stroke(255);
    strokeWeight(20);
    line(xconstraint, yconstraint, width-xconstraint, yconstraint);
    line(xconstraint, yconstraint, xconstraint, height-yconstraint);
    line(xconstraint, height - yconstraint, width-xconstraint, height - yconstraint);
    line(width - xconstraint, yconstraint, width - xconstraint, height - yconstraint);

    stroke(30);
    line(width - xconstraint/2, yconstraint/2, width - xconstraint/2, height - yconstraint/2);
    pop();
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