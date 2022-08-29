import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { useScrollY } from "../../../Hooks";

import MovieRow from "./MovieRow/MovieRow.js";
import * as ACTIONS from "../../../store/actions";

const MovieSlider = () => {
  const dispatch = useDispatch();
  const { NetflixOriginals, TrendingMovie, TopRatedMovie, ActionMovie } =
    useSelector((state) => state.infoMovies);

  const scrollTop = () => {
    scroll.scrollToTop();
  };

  const [scrollY] = useScrollY();

  useEffect(() => {
    dispatch(ACTIONS.getNetflixOriginals());
    dispatch(ACTIONS.getTrendingMovies());
    dispatch(ACTIONS.getTopRatedMovie());
    dispatch(ACTIONS.getActionMovie());
  }, [dispatch]);



  return (
    <div>
      <MovieRow title="Netfix Movie" movies={NetflixOriginals} isNetflix idSection='netflix' />
      <MovieRow title="Top Rated Movie" movies={TopRatedMovie} idSection='toprate' />
      <MovieRow title="Trending Movie" movies={TrendingMovie} idSection='trendingMovies' />
      <MovieRow title="Action Movie" movies={ActionMovie} idSection='actionMovies' />
      <GotoTop
        onClick={scrollTop}
        style={{ visibility: `${scrollY > 600 ? "visible" : "hidden"}` }}
      >
        <FaArrowAltCircleUp />
      </GotoTop>
    </div >
  );
};

export default MovieSlider;

const GotoTop = styled.div`
  position: fixed;
  right: 60px;
  bottom: 60px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 50px;
  transition: all 0.5s ease;
  z-index: 11;
  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  @media screen and (max-width: 992px) {
    right: 50px;
    bottom: 50px;
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    right: 40px;
    bottom: 40px;
    font-size: 35px;
  }
`;
