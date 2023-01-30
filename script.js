const playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
    const playerChoice = prompt("Please enter rock, paper, or scissors.");
    if (playerChoice) {
        const playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            const computerChoice = Math.floor(Math.random() * 3 + 1);
            const computer = computerChoice === 1 ? "rock" :
                computerChoice === 2 ? "paper"
                    : "scissors";
            
            const result =
                playerOne === computer
                    ? "Tie game!"
                    : playerOne === "rock" && computer === "paper"
                        ? `playerOne: ${playerOne} \nComputer: ${computer}\nComputer wins!`
                        : playerOne === "paper" && computer === "scissors" ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer Wins!`
                            
                            : playerOne === "scissors" && computer === "rock" ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                                : `playerOne: ${playerOne}\nComputer: ${computer} \nplayerOne wins!`;
            alert(result);
                            
            const playAgain = confirm("Play Again");
            playAgain ? location.reload() : alert("Ok, thanks for playing");
        } else {
            alert("You didnt enter rock, paper or scissors")
        }
            
        } else {
            alert("You didnt enter rock, paper or scissors");
        }

    } else {
        alert("I guess you changed your mind. Maybe next time");

    }
    


