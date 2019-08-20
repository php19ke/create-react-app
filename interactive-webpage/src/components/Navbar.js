import React from 'react';

import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div id="nav-sidebar" className="nav-content animated bounceInLeft">
                <Link to='/'>
                    <div>Home</div>
                </Link>

                <Link to='/about-us'>
                    <div>About us</div>
                </Link>

                <Link to='/services'>
                    <div>Services</div>
                </Link>

                <div>Promotion</div>
            </div>
        )
    }
}

export default Navbar;