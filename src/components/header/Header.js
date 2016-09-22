import React from 'react';
import logo from './logo.svg';
import {Link} from 'react-router';
import './header.css';

const Header = () => {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to={'events'} activeClassName="active" className="menu-item">Events</Link>
            <Link to={'features'} activeClassName="active" className="menu-item">Features</Link>
        </div>
    );
};

export default Header;

