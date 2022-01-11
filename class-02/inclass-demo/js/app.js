'use strict';

// console.log('hey world hey!!');

let user = prompt('Hi there, what is your name?');

// Below is a template literal syntax. You're string is enclosed with the back-ticks, not quotes: `` (located by the 1 on your keyboard). Insert the variable in the ${} syntax.
alert(`Welcome ${user}! Let's play a guessing game so you can get to know me! Please answer yes or no.`);

// concatenated version:
// alert('Welcome ' + user + '! Let\'s play a guessing game');

let answerOne = prompt('Do I have a daughter?').toLowerCase();

// Using the .toLowerCase() without chaining as seen above.
// let normalizedAnswerOne = answerOne.toLowerCase();

// Validating user response:

if(answerOne === 'yes' || answerOne === 'y') {
  // console.log('yes, that is correct');
  alert('Yes you are correct! She\'s in the Threenager stage right now!');
} else if(answerOne === 'no' || answerOne === 'n') {
  // console.log('sorry, you are incorrect');
  alert('Sorry, you are wrong');
} else {
  // console.log('follow instructions');
  alert('Please follow instructions and answer with a yes/no!');
}

alert(`Thanks for playing ${user}!`);
