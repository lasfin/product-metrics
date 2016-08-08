import React, { Component } from 'react';
import SearchBar from  './components/search-bar/SearchBar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-wrapper">
            <Header/>
            <SearchBar/>
            <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
