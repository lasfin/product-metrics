import React, { Component } from 'react';
import SearchBar from  './components/search-bar/SearchBar';
import Footer from './components/footer/footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-wrapper">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Product Metrics Visualization</h2>
        </div>
        <SearchBar/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
