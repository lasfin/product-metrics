import React, { Component, PropTypes } from 'react';
import SearchBar from  '../components/search-bar/SearchBar';
import FilteredEvents from './FilteredEvents';
import {searchEvents} from '../actions/eventsActions';
import {connect} from 'react-redux';


class EventsPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event, inputValue) {
        this.props.onSearch(inputValue);
    }

    render() {
        return (
            <div className="eventPage">
                <SearchBar onChange={this.onChange}/>
                <FilteredEvents/>
            </div>
        );
    }
}

EventsPage.propTypes = {
    onSearch: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    onSearch: (query) => { dispatch(searchEvents(query)) }
});


export default connect(() => {return {}}, mapDispatchToProps)(EventsPage);


