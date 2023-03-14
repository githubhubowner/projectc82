var mouse_event = "empty";
console.log(mouse_event);
var last_position_of_x = 0;
var last_position_of_y = 0;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
line_width=20;
radius=20;
canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e)
{
    color = document.getElementById("color_input").value;
    line_width = document.getElementById("line_width_input").value;
    radius = document.getElementById("radius_input").value;
    mouse_event = "mouse_down";
    console.log(mouse_event)
}
canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(e)
{
    mouse_event = "mouse_up";
    console.log(mouse_event)
}

canvas.addEventListener("mouseleave", myMouseLeave);

function myMouseLeave(e)
{
    mouse_event = "mouse_leave";
    console.log(mouse_event)
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouse_event == "mouse_down") {
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = line_width;
ctx.arc(current_position_of_mouse_x , current_position_of_mouse_y , 50 , 0 , 2 * Math.PI);
ctx.stroke();

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + " ,y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y)

        console.log("Current position of x and y coordinates =");
        console.log("x = " + current_position_of_mouse_x + " ,y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

function clear_canvas()
{
    ctx.clearRect(0,0,800,600)
}