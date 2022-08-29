import { useDispatch } from "react-redux";
import { setMovieDetail } from "../../../store/actions";
import moment from "moment";

import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

function MoviesDetail({ movie, isShow }) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setMovieDetail(null));
  };

  return (
    <MovieDetailStyle>
      <div
        className={`${
          isShow ? "showBackground" : "hiddenBackground"
        } background`}
        onClick={handleClose}
      ></div>
      <div
        className={`${
          isShow ? "showAboutMovie" : "hiddenAboutMovie"
        } aboutMovie`}
        style={
          movie
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                  movie.backdrop_path || movie.poster_path
                })`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }
            : {}
        }
      >
        <div className="container">
          <div className="infoMovie">
            <div className="iconClose" onClick={handleClose}>
              <IoMdClose />
            </div>
            <h1 className="title">{movie && (movie.title || movie.name)}</h1>
            <div className="trust">
              <span className="rating">
                Rating: {movie && Math.round(movie.vote_average * 10)} %
              </span>
              <span className="popularity">
                Popularity : {movie && movie.popularity}
              </span>
            </div>
            <p className="releaseDate">
              Date: {movie && moment(movie.release_date).format("DD/MM/YYYY")}
            </p>
            <p className="runTime">Runtime: {movie && movie.runtime}</p>
            <p className="overView">{movie && movie.overview}</p>
          </div>
        </div>
      </div>
    </MovieDetailStyle>
  );
}

export default MoviesDetail;

const MovieDetailStyle = styled.div`
  .background {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 100;
    animation: Fadein 1s ease forwards;

    @keyframes Fadein {
      0% {
        background-color: rgba(0, 0, 0, 0);
      }
      100% {
        background-color: rgba(0, 0, 0, 0.6);
      }
    }

    &.hiddenBackground {
      display: none;
    }
    &.showBackground {
      display: block;
    }
  }

  .aboutMovie {
    position: fixed;
    left: 0;
    transform: translateY(-50%);
    height: 60%;
    width: 100%;
    color: white;
    z-index: 110;
    box-shadow: 0px 15px 40px rgba(var(--color-dark), 0.2);
    background-position: center;
    transition: all 0.3s ease;

    &.hiddenAboutMovie {
      visibility: hidden;
      top: 0;
      opacity: 0;
      visibility: hidden;
    }
    &.showAboutMovie {
      top: 50%;
      visibility: visible;
      opacity: 1;
    }

    .container {
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.65) 30%,
        transparent 40%
      );
    }

    .infoMovie {
      padding-top: 15px;
      padding-left: 40px;
      height: 100%;

      .iconClose {
        font-size: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        border-radius: 999px;
        transition: all 0.25s ease;
        margin-bottom: 15px;
        transform: translateX(-8px);

        &:hover {
          background-color: rgba(255, 255, 255, 0.4);
        }
      }

      .title {
        margin-bottom: 15px;
      }

      .trust {
        margin-bottom: 15px;

        .rating {
          color: #5cdf5c;
          margin-right: 15px;
        }
        .popularity {
          color: #ffff00;
        }
      }

      .releaseDate {
        margin-bottom: 15px;
      }
      .runTime {
        margin-bottom: 15px;
      }
      .overView {
        margin-bottom: 15px;
        line-height: 1.4;
        max-width: 46%;
      }
    }
  }
`;
