import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from  './search-bar/SearchBar';
import Header from './header/Header';
import TableEvents from './table-events/TableEvents';
import Footer from './footer/Footer';
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
                        <TableEvents/>
                        <Footer/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
