let canvas = document.querySelector('canvas');

let isDrawing = false;
let preX,preY;
let size = 2;
let color = 'black';
canvas.backgroundColor = 'white';
let mode = 'rectangle';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');

canvas.addEventListener('mousemove', (e) => {
  mouseposition('move',e)
});

canvas.addEventListener('mousedown', (e) => {
  preX = e.x;
  preY = e.y;
  mouseposition('down',e)
});

canvas.addEventListener('mouseup', (e) => {
  mouseposition('up',e)
});

canvas.addEventListener('mouseout', (e) => {
  mouseposition('out',e)
});

let mouseposition = (res,e) => {
  switch (res) {
    case 'move':
      if(isDrawing && mode === 'draw') {
        getSize();
        drawpoint(e.x,e.y);
        preX = e.x;
        preY = e.y;
      } else if(mode === 'circle' && isDrawing) {
        drawCircle(e.x,e.y);
      }
      break;
    case 'down':
      isDrawing = true;
      break;
    case 'up':
      isDrawing = false;
      if(mode === 'rectangle') {
        drawRect(e.x,e.y);
      }
      break;
  }
};

let drawpoint = (x,y) => {
  getColor();
  drawLine(x,y);
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, size /2, 0, 2 * Math.PI,false);
  ctx.fill();
  ctx.closePath();

};

let getColor = () => {
  color ='' + document.querySelector('.colorpicker').value;
};

let getSize = () => {
  size = document.querySelector('.size').value;
};

let drawLine = (x,y) => {
  ctx.beginPath();
  ctx.moveTo(preX,preY);
  ctx.strokeStyle = color;
  ctx.lineTo(x,y);
  ctx.lineWidth = size;
  ctx.stroke();
};

let save = () => {
  let link = document.querySelector('a');
  link.addEventListener('click', function(ev) {
    link.href = canvas.toDataURL();
    link.download = 'mypainting.jpg';
  }, false);
};

let drawRect = (x,y) => {
  ctx.beginPath();
  ctx.rect(preX,preY,x-preX,y-preY);
  ctx.stroke();

};

let changeMode = (m) => {
  mode = m;
};

let drawCircle = (x,y) => {
  getColor();
  ctx.clearRect(0,0,canvas.width,canvas.height); //clear canvas
  ctx.save();
  ctx.beginPath();
  let scalex = ((x - y) / 2);
  let scaley = ((y - x) / 2);
  ctx.scale(scalex,scaley);
  let centerx = (preX/scalex) + 1;
  let centery = (preY/scaley) + 1;
  ctx.arc(centerx, centery, 1, 0, 2*Math.PI,false);
  ctx.restore();
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.stroke();
};