import $ from 'jquery';

import SC_ID from './token';

//creates html for each individual song
function songTemplate (track) {
  return `
    <div class="songbox" data-tracklink="${track.trackLink}" data-format="${track.format}" data-title="${track.title}">
      <image class="artwork" src="${track.artwork}">
      <div class="title">Artist/Title: ${track.title}</div>
      <div class="genre">${track.genre}</div>
    </div>`;
};

//holds the results of all songs generated from the user's searchString
function resultsTemplate (tracksHTML) {
  return `
    <h2 class="search-title">Search Results (click one):</h2>
    <ol class="songs">
      ${tracksHTML.join("")}
    </ol>`;
};

//updates the music player with the user's choice after user selects a song from the results list
function play (event) {
  var jukeboxHTML = `
    <audio controls="controls">
      <source src="${event.currentTarget.dataset.tracklink}?client_id=${SC_ID}" type="audio/${event.currentTarget.dataset.format}">
    </audio>
    <div class="currentsong">Now Playing:
      <p>${event.currentTarget.dataset.title}</p>
    </div>`;

  console.log(event.currentTarget.dataset);
  console.log(jukeboxHTML);
  $(".player").html(jukeboxHTML);
};

//export functions to main.js
export { songTemplate, resultsTemplate, play };
