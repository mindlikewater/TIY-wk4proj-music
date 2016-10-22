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

function extractData (track) {
  var artwork = track.artwork_url;
  var labelName = track.label_name;
  var releaseYr = track.release_year;
  var title = track.title;
  var genre = track.genre;
  var trackLink = track.uri;

  return {
    artwork: artwork,
    label: labelName,
    release: releaseYr,
    title: title,
    genre: genre,
    trackLink: trackLink
  };
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
