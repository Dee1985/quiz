// examples from Password Generator homework:

/*The querySelector() method only returns the first element that 
matches the specified selectors. To return all the matches, use the querySelectorAll() method instead*/
const buttonEl = document.querySelector('button');

/*The document.addEventListener() method attaches an event handler to the document.
Tip: Use the document.removeEventListener() method to remove an event handler that has been attached with the addEventListener() method.
Tip: Use the element.addEventListener() method to attach an event handler to a specified element.*/

buttonEl.addEventListener('click', randomGenerator);

/*.concat to add arrays together  The concat() method is used to merge two or more arrays. 
This method does not change the existing arrays, but instead returns a new array. can also be used for strings
string.concat(string1, string2, ..., stringX)
*/
function randomGenerator () {
	const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const Symbols = ["!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
	const combo = numbers.concat(lowerCase, upperCase, Symbols);
	console.log('is combo okay?', combo);
	/*The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s).
    Basic syntax is: $(selector).action()*/
	console.log('what we typed', $('#passlength').val());
	// for loop to run through everything in an array
	let randompass = '';
	// parseInt to make a string a number
	for (let i = 0; i < parseInt($('#passlength').val()); i++) {
		console.log('looping?');
		//// select random item from and array  myArray[Math.floor(Math.random()*myArray.length)];

		const randomIndex = combo[Math.floor(Math.random() * combo.length)];
		console.log(randomIndex);
		randompass += randomIndex;
	}
	console.log('newpass?', randompass);
	// to link what the user inputs to show on the app
	$('#result').text(randompass);
}
