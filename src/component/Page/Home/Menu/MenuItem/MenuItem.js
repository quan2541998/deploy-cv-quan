import React from "react";
import { Link } from "react-scroll";

const MenuItem = ({ name, Icon, color, to }) => {
  return (
    <Link
      className="subMenu"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      activeClass="active"
    >
      <Icon className="icon" style={{ color: `${color}` }} />
      <span>{name}</span>
    </Link>
  );
};

export default MenuItem;
