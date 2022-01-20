'use strict';
// step 1 grab the element that we want to listen to
// let myContainer = document.getElementById('container');
// let parentEl = document.getElementById('results');

let myForm = document.getElementById('my-form');


//step 3: define our even handler - callback function
function handleSubmit(event){
  event.preventDefault();
  console.dir(event.target);

  let name = event.target.firstName.value;
  console.log('name', name);

  let age = event.target.age.value;
  console.log('age', age);

  let housewives = event.target.housewives.value;
  console.log('Favorite housewive', housewives);
}



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

// form
