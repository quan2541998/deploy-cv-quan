import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import styled from "styled-components";
import { useViewPort } from "../../Hooks";
import { getSearchMovies } from "../../store/actions";

const Search = () => {
  const dispatch = useDispatch();
  const query = new URLSearchParams(useLocation().search);
  const keywords = query.get("keywords");
  const { movieSearch } = useSelector((state) => state.infoMovies);
  const [windowWidth] = useViewPort();

  console.log(movieSearch);

  useEffect(() => {
    if (keywords && keywords.length > 0) {
      dispatch(getSearchMovies(keywords));
    }
  }, [keywords, dispatch]);

  return (
    <SearchStyle>
      {movieSearch && movieSearch.length > 0 ? (
        <div
          className="searchList"
          style={{
            gridTemplateColumns: `repeat(${
              windowWidth > 1200
                ? 5
                : windowWidth > 992
                ? 4
                : windowWidth > 768
                ? 3
                : windowWidth > 600
                ? 2
                : 1
            }, 1fr)`,
          }}
        >
          {movieSearch.map((movie, index) => {
            return (
              <div className="searchItem" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${
                    movie.backdrop_path || movie.poster_path
                  }`}
                  alt="phim"
                />
                <span>{movie.title}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <NotFound>
          <h1>Your search for "keywords" did not have any matches</h1>
        </NotFound>
      )}
    </SearchStyle>
  );
};

export default Search;

const SearchStyle = styled.div`
  padding-top: 80px;
  background-color: black;
  transition: all 0.3s ease;
  min-height: 94vh;

  .searchList {
    margin: 30px 30px;
    display: grid;
    gap: 8px;

    &:hover .searchItem {
      opacity: 0.6;
    }

    .searchItem {
      position: relative;
      max-width: 500px;
      height: 200px;
      width: 100%;
      border-radius: 12px;
      margin: 20px 0px;
      overflow: hidden;
      transform: scale(1);
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.15);
        z-index: 10;
        opacity: 1;
      }
      span {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        padding: 4px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
      }
    }
  }
`;

const NotFound = styled.div`
  display: flex;
  color: white;
  padding: 50px 80px;
  font-size: 1rem;
`;
