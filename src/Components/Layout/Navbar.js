import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../images/GF-logo.png";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar navbar-expand-sm bg-danger navbar-dark fixed-top">
      <div className="container">
        <ul className="navbar-nav">
          <li className="navbar-brand">
            <img src={logo} alt='logo'/>
          </li>
          <li className="nav-item float-right">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item float-right">
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
