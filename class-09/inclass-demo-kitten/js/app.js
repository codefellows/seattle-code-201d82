'use strict';

// Jose is a volunteer for the kitten rescue... they need a way to get the profiles of kittens who will be up for adoption onto the page... new kittens come in and they need to be added. Jose knows a little bit of java script... he can make objects!

// what are we going to display?
// Kittens
// figure out what info about each kitten we need to show:
// name
// age with a function
// interests []
// isGoodWithDogs
// isGoodWithCats
// isGoodWithKids
// photo


// 1st - grab a window into the dom
let kittenSection = document.getElementById('kitten-profiles');

// adding all my kitten objects to an array for easy storage and use in helper functions
const kittenCaboodle = [];

console.log(kittenSection);

function Kitten(name, interests, isGoodWithDogs, isGoodWithCats, isGoodWithKids, photo){
  this.name = name;
  this.interests = interests;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithKids = isGoodWithKids;
  this.age = null;
  this.photo = photo;

  kittenCaboodle.push(this);
}

Kitten.prototype.getAge = function () {
  this.age = `${randomAge(3, 12)} months` ;
};

let frankie = new Kitten('Frankie', ['wet food', 'fish toy', 'cat nip'], false, true, true, 'img/frankie.jpeg');
let jumper = new Kitten('Jumper', ['dry food', 'crinkle toy', 'treats'], false, true, false, 'img/jumper.jpeg');
let serena = new Kitten('Serena', ['mice', 'lazers', 'scratching'], true, false, false, 'img/serena.jpeg');



// helper functions - function used by another function to do something

// function that gets a random age inclusive between 3 and 12 months
function randomAge(min, max){
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}


function getAllKittenAges() {
  // loop through the kittenCaboodle array, and call getAge on kitten object
  for(let i = 0; i < kittenCaboodle.length; i++){
    let currentKitten = kittenCaboodle[i];
    currentKitten.getAge();
  }
}
// function call to generate all ages for kittens
getAllKittenAges();
console.log(kittenCaboodle);

// ******* DOM Manipulation *****

// refactored function prototype method to render kittens to the DOM
Kitten.prototype.renderKitten = function() {

  //create an article element, it doesn't need context but append it to our DOM window, kittenSection <- see line 19 of code
  const articleElem = document.createElement('article');
  kittenSection.appendChild(articleElem);

  // create h2 element, give it context
  // and append it to the article element
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = this.name; // this is the object that is going to be rendered
  articleElem.appendChild(h2Elem);

  // create p element, give it context and
  // append it to the article element
  const pElem = document.createElement('p');
  pElem.textContent = `${this.name} is adorable and is ${this.age} old`;
  articleElem.appendChild(pElem);

  // create ul and append it to the article element
  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  // loop through the kitten interest array to create the lis
  for(let i = 0; i < this.interests.length; i++){
    let currentInterest = this.interests[i];
    const liElem = document.createElement('li');
    liElem.textContent = currentInterest;
    ulElem.appendChild(liElem);
  }

  // *********DOM TABLE RENDER *********************
  const tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  // create body and rows
  const tableHeadElem = document.createElement('thead');
  tableElem.appendChild(tableHeadElem);

  const row1 = document.createElement('tr');
  tableHeadElem.appendChild(row1);

  const th1Elem = document.createElement('th');
  th1Elem.textContent = 'Good with Dogs';
  row1.appendChild(th1Elem);

  const th2Elem = document.createElement('th');
  th2Elem.textContent = 'Good with Cats';
  row1.appendChild(th2Elem);

  const th3Elem = document.createElement('th');
  th3Elem.textContent = 'Good with Kids';
  row1.appendChild(th3Elem);

  const row2 = document.createElement('tr');
  tableElem.appendChild(row2);

  const td1 = document.createElement('td');
  td1.textContent = this.isGoodWithDogs;
  row2.appendChild(td1);

  const td2 = document.createElement('td');
  td2.textContent = this.isGoodWithCats;
  row2.appendChild(td2);

  const td3 = document.createElement('td');
  td3.textContent = this.isGoodWithKids;
  row2.appendChild(td3);

  // create the img
  const imgElem = document.createElement('img');
  imgElem.src = this.photo;
  //imgElem.setAttribute('src', this.photo); another way
  imgElem.alt = `${this.name} is adorable and is ${this.age} old`;
  articleElem.appendChild(imgElem);
};

// function to render all the kitties
function renderAllKittens(){
  for(let i = 0; i < kittenCaboodle.length; i++){
    let currentKitten = kittenCaboodle[i];
    // calls the renderKitten method on the current kitten that does all the DOM manipulation
    currentKitten.renderKitten();
  }
}
renderAllKittens();



// ******** EVENT HANDLING ********

// Step 1: Grab the element I want to listen to
const kittenForm = document.getElementById('add-kitten');


// Step 3: write the event handler or callback function

function handleSubmit(event){
  event.preventDefault(); // prevent my browser from resetting and trying to send my data somewhere

  // kittyName is the value of the name attribute we set on the input element  <input name="kittyName"> -- see html
  let name = event.target.kittyName.value;
  let interests = event.target.interests.value;

  interests = interests.split(',');
  // .split is a string method that will split on the character or characters provided and return an array of elements that were split

  let photo = event.target.photo.value;

  let isGoodWithDogs = event.target.isGoodWithDogs.checked;
  let isGoodWithCats = event.target.isGoodWithCats.checked;
  let isGoodWithKids = event.target.isGoodWithKids.checked;

  let newKitten = new Kitten(name, interests, isGoodWithDogs, isGoodWithCats, isGoodWithKids, photo);

  //call necessary methods on the new kitten to render to page
  newKitten.getAge();
  newKitten.renderKitten();

  //resets the fields on the form
  kittenForm.reset();
}




// Step 2: Add my event listener to the element I want to listen to
kittenForm.addEventListener('submit', handleSubmit);

