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

// reference our canvas element for bar chart
const ctx = document.getElementById('myChart').getContext('2d');

// +++++ OTHER GLOBALS ++++++
let goatArray = [];
let maxVotes = 15;
let counter = 0;


// ******* CONSTRUCTOR FUNCTION TO INSTANTIATE GOATS ********
function Goat(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.votes = 0;
  goatArray.push(this);
}

// Step 3: Get goats out of local storage:
let retreivedGoats = localStorage.getItem('goats');

let parsedGoats = JSON.parse(retreivedGoats);
// let parsedGoats = JSON.parse(localStorage.getItem('goats'))'

// Step 4: If I have goats in Local Storage, use those, if not then instantiate new goats
if(retreivedGoats){
  goatArray = parsedGoats;
} else {
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

}


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
  while (goatOneIndex === goatTwoIndex) {
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

// Function to render the chart -- where/when should it be executed?
function renderChart() {

  //label for the chart
  let goatNames = [];

  // values for datasets
  let goatVotes = [];
  let goatViews = [];

  //for loop to go through our goat array to fill in our arrays declared above to use in our chart
  for (let i = 0; i < goatArray.length; i++) {
    goatNames.push(goatArray[i].name);
    goatVotes.push(goatArray[i].votes);
    goatViews.push(goatArray[i].views);
  }

  const chartObj = {
    type: 'bar',
    data: {
      labels: goatNames, // labels for the chart
      datasets: [{
        label: '# of Votes',
        data: goatVotes, // value for the dataset
        backgroundColor: 'rgb(251, 132, 150, 1)',
        borderColor: 'rgba(251, 132, 150, 1)',
        borderWidth: 1
      },
      { // second dataset
        label: '# of Views',
        data: goatViews, // value for the dataset
        backgroundColor: '#ffa260',
        borderColor: '#ffa260',
        borderWidth: 1
      }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  // Pull in our Chart code: 2 args: DOM reference & object that will build out our chart
  const myChart = new Chart(ctx, chartObj); // eslint-disable-line
}


// ***** EVENTS ****

// events - click images
function handleClick(event) {
  // max clicks 15 - decriment
  maxVotes--;

  //listen to which image was clicked increase the vote
  let imgClicked = event.target.alt;
  for (let i = 0; i < goatArray.length; i++) {
    if (imgClicked === goatArray[i].name) {
      goatArray[i].votes++;
    }
  }

  // rerender 2 new images
  renderImages();

  // once max attempts have reached 0 no longer allow clicks
  if (maxVotes === 0) {
    myContainer.removeEventListener('click', handleClick);
  }
}

// if you choose to remove the button...decide where/when to render the chart
function handleShowResults(event) { //eslint-disable-line
  if (maxVotes === 0) {
    renderChart();
  }

  // **** LOCAL STORAGE ****

  // Step 1: Stringify our data
  let stringifiedGoats = JSON.stringify(goatArray);
  console.log(stringifiedGoats);

  // Step 2: Set the item in local storage
  localStorage.setItem('goats', stringifiedGoats);
}

//Step #1 - Event listener

myContainer.addEventListener('click', handleClick);

// EVENT #2
showResultsBtn.addEventListener('click', handleShowResults);
