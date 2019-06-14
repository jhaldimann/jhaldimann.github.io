let blocks = [];

let newGame = () => {
  generateGrid();
};

let generateGrid = () => {
  for (let i = 0; i < 4; i++) {
    blocks.push([]);
    for (let j = 0; j < 4; j++) {
      blocks[ i ].push(0);
    }
  }
  createStartValues();
  drawGrid();
  redrawBlocks();
  document.addEventListener('keydown', function ( event ) {
    move(event);
  });
};

let drawGrid = () => {
  let element = document.querySelector('.grid');
  for (let i = 0; i < 4; i++) {
    let div = document.createElement('div');
    div.className = "row";
    for (let j = 0; j < 4; j++) {
      let innerDiv = document.createElement('div');
      innerDiv.className = "element" + " e" + i + j;
      if (blocks[ i ][ j ] !== 0) {
        innerDiv.innerHTML = blocks[ i ][ j ];
      }
      div.appendChild(innerDiv);
    }
    element.appendChild(div);
  }
};

let isFull = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (blocks[ i ][ j ] === 0) {
        return false;
      }
    }
  }
  return true;
};

let getRandomBlocks = () => {
  return Math.floor((Math.random() * 4));
};

let drawRectangle = ( y, x ) => {
  let name = '.e' + y + '' + x;
  let div = document.querySelector(name);
  div.innerHTML = '';
  div.style.backgroundColor = 'white';
  if (blocks[ y ][ x ] !== 0) {
    div.innerHTML = blocks[ y ][ x ];
    div.style.backgroundColor = generateColor(blocks[ y ][ x ]);
    div.style.color = 'white';
  }
};

let createStartValues = () => {
  for (let i = 0; i < 2; i++) {
    blocks[ getRandomBlocks() ][ getRandomBlocks() ] = 2;
  }
};

let redrawBlocks = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (blocks[ i ][ j ]) {
        drawRectangle(i, j);
      }
    }
  }

  setTimeout(() => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        drawRectangle(i, j);
      }
    }
  })
};

let move = ( e ) => {
  switch (e.key) {
    case 'ArrowDown':
      shift(blocks[ 0 ].length - 1, -1, -1, 0);
      break;
    case 'ArrowUp':
      shift(0, blocks[ 0 ].length, 1, 0);
      break;
    case 'ArrowLeft':
      shift(0, blocks[ 0 ].length, 1, 1);
      break;
    case 'ArrowRight':
      shift(blocks[ 0 ].length - 1, -1, -1, 1);
      break;
    default:
      return;
  }
  redrawBlocks();
  if (!isFull()) {
    spawn();
  } else {
    console.log(isBoardPlayable());
    if (isBoardPlayable()) {
      if (!document.querySelector('.overlay')) {
        gameOverAnimation();
      }
    }
  }
};

let shift = ( start, end, inc, direction ) => {
  for (let i = start; i !== end; i += inc) {
    for (let j = start; j !== end; j += inc) {
      if (direction === 0) {
        let pull = i + inc;
        while (pull >= 0 && pull < blocks.length) {
          if (blocks[ pull ][ j ] !== 0 && blocks[ i ][ j ] === 0) {
            blocks[ i ][ j ] = blocks[ pull ][ j ];
            blocks[ pull ][ j ] = 0;
            break;
          } else {
            pull += inc;
          }
        }
        merge(i, j, i - inc, j);
      } else if (direction === 1) {
        let pull = j + inc;
        while (pull >= 0 && pull < blocks[ 0 ].length) {
          if (blocks[ i ][ pull ] !== 0 && blocks[ i ][ j ] === 0) {
            blocks[ i ][ j ] = blocks[ i ][ pull ];
            blocks[ i ][ pull ] = 0;
            break;
          } else {
            pull += inc;
          }
        }
        merge(i, j, i, j - inc);
      }
    }
  }
};

let merge = ( iif, ijf, iis, ijs, inc ) => {
  if (iis >= 0 && iis < blocks.length && ijs >= 0 && ijs < blocks[ 0 ].length) {
    if (blocks[ iif ][ ijf ] === blocks[ iis ][ ijs ]) {
      blocks[ iis ][ ijs ] *= 2;
      blocks[ iif ][ ijf ] = 0;
    } else if (blocks[ iis ][ ijs ] === 0) {
      blocks[ iis ][ ijs ] = blocks[ iif ][ ijf ];
      blocks[ iif ][ ijf ] = 0;
      if (iif === iis) {
        merge(iis, ijs, iis, ijs - inc, inc);
      } else if (ijf === ijs) {
        merge(iis, ijs, iis - inc, ijs, inc);
      }
    }
  }
};

let spawn = () => {
  let x = getRandomBlocks();
  let y = getRandomBlocks();
  if (blocks[ x ][ y ] === 0) {
    blocks[ x ][ y ] = 2;
  } else {
    spawn();
  }
};

let generateColor = ( value ) => {
  let b = value % 255;
  return "#" + convertToHex(255 / b) + convertToHex(b % 255) + convertToHex(b * 10 % 255);
};

let isBoardPlayable = () => {
  for (let x = 0; x < blocks[ 0 ].length; x++) {
    for (let y = 0; y < blocks[ x ].length; y++) {
      if (blocks[ x ][ y ] !== 0) {
        let v = blocks[ x ][ y ];
        if (x > 0 && blocks[ x - 1 ][ y ] !== 0 && v === blocks[ x - 1 ][ y ]) {
          return false;
        }
        if (y > 0 && blocks[ x ][ y - 1 ] !== 0 && v === blocks[ x ][ y - 1 ]) {
          return false;
        }
        if (x < 4 - 1 && blocks[ x + 1 ][ y ] !== 0 && v === blocks[ x + 1 ][ y ]) {
          return false;
        }
        if (y < 4 - 1 && blocks[ x ][ y + 1 ] !== 0 && v === blocks[ x ][ y + 1 ]) {
          return false;
        }
      }
    }
  }
  return true;
};

let convertToHex = ( colorVal ) => {
  let hex = parseInt(colorVal).toString(16);
  return hex.length === 1 ? '0' + hex : hex;
};

let gameOverAnimation = () => {
  let root = document.querySelector('.grid');
  let overlay = document.createElement('div');
  let overlayLabel = document.createElement('label');
  overlayLabel.innerHTML = 'Game Over';
  root.classList.add('blur');
  overlay.className = 'overlay';
  overlay.appendChild(overlayLabel);
  document.body.appendChild(overlay);
};