// slider
export const baseURL = "https://api.themoviedb.org/3/";
export const apiKey = "89fd6fee1082a41f4d5d9fe3c1ac3052";
export const trendingMovieApi = "trending/movie/day?api_key=";
export const popularMovieApi = "movie/popular?api_key=";
export const topRatedMovieApi = "movie/top_rated?api_key=";
export const trendingTVApi = "trending/tv/day?api_key=";
export const popularTVApi = "tv/popular?api_key=";
export const topRatedTVApi = "tv/top_rated?api_key=";
export const imageLargeURL = "https://image.tmdb.org/t/p/original";
export const posterImageURL = "https://image.tmdb.org/t/p/w300";
export const imageSmallURL = "https://image.tmdb.org/t/p/w200";
export const getMovieApi = " https://www.2embed.ru/embed/tmdb/movie?id=";
export function slider(nameList) {
  $(nameList).slick({
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 3,
    prevArrow:
      "<button type='button' class='slick-arrow slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
    nextArrow:
      "<button type='button' class='slick-arrow slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
export var url = window.location.pathname.split("/");
export var movieId = url[2];
export const getListSimilarMovie = (callback) => {
  fetch(`${baseURL}/movie/${movieId}/similar?api_key=${apiKey}`)
    .then((res) => {
      return res.json();
    })
    .then((e) => {
      return e.results;
    })
    .then(callback)
    .catch((error) => {
      console.log(error);
    });
};

export const renderListSimilarMovie = async (movies) => {
  let listSimilarMovie = document.querySelector(".similar__movie-list");
  let htmls = movies.map((movie) => {
    return ` <li class="item-movie pb-2">
    <a href="/movie/${movie.id}">
      <div class="item-image">
        <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="" />
      </div>
      <h3 class="movie-heading-small ps-2 pt-2">${movie.original_title}</h3>
    </a>
  </li>`;
  });
  listSimilarMovie.innerHTML = htmls.join("");
  // console.log(movies);
  await slider(".similar__movie-list");
};

export const getListSimilarTv = (callback) => {
  fetch(`${baseURL}/tv/${movieId}/similar?api_key=${apiKey}`)
    .then((res) => {
      return res.json();
    })
    .then((e) => {
      return e.results;
    })
    .then(callback)
    .catch((error) => {
      console.log(error);
    });
};

export const renderListSimilarTv = async (movies) => {
  let listSimilarTv = document.querySelector(".list-similar-tv");
  let htmls = movies.map((movie) => {
    return ` <li class="item-movie pb-2">
    <a href="/tv/${movie.id}">
      <div class="item-image">
        <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="" />
      </div>
      <h3 class="movie-heading-small ps-2 pt-2">${movie.original_name}</h3>
    </a>
  </li>`;
  });
  listSimilarTv.innerHTML = htmls.join("");
  await slider(".list-similar-tv");
};
