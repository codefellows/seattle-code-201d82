'use strict';

let myContainer = document.getElementById('container');
let parentEl = document.getElementById('results');


function handleClick(event) {
  console.log('this is the event', event);
  console.log('this is the target', event.target);

  if (event.target.id === 'box-one') {
    let pEl = document.createElement('p');
    pEl.textContent = 'Box 1 was clicked!';
    parentEl.append(pEl);
  } else if (event.target.id === 'box-two') {
    let pEl = document.createElement('p');
    pEl.textContent = 'Box 2 was clicked!';
    parentEl.append(pEl);
  } else if (event.target.id === 'box-three') {
    let pEl = document.createElement('p');
    pEl.textContent = 'Box 3 was clicked!';
    parentEl.append(pEl);
  } else {
    let pEl = document.createElement('p');
    pEl.textContent = 'CLICK THE BOXES ONLY!';
    parentEl.append(pEl);
  }
}

myContainer.addEventListener('click', handleClick);

// form
