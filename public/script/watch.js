import{baseURL,slider}from "./exports.js";import{apiKey}from "./exports.js";import{trendingMovieApi}from "./exports.js";import{popularMovieApi}from "./exports.js";import{topRatedMovieApi}from "./exports.js";import{trendingTVApi}from "./exports.js";import{popularTVApi}from "./exports.js";import{topRatedTVApi}from "./exports.js";import{imageLargeURL}from "./exports.js";import{posterImageURL}from "./exports.js";import{imageSmallURL}from "./exports.js";import{getMovieApi}from "./exports.js";import{url,movieId,getListSimilarMovie,renderListSimilarMovie}from "./exports.js";import{getListSimilarTv,renderListSimilarTv}from "./exports.js";import{getParameterByName,getTvApi}from "./exports.js";const season=getParameterByName("season");const episode=getParameterByName("episode");const getIframeMovie=(movieId)=>{let iframe=document.querySelector(".iframe-box iframe");iframe.setAttribute("src",`${getMovieApi}${movieId}`)};const getInfoMovie=(callback)=>{fetch(`${baseURL}/movie/${movieId}?api_key=${apiKey}`).then((res)=>{return res.json()}).then(callback).catch((error)=>{console.log(error)})};const renderInfoMovie=(movie)=>{document.title=`${movie.original_title} - Watch - VTCinema`;let movieInfo=document.querySelector(".movie-info");movieInfo.innerHTML=` <h2 class="movie-heading-medium movie-heading-watch"><a href="/movie/${movieId}">${movie.original_title}</a></h2>
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
    </div>`;let rangeVote=Math.floor(movie.vote_average);let starts=document.querySelectorAll(".start");starts=[...starts];for(let index=0;index<rangeVote;index++){starts[index].classList.add("start-light")}};const getInfoTv=(callback)=>{fetch(`${baseURL}/tv/${movieId}?api_key=${apiKey}`).then((res)=>{return res.json()}).then(callback).catch((error)=>{console.log(error)})};const renderInfoTv=async(movie)=>{document.title=`${movie.name} - Watch - VTCinema`;let tvInfo=document.querySelector(".tv-info");let seasonList=document.querySelector(".season-list");let numberOfButton=[];try{tvInfo.innerHTML=` <div class="tv-image">
    <img src="${imageSmallURL}${movie.poster_path}" alt="" />
  </div>
  <div class="tv-content">
    <h3 class="movie-heading-medium">${movie.name}</h3>
    <p class="movie-desc-medium">
      ${movie.overview}
    </p>
    <div class="tv-sub-content d-flex gap-4">
      <div class="tv-sub-left d-flex flex-column">
        <span class="release">Release: ${movie.first_air_date}</span>
        <span class="genre text-wrap">Genre: ...</span>
        <span class="vote">Point: ${movie.vote_average} (${movie.vote_count} vote)</span>
      </div>
      <div class="tv-sub-right d-flex flex-column">
        <span class="country">Country: ${movie.origin_country}</span>
        <span class="number-season">Season: ${movie.number_of_seasons}</span>
      </div>
    </div>
  </div>`}catch(error){console.log(error)}
for(let i=1;i<=movie.number_of_seasons;i++){numberOfButton.push(i)}
let htmls=numberOfButton.map((button)=>{return `<li class="season-item">
    <button type="button" value="${button}" class="">Season ${button}</button>
    </li>`});seasonList.innerHTML=htmls.join("");await renderButtonEpisode()};const renderInfoTv2=async(movie)=>{document.title=`${movie.name} - Watch - VTCinema`;let tvInfo=document.querySelector(".tv-info-watch");let seasonList=document.querySelector(".season-list");let numberOfButton=[];try{tvInfo.innerHTML=`<div class="tv-content mw-100">
    <h3 class="movie-heading-medium">${movie.name}</h3>
    <p class="movie-desc-medium w-100">
      ${movie.overview}
    </p>
    <div class="tv-sub-content d-flex gap-4">
      <div class="tv-sub-left d-flex flex-column">
        <span class="release">Release: ${movie.first_air_date}</span>
        <span class="genre text-wrap">Genre: ...</span>
        <span class="vote">Point: ${movie.vote_average} (${movie.vote_count} vote)</span>
      </div>
      <div class="tv-sub-right d-flex flex-column">
        <span class="country">Country: ${movie.origin_country}</span>
        <span class="number-season">Season: ${movie.number_of_seasons}</span>
      </div>
    </div>
  </div>`}catch(error){console.log(error)}
for(let i=1;i<=movie.number_of_seasons;i++){numberOfButton.push(i)}
let htmls=numberOfButton.map((button)=>{return `<li class="season-item">
    <button type="button" value="${button}" class="">Season ${button}</button>
    </li>`})};const getIframeTv=(movieId,season,episode)=>{let iframe=document.querySelector(".iframe-box-tv iframe");iframe.setAttribute("src",`https://www.2embed.ru/embed/tmdb/tv?id=${movieId}&s=${season}&e=${episode}`)};function changeListEpisode(season,callback){fetch(`${baseURL}/tv/${movieId}/season/${season}?api_key=${apiKey}`).then((res)=>{return res.json()}).then(callback).catch((error)=>{console.log(error)})}
function renderListEpisode(listEpisode){let episodeList=document.querySelector(".episode-list");let htmls=listEpisode.episodes.map((episode)=>{return ` <li class="episode-item">
    <a href="/tv/${movieId}/episode?season=${episode.season_number}&episode=${episode.episode_number}"><i class="fas fa-play me-2"></i><strong>Esp ${episode.episode_number}</strong> : ${episode.name}</a>
  </li>`});episodeList.innerHTML=htmls.join("");highlightButton(episode)}
function renderButtonEpisode(){const changeSeasonButton=document.querySelector(".dropdown");const seasonList=document.querySelector(".season-list");let seasonButton=document.querySelectorAll(".season-item button");seasonButton=[...seasonButton];let currentSeason=document.querySelector(".dropdown h3");seasonButton[0].classList.add("active");changeListEpisode("1",renderListEpisode);changeSeasonButton.addEventListener("click",()=>{seasonList.classList.toggle("d-none");seasonButton.forEach((e)=>{e.addEventListener("click",()=>{changeListEpisode(e.value,renderListEpisode);currentSeason.innerHTML=e.textContent;seasonButton.forEach((e)=>{e.classList.remove("active")});e.classList.add("active")})})})}
async function startWatch(){if(url[1]==="movie"){getIframeMovie(movieId);getInfoMovie(renderInfoMovie);getListSimilarMovie(renderListSimilarMovie)}else if(url[1]==="tv"){getInfoTv(renderInfoTv);await getIframeTv(movieId,season,episode);getInfoTv(renderInfoTv2)}}
startWatch();window.addEventListener("load",()=>{setTimeout(()=>{const season=getParameterByName("season");const episode=getParameterByName("episode");let currentSeasonHeading=document.querySelector(".dropdown h3");let currentSeason=document.querySelectorAll(".season-item button");currentSeason=[...currentSeason];currentSeason.forEach((e)=>{e.classList.remove("active");if(e.value===season){changeListEpisode(season,renderListEpisode);currentSeasonHeading.innerHTML=e.textContent;e.click();e.classList.add("active")}})},300)});function highlightButton(episode){let href=window.location.pathname+window.location.search;let currentEpisode=document.querySelectorAll(".episode-item a");currentEpisode=[...currentEpisode];currentEpisode.forEach((e)=>{if(e.getAttribute("href")===href){e.classList.add("active")}})}