import React from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";
import PropTypes from "prop-types";

const Header = ({ onClick }) => {
  const activeStyle = { color: "#F15B2A" };
  const { isAuthenticated } = useAppContext();

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
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      <div className="right">
        <NavLink to="/settings" activeStyle={activeStyle}>
          Settings
        </NavLink>
        {" | "}
        {isAuthenticated ? (
          <NavLink onClick={onClick} to="/">
            Logout
          </NavLink>
        ) : (
          <>
            {" "}
            <NavLink to="/login" activeStyle={activeStyle}>
              Login
            </NavLink>
            {" | "}
            <NavLink to="/signup" activeStyle={activeStyle}>
              Signup
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Header;
