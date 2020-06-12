import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = ({title}) => {
        return (
            <nav className="navbar navbar-expand-sm bg-info navbar-dark">
                <i className='fab fa-github'></i>
                <sup><i className="fas fa-satellite"></i></sup>
                {title}
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                </ul>
            </nav>
        )
}

Navbar.defaultProps = {
    title: "Github Finder"
};
Navbar.propTypes = {
    title: PropTypes.string.isRequired
};


export default Navbar
