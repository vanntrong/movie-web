const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const axios = require("axios");
const { response } = require("express");
const { applyEach } = require("async");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

// variable
const baseURL = "https://api.themoviedb.org/3/";
const apiKey = "89fd6fee1082a41f4d5d9fe3c1ac3052";
const trendingMovieApi = "trending/movie/week?api_key=";
const popularMovieApi = "/movie/popular?api_key=";
const topRatedMovieApi = "/movie/top_rated?api_key=";
const trendingTVApi = "trending/tv/week?api_key=";
const popularTVApi = "/tv/popular?api_key=";
const topRatedTVApi = "/tv/top_rated?api_key=";
const imageLargeURL = "https://image.tmdb.org/t/p/original";
const posterImageURL = "https://image.tmdb.org/t/p/w300";
const searchApi = "https://api.themoviedb.org/3/search/multi?api_key=";
// https://api.themoviedb.org/3/search/multi?api_key=89fd6fee1082a41f4d5d9fe3c1ac3052&language=en-US&query=

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/movie/:id", (req, res) => {
  let movieId = req.params.id;
  axios
    .get(`${baseURL}/movie/${movieId}/credits?api_key=${apiKey}`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      res.render("view-movie", { castList: data.cast });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/tv/:id", (req, res) => {
  let TvId = req.params.id;
  axios
    .get(`${baseURL}/tv/${TvId}/credits?api_key=${apiKey}`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      let length = data.cast.length;
      if (length > 8) {
        length = 8;
      }
      res.render("view-tv", { castListTV: data.cast, length: length });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/movie/:id/watch", (req, res) => {
  res.render("watch-movie");
});

app.get("/tv/:id/watch", (req, res) => {
  res.render("watch-tv");
});

app.get("/tv/:id/episode", (req, res) => {
  res.render("watch-tv-farme");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.post("/search", (req, res) => {
  const searchRequest = req.body.searchName;
  axios
    .get(`${searchApi}${apiKey}&query=${searchRequest}`)
    .then((res) => {
      return res.data.results;
    })
    .then((e) => {
      res.render("search-result", { results: e, keyword: searchRequest });
    })
    .catch((error) => {
      console.log(error);
    });
});

// listen server
app.listen(PORT, () => {
  console.log("Server is listening port 3000");
});
