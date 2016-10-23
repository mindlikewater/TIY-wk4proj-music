import $ from 'jquery';

import { getTracks } from './soundcloud_api';
import { songTemplate, resultsTemplate, play } from './templates';

//variable holds location of the div, search-results from webpage
var resultsBox = $(".search-results");

//calls functions that create songs HTML and then displays the results on the webpage
//wires a click event whenever user selects a song to the music player
function displayResults (results) {
  var playlist = results.map(songTemplate);
  var resultsHTML = resultsTemplate(playlist);

  resultsBox.html(resultsHTML);
  $(".songbox").click(play);
};

//gets user input from the page, then runs another function to generate search results
function getMusic (event) {
  event.preventDefault();
  var searchString = $("#search").val();
  var results = getTracks(searchString);

  console.log(searchString);
  console.log(results);
  results.then(displayResults);
};

//connects click event to the submit button on the webpage
$("#submit").click(getMusic);
