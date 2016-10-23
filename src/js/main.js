import $ from 'jquery';

import { getTracks } from "./soundcloud_api";
import { songTemplate, resultsTemplate, playMusic } from "./templates";

//variable holds location of the div, search-results from HTML page
var resultsBox = $(".search-results");

//function calls functions that create songs HTML and then displays the results on the webpage
function displayResults (results) {
  var playlist = results.map(songTemplate);
  var html = resultsTemplate(playlist);

  resultsBox.html(html);
};

//gets user input from the page, then runs another function to get search results
function getMusic (event) {
  event.preventDefault();
  var searchString = $("#search").val();
  var results = getTracks(searchString);

  console.log(results);
  results.then(displayResults);
};

//connects click event to the submit button on the webpage
$("#submit").click(getMusic);
