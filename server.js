const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const axios = require("axios");
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
// https://api.themoviedb.org/3/trending/movie/week?api_key=89fd6fee1082a41f4d5d9fe3c1ac3052
// router

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/movie/:id", (req, res) => {
  res.render("view-movie");
  // ${baseURL}/movie/${movieId}/credits?api_key=${apiKey}
});
// listen server
app.listen(PORT, () 