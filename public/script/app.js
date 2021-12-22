import{slider}from "./exports.js";import{baseURL}from "./exports.js";import{apiKey}from "./exports.js";import{trendingMovieApi}from "./exports.js";import{popularMovieApi}from "./exports.js";import{topRatedMovieApi}from "./exports.js";import{trendingTVApi}from "./exports.js";import{popularTVApi}from "./exports.js";import{topRatedTVApi}from "./exports.js";import{imageLargeURL}from "./exports.js";import{posterImageURL}from "./exports.js";import{imageSmallURL}from "./exports.js";function getListTrendingMovie(callback){fetch(baseURL+trendingMovieApi+apiKey).then((response)=>{return response.json()}).then((e)=>{return e.results}).then(callback).catch((error)=>{console.log(error)})}
const renderListTrendingMovie=async(listMovie)=>{let randomBannerMovie=Math.floor(Math.random()*20+1);let banner=document.querySelector(".banner");let bannerContent=document.querySelector(".banner-content");let bannerImage=document.querySelector(".banner-image");let trendingMovie=document.querySelector("#trending-movie");banner.style.backgroundImage=`url('${imageLargeURL}${listMovie[randomBannerMovie].backdrop_path}')`;bannerContent.innerHTML=`<h2 class="movie-heading">${listMovie[randomBannerMovie].title}</h2>
  <p class="movie-desc">${listMovie[randomBannerMovie].overview.substring(0, 200) + "..."}</p>
  <a href="/movie/${
    listMovie[randomBannerMovie].id
  }/watch" class="btn-control-movie movie-watch me-1"><i class="far fa-play-circle me-1"></i>Watch Now</a>
  <a href="/movie/${
    listMovie[randomBannerMovie].id
  }" class="btn-control-movie movide-view-detail"><i class="fas fa-info-circle me-1"></i>View Info</a>`;bannerImage.innerHTML=`<img src="${posterImageURL + listMovie[randomBannerMovie].poster_path}" alt="" />`;let htmls=listMovie.map((movie)=>{return `<li class="item-movie pb-2">
    <a href="movie/${movie.id}">
      <div class="item-image">
        <img src="${imageSmallURL + movie.poster_path}" alt="" />
      </div>
      <h3 class="movie-heading-small ps-2 pt-2">${movie.title}</h3>
    </a>
  </li>`});trendingMovie.innerHTML=htmls.join("");await slider("#trending-movie")};const getListPopularMovie=(callback)=>{fetch(baseURL+popularMovieApi+apiKey).then((response)=>{return response.json()}).then((e)=>{return e.results}).then(callback).catch((error)=>{console.log(error)})};const renderListPopularMovie=async(movies)=>{let listMovie=document.querySelector(`#popular-movie`);let htmls=movies.map((movie)=>{return `<li class="item-movie pb-2">
    <a href="movie/${movie.id}">
      <div class="item-image">
        <img src="${imageSmallURL + movie.poster_path}" alt="" />
      </div>
      <h3 class="movie-heading-small ps-2 pt-2">${movie.title}</h3>
    </a>
  </li>`});listMovie.innerHTML=htmls.join("");await slider("#popular-movie")};const getListTopRatedMovie=(callback)=>{fetch(baseURL+topRatedMovieApi+apiKey).then((response)=>{return response.json()}).then((e)=>{return e.results}).then(callback).catch((error)=>{console.log(error)})};const renderListTopRatedMovie=async(movies)=>{let listMove=document.querySelector("#top-rated-movie");let htmls=movies.map((movie)=>{return `<li class="item-movie pb-2">
    <a href="movie/${movie.id}">
      <div class="item-image">
        <img src="${imageSmallURL + movie.poster_path}" alt="" />
      </div>
      <h3 class="movie-heading-small ps-2 pt-2">${movie.title}</h3>
    </a>
  </li>`});listMove.innerHTML=htmls.join("");await slider("#top-rated-movie")};const getListTrendingTV=(callback)=>{fetch(baseURL+trendingTVApi+apiKey).then((response)=>{return response.json()}).then((e)=>{return e.results}).then(callback).catch((error)=>{console.log(error)})};const renderListTrendingTV=async(movies)=>{let listMove=document.querySelector("#trending-tv");let htmls=movies.map((movie)=>{return `<li class="item-movie pb-2">
  <a href="tv/${movie.id}">
    <div class="item-image">
      <img src="${imageSmallURL + movie.poster_path}" alt="" />
    </div>
    <h3 class="movie-heading-small ps-2 pt-2">${movie.original_name}</h3>
  </a>
</li>`});listMove.innerHTML=htmls.join("");await slider("#trending-tv")};const getListPopularTV=(callback)=>{fetch(baseURL+popularTVApi+apiKey).then((response)=>{return response.json()}).then((e)=>{return e.results}).then(callback).catch((error)=>{console.log(error)})};const renderListPopularTV=async(movies)=>{let listMove=document.querySelector("#popular-tv");let htmls=movies.map((movie)=>{return `<li class="item-movie pb-2">
  <a href="tv/${movie.id}">
    <div class="item-image">
      <img src="${imageSmallURL + movie.poster_path}" alt="" />
    </div>
    <h3 class="movie-heading-small ps-2 pt-2">${movie.original_name}</h3>
  </a>
</li>`});listMove.innerHTML=htmls.join("");await slider("#popular-tv")};const getListTopRatedTV=(callback)=>{fetch(baseURL+topRatedTVApi+apiKey).then((response)=>{return response.json()}).then((e)=>{return e.results}).then(callback).catch((error)=>{console.log(error)})};const renderListTopRatedTV=async(movies)=>{let listMove=document.querySelector("#top-rated-tv");let htmls=movies.map((movie)=>{return `<li class="item-movie pb-2">
  <a href="tv/${movie.id}">
    <div class="item-image">
      <img src="${imageSmallURL + movie.poster_path}" alt="" />
    </div>
    <h3 class="movie-heading-small ps-2 pt-2">${movie.original_name}</h3>
  </a>
</li>`});listMove.innerHTML=htmls.join("");await slider("#top-rated-tv")};function start(){getListTrendingMovie(renderListTrendingMovie);getListPopularMovie(renderListPopularMovie);getListTopRatedMovie(renderListTopRatedMovie);getListTrendingTV(renderListTrendingTV);getListPopularTV(renderListPopularTV);getListTopRatedTV(renderListTopRatedTV)}
start()