import React, { Component } from 'react';
import SearchBar from  './search-bar/SearchBar';
import Header from './header/Header';
import TableEvents from './table-events/TableEvents';
import Footer from './footer/Footer';

class EventsPage extends Component {
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
