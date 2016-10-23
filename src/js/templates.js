import $ from 'jquery';

import SC_ID from './token';

function songTemplate (track) {
  return `
    <div class="songbox" audio="${track.trackLink}?client_id=${SC_ID}" format="${track.format}">
      <image class="artwork" src="${track.artwork}">
      <div class="title">Artist/Title: ${track.title}</div>
      <div class="genre">${track.genre}</div>
    </div>`;
};

function resultsTemplate (tracksHTML) {
  return `
    <ol class="songs">
      ${tracksHTML.join("")}
    </ol>`;
};

export { songTemplate, resultsTemplate };
