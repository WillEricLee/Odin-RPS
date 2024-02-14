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
		return "You won, your " + playerSelection + " beats " + computerSelection;
	}
	else {
		return "You lost, your " + playerSelection + " loses to " + computerSelection;
	}
	return 'wawa';	
}
