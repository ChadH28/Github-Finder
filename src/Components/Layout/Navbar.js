import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar navbar-expand-sm bg-danger navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand">
          <i className="fab fa-github"></i>
          <sup>
            <i className="fas fa-satellite"></i>
          </sup>
          {title}
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
