let humanScore = 0;
let computerScore = 0;
let result = '';
const div = document.querySelector('.result');
const btn = document.querySelectorAll('button');
let humanSelection = '';
const computerSelection = getComputerChoice();
paraScore();

btn.forEach((button) => {
    button.addEventListener('click', () => {
        humanSelection = button.className;
        clearContent();
        playRound(humanSelection, computerSelection);
    });
});

function clearContent() {
    while(div.firstChild) { 
        div.removeChild(div.firstChild); 
    }
}

function paraScore() {
    const para = document.createElement('p');
    para.classList.add('score');
    para.innerHTML += '<br>Score:<br><br>You:  ' + humanScore + '<br>Computer:  ' + computerScore;
    div.appendChild(para);
}

function clearScore() {
    humanScore = 0;
    computerScore = 0;
    result = '';
    clearContent();
    paraScore();
}

function getComputerChoice() {
    const computerChoice = Math.random();
    if (computerChoice <= (1/3)) {
        return 'Rock';
    } else if (computerChoice <= (2/3)) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result = 'Tie! You both choose ' + humanChoice + '.';
    } else if (humanChoice === 'Rock' && computerChoice === 'Paper') {
        computerScore++;
        result = 'You lose! Paper beats Rock.';
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
        humanScore++;
        result = 'You win! Rock beats Scissors.';
    } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
        humanScore++;
        result = 'You win! Paper beats Rock.';
    } else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
        computerScore++;
        result = 'You lose! Scissors beats Paper.';
    } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
        computerScore++;
        result = 'You lose! Rock beats Scissors.';
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        humanScore++;
        result = 'You win! Scissors beats Paper.';
    } else {
        result = 'Error!';
    }

    const para2 = document.createElement('p');
    para2.classList.add('stat');
    para2.innerHTML += result;

    div.appendChild(para2);
    paraScore();

    if (humanScore===5) {
        alert('Congratulations! You won on this match...');
        clearScore();
    } else if (computerScore===5) {
        alert('Try again, Next time! Computer won on this match...');
        clearScore();
    }
}