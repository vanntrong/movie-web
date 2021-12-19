// slider
export const baseURL = "https://api.themoviedb.org/3/";
export const apiKey = "89fd6fee1082a41f4d5d9fe3c1ac3052";
export const trendingMovieApi = "trending/movie/week?api_key=";
export const popularMovieApi = "movie/popular?api_key=";
export const topRatedMovieApi = "movie/top_rated?api_key=";
export const trendingTVApi = "trending/tv/week?api_key=";
export const popularTVApi = "tv/popular?api_key=";
export const topRatedTVApi = "tv/top_rated?api_key=";
export const imageLargeURL = "https://image.tmdb.org/t/p/original";
export const posterImageURL = "https://image.tmdb.org/t/p/w300";
export const imageSmallURL = "https://image.tmdb.org/t/p/w200";
export function slider() {
  $(".list-movie").slick({
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

$("#similar-movie").slick({
  dots: false,
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 3,
  arrow: true,
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
