import React from 'react';
import logo from './logo.svg';

class Header extends React.Component {
    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Product Metrics Visualization</h2>
            </div>
        );
    }
}

export default Header;

