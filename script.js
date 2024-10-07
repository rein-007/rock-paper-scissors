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

// function getHumanChoice() {
//     const btn = document.querySelectorAll('button');
//     let humanChoice = '';
    // let humanChoice = prompt('You: ' + humanScore + ' Computer: ' + computerScore + '\n' + result + '\n\nGame #' + number +':\nRock, Paper or Scissors?');
    // humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    // btn.forEach((button) => {
    //     button.addEventListener('click', () => {
    //         humanChoice = button.className;
    //     });
    // });
    // if (choices.includes(humanChoice)) {
    //     return humanChoice;
    // } else {
    //     return getHumanChoice();
    // }
// }

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

    console.log(result);
    console.log('Score:\nYou: ' + humanScore + '\nComputer: ' + computerScore);
}

function playGame() {
    const btn = document.querySelectorAll('button');
    let humanSelection = '';
    btn.forEach((button) => {
        button.addEventListener('click', () => {
            humanSelection = button.className;
        });
    });

    // humanSelection = humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1).toLowerCase();
    // let i = 1;
    // while(i<=5) {
        // const humanSelection = getHumanChoice(i);
        // const computerSelection = getComputerChoice();
        // playRound(humanSelection, computerSelection);
    //     i++
    // }
    console.log(humanSelection);
    // console.log(computerSelection);

}