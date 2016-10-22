import $ from 'jquery';

import { getTracks } from "./soundcloud_api";

//gets user input from the page, then runs another function to get search results
function getMusic (event) {
  event.preventDefault();
  var searchString = $("#search").val();
  var results = getTracks(searchString);

  return results;
};

$("#submit").click(getMusic);
