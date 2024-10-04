let humanScore = 0;
let computerScore = 0;
let result = '';
const choices = ['Rock', 'Paper', 'Scissors'];

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

function getHumanChoice(number) {
    let humanChoice = prompt('Game #' + number +': You: ' + humanScore + ' Computer: ' + computerScore + '\n' + result + '\n\nRock, Paper or Scissors?');
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    if (choices.includes(humanChoice)) {
        return humanChoice;
    } else {
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result = console.log('Tie! You both choose ' + humanChoice + '.')
    } else if (humanChoice === 'Rock' && computerChoice === 'Paper') {
        computerScore++;
        result = console.log('You lose! Paper beats Rock.');
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
        humanScore++;
        result = console.log('You win! Rock beats Scissors.');
    } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
        humanScore++;
        result = console.log('You win! Paper beats Rock.');
    } else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
        computerScore++;
        result = console.log('You lose! Scissors beats Paper.');
    } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
        computerScore++;
        result = console.log('You lose! Rock beats Scissors.');
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        humanScore++;
        result = console.log('You win! Scissors beats Paper.');
    }

    console.log(result);
    console.log('Score:\nYou: ' + humanScore + '\nComputer: ' + computerScore);
}

function playGame() {
    let i = 1;
    while(i<=5) {
        const humanSelection = getHumanChoice(i);
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        i++
    }
}