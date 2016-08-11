import React, { Component } from 'react';
import SearchBar from  '../search-bar/SearchBar';
import TableEvents from '../table-events/TableEvents';
import {connect} from 'react-redux';

class EventsPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            events: props.events
        };
    }

    render() {
        return (
            <div className="eventPage">
                <SearchBar/>
                <TableEvents
                    events={this.state.events}
                />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        events: state.events
    };
}

export default connect(mapStateToProps)(EventsPage);

