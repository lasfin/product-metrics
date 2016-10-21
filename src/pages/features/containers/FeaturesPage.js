import React, { Component, PropTypes } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import AddEvent from '../components/add-event/AddEvent';
import {fetchFeatures, searchFeatures} from '../../../actions/featuresActions';
import CircularProgress from 'material-ui/CircularProgress';
import {connect} from 'react-redux';
import SearchFeatures from '../components/search-features/SeacrhFeatures';
import FilteredFeatures from './FilteredFeatures';

const tabItemContainerStyle = {
    background: '#fff'
};

const inkBarStyle = {
    background: '#61dafb'
};

class FeaturesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'list',
        };
        this.onSearch = this.onSearch.bind(this);
    }

    handleChange = (value) => {
        this.setState({
            value
        });
    };

    onSearch(events, inputValue) {
        this.props.onSearch(inputValue);
    }

    fetchFeatures() {
        this.props.fetch();
    }

    componentDidMount() {
        if (!this.props.features.length) {
            this.fetchFeatures();
        }
    }

    render() {
        return (
            <Tabs value={this.state.value}
                  onChange={this.handleChange}
                  tabItemContainerStyle={tabItemContainerStyle}
                  inkBarStyle={inkBarStyle}
            >
                <Tab label="Features list" value="list" style={{color: '#000'}}>
                    { !this.props.isFetching ?
                        <div>
                            <SearchFeatures onChange={this.onSearch} query={this.props.query}/>
                            <FilteredFeatures features={this.props.features}/>
                        </div>
                        :
                        <div className="center-block">
                            <CircularProgress size={119}  thickness={3}/>
                        </div>
                    }
                </Tab>
                <Tab label="Add feature" value="add" style={{color: '#000'}}>
                    <AddEvent/>
                </Tab>
            </Tabs>
        );
    }
}

FeaturesPage.propTypes = {
    query: PropTypes.string.isRequired,
    features: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    onSearch: PropTypes.func.isRequired,
    fetch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    features: state.features.list,
    isFetching: state.features.isFetching,
    query: state.features.query
});

const mapDispatchToProps = (dispatch) => ({
    onSearch: (query) => { dispatch(searchFeatures(query)) },
    fetch: () => { dispatch(fetchFeatures()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturesPage);



