import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/auctions" activeStyle={activeStyle}>
        Auctions
      </NavLink>
      {" | "}
      <NavLink to="/login" activeStyle={activeStyle}>
        Login
      </NavLink>
      {" | "}
      <NavLink to="/signup" activeStyle={activeStyle}>
        Signup
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
