import React, { Component } from 'react';
import SearchBar from  '../search-bar/SearchBar';
import TableEvents from '../table-events/TableEvents';

class EventsPage extends Component {
    render() {
        return (
            <div className="eventPage">
                <SearchBar/>
                <TableEvents/>
            </div>
        );
    }
}

export default EventsPage;
