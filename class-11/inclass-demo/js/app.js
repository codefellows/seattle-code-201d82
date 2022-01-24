'use strict';

// console.log('hey there hey!');

// ************* GLOBAL VARIABLES *******************

// +++++ DOM REFERENCES +++++++++++

// listen to the container for voting
let myContainer = document.getElementById('container');
// listen to click on the "button" to display results
let showResultsBtn = document.getElementById('show-results-btn');

// js will populate the src - to display images
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');

// +++++ OTHER GLOBALS ++++++
const goatArray = [];
let maxVotes = 15;
let counter = 0;


// ******* CONSTRUCTOR FUNCTION TO INSTANTIATE GOATS ********
function Goat(name, fileExtension = 'jpg'){
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.votes = 0;
  goatArray.push(this);
}

// ******* INSTANTIATE SOME GOATS *****
new Goat('bunny-goat', 'png');
new Goat('cool-goat');
new Goat('cruisin-goat');
new Goat('float-your-goat');
new Goat('goat-out-of-hand');
new Goat('kissing-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');
new Goat('sweater-goat');

console.log(goatArray);

// ***** EXECUTABLE CODE *****

function getRandomIndex() {
  return Math.floor(Math.random() * goatArray.length);
}


function renderImages() {
  let goatOneIndex = getRandomIndex();
  let goatTwoIndex = getRandomIndex();

  // validation - to make sure the images are unique per round
  // **NOTE** your lab will need to have 3 unique images
  // Consider using a container to store your randomIndex numbers and then validate that there are 3 unique numbers in that collection
  // **HINT** an array method might come in handy to see if something is included in your collection...
  while(goatOneIndex === goatTwoIndex){
    goatTwoIndex = getRandomIndex();
  }

  // grab the images and assign src attribute
  imgOne.src = goatArray[goatOneIndex].src;
  imgOne.alt = goatArray[goatOneIndex].name;
  goatArray[goatOneIndex].views++;
  imgTwo.src = goatArray[goatTwoIndex].src;
  imgTwo.alt = goatArray[goatTwoIndex].alt;
  goatArray[goatTwoIndex].views++;
  // display images
}

renderImages();


// ***** EVENTS ****

// events - click images
function handleClick(event){
  // max clicks 15 - decriment
  maxVotes--;

  //listen to which image was clicked increase the vote
  let imgClicked = event.target.alt;
  for(let i = 0; i < goatArray.length; i++){
    if(imgClicked === goatArray[i].name) {
      goatArray[i].votes++;
    }
  }

  // rerender 2 new images
  renderImages();

  // once max attempts have reached 0 no longer allow clicks
  if(maxVotes === 0){
    myContainer.removeEventListener('click', handleClick);
  }
}

function handleShowResults(event) {
  let resultsList = document.getElementById('display-results');
  if(maxVotes === 0){
    for(let i = 0; i < goatArray.length; i++){
      let li = document.createElement('li');
      li.textContent = `${goatArray[i].name} was viewed ${goatArray[i].views} times and clicked ${goatArray[i].votes} times`;
      resultsList.appendChild(li);
    }
  }
}

//Step #1 - Event listener

myContainer.addEventListener('click', handleClick);

// EVENT #2
showResultsBtn.addEventListener('click', handleShowResults);
