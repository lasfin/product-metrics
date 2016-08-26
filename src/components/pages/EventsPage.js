import React, { Component } from 'react';
import SearchBar from  '../search-bar/SearchBar';
import TableEvents from '../table-events/TableEvents';
import {searchEvents} from '../../actions/eventsActions';
import {connect} from 'react-redux';

class EventsPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event, inputValue) {
        this.props.searchEvents(inputValue);
    }

    render() {
        return (
            <div className="eventPage">
                <SearchBar onChange={this.onChange}/>
                <TableEvents events={this.props.list}/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        list: state.events.list,
        query: state.events.query
    };
}

const mapDispatchToProps = (dispatch) => ({
    searchEvents: query => dispatch(searchEvents(query))
});


export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);

