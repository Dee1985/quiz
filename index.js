/* create a timed Quiz with multiple choice quesitons and a link to high score storage availability. Will have the ability to calculate the number
 of quesitons answered correctly and store the score in the high scores area. 
/* on start screen, user will see navbar with link to high scores in the top left and a timer counting down from 1 minute in the right
center screen: welcome: introduction to the quiz, directions/parameters and a start button*/

// on click of the start button, the button in the welcome section will disapear:
// global variables created for index and score tracking
let questionIndex = 0;
let correct = 0;
let wrong = 0;
const whamDisplay = document.getElementById('wham');
function startquiz () {
	// for (i = 0; i < questions.length; i++) {
	let options = [];
	const questionDisplay = document.getElementById('q-and-a');
	const choicesDisplay = document.getElementById('choices');
	questionDisplay.innerHTML = '';
	choicesDisplay.innerHTML = '';
	whamDisplay.innerHTML = '';
	questionDisplay.innerHTML = Object.values(questions[questionIndex]['title']).join('');
	for (x = 0; x < 4; x++) {
		let newButton = document.createElement('button');
		newButton.setAttribute('id', x);
		options.push(newButton);
		console.log(options);
		choicesDisplay.append(options[x]);
		newButton.innerHTML = Object.values(questions[questionIndex]['choices'][x]).join('');
	}
    // }
    var timeoutHandle= "";
    console.log(timeoutHandle)
function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        var counter = document.getElementById("timer");
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML =
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            timeoutHandle=setTimeout(tick, 1000);
        } else {

            if(mins > 1){

               // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
               setTimeout(function () { countdown(mins - 1); }, 1000);

            }
        }
    }
    tick();
}

countdown(2);
}

const startBtnEl = document.getElementById('gitLit').addEventListener('click', function () {
	const vanishConEl = document.getElementById('welcome-instructions');
	vanishConEl.setAttribute('class', 'container d-none');
	console.log(startBtnEl);
	startquiz();
	// and the quesions will appear. answer choices to be dislplayed as buttons underneath the question. all within an array*/
});

document.getElementById('choices').addEventListener('click', function (event) {
	// console.log(event.target.innerText);
	// Google Fu: how to grab text on button vanilla JS
	// console.log("current answer", questions[questionIndex].answer)
	// on click of correct button: display "Correct!" beneath the question and next question will appear

	// on click of incorrect button: display "Wrong!" beneath the question and next question will appear
	if (event.target.innerText === questions[questionIndex].answer) {
		console.log('correct');
		whamDisplay.innerHTML = 'Correct!';
		correct++;
	}
	else {
		whamDisplay.innerHTML = 'Wrong!';
		wrong++;
		console.log('wrong');
	}
	questionIndex++;
	console.log('questionIndex', questionIndex);
	console.log('questions.length', questions.length);
	// how to indicate when the game is done
	setTimeout(function () {
		if (questionIndex < questions.length) {
			startquiz();
        }
		else {
			alert('game over');
		}
	}, 500);
	console.log(correct, wrong);
});

// last screen will show "All Done!" with winner score underneath and an input box for user to enter name: a submit button : a clear score button.
