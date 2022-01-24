# Inclass Demo

## Problem Domain

You have been hired by a goat fan club called GoatPick to build an app that helps users determine the cutest goat picture out of a collection of photographs.  

Since catalogs are expensive to print and distribute, and goats need only the loyalest of fans, and GoatPick is a lean startup that needs to carefully watch its expenditures. GoatPick wants to feature only the most loved goats in its catalog that are the most likely to achieve loyal fandom.

This means that GoatPick wants to do market analysis to test their potential fan interest… before actually putting them into the catalog.

To make this market analysis effectively, GoatPick wants you to build an app that displays potential goat candidates to individuals in focus groups (two goats at a time, side-by-side) so you’ll need to manage the size and the aspect ratio of the images.

The app’s purpose is to have the group members choose which goat, of the two displayed images, that they would most likely be fans of, and then store, calculate, and visually display the resulting data.

To keep the goat selection process as untainted as possible, you have been instructed to not allow any results to be shown to users until there have been a total of 15 selections made.

The marketing team is not only interested in the total number of clicks, but also the number of times that a goat was shown. So, you’ll also need to keep track of how many times each image is displayed.

You are also responsible for the look and feel of the app, so don’t forget a custom font, color palette, layout with semantic HTML, and so on.

### To recap:  

Your app will randomly display two of these unique pictures at a time, the user should be able to click on their favorite.  Once clicked, the images will rerender another set of random pictures.  Although it is acceptable for the pictures to be shown back to back on today's iteration of this app, the two pictures rendered may not be the same.  

After choosing your favorite goat 15 times, the voting session will conclude, the user can press a view results "button" and the app will render a list showing all of the goats names, the number of times they were viewed, and the number of clicks received.

### What Do We Need?

#### Global variables

- reference to the DOM - windows
  - HTML - set up 2 images - trackable - grab from the DOM - getElementById
- number of votes user has submitted - 15 max - counter or `let maxVotes = 15`
- Place to store some goats - an array

#### Constructor

- Goat Objects
  - views
  - votes
  - img
  - name
  - push goats into our global array

#### Executable code

- EVENTS
  - Click goat - voting purpose
  - Click on our button - to view the results
- Render goats to the page
- Logic conditional checks to make sure goats aren't the same in each round
  - Random number generator - check to make sure those numbers aren't the same
- Track score for each goat
  - clicks
  - views
- View results "button"
  - Logic - once votes have been maxxed out
  - create a list - of goats, with their views, votes
- A way to display goats to the user
  - Code to cycle through goat storage to display images to user
