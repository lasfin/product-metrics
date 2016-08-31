import React, { Component, PropTypes } from 'react';
import SearchBar from  '../components/search-bar/SearchBar';
import SelectTrend from '../components/select-trend/SelectTrend';
import FilteredEvents from './FilteredEvents';
import {searchEvents, filterByTrend} from '../actions/eventsActions';
import {connect} from 'react-redux';


class EventsPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.onSearch = this.onSearch.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    onSearch(event, inputValue) {
        this.props.onSearch(inputValue);
    }

    onSelect(value) {
        this.props.onSelect(value);
    }

    render() {
        return (
            <div className="eventPage">
                <SearchBar onChange={this.onSearch} />
                <SelectTrend onChange={this.onSelect} />
                <FilteredEvents/>
            </div>
        );
    }
}

EventsPage.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    onSearch: (query) => { dispatch(searchEvents(query)) },
    onSelect: (value) => { dispatch(filterByTrend(value)) }
});


export default connect(() => {return {}}, mapDispatchToProps)(EventsPage);


