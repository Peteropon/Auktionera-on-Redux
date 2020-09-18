import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";
import MyAuctionsPage from "../auctions/MyAuctionsPage";

function HomePage() {
  const { isAuthenticated } = useAppContext();

  function renderLander() {
    return (
      <div className="jumbotron">
        <h1>Administration</h1>
        <p>React, Redux and stuff</p>
        <Link to="about" className="btn btn-secondary btn-lg">
          Learn more
        </Link>
      </div>
    );
  }

  return isAuthenticated ? <MyAuctionsPage /> : renderLander();
}

export default HomePage;
