import { useSelector } from "react-redux";

import Intro from "./Intro/Intro.js";
import Menu from "./Menu";
import MoviesDetail from "./MovieDetail/MovieDetail.js";
import MovieSliders from "./MovieSlider/MovieSlider";

function Home() {
  const { MovieDetail } = useSelector((state) => state.infoMovies);

  return (
    <div>
      <Intro />
      <MovieSliders />
      <Menu />
      <MoviesDetail movie={MovieDetail} isShow={MovieDetail ? true : false} />
    </div>
  );
}

export default Home;
