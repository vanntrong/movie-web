import { baseURL, slider, apiKey } from "./exports.js";
import { url, movieId } from "./exports.js";
import { getParameterByName } from "./exports.js";

function changeListEpisode(season, callback) {
  fetch(`${baseURL}/tv/${movieId}/season/${season}?api_key=${apiKey}`)
    .then((res) => {
      return res.json();
    })
    .then(callback)
    .catch((error) => {
      console.log(error);
    });
}
function renderListEpisode(listEpisode) {
  let episodeList = document.querySelector(".episode-list");
  let htmls = listEpisode.episodes.map((episode) => {
    return ` <li class="episode-item">
    <a href="/tv/${movieId}/episode?season=${episode.season_number}&episode=${episode.episode_number}"><i class="fas fa-play me-2"></i><strong>Esp ${episode.episode_number}</strong> : ${episode.name}</a>
  </li>`;
  });
  episodeList.innerHTML = htmls.join("");
  highlightButton();
}
function renderButtonEpisode() {
  const changeSeasonButton = document.querySelector(".dropdown");
  const seasonList = document.querySelector(".season-list");
  let seasonButton = document.querySelectorAll(".season-item button");
  seasonButton = [...seasonButton];
  let currentSeason = document.querySelector(".dropdown h3");
  seasonButton[0].classList.add("active");
  changeListEpisode("1", renderListEpisode);
  changeSeasonButton.addEventListener("click", () => {
    seasonList.classList.toggle("d-none");
    seasonButton.forEach((e) => {
      e.addEventListener("click", () => {
        changeListEpisode(e.value, renderListEpisode);
        currentSeason.innerHTML = e.textContent;
        seasonButton.forEach((e) => {
          e.classList.remove("active");
        });
        e.classList.add("active");
      });
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const season = getParameterByName("season");
  const episode = getParameterByName("episode");
  let currentSeasonHeading = document.querySelector(".dropdown h3");
  let currentSeason = document.querySelectorAll(".season-item button");
  currentSeason = [...currentSeason];
  currentSeason.forEach((e) => {
    e.classList.remove("active");
    if (e.value === season) {
      changeListEpisode(season, renderListEpisode);
      currentSeasonHeading.innerHTML = e.textContent;
      e.click();
      e.classList.add("active");
    }
  });
});
function highlightButton() {
  let href = window.location.pathname + window.location.search;
  let listEpisode = document.querySelectorAll(".episode-item a");
  listEpisode = [...listEpisode];
  listEpisode.find((episode) => episode.getAttribute("href") === href).classList.add("active");
}

function startWatch() {
  slider("#slider");
  if (url[1] === "tv") {
    renderButtonEpisode();
  }
}
startWatch();
