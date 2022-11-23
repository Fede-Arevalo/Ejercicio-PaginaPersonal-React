import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <span>FEDERICO ARÉVALO</span>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/spotify">Spotify</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
