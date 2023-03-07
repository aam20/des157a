(function(){
	
	"use strict";
	console.log('js is running');
	/* 
	This gets the player: gameData.players[gameData.index]
	This gets the first die: gameData.dice[gameData.roll1-1]
	This gets the second die: gameData.dice[gameData.roll2-1]
	This gets the score of the current player: gameData.score[gameData.index]
	*/
	
	const startGame = document.getElementById('startgame');
	const gameControl = document.getElementById('gamecontrol');
	const game = document.getElementById('game');
	const score = document.getElementById('score');
	const actionArea = document.getElementById('actions');

	const gameData = {
		dice: ['images/die1.png', 'images/die2.png', 'images/die3.png', 
			   'images/die4.png', 'images/die6.png', 'images/die6.png'],
		players: ['player 1', 'player 2'],
		score: [0, 0],
		roll1: 0,
		roll2: 0,
		rollSum: 0,
		index: 0,
		gameEnd: 29
	};

	startGame.addEventListener('click', function () {
		gameData.index = Math.round(Math.random());
		console.log(gameData.index);

		// gameControl.innerHTML = '<h2>The Game Has Started</h2>'; /*REMOVED*/
		gameControl.innerHTML = '<h2></h2>'; //ADDED
		gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';
		

		document
			.getElementById('quit').addEventListener('click', function () {
				location.reload();
			});

		setUpTurn();
	});

	function setUpTurn() {
		game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
		actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
		document.getElementById('roll').addEventListener('click', function(){

			throwDice();
			//DICE SOUND
			dice.play();
		});
	}

	function throwDice(){
		actionArea.innerHTML = '';
		gameData.roll1 = Math.floor(Math.random() * 6) + 1; //using ceil could result in a zero
		gameData.roll2 = Math.floor(Math.random() * 6) + 1;
		game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
		game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> 
							<img src="${gameData.dice[gameData.roll2-1]}">`;
		gameData.rollSum = gameData.roll1 + gameData.roll2;


		// if two 1's are rolled...
		if( gameData.rollSum === 2 ){ 
			game.innerHTML += '<p>Oh snap! Snake eyes!</p>';/*INSERT GRAPHIC OF SNAKE*/
			gameData.score[gameData.index] = 0;
			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			showCurrentScore();
			setTimeout(setUpTurn, 2000);
			
			
			///SOUND FOR SNAKE EYES
			cry.play();
		}

		// if either die is a 1...
		else if(gameData.roll1 === 1 || gameData.roll2 === 1){ 
			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to  ${
				gameData.players[gameData.index]
			}</p>`;
			setTimeout(setUpTurn, 2000);
		}

		// if neither die is a 1...
		else { 
			gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
			actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

			document.getElementById('rollagain').addEventListener('click', function () {
				//setUpTurn();
				throwDice();
				dice.play();//dice sound if roll again
			});

			document.getElementById('pass').addEventListener('click', function () {
				gameData.index ? (gameData.index = 0) : (gameData.index = 1);
				setUpTurn();
			});

			checkWinningCondition();
			dice.play();
			
		}
		dice.play();

	}

	function checkWinningCondition() {
		if (gameData.score[gameData.index] > gameData.gameEnd) {
			// player wins score
			score.innerHTML = `<h2>${gameData.players[gameData.index]} 
			wins with ${gameData.score[gameData.index]} points!</h2>`;
			score.innerHTML += ` <p> CONGRATULATIONS! ${gameData.players[gameData.index]} 
			can now enjoy their happiness.</p> <img src="images/mouse2.png" alt="mouse crying & looking at desk">`;


			giggle.play(); //GIGGLE OF RAT IF THEY WIN

			document.querySelector('.split').className = "hidden";//hide score & rolling ability 

			actionArea.innerHTML = '';
			document.getElementById('quit').innerHTML = 'Start a New Game?';
		} else {
			// show current score...
			showCurrentScore();
		}
	}

	const p1 = document.getElementById('player1');

	function showCurrentScore() {//SCORE TEXT
		score.innerHTML = `<p>${gameData.players[0]}: ${gameData.score[0]} || ${gameData.players[1]}: ${gameData.score[1]}</p>`;
	}


	// to open overlay with instructions 

	 /*to close/hide overlay(s)*/
	 const close = document.querySelector('.close'); 
	 close.addEventListener('click', function () {
		 document.getElementById('overlay1').className="hidden";//overlay hides
		 document.querySelector('#rules').className = "showing";//carousel shows
		 console.log('close');
	 });

	 /*to open*/
	 const rules = document.querySelector('#rules'); 
	 rules.addEventListener('click', function () {
		 document.getElementById('overlay1').className="showing";//overlay hides
		 document.querySelector('#rules').className = "hidden";//carousel shows
	 });



	// AUDIO 
	const giggle = new Audio ('sounds/giggle6.mp3');
	const cry = new Audio ('sounds/cry2.mp3');
	const buttonClick = new Audio ('sounds/button.m4a');
	const dice= new Audio ('sounds/dice.m4a');


	// const gigglebutton = document.querySelector('.close');
	// const giggle = new Audio ('sounds/giggle6.mp3');
	// gigglebutton.addEventListener('click', function () {
	// 	
	// });
	

}());