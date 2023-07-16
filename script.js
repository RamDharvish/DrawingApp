
const canvas = document.getElementById("canvas");
canvas.width = 1000; // Set the width of the canvas to 800 pixels
canvas.height = 600; // Set the height of the canvas to 600 pixels

let context = canvas.getContext("2d");
let startBackgroundColor = "white";
context.fillStyle = startBackgroundColor;
context.fillRect(0, 0, canvas.width, canvas.height);

let draw_color = "black";
let draw_width = "2";
let is_drawing = false;

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function start(event) {
  is_drawing = true;
  context.beginPath();
  let x, y;
  if (event.type === "touchstart" || event.type === "touchmove") {
    x = event.touches[0].clientX - canvas.offsetLeft;
    y = event.touches[0].clientY - canvas.offsetTop;
  } else {
    x = event.clientX - canvas.offsetLeft;
    y = event.clientY - canvas.offsetTop;
  }
  context.moveTo(x, y);
  event.preventDefault();
}

function draw(event) {
  if (is_drawing) {
    let x, y;
    if (event.type === "touchmove") {
      x = event.touches[0].clientX - canvas.offsetLeft;
      y = event.touches[0].clientY - canvas.offsetTop;
    } else {
      x = event.clientX - canvas.offsetLeft;
      y = event.clientY - canvas.offsetTop;
    }
    context.lineTo(x, y);
    context.strokeStyle = draw_color;
    context.lineWidth = draw_width;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
  }
  event.preventDefault();
}

function stop(event) {
  if (is_drawing) {
    context.stroke();
    context.closePath();
    is_drawing = false;
  }
  event.preventDefault();
}

function clear_canvas() {
  context.fillStyle = startBackgroundColor;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(0, 0, canvas.width, canvas.height);
}


// const canvas = document.getElementById("canvas");
// const context = canvas.getContext('2d');
// const rect = canvas.getBoundingClientRect();

// // Set the canvas size
// canvas.width = 800; // Set the width of the canvas to 800 pixels
//  canvas.height = 400; // Set the height of the canvas to 600 pixels

// let draw_color = "black";
// let draw_width = "2";
// let is_drawing = false;

// canvas.addEventListener("touchstart", start, false);
// canvas.addEventListener("touchmove", draw, false);
// canvas.addEventListener("mousedown", start, false);
// canvas.addEventListener("mousemove", draw, false);
// canvas.addEventListener("touchend", stop, false);
// canvas.addEventListener("mouseup", stop, false);
// canvas.addEventListener("mouseout", stop, false);

// function start(event) {
//     is_drawing = true;
//     context.beginPath();
//     context.moveTo(event.clientX - rect.left, event.clientY - rect.top);
//     event.preventDefault();
// }

// function draw(event) {
//     if (is_drawing) {
//         context.lineTo(event.clientX - rect.left, event.clientY - rect.top);
//         context.strokeStyle = draw_color;
//         context.lineWidth = draw_width;
//         context.lineCap = "round";
//         context.lineJoin = "round";
//         context.stroke();
//     }
// }

// function stop(event) {
//     is_drawing = false;
// }

