let userScore = 0;
let computerScore = 0;
let limit = 3;
const userScoreSpan = document.querySelector('#user-score');
const computerScoreSpan = document.querySelector('#computer-score');
const resultDiv = document.querySelector('.result');
const rockDiv = document.querySelector('#rock');
const paperDiv = document.querySelector('#paper');
const scissorsDiv = document.querySelector('#scissors');

let computerMove = () => {
  let choices = ['rock','paper','scissors'];
  return choices[Math.floor(Math.random()  * 3)];
};

let start = () => {
  rockDiv.addEventListener('click', () => {
    game('rock');
  });

  paperDiv.addEventListener('click', () => {
    game('paper');
  });

  scissorsDiv.addEventListener('click', () => {
    game('scissors');
  });
};

function game( el ) {
  if(!compareLimit()) {
    let compMove = computerMove();
    switch(el+compMove) {
      case 'rockrock':
        updateValues('tie', el, compMove);
        break;
      case 'rockpaper':
        updateValues('lose', el, compMove);
        break;
      case 'rockscissors':
        updateValues('win', el, compMove);
        break;
      case 'scissorsrock':
        updateValues('lose', el, compMove);
        break;
      case 'scissorspaper':
        updateValues('win', el, compMove);
        break;
      case 'scissorsscissors':
        updateValues('tie', el, compMove);
        break;
      case 'paperrock':
        updateValues('win', el, compMove);
        break;
      case 'paperpaper':
        updateValues('tie', el, compMove);
        break;
      case 'paperscissors':
        updateValues('lose', el, compMove);
        break;
    }
  }
}

let updateValues = (res, el, compMove) => {
  if(res === 'tie') {
    resultDiv.innerHTML = 'TIE';
  } else if(res === 'win') {
    userScore++;
    userScoreSpan.innerHTML = userScore.toString();
    resultDiv.innerHTML = 'Nice ' + el + ' beats ' + compMove + '!';
    compareLimit();
    return 0;
  } else {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore.toString();
    resultDiv.innerHTML = 'What a shame! ' + compMove + ' beats ' + el + '!';
    compareLimit();
    return 0;
  }
};

let setLimit = () => {
  let input = document.querySelector('input');
  limit = input.value;
};

let compareLimit = () => {
  if(userScore === parseInt(limit)) {
    console.log('Limit reached User win');
    gameOver('User');
    return true;
  } else if(computerScore === parseInt(limit)) {
    console.log('Limit reached Computer win');
    gameOver('Computer');
    return true;
  }
  return false;
};

let gameOver = (player) => {
  resultDiv.innerHTML = player + ' is the Winner!';
};

let restart = () => {
  limit = 3;
  userScore = 0;
  computerScore = 0;
  computerScoreSpan.innerHTML = computerScore;
  userScoreSpan.innerHTML = userScore;
};

start();