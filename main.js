var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d");
var colour = "black";
var widthline = 3;
var mouseEvent = "";
var last_x_value = 0;
var last_y_value = 0;
canvas.addEventListener("mousedown",mouse_Down);
function mouse_Down(e){
    mouseEvent = "down";
    colour = document.getElementById("colour_select").value;
}
canvas.addEventListener("mousemove",mouse_move);
function mouse_move(e){
    var current_x_position = e.clientX-canvas.offsetLeft;
    var current_y_position = e.clientY-canvas.offsetTop;
    if (mouseEvent=="down")
    {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = widthline;
        ctx.moveTo(last_x_value,last_y_value);
        ctx.lineTo(current_x_position,current_y_position);
        ctx.stroke();
    }
    last_x_value = current_x_position;
    last_y_value = current_y_position;
}
canvas.addEventListener("mouseup",mouse_up);
function mouse_up(e){
    mouseEvent = "up";
    
}
canvas.addEventListener("mouseleave",mouse_leave);
function mouse_leave(e){
    mouseEvent = "leave"
}
function Erasebtn(){
    ctx.clearRect (0,0,ctx.canvas.width,ctx.canvas.height);
    
}