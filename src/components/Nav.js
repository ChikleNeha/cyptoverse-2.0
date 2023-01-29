import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar">
        <img src={require("../images/logo.png")} alt="img" />
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          <Link to="/news">News</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
