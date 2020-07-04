import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Administration</h1>
    <p>React, Redux and stuff</p>
    <Link to="about" className="btn btn-secondary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
