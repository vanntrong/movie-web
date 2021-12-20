import { baseURL, slider } from "./exports.js";
import { apiKey } from "./exports.js";
import { trendingMovieApi } from "./exports.js";
import { popularMovieApi } from "./exports.js";
import { topRatedMovieApi } from "./exports.js";
import { trendingTVApi } from "./exports.js";
import { popularTVApi } from "./exports.js";
import { topRatedTVApi } from "./exports.js";
import { imageLargeURL } from "./exports.js";
import { posterImageURL } from "./exports.js";
import { imageSmallURL } from "./exports.js";
import { getMovieApi } from "./exports.js";
import { url, movieId, getListSimilarMovie, renderListSimilarMovie } from "./exports.js";
import { getListSimilarTv, renderListSimilarTv } from "./exports.js";

const getIframeMovie = (movieId) => {
  let iframe = document.querySelector(".iframe-box iframe");
  iframe.setAttribute("src", `${getMovieApi}${movieId}`);
};
const getInfoMovie = (callback) => {
  fetch(`${baseURL}/movie/${movieId}?api_key=${apiKey}`)
    .then((res) => {
      return res.json();
    })
    .then(callback)
    .catch((error) => {
      console.log(error);
    });
};
const renderInfoMovie = (movie) => {
  document.title = `${movie.original_title} - Watch - VTCinema`;
  let movieInfo = document.querySelector(".movie-info");
  movieInfo.innerHTML = ` <h2 class="movie-heading-medium movie-heading-watch"><a href="/movie/${movieId}">${movie.original_title}</a></h2>
    <p class="movie-desc-medium movie-desc-watch">
      ${movie.overview}
    </p>
    <span class="release-date">Release Date: ${movie.release_date}</span>
    <div class="starts">
      <span class="start">★</span>
      <span class="start">★</span>
      <span class="start">★</span>
      <span class="start">★</span>
      <span class="start">★</span>
      <span class="start">★</span>
      <span class="start">★</span>
      <span class="start">★</span>
      <span class="start">★</span>
      <span class="start">★</span>
      <span class="vote-number">(${movie.vote_count} votes)</span>
    </div>`;
  let rangeVote = Math.floor(movie.vote_average);
  let starts = document.querySelectorAll(".start");
  starts = [...starts];
  for (let index = 0; index < rangeVote; index++) {
    starts[index].classList.add("start-light");
  }
};

function startWatch() {
  if (url[1] === "movie") {
    getIframeMovie(movieId);
    getInfoMovie(renderInfoMovie);
    getListSimilarMovie(renderListSimilarMovie);
  }
}

startWatch();
