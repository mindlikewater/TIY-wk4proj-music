import $ from 'jquery';
import _ from 'lodash';

import SC_ID from './token';

//global variable holds Soundcloud API source
var SC_API = "https://api.soundcloud.com";

//used for authentication
$.ajaxSetup({
  data: {
    client_id: SC_ID
  }
});

//function makes ajax request for song data
function getSongData (searchString) {
  return $.ajax({
    url: `${SC_API}/tracks/`,
    data: {
      q: searchString,
      limit: 4
    }
  });
};

function extractData (searchString) {
  var searchData = searchString.map(function (track) {
    artwork = track.artwork_url;
    labelName = track.label_name;
    releaseYr = track.release_year;
    title = track.title;
    genre = track.genre;
    api_link = track.uri;

    return searchData;
  });
};

//sorts the song data alphabetically and returns the results in an array
function generateSongs (songData) {
  var sorted = _.orderBy(songData, ['title']);

  var results = sorted.map(extractData);
  return results;
};

//takes user input from Search button, runs it through request for Soundcloud data,
//then returns song data
function getTracks (searchString) {
  return getSongData(searchString).then(generateSongs);
};

//export file to main.js
export { getTracks };
