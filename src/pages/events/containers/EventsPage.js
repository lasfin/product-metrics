import React, { Component, PropTypes } from 'react';
import SearchBar from  '../components/search-bar/SearchBar';
import SelectTrend from '../components/select-trend/SelectTrend';
import FilteredEvents from './FilteredEvents';
import {searchEvents, filterByTrend, fetchEvents} from '../../../actions/eventsActions';
import {connect} from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';


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

    fetchData() {
        if (!this.props.list.length) {
            this.props.fetchData();
        }
    }

    componentDidMount() {
        this.fetchData();
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
                    <CircularProgress size={119}  thickness={3} />
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
    list: PropTypes.array.isRequired,
    onSearch: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    query: state.events.query,
    trend: state.events.trend,
    isFetching: state.events.isFetching,
    list: state.events.list
});

const mapDispatchToProps = (dispatch) => ({
    onSearch: (query) => { dispatch(searchEvents(query)) },
    onSelect: (value) => { dispatch(filterByTrend(value)) },
    fetchData: (days=14) => { dispatch(fetchEvents(days)) }
});


export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);


