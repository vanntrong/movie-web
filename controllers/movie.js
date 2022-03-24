const apiCallers = require("../utils");

const titleList = [
  "Trending Movies",
  "Popular Movies",
  "Top Rated Movies",
  "Trending TV",
  "Popular TV",
  "Top Rated TV",
];
const idList = ["trending-movie", "popular-movie", "top-rated-movie", "trending-tv", "popular-tv", "top-rated-tv"];
const mediaType = ["movie", "movie", "movie", "tv", "tv", "tv"];

const movieController = {
  renderHomeScreen: async (req, res) => {
    const dataMovies = await Promise.all([
      apiCallers.getListData(`${process.env.BASE_URL}${process.env.TRENDING_MOVIE_API}${process.env.API_KEY}`),
      apiCallers.getListData(`${process.env.BASE_URL}${process.env.POPULAR_MOVIE_API}${process.env.API_KEY}`),
      apiCallers.getListData(`${process.env.BASE_URL}${process.env.TOP_RATED_MOVIE_API}${process.env.API_KEY}`),
      apiCallers.getListData(`${process.env.BASE_URL}${process.env.TRENDING_TV_API}${process.env.API_KEY}`),
      apiCallers.getListData(`${process.env.BASE_URL}${process.env.POPULAR_TV_API}${process.env.API_KEY}`),
      apiCallers.getListData(`${process.env.BASE_URL}${process.env.TOP_RATED_TV_API}${process.env.API_KEY}`),
    ]);

    const responseData = dataMovies.map((data, index) => {
      return {
        mediaType: mediaType[index],
        titleList: titleList[index],
        idList: idList[index],
        data: data,
      };
    });

    res.render("index", {
      dataMovies: responseData,
      imageSmallUrl: process.env.IMAGE_SMALL_URL,
      imageLargeUrl: process.env.IMAGE_LARGE_URL,
      posterImageUrl: process.env.POSTER_IMAGE_URL,
      randomIndexBanner: Math.floor(Math.random() * 20 + 1),
    });
  },

  renderDetailMovie: async (req, res) => {
    const movieId = req.params.id;
    const data = await apiCallers.getCastList("movie", movieId);
    const castList = await data.cast;
    const detailData = await apiCallers.getDetailData("movie", movieId);
    const similarData = await apiCallers.getSimilarData("movie", movieId);
    res.render("view", {
      castList: castList,
      lengthMovie: castList.length > 8 ? 8 : castList.length,
      detailData,
      similarData,
      imageLargeUrl: process.env.IMAGE_LARGE_URL,
      posterImageUrl: process.env.POSTER_IMAGE_URL,
      imageSmallUrl: process.env.IMAGE_SMALL_URL,
      mediaType: "movie",
    });
  },

  renderMovieFrame: async (req, res) => {
    const movieId = req.params.id;
    const detailData = await apiCallers.getDetailData("movie", movieId);
    const similarData = await apiCallers.getSimilarData("movie", movieId);
    res.render("watch-movie", {
      getMovieApi: process.env.GET_MOVIE_API,
      id: movieId,
      detailData,
      similarData,
      mediaType: "movie",
      imageSmallUrl: process.env.IMAGE_SMALL_URL,
    });
  },

  renderTvDetail: async (req, res) => {
    const movieId = req.params.id;
    const data = await apiCallers.getCastList("tv", movieId);
    const castList = await data.cast;
    const detailData = await apiCallers.getDetailData("tv", movieId);
    const similarData = await apiCallers.getSimilarData("tv", movieId);
    res.render("view", {
      castList: castList,
      lengthMovie: castList.length > 8 ? 8 : castList.length,
      detailData,
      similarData,
      imageLargeUrl: process.env.IMAGE_LARGE_URL,
      posterImageUrl: process.env.POSTER_IMAGE_URL,
      imageSmallUrl: process.env.IMAGE_SMALL_URL,
      mediaType: "tv",
    });
  },

  getSearchResult: (req, res) => {
    const searchRequest = req.body.searchName;
    axios
      .get(`${searchApi}${process.env.API_KEY}&query=${searchRequest}`)
      .then((res) => {
        return res.data.results;
      })
      .then((e) => {
        res.render("search-result", { results: e, keyword: searchRequest });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

module.exports = movieController;
