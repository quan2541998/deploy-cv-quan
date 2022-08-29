import * as Types from "../typeAction";

const reducerMoviesInitState = {
  NetflixOriginals: null,
  TrendingMovie: null,
  TopRatedMovie: null,
  ActionMovie: null,
  MovieDetail: null,
  movieSearch: null,
};

const reducerMovies = (state = reducerMoviesInitState, action) => {
  switch (action.type) {
    case Types.GET_NETFLIX_ORIGINALS:
      return { ...state, NetflixOriginals: action.payload };
    case Types.GET_TRENDING_MOVIES:
      return { ...state, TrendingMovie: action.payload };
    case Types.GET_TOP_RATED:
      return { ...state, TopRatedMovie: action.payload };
    case Types.GET_ACTION_MOVIE:
      return { ...state, ActionMovie: action.payload };
    case Types.GET_SEARCH_MOVIE:
      return { ...state, movieSearch: action.payload };
    case Types.SET_MOVIE_DETAIL:
      return { ...state, MovieDetail: action.payload };
    default:
      return state;
  }
};

export default reducerMovies;
