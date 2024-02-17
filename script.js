function getComputerChoice() {
	let choice = Math.floor(Math.random()*3)

	switch(choice) {
		case 0:
			return 'Rock'
			break;
		case 1:
			return 'Paper'
			break;
		case 2:
			return 'Scissors'
			break;
	}

	return 'wawa';
}

function playRound(playerSelection, computerSelection) {
	computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase();
	playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
	let winner = false;
	let tie = false;
	switch(playerSelection) {
		case 'Rock':
			switch(computerSelection) {
				case 'Rock':
					tie = true;
					break;
				case 'Paper':
					winner = false;
					break;
				case 'Scissors':
					winner = true;
					break;
			}
		break;

		case 'Paper':
			switch(computerSelection) {
				case 'Rock':
					winner = true;
					break;
				case 'Paper':
					tie = true;
				case 'Scissors':
					winner = false;
			}
		break;

		case 'Scissors':
			switch(computerSelection) {
				case 'Rock':
					winner = false;
					break;
				case 'Paper':
					winner = true;
					break;
				case 'Scissors':
					tie = true;
					break;
			}
		break;

	
	}

	if (tie) {
		return "Tie, you both showed " + playerSelection;
	}
	else if (winner) {
		playerScore +=1;
		return "You won, your " + playerSelection + " beats " + computerSelection;
	}
	else {
		computerScore +=1;
		return "You lost, your " + playerSelection + " loses to " + computerSelection;
	}
}

function playGame(choice) {
	const newResult = document.createElement('div');
	newResult.textContent = playRound(choice, getComputerChoice());
	roundWinnerBox.appendChild(newResult);
	overallWinnerBox.textContent = "";

	const playerCounter = document.createElement('div');
	const computerCounter = document.createElement('div');
	playerCounter.textContent = "Player wins: " + playerScore;
	computerCounter.textContent = "Computer wins: " + computerScore;

	scoreBox.textContent = "";
	scoreBox.appendChild(playerCounter);
	scoreBox.appendChild(computerCounter);

	if (playerScore == 5) {
		roundWinnerBox.textContent = "";
		scoreBox.textContent = "";
		overallWinnerBox.textContent = "Player wins with 5 wins!";
		playerScore = 0;
		computerScore = 0;
	}
	else if (computerScore == 5) {
		roundWinnerBox.textContent = "";
		scoreBox.textContent = "";
		overallWinnerBox.textContent = "Computer wins with 5 wins!";
		playerScore = 0;
		computerScore = 0;
	}
}

let playerScore = 0, computerScore = 0;

const rockButton = document.querySelector('#Rock');
const paperButton = document.querySelector('#Paper');
const scissorsButton = document.querySelector('#Scissors');

const roundWinnerBox = document.querySelector('#roundWinner');
const scoreBox = document.querySelector('#score');
const overallWinnerBox = document.querySelector('#overallWinner');


rockButton.addEventListener('click', () => playGame('Rock'));
paperButton.addEventListener('click', () => playGame('Paper'));
scissorsButton.addEventListener('click', () => playGame('Scissors'));