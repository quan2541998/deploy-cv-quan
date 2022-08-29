import React from "react";
import { FaHome, FaHotjar, FaStar, FaHeart } from "react-icons/fa";
import styled from "styled-components";
import MenuItem from "./MenuItem/MenuItem";

const Menu = (props) => {
  return (
    <MenuContainer>
      <MenuItem name="Home" Icon={FaHome} to="netflix" />
      <MenuItem name="Top Rated" Icon={FaStar} color="yellow" to="toprate" />
      <MenuItem name="Trending" Icon={FaHotjar} color="red" to="trendingMovies" />
      <MenuItem name="Action" Icon={FaHeart} color="blue" to="actionMovies" />
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(220, 220, 220, 0.3);
  font-size: 20px;
  z-index: 110;
  display: flex;
  flex-direction: column;
  padding: 10px;
  transition: all 0.3 ease;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  width: 48px;
  overflow: hidden;
  transition: all 0.5s ease;
  &:hover {
    width: 140px;
    background-color: rgba(220, 220, 220, 0.5);
  }

  .subMenu {
    display: flex;
    align-items: center;
    width: max-content;
    margin-bottom: 15px;
    .icon {
      font-size: 30px;
      margin-right: 8px;
      color: #e00d9d;
    }
    span {
      font-size: 1.6rem;
      color: rgba(255, 255, 255, 0.6);
      &:hover {
        color: white;
      }
    }
  }
`;
