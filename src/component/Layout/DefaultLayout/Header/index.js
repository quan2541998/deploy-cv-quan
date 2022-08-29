import { Link } from "react-router-dom";
import clsx from "clsx";
import style from "./Header.module.scss";
import images from "../../../../assets/images";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import { useScrollY } from "../../../Hooks";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const [keywords, setKeywords] = useState("");
  const navigate = useNavigate();
  const handleChangeInput = (e) => {
    let keywords = e.target.value;
    setKeywords(keywords);
    if (keywords && keywords.length > 0) {
      navigate(`/search?keywords=${keywords.trim()}`);
    } else {
      navigate("/");
    }
  };

  const handleLogo = () => {
    setKeywords("");
  };

  const [scrollY] = useScrollY();
  const [inputWidth, setinputWidth] = useState(false);
  const classInput = clsx(style.inputSearch, {
    [style.hide]: inputWidth,
  });
  const handleClick = (e) => {
    console.log(e.target);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setinputWidth(!inputWidth);
  };

  return (
    <div
      className={clsx(style.wrapper)}
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "var(--background)" }
      }
    >
      <div className={clsx(style.container)}>
        <Link to="/" className={clsx(style.logo)} onClick={handleLogo}>
          <img src={images.logo} alt="" />
        </Link>
        <div className={clsx(style.search)} onClick={handleClick}>
          <input
            className={classInput}
            type="text"
            placeholder="Input title, genres, people"
            value={keywords}
            onChange={handleChangeInput}
          />
          <MdSearch
            className={clsx(style.iconSearch)}
            onMouseDown={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
