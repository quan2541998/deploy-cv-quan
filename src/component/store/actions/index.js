import axios from "axios";
import * as Types from "../typeAction";

const API_KEY = "4eaed286b1f07aae7ef81d965d525b70";
const BASE_URL = "https://api.themoviedb.org/3";

export const getNetflixOriginals = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
    );
    dispatch({
      type: Types.GET_NETFLIX_ORIGINALS,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Netflix Originals", error);
  }
};

export const getTrendingMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`
    );
    dispatch({
      type: Types.GET_TRENDING_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Trenđing Movies", error);
  }
};

export const getTopRatedMovie = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`
    );
    dispatch({
      type: Types.GET_TOP_RATED,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Top Rated", error);
  }
};

export const getActionMovie = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
    );
    dispatch({
      type: Types.GET_ACTION_MOVIE,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Action Movie", error);
  }
};

export const setMovieDetail = (movie) => (dispatch) => {
  dispatch({
    type: Types.SET_MOVIE_DETAIL,
    payload: movie,
  });
};

export const getSearchMovies = (keywords) => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&include_adult=false&query=${keywords}`
    );
    
    dispatch({
      type: Types.GET_SEARCH_MOVIE,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Search Movie", error);
  }
};
