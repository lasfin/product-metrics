import React, { Component } from 'react';
import SearchBar from  './search-bar/SearchBar';
import Header from './header/Header';
import TableEvents from './table-events/TableEvents';
import Footer from './footer/Footer';
import injectTapEventPlugin from 'react-tap-event-plugin';

class EventsPage extends Component {

    constructor() {
        super();
        injectTapEventPlugin(); // temporary. will go away once the official React version is released
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <SearchBar/>
                <TableEvents/>
                <Footer/>
            </div>
        );
    }
}

export default EventsPage;
