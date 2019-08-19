import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div id="nav-sidebar" className="nav-content animated bounceInLeft">
                <div>Homepage</div>
                <div>About us</div>
                <div>Services</div>
                <div>Promotion</div>
            </div>
        )
    }
}

export default Navbar;