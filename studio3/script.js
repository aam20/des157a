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
		dice: ['images/di1.png', 'images/di2.png', 'images/di3.png', 
			   'images/di4.png', 'images/di6.png', 'images/di6.png'],
		players: ['player 1', 'player 2'],
		score: [0, 0],
		roll1: 0,
		roll2: 0,
		rollSum: 0,
		index: 0,
		gameEnd: 29
	};

	// AUDIO 
	const giggle = new Audio ('sounds/giggle6.mp3');
	const cry = new Audio ('sounds/cry2.mp3');
	const dice= new Audio ('sounds/dice.m4a');
	const start= new Audio ('sounds/achievebell.wav');
	const pass = new Audio ('sounds/boo2.mp3');

	
	
	
	startGame.addEventListener('click', function () {
		start.play();
		gameData.index = Math.round(Math.random());
		console.log(gameData.index);


		// gameControl.innerHTML = '<h2>The Game Has Started</h2>'; /*REMOVED*/
		gameControl.removeAttribute('h2');//innerHTML = '<h2></h2>'; //ADDED
		gameControl.innerHTML = '<button type = "submit" id="quit">Wanna Quit?</button>';

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

			//SEPARATE THESE BUTTONS 
			actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

			document.getElementById('rollagain').addEventListener('click', function () {
				//setUpTurn();
				dice.play();//dice sound if roll again
				throwDice();
				
			});

			document.getElementById('pass').addEventListener('click', function () {
				pass.play();
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
			score.innerHTML = `<h2><span style=" font-size: 80%;">${gameData.players[gameData.index]} 
			wins with ${gameData.score[gameData.index]} points!<span></h2>`;

			score.innerHTML += ` <p> CONGRATS! <br> ${gameData.players[gameData.index]} 
			can now enjoy their happiness.</p>`;

			document.getElementById('congrats').className = "showing";
		
			//hide score & rolling ability
			document.querySelector('.split').className = 'hidden';
			
			//display flex the scoreboard congrats message & the img in html
			document.querySelector('#scoreboard').className = 'split2'; 

			document.querySelector('#score').style.display = 'block'; 

			giggle.play(); //GIGGLE OF RAT IF THEY WIN

			actionArea.innerHTML = '';
			document.getElementById('quit').innerHTML = '<span style="font-size:200%;">Start a NEW Game?</span>';
		} 

		else {
			// show current score...
			showCurrentScore();
			document.getElementById('congrats').className = "hidden"; 
		}
	}




	const p1= document.getElementById("p1");
	const p2= document.getElementById("p2");

	///SCOREBOARD
	function showCurrentScore() {//SCORE TEXT
		document.querySelector('#score').className = 'split2'; 
		p1.innerHTML = `<p>${gameData.players[0]} : <span style="font-size:200%;">${gameData.score[0]}</span> </p>`;
		p2.innerHTML = ` <p> ${gameData.players[1]}: <span style="font-size:200%;">${gameData.score[1]}</span> </p>`;

		document.querySelector('#scoreboard #player1').className = "showing";
		document.querySelector('#scoreboard #player2').className = "showing";

		document.querySelector('#scoreboard #score1').className = "split";
		document.querySelector('#scoreboard #score2').className = "split";		
	}


	// TO OPEN OVERLAY WITH RULES
	 /*to close/hide overlay(s)*/
	 const close = document.querySelector('.close'); 
	 close.addEventListener('click', function () {
		 document.getElementById('overlay1').className="hidden";//rules overlay hides
		 document.querySelector('#rules').className = "showing";//button shows
		 document.querySelector('#yes').className = "showing";//when close yes div shows 
		 console.log('close');
	 });

	 /*to open rules*/
	 const rules = document.querySelector('#rules'); 
	 rules.addEventListener('click', function () {
		 document.getElementById('overlay1').className="showing";//overlay hides
		 document.querySelector('#rules').className = "hidden";//rules show

		 document.querySelector('#yes').className = "hidden";//gamecontrol shows
	 });


}());