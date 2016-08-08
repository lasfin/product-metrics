import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from  './components/search-bar/SearchBar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';

class App extends Component {

    constructor(){
        super();
        injectTapEventPlugin(); // temporary. will go away once the official React version is released
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <div className="App-wrapper">
                        <Header/>
                        <SearchBar/>
                        <Footer/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
