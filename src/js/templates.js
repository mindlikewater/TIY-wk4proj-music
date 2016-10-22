function songTemplate (track) {
  return `
    <div class="songbox">
      <img class="artwork" href="${track.artwork_url}">
      <div class="label">${track.label_name}</div>
      <div class="release">${track.release_year}</div>
      <div class="title">${track.title}</div>
      <div class="genre">${track.genre}</div>
      <div class="trackLink">${track.uri}</div>
    </div>`;
};

function resultsTemplate (tracksHTML) {
  return `
    <h2 class="search-results">Search Results (click one):</h2>
    <ol class="songs">
      ${tracksHTML.join("")}
    </ol>`;
};

export { songTemplate, resultsTemplate };
