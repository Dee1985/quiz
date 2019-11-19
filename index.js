/* create a timed Quiz with multiple choice quesitons and a link to high score storage availability. Will have the ability to calculate the number
 of quesitons answered correctly and store the score in the high scores area. 
/* on start screen, user will see navbar with link to high scores in the top left and a timer counting down from 1 minute in the right
center screen: welcome: introduction to the quiz, directions/parameters and a start button*/

// on click of the start button, the button in the welcome section will disapear

function startquiz () {}

const startBtnEl = document.getElementById('gitLit').addEventListener('click', function () {
	const vanishConEl = document.getElementById('welcome-instructions');
	vanishConEl.setAttribute('class', 'container d-none');
	console.log(startBtnEl);
	// and the quesions will appear. answer choices to be dislplayed as buttons underneath the question. all within an array*/
	for (i = 0; i < questions.length; i++) {
		let options = [];
		const questionDisplay = document.getElementById('q-and-a');
		questionDisplay.innerHTML = Object.values(questions[i]['title']).join('');
		const choicesDisplay = document.getElementById('choices');
		for (x = 0; x < 4; x++) {
			let newButton = document.createElement('button');
			newButton.setAttribute('id', x);
			options.push(newButton);
			console.log(options);
			choicesDisplay.append(options[x]);
			newButton.innerHTML = Object.values(questions[i]['choices'][x]).join('');
		}
		document.getElementById('choices').addEventListener('click', function () {
			console.log('I got clicked');
		});
	}
});

startquiz();

// on click of correct button: display "Correct!" beneath the question and next question will appear

// on click of incorrect button: display "Wrong!" beneath the question and next question will appear

// last screen will show "All Done!" with winner score underneath and an input box for user to enter name: a submit button : a clear score button.
