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
import { url, movieId, renderListSimilarMovie } from "./exports.js";
import { renderListSimilarTv } from "./exports.js";
import { getListSimilarMovieAndTv } from "./exports.js";
function startView() {
  const mediaType = url[1];
  if (mediaType === "movie") {
    getMovieAndTvCurrent(mediaType, renderMovieCurrent);
    // getListSimilarMovie(renderListSimilarMovie);
    getListSimilarMovieAndTv(mediaType, renderListSimilarMovie);
  } else if (mediaType === "tv") {
    getMovieAndTvCurrent(mediaType, renderTvCurrent);
    // getListSimilarTv(renderListSimilarTv);
    getListSimilarMovieAndTv(mediaType, renderListSimilarTv);
  }
}

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

const renderTvCurrent = async (tv) => {
  document.title = tv.original_name;
  if (tv.backdrop_path == "null") {
    document.querySelector(".view").style.backgroundImage = `url('${imageLargeURL}${tv.poster_path}')`;
  } else {
    document.querySelector(".view").style.backgroundImage = `url('${imageLargeURL}${tv.backdrop_path}')`;
  }
  document.querySelector(".view-image").innerHTML = `<img src="${posterImageURL}${tv.poster_path}" alt="" />`;
  let viewContent = document.querySelector(".view-content");
  viewContent.innerHTML = `<a href="/tv/${tv.id}/watch"class="btn-control-movie movie-watch me-1"><i class="far fa-play-circle me-1"></i>Watch Now</a></a>
  <a href="#" class="btn-control-movie btn-watch-trailer"><i class="fab fa-youtube me-1"></i>Watch Trailer</a>
  <h2 class="movie-heading-medium">${tv.original_name}</h2>
  <p class="movie-desc-medium">${tv.overview}</p>
  <span class="release-date">Release Date: ${tv.first_air_date}</span>
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
    <span class="vote-number">(${tv.vote_count} votes)</span>
  </div>`;
  let catesList = document.querySelector(".cates-list");
  let cates = tv.genres.map((genre) => {
    return `<li class="cates-item me-2">
    <a href="#">${genre.name}</a>
  </li>`;
  });
  catesList.innerHTML = cates.join("");
  let rangeVote = Math.floor(tv.vote_average);
  let starts = document.querySelectorAll(".start");
  starts = [...starts];
  for (let index = 0; index < rangeVote; index++) {
    starts[index].classList.add("start-light");
  }
  let official = document.querySelector(".official a");
  official.setAttribute("href", `${tv.homepage}`);
  official.innerHTML = `${tv.homepage}`;
};

const getMovieAndTvCurrent = (mediaType, callback) => {
  fetch(`${baseURL}${mediaType}/${movieId}?api_key=${apiKey}`)
    .then((res) => {
      return res.json();
    })
    .then(callback)
    .catch((error) => {
      console.log(error);
    });
};
startView();
