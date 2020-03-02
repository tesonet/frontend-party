import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import "./navbar.scss";

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper">
            <div className="nav-logo">
                <Link to='/' className="brand-logo"><img src={require('../../images/testio-logo.png')} alt="logo"/></Link>
            </div>
            <SignedInLinks />
        </nav>
    )
}

export default Navbar;