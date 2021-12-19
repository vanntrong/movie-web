import { baseURL } from "./exports.js";
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

var url = window.location.pathname.split("/");
const movieId = url[2];
const getMovieCurrent = (callback) => {
  fetch(`${baseURL}/movie/${movieId}?api_key=${apiKey}`)
    .then((response) => {
      return response.json();
    })
    .then(callback)
    .catch((error) => {
      console.log(error);
    });
};

const renderMovieCurrent = async (movie) => {
  document.title = movie.original_title;
  document.querySelector(".view").style.backgroundImage = `url('${imageLargeURL}${movie.backdrop_path}')`;
  document.querySelector(".view-image").innerHTML = `<img src="${posterImageURL}${movie.poster_path}" alt="" />`;
  let viewContent = document.querySelector(".view-content");
  viewContent.innerHTML = `<a href="/movie/${movie.id}/watch"class="btn-control-movie movie-watch me-1"><i class="far fa-play-circle me-1"></i>Watch Now</a></a>
  <a href="#" class="btn-control-movie btn-watch-trailer"><i class="fab fa-youtube me-1"></i>Watch Trailer</a>
  <h2 class="movie-heading-medium">${movie.original_title}</h2>
  <p class="movie-desc-medium">${movie.overview}</p>
  <span class="release-date">Release Date: ${movie.release_date}</span>
  <div class="cates my-2">
    <ul class="cates-list d-flex">
    </ul>
  </div>
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
  let catesList = document.querySelector(".cates-list");
  let cates = movie.genres.map((genre) => {
    return `<li class="cates-item me-2">
    <a href="#">${genre.name}</a>
  </li>`;
  });
  catesList.innerHTML = cates.join("");
  let rangeVote = Math.floor(movie.vote_average);
  let starts = document.querySelectorAll(".start");
  starts = [...starts];
  for (let index = 0; index < rangeVote; index++) {
    starts[index].classList.add("start-light");
  }
  let official = document.querySelector(".official a");
  official.setAttribute("href", `${movie.homepage}`);
  official.innerHTML = `${movie.homepage}`;
};

const getCastList = (callback) => {
  fetch(`${baseURL}/movie/${movieId}/credits?api_key=${apiKey}`)
    .then((response) => {
      return response.json();
    })
    .then((e) => {
      return e.cast;
    })
    .then(callback)
    .catch((error) => {
      console.log(error);
    });
};

const renderCastList = (casts) => {
  let castList = document.querySelector(".cast-list");
  let html = [];
  for (let index = 0; index < 10; index++) {
    html.push(casts[index]);
  }
};
//api.themoviedb.org/3/movie/550/credits?api_key=89fd6fee1082a41f4d5d9fe3c1ac3052
// https:
getMovieCurrent(renderMovieCurrent);
getCastList(renderCastList);
