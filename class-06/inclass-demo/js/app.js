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

console.log(kittenSection);

let frankie = {
  name: 'Frankie',
  age: null,
  interests: ['wet food', 'fish toy', 'cat nip'],
  isGoodwithDogs: false,
  isGoodwithKids: true,
  isGoodwithCats: true,
  photo: 'img/frankie.jpeg',
  getAge: function(){
    this.age = `${randomAge(3,12)} months` ;
  }
};

let jumper = {
  name: 'Jumper',
  age: null,
  interests: ['dry food', 'crinkle toy', 'treats'],
  isGoodwithDogs: false,
  isGoodwithKids: false,
  isGoodwithCats: true,
  photo: 'img/jumper.jpeg',
  getAge: function(){
    this.age = `${randomAge(3,12)} months` ;
  }
};

let serena = {
  name: 'Serena',
  age: null,
  interests: ['mice', 'lazers', 'scratching'],
  isGoodwithDogs: true,
  isGoodwithKids: false,
  isGoodwithCats: false,
  photo: 'img/serena.jpeg',
  getAge: function(){
    this.age = `${randomAge(3,12)} months` ;
  }
};

// helper functions - function used by another function to do something

// function that gets a random age inclusive between 3 and 12 months
function randomAge(min, max){
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}

// adding all my kitten objects to an array for easy storage and use in helper functions
const kittenCaboodle = [frankie, jumper, serena];

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

// STEPS:
// 1st step: Grab your window into the DOM, using the getElementById method. See line #19 in code
// 2nd step: Create the element using the createElement method - takes in a string of the element type you want to create ('p') <- creates a p tag element
// 3rd step: Give that element context (if you want or need to)
// 4th step: append(add) to the DOM <-- parentElem.appendChild(childElem)

// <!-- generate this from js: -->
// <!-- <article>
//        <h2></h2>
//        <p></p>
//        <ul>
//         <li></li>
//        </ul>
//        <img>
//      </article> -->

// function to render kittens to the DOM
function renderKitten(kitten) {

  //create an article element, it doesn't need context but append it to our DOM window, kittenSection <- see line 19 of code
  const articleElem = document.createElement('article');
  kittenSection.appendChild(articleElem);

  // create h2 element, give it context
  // and append it to the article element
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = kitten.name;
  articleElem.appendChild(h2Elem);

  // create p element, give it context and
  // append it to the article element
  const pElem = document.createElement('p');
  pElem.textContent = `${kitten.name} is adorable and is ${kitten.age} old`;
  articleElem.appendChild(pElem);

  // create ul and append it to the article element
  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  // loop through the kitten interest array to create the lis
  for(let i = 0; i < kitten.interests.length; i++){
    let currentInterest = kitten.interests[i];
    const liElem = document.createElement('li');
    liElem.textContent = currentInterest;
    ulElem.appendChild(liElem);
  }

  // create the img
  const imgElem = document.createElement('img');
  imgElem.src = kitten.photo;
  //imgElem.setAttribute('src', kitten.photo); another way
  imgElem.alt = `${kitten.name} is adorable and is ${kitten.age} old`;
  articleElem.appendChild(imgElem);
}

// function to render all the kitties
function renderAllKittens(){
  for(let i = 0; i < kittenCaboodle.length; i++){
    let currentKitten = kittenCaboodle[i];
    // calls the renderKitten function that does all the DOM manipulation passing in a kitten object
    renderKitten(currentKitten);
  }
}

renderAllKittens();
