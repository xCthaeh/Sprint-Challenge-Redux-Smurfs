import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="home-lnk">
        <Link to="/">Home</Link>
      </div>
      <div className="header-title">
        <h2>Lambda - Redux - Smurfs</h2>
      </div>
      <div className="add-smurf-lnk">
        <Link to="/smurfs/add">Add a Smurf</Link>
      </div>
    </div>
  );
};

export default Header;
