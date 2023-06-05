var mouseEvent = "empty";

var lastPositionX, lastPositionY;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
widthLine = 1;

canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e){

    mouseEvent = "mouseDown";

    color = document.getElementById("color").value;
    widthLine = document.getElementById("widthLine").value;
}

canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
  mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e){
    PositionMouseX = e.clientX - canvas.offsetLeft;
    PositionMouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;

        console.log (lastPositionX , lastPositionY)
        ctx.moveTo(lastPositionX, lastPositionY);

        ctx.lineTo(PositionMouseX,PositionMouseY)
        ctx.stroke();
    }

    lastPositionX = PositionMouseX
    lastPositionY = PositionMouseY
}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
}