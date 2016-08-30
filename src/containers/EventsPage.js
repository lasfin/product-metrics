import React, { Component, PropTypes } from 'react';
import SearchBar from  '../components/search-bar/SearchBar';
import TableEvents from '../components/table-events/TableEvents';
import {searchEvents} from '../actions/eventsActions';
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
        const {filtered} = this.props;
        return (
            <div className="eventPage">
                <SearchBar onChange={this.onChange}/>
                <TableEvents events={filtered}/>
            </div>
        );
    }
}


EventsPage.propTypes = {
    list: PropTypes.array.isRequired,
    filtered: PropTypes.array.isRequired,
    query: PropTypes.string.isRequired,
};


function mapStateToProps(state) {
    return {
        list: state.events.list,
        filtered: state.events.filtered,
        query: state.events.query
    };
}


const mapDispatchToProps = (dispatch) => ({
    searchEvents: query => dispatch(searchEvents(query))
});


export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);

