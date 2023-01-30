This assigment was created as an individual assignment.

The aim of the project was to use Javascript only to build a rock, paper, scissors game.

My possible outcome of the game is:
Rock destorys scissors.
Scissors cut paper
paper covers rock
If there is a tie, then the game ends in a draw.

The code will break the game into four parts:

1. Get the users choice
2. Get the computers choice
3. Compare the two choices and determin a winner
4. Start the program and display the results



1) The user should be able to choose between
'rock', 'paper' or 'scissors when the game starts

I made use of const and arrow function syntax to create a function named getUserChoice that takes a single parameter userInput.

2) Since the user can pass in a parameter, such as 'Rock or 'rock' with different capilization, begin by utilizing JavaScipt's toLowerCase() function to make the userInput all lowercase.

3) When getting the users choice.
you should also check to make sure that the user typed a valid choice: 'rock', 'paper',or 'scissors'.

inside getUserChoice(), write an if/else statement that makes sure the userInput is either 'rock','paper', or 'scissors'. If it does, then return the userInput. If not, use console.log to print an error message to the console


5) Now we need to have the computer make a choice

To do this we create a new function named getComputerChoice with no parameters. Inside its block, utilize Math.random() and Math.floor() to get a whole number between 0 and 2. Then, depending on the number, return either 'rock', 'paper', or 'scissors'.


6) Now we will test the function by calling it multiple times and printing the results to the console

You can delete this when you know your function works.

7) Now we will determin a winner.

Here we create a function named determineWinner that takes two parameters named userChoice and computerChoice. This function will compare the two choices played and the return if the human player won or lost or if there was a tie.

Lets talk about the tie condition first. Within the determinWinner() function, we will write an if statement that checks if the userChoice parameter equals


8) If the game is not a tie, you will need to determin a winner.

Begin by writing we begin by writing an if statement that checks if the userchoice is 'rock'. Inside the if statements block, write another if/else statement. The inner if/else should check if the computerChoice is 'paper'. If so, return a message that the computer won. If not return a message that the user won.


9) Now  we will write another if statement for if the userChoice is 'paper'

inside this if statement the computerChoice must be either 'scissors or 'rock'. Write logic that will return a winner.


10) next, write yet another if statment for if the userChioce is 'scissors'.

Inside of this if statement, the computerChioce must be either be 'rock' or 'paper'. Write logic that will return a winner


