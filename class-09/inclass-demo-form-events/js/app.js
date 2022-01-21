'use strict';
// step 1 grab the element that we want to listen to
// let myContainer = document.getElementById('container');
// let parentEl = document.getElementById('results');

<<<<<<< HEAD
let myForm = document.getElementById('my-form');


//step 3: define our even handler - callback function
=======
// Step 1: Grab the element that we want to listen to
let myContainer = document.getElementById('container');
let parentEl = document.getElementById('results');

let myForm = document.getElementById('my-form');

// Step 3: Define our event handler - callback function
// function handleClick(event) {
//   console.log('this is the event', event);
//   console.log('this is the target', event.target);

//   if (event.target.id === 'box-one') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 1 was clicked!';
//     parentEl.append(pEl);
//   } else if (event.target.id === 'box-two') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 2 was clicked!';
//     parentEl.append(pEl);
//   } else if (event.target.id === 'box-three') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 3 was clicked!';
//     parentEl.append(pEl);
//   } else {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'CLICK THE BOXES ONLY!';
//     parentEl.append(pEl);
//   }
// }

// Step 3 - EVENT HANDLER - CALLBACK FUNCTION

>>>>>>> f28623336f0fcbe75dbae02a908cdd8ffd6e293c
function handleSubmit(event){
  event.preventDefault();
  console.dir(event.target);

  let name = event.target.firstName.value;
  console.log('name', name);

<<<<<<< HEAD
  let age = event.target.age.value;
  console.log('age', age);

  let housewives = event.target.housewives.value;
  console.log('Favorite housewive', housewives);
=======
  let age = +event.target.age.value;
  console.log(typeof age);
  
  let housewives = event.target.housewives.value;
  console.log('housewive', housewives);
>>>>>>> f28623336f0fcbe75dbae02a908cdd8ffd6e293c
}



<<<<<<< HEAD
//step 2 add eventlistener to that element- 2 args (event, callback function)
myForm.addEventListener('submit', handleSubmit);

// function handleClick(event) {
//   console.log('this is the event', event);
//   console.log('this is the target', event.target);

//   if (event.target.id === 'box-one') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 1 was clicked!';
//     parentEl.append(pEl);
//   } else if (event.target.id === 'box-two') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 2 was clicked!';
//     parentEl.append(pEl);
//   } else if (event.target.id === 'box-three') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 3 was clicked!';
//     parentEl.append(pEl);
//   } else {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'CLICK THE BOXES ONLY!';
//     parentEl.append(pEl);
//   }
// }

// myContainer.addEventListener('click', handleClick);
=======
// Step 2: Add our eventlistener - 2 args (event, callback function)
// myContainer.addEventListener('click', handleClick);

myForm.addEventListener('submit', handleSubmit);
>>>>>>> f28623336f0fcbe75dbae02a908cdd8ffd6e293c

// form
