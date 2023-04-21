# The-Pig-Game
JavaScript The Pig Game
<img width="959" alt="ThePigGame" src="https://user-images.githubusercontent.com/99336969/233545294-b548b27e-c0d9-4547-bea5-74ce55136698.png">
<img width="956" alt="PigGame" src="https://user-images.githubusercontent.com/99336969/233545317-1e1a8492-ac29-4829-afbd-f806ce8c9d2c.png">

The rules of pig are as follows:
Two players take turns pushing their luck with a single 6-sided die. Each player may continue so long as they don’t roll a 1.
On a player’s turn, the  starts at 0. The player may roll. So long as the roll is not a 1, the value on the die is added to the Current points. After each successful throw, the player can continue the throw by pressing the ROLL DICE button.
When the current player presses this button, the following works:
•	Outputs a random number using the Math.trunc() function.
•	Since we now have the number of the dice (initially the dice should be hidden), we display it as an image of the dice corresponding to the number of dice.
•	Now, according to the rules of the game, we have to check the number on the die. So, if the dice number is not equal to 1, then the current score is updated. If the number of dice is 1, the switchPlayer() function is called.
# Important
The player has two points in the game, the first is the total point, and the second is the current point, which is scored by pressing the ROLL DICE button. The first player with 100 points wins the round.
Also HOLD button:
•	As soon as the player hits hold, the current score gets added to the overall score of that player.
•	Evaluation of the overall scores is done after that step. If overall score is found to be greater than 100, then the game finishes and then the class of player-winner (which make the background-color: black and changes the color) and removes the class of active-player.
Each player plays a turn in succession, until one of the players earns 100 points. It keeps track of each player’s score. 
The NEW GAME button - the game will start again.
