import styled from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Fragment, useRef } from "react";
import { useViewPort } from "../../../../Hooks";
import debounce from "../../../../../utils/debounce.js";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../../../../store/actions";

function MovieRow({ title, movies, isNetflix, idSection }) {
  const [windowWidth] = useViewPort();
  const movieRef = useRef();
  const sliderRef = useRef();
  const dispatch = useDispatch();

  const handleSetMovie = (movie) => {
    dispatch(setMovieDetail(movie));
  };

  const handleScrollRight = () => {
    const maxScrollRight =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

    if (sliderRef.current.scrollLeft < maxScrollRight) {
      sliderRef.current.scrollLeft += (movieRef.current.clientWidth + 12) * 2;
    }
  };
  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      sliderRef.current.scrollLeft -= (movieRef.current.clientWidth - 12) * 2;
    }
  };

  return (
    <MovieRowStyle id={idSection}>
      <h1 className="title">{title}</h1>
      <div
        className="movieList"
        ref={sliderRef}
        style={
          movies && movies.length > 0
            ? {
                gridTemplateColumns: `repeat(${movies.length}, 
              ${
                windowWidth > 1200
                  ? "360px"
                  : windowWidth > 992
                  ? "300px"
                  : windowWidth > 768
                  ? "250px"
                  : "200px"
              } )`,
              }
            : {}
        }
      >
        {movies &&
          movies.length > 0 &&
          movies.map((movie, index) => {
            if (movie.backdrop_path && movie.poster_path !== null) {
              let imgUrl = isNetflix
                ? `https://image.tmdb.org/t/p/original/${
                    movie.poster_path || movie.backdrop_path
                  }`
                : `https://image.tmdb.org/t/p/w500/${
                    movie.poster_path || movie.backdrop_path
                  }`;
              return (
                <div
                  className={`movieItem ${isNetflix && "isNetflix"}`}
                  key={index}
                  ref={movieRef}
                  onClick={() => {
                    handleSetMovie(movie);
                  }}
                >
                  <img src={imgUrl} alt="error" />
                  <div className="movieName">
                    <h3>{movie.name || movie.title}</h3>
                  </div>
                </div>
              );
            }
            return <Fragment></Fragment>;
          })}
      </div>
      <div
        className={`btn prevBtn ${isNetflix && "isNetflix"}`}
        onClick={debounce(handleScrollLeft, 300)}
      >
        <BsChevronLeft />
      </div>
      <div
        className={`btn nextBtn ${isNetflix && "isNetflix"}`}
        onClick={debounce(handleScrollRight, 300)}
      >
        <BsChevronRight />
      </div>
    </MovieRowStyle>
  );
}

export default MovieRow;

// SCSS
const MovieRowStyle = styled.div`
  background-color: var(--background);
  color: white;
  padding: 10px;
  position: relative;

  .title {
    font-size: 1.8rem;
  }

  .movieList {
    display: grid;
    gap: 12px;
    transition: all 0.3s linear;
    user-select: none;
    padding-top: 40px;
    padding-bottom: 40px;
    scroll-behavior: smooth;
    overflow-x: auto;
    overflow: hidden;
    position: relative;

    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }

    &:hover .movieItem {
      opacity: 0.5;
    }

    .movieItem {
      position: relative;
      max-width: 360px;
      max-height: 250px;

      width: 100%;
      height: 100%;
      user-select: none;
      overflow: hidden;
      border-radius: 8px;
      position: relative;
      transform: center left;
      transform: scale(1);
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        opacity: 1;
        transform: scale(1.1);
        z-index: 10;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      .movieName {
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: 0px;
        padding: 6px;
        background-color: rgba(0, 0, 0, 0.65);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 14px;
        height: 40px;
        @media screen and (max-width: 992px) {
          font-size: 12px;
        }
        @media screen and (max-width: 768px) {
          font-size: 10px;
        }
      }
      &.isNetflix {
        max-height: 500px;
      }
    }
  }
  .btn {
    position: absolute;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    cursor: pointer;
    transition: all 0.5s ease;
    transform: translateY(-60%);
    top: 50%;
    font-size: 30px;
    height: 80px;
    width: 40px;

    svg {
      transform: scale(1);
      transition: all 0.5s ease;
      opacity: 0.7;
    }
    &:hover svg {
      transform: scale(1.2);
      opacity: 1;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    &.isNetflix {
      font-size: 40px;
      height: 100px;
      width: 50px;
    }
  }
  .prevBtn {
    left: 30px;
  }

  .nextBtn {
    right: 30px;
  }
`;
