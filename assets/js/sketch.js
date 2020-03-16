/*
 *
 *
*/
let radius = 1;

function setup() {
    let parentDiv = document.getElementById('canvas');
    let canvasWidth = parentDiv.offsetWidth;
    let canvasHeight = parentDiv.offsetHeight;
    let canvas = createCanvas(canvasWidth, canvasHeight, WEBGL);
    canvas.parent('canvas');
}

// 
function draw() {
    circle(radius);
}