// 
let clockX, clockY;
let secondsHandLength;
let minutesHandLength;
let hoursHandLength;

function setup() {
    // 
    let parentDiv = document.getElementById('time');
    let canvasWidth = parentDiv.offsetWidth;
    let canvasHeight = parentDiv.offsetHeight;
    let canvas = createCanvas(canvasWidth, canvasHeight, WEBGL);
    canvas.parent('time');
    // 
    clockX = 0;
    clockY = 0;
    // 
    secondsHandLength = (canvasHeight / 2) * 0.9;
    minutesHandLength = (canvasHeight / 2) * 0.7;
    hoursHandLength = (canvasHeight / 2) * 0.5;
}

function draw() {
    background(27, 32, 33);

    let sec = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
    let min = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
    let hr = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

    // draw seconds hand
    stroke(5, 241, 64);
    strokeWeight(3);
    line(clockX, clockY, clockX + cos(sec) * secondsHandLength * 0.9, clockY + sin(sec) * secondsHandLength * 0.9);
    // draw minutes hand
    stroke(100, 233, 238);
    strokeWeight(4);
    line(clockX, clockY, clockX + cos(min) * minutesHandLength, clockY + sin(min) * minutesHandLength);
    // draw hours hand
    stroke(255, 51, 102);
    strokeWeight(5);
    line(clockX, clockY, clockX + cos(hr) * hoursHandLength, clockY + sin(hr) * hoursHandLength);

    // Draw the minute ticks
    stroke(14, 177, 210);
    strokeWeight(3);
    beginShape(POINTS);
        for (let a = 0; a < 360; a += 30) {
        let angle = radians(a);
        let x = clockX + cos(angle) * secondsHandLength;
        let y = clockY + sin(angle) * secondsHandLength;
        vertex(x, y);
    }
    endShape();

    // 
    strokeWeight(10);
    stroke(255, 255, 0);
    point(0,0);
}