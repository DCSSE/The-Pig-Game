// Selecting elements
// 'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
 
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
 
let scores, currentScore, activePlayer, playing, s;
s = [0, 0];

btnNew.addEventListener('click', function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    scores[0] = 0;
    scores[1] = 0;

    scores[activePlayer] = 0;

    console.log(current0El);
    console.log(current1El);
    console.log(score0El);
    console.log(score1El);
    console.log("------------------------------------------------------------");
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    document.querySelector('body').style.backgroundColor = "white";
})

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
     
      // 1. Generating a random dice roll
      const dice = Math.trunc(Math.random() * 6) + 1;
   
      diceEl.classList.remove('hidden');

      let pictdice = `pictures/dice${dice}.png`;
      diceEl.setAttribute("src", pictdice);
   
      //Checking for rolled 1
      if (dice !== 1) {
        currentScore += dice;
        console.log(dice + ", " + currentScore);
        document.getElementById(
          `current--${activePlayer}`
        ).textContent = currentScore;

        if ( (currentScore+scores[activePlayer]) >= 100) {
          playing = false;
          document.getElementById(`score--${activePlayer}`)
        .textContent = scores[activePlayer]+currentScore;
          diceEl.classList.add('hidden');
          document
            .querySelector(`.player--${activePlayer}`)
            .classList.add('player--winner');
          document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove('player--active');
            document.querySelector('body').style.backgroundColor = "black";

        }

      } else {
        currentScore = 0;
        console.log(dice + ", " + currentScore);
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`)
        .textContent = scores[activePlayer];

        console.log(scores[activePlayer]);
        console.log("------------------------------------------------------------");

        if (scores[activePlayer] >= 100) {
          playing = false;
          document.getElementById(`score--${activePlayer}`)
        .textContent = scores[activePlayer];
          diceEl.classList.add('hidden');
          document
            .querySelector(`.player--${activePlayer}`)
            .classList.add('player--winner');
          document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove('player--active');
            document.querySelector('body').style.backgroundColor = "black";
            // document.querySelector('main_cont').style.backgroundColor = "black";
        } else {
          switchPlayer();
        }
      }
    }
  });


  const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  };

  btnHold.addEventListener('click', function () {
    // if (playing) {
      // console.log("-------------------");
      // console.log(scores[activePlayer]);
      const dice2 = Math.trunc(Math.random() * 6) + 1;

      if (dice2 === 1) {
        console.log("-------------------");
        console.log(activePlayer);
      console.log(currentScore);
      console.log(scores[activePlayer]);
      s[activePlayer] = scores[activePlayer] + currentScore;
      document.getElementById(`score--${activePlayer}`).textContent = s[activePlayer];
      }
      console.log("-------------------");
      console.log(activePlayer);
      console.log(currentScore);
      console.log(scores[activePlayer]);
      s[activePlayer] = scores[activePlayer] + currentScore;
      document.getElementById(`score--${activePlayer}`).textContent = s[activePlayer];
   
      //Check if player's score is >= 100
      if (s[activePlayer] >= 100) {
        playing = false;
        diceEl.classList.add('hidden');
   
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
        document.querySelector('body').style.backgroundColor = "black";
        document.querySelector('main_cont').style.backgroundColor = "black";
      } else {
        switchPlayer();
      }

  });

// Starting conditions
const initialState = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    scores[0] = 0;
    scores[1] = 0;
    scores[activePlayer] = 0;

    console.log(score0El);
    console.log(score1El);
    console.log(current0El);
    console.log(current1El);
    console.log("------------------------------------------------------------");
   
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
   
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    
  };
  initialState();
