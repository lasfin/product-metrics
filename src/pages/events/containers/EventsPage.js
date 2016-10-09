import React, { Component, PropTypes } from 'react';
import SearchBar from  '../components/search-bar/SearchBar';
import SelectTrend from '../components/select-trend/SelectTrend';
import FilteredEvents from './FilteredEvents';
import {searchEvents, filterByTrend} from '../../../actions/eventsActions';
import {connect} from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import './eventsPage.css';


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
            <div className="eventsPage">
            { !this.props.isFetching ?
                <div>
                    <SearchBar onChange={this.onSearch} query={this.props.query}/>
                    <SelectTrend onChange={this.onSelect} trend={this.props.trend}/>
                    <FilteredEvents/>
                </div>
            :
                <div className="center-block">
                    <CircularProgress size={2} />
                </div>
            }
            </div>
        );
    }
}

EventsPage.propTypes = {
    query: PropTypes.string.isRequired,
    trend: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    onSearch: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    query: state.events.query,
    trend: state.events.trend,
    isFetching: state.events.isFetching
});

const mapDispatchToProps = (dispatch) => ({
    onSearch: (query) => { dispatch(searchEvents(query)) },
    onSelect: (value) => { dispatch(filterByTrend(value)) }
});


export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);


